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
      <h2 className="text-[11px] font-bold text-[#475569] uppercase mb-2 px-1">COST OF MANUFACTURING/DZ</h2>
      
      <div className="overflow-x-auto pb-2">
        <div className="min-w-[700px]">
          <div className="bg-[#f8fafc] grid grid-cols-12 gap-4 py-2 px-3 border border-[#e2e8f0] rounded-t-lg">
            <div className="col-span-1 text-[9px] font-bold text-slate-500">S.N.</div>
            <div className="col-span-7 text-[9px] font-bold text-slate-500 text-center">NAME</div>
            <div className="col-span-3 text-[9px] font-bold text-slate-500 text-center">CM. PRICE</div>
            <div className="col-span-1 text-[9px] font-bold text-slate-500 text-center">ACTION</div>
          </div>

          <div className="border-x border-b border-[#e2e8f0] rounded-b-lg">
            {rows.map((row, index) => (
              <div key={row.id} className="grid grid-cols-12 gap-4 items-center border-b border-gray-50 p-3">
                <div className="col-span-1 text-[11px] text-slate-400">☰ {index + 1}</div>
                <div className="col-span-7">
                  <select value={row.name} onChange={(e) => handleChange(row.id, 'name', e.target.value)} className="w-full border p-2 rounded text-[10px] font-bold uppercase cursor-pointer">
                    <option value="">Select Name</option>
                    <option value="CM Cost">CM Cost</option>
                    <option value="Washing">Washing</option>
                  </select>
                </div>
                <div className="col-span-3">
                  <input type="number" placeholder="Price" value={row.price} onChange={(e) => handleChange(row.id, 'price', e.target.value)} className="w-full border p-2 rounded text-[10px] text-center font-bold" />
                </div>
                <div className="col-span-1 flex justify-center">
                  <button onClick={() => removeRow(row.id)} className="bg-red-600 text-white h-7 w-7 rounded cursor-pointer flex items-center justify-center">×</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-between items-start mt-4">
        <button onClick={addRow} className="bg-cyan-500 text-white px-6 py-2 rounded font-bold text-[10px] cursor-pointer">+ ADD</button>
        <div className="relative">
          <span className="absolute -top-3 left-2 bg-white px-1 text-[9px] font-bold text-slate-400">$ Total</span>
          <div className="bg-slate-100 border px-10 py-2 rounded font-bold text-slate-600 min-w-30 text-center">{totalSum}</div>
        </div>
      </div>
    </div>
  );
};

export default CostOfManufacturing;