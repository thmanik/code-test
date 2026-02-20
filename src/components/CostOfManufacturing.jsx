import React from 'react';

const CostOfManufacturing = ({ rows, onUpdate }) => {
  const addRow = () => onUpdate([...rows, { id: Date.now(), name: '', price: '' }]);
  const removeRow = (id) => rows.length > 1 && onUpdate(rows.filter(row => row.id !== id));
  
  const handleChange = (id, field, val) => {
    const updated = rows.map(row => row.id === id ? { ...row, [field]: val } : row);
    onUpdate(updated);
  };

  const totalSum = rows.reduce((sum, row) => sum + (parseFloat(row.price) || 0), 0).toFixed(2);

  return (
    <div className="bg-white p-5 rounded-sm border border-gray-100 shadow-sm mb-4">
      <h2 className="text-[11px] font-bold text-[#475569] uppercase mb-2 px-1 tracking-tight">
        COST OF MANUFACTURING/DZ
      </h2>
      
      <div className="overflow-x-auto pb-2">
        <div className="min-w-[700px]">
          <div className="bg-[#f8fafc] grid grid-cols-12 gap-4 py-2 px-3 border border-[#e2e8f0] rounded-t-lg">
            <div className="col-span-1 text-[9px] font-bold text-slate-500">S.N.</div>
            <div className="col-span-7 text-[9px] font-bold text-slate-500 text-center uppercase">Name</div>
            <div className="col-span-3 text-[9px] font-bold text-slate-500 text-center uppercase">Cm. Price</div>
            <div className="col-span-1 text-[9px] font-bold text-slate-500 text-center uppercase">Action</div>
          </div>

          <div className="border-x border-b border-[#e2e8f0] rounded-b-lg">
            {rows.map((row, index) => (
              <div key={row.id} className="grid grid-cols-12 gap-4 items-center border-b border-gray-50 p-3 hover:bg-slate-50 transition-colors">
                <div className="col-span-1 text-[11px] text-slate-400">☰ {index + 1}</div>
                <div className="col-span-7">
                  <select 
                    value={row.name} 
                    onChange={(e) => handleChange(row.id, 'name', e.target.value)} 
                    className="w-full border border-slate-200 p-2 rounded text-[10px] font-bold uppercase cursor-pointer outline-none focus:border-cyan-400"
                  >
                    <option value="">Select Name</option>
                    <option value="CM Cost">CM Cost</option>
                    <option value="Washing">Washing</option>
                    <option value="Testing">Testing</option>
                  </select>
                </div>
                <div className="col-span-3">
                  <input 
                    type="number" 
                    placeholder="Price" 
                    value={row.price} 
                    onChange={(e) => handleChange(row.id, 'price', e.target.value)} 
                    className="w-full border border-slate-200 p-2 rounded text-[10px] text-center font-bold outline-none focus:border-cyan-400" 
                  />
                </div>
                <div className="col-span-1 flex justify-center">
                  {/* Updated Delete Button with Trash Icon */}
                  <button 
                    type="button" 
                    onClick={() => removeRow(row.id)} 
                    className="bg-[#b91c1c] text-white h-7 w-7 rounded-[4px] cursor-pointer flex items-center justify-center hover:bg-red-700 transition-colors shadow-sm active:scale-95"
                    title="Delete Row"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" 
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-between items-start mt-4">
        <button 
          type="button" 
          onClick={addRow} 
          className="bg-[#00c2cb] hover:bg-[#00aeb6] text-white px-6 py-2 rounded font-bold text-[10px] cursor-pointer shadow-md active:scale-95 transition-all flex items-center gap-1"
        >
          <span className="text-lg">+</span> ADD
        </button>

        <div className="relative">
          <span className="absolute -top-3 left-2 bg-white px-1 text-[9px] font-bold text-slate-400">$ Total</span>
          <div className="bg-[#eef2f6] border border-slate-200 px-10 py-2 rounded font-bold text-slate-600 text-sm min-w-30 text-center">
            {totalSum}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostOfManufacturing;