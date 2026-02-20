import React from 'react';

const ApplicationCost = ({ rows, onUpdate }) => {
  const addRow = () => {
    onUpdate([...rows, { id: Date.now(), ref: '', name: '', type: '', placement: '', category: '', price: '' }]);
  };

  const removeRow = (id) => {
    if (rows.length > 1) onUpdate(rows.filter(row => row.id !== id));
  };

  const handleChange = (id, field, val) => {
    const updatedRows = rows.map(row => {
      if (row.id === id) return { ...row, [field]: val };
      return row;
    });
    onUpdate(updatedRows);
  };

  const totalSum = rows.reduce((sum, row) => sum + (parseFloat(row.price) || 0), 0).toFixed(2);

  return (
    <div className="bg-white p-5 rounded-sm border border-gray-100 shadow-sm font-sans mb-4">
      <div className="flex justify-between items-center mb-2 px-1">
        <h2 className="text-[11px] font-bold text-[#475569] uppercase tracking-tight">
          APPLICATION COST/DZ
        </h2>
      </div>

      {/* Gray Table Header */}
      <div className="bg-[#f8fafc] grid grid-cols-12 gap-2 py-2 px-3 border border-[#e2e8f0] rounded-t-lg items-center relative">
        <div className="col-span-1 text-[9px] font-bold text-slate-500 uppercase">S.N.</div>
        <div className="col-span-1 text-[9px] font-bold text-slate-500 uppercase">REF.</div>
        <div className="col-span-2 text-[9px] font-bold text-slate-500 uppercase text-center">Name</div>
        <div className="col-span-2 text-[9px] font-bold text-slate-500 uppercase text-center">Type</div>
        <div className="col-span-2 text-[9px] font-bold text-slate-500 uppercase text-center">Placement</div>
        <div className="col-span-1 text-[9px] font-bold text-slate-500 uppercase text-center">Category</div>
        <div className="col-span-2 text-[9px] font-bold text-slate-500 uppercase text-right pr-4">Price</div>
        
        {/* + Button integrated into the header far right */}
        <div className="col-span-1 flex justify-end">
          <button 
            type="button" 
            onClick={addRow}
            className="bg-[#00c2cb] hover:bg-[#00aeb6] text-white h-6 w-6 flex items-center justify-center rounded-[4px] shadow-sm transition-all cursor-pointer"
          >
            <span className="text-xl font-light leading-none">+</span>
          </button>
        </div>
      </div>

      <div className="border-x border-b border-[#e2e8f0] rounded-b-lg overflow-hidden">
        {rows.map((row, index) => (
          <div key={row.id} className="grid grid-cols-12 gap-2 items-center border-b border-gray-50 p-3 hover:bg-slate-50">
            <div className="col-span-1 text-[11px] text-slate-400 font-medium flex items-center gap-2">
               <span className="cursor-grab text-slate-300">☰</span> {index + 1}
            </div>
            
            <div className="col-span-1">
              <input type="text" placeholder="Ref" value={row.ref} onChange={(e) => handleChange(row.id, 'ref', e.target.value)} className="w-full border border-slate-200 p-1.5 rounded text-[10px] outline-none" />
            </div>

            <div className="col-span-2">
              <select value={row.name} onChange={(e) => handleChange(row.id, 'name', e.target.value)} className="w-full border border-slate-200 p-1.5 rounded text-[10px] font-bold bg-white uppercase">
                <option value="">NAME</option>
                <option value="Print">Print</option>
                <option value="Embroidery">Embroidery</option>
              </select>
            </div>

            <div className="col-span-2">
              <select value={row.type} onChange={(e) => handleChange(row.id, 'type', e.target.value)} className="w-full border border-slate-200 p-1.5 rounded text-[10px] font-bold bg-white uppercase">
                <option value="">TYPE</option>
                <option value="Rubber">Rubber</option>
                <option value="Pigment">Pigment</option>
              </select>
            </div>

            <div className="col-span-2">
              <input type="text" placeholder="Placement" value={row.placement} onChange={(e) => handleChange(row.id, 'placement', e.target.value)} className="w-full border border-slate-200 p-1.5 rounded text-[10px]" />
            </div>

            <div className="col-span-1 text-center">
               <input type="text" placeholder="Cat" value={row.category} onChange={(e) => handleChange(row.id, 'category', e.target.value)} className="w-full border border-slate-200 p-1.5 rounded text-[10px] text-center uppercase" />
            </div>

            <div className="col-span-2 flex items-center gap-2">
              <input type="number" placeholder="Price" value={row.price} onChange={(e) => handleChange(row.id, 'price', e.target.value)} className="w-full border border-slate-200 p-1.5 rounded text-[10px] text-center font-bold" />
              
              {rows.length > 1 && (
                <button type="button" onClick={() => removeRow(row.id)} className="bg-red-600 text-white h-6 w-6 min-w-[24px] flex items-center justify-center rounded-[4px] cursor-pointer">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Total Box matches image footer */}
      <div className="flex justify-end mt-4">
        <div className="relative">
          <span className="absolute -top-3 left-2 bg-white px-1 text-[9px] font-bold text-slate-400">$ Total</span>
          <div className="bg-[#eef2f6] border border-slate-200 px-8 py-2 rounded font-bold text-slate-600 text-sm min-w-30 text-center">
            {totalSum}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationCost;