import React from 'react';

const FabricCost = ({ rows, onUpdate }) => {
  const addRow = () => {
    onUpdate([...rows, { id: Date.now(), ref: '', name: '', unit: '', price: '', total: '' }]);
  };

  const removeRow = (id) => {
    if (rows.length > 1) {
      onUpdate(rows.filter(row => row.id !== id));
    }
  };

  const handleChange = (id, field, val) => {
    const updatedRows = rows.map(row => {
      if (row.id === id) {
        const updatedRow = { ...row, [field]: val };
        const unit = parseFloat(field === 'unit' ? val : row.unit) || 0;
        const price = parseFloat(field === 'price' ? val : row.price) || 0;
        updatedRow.total = (unit * price) > 0 ? (unit * price).toFixed(2) : '';
        return updatedRow;
      }
      return row;
    });
    onUpdate(updatedRows);
  };

  return (
    <div className="bg-white p-5 rounded-sm border border-gray-100 shadow-sm font-sans mb-4">
      <h2 className="text-[11px] font-bold text-[#475569] uppercase tracking-tight mb-2 px-1">
        FABRIC COST
      </h2>

      {/* Table Header: + Button integrated in the header line above Total */}
      <div className="bg-[#f8fafc] grid grid-cols-12 gap-3 py-2 px-3 border border-[#e2e8f0] rounded-t-lg items-center relative">
        <div className="col-span-2 text-[10px] font-bold text-slate-500 uppercase">REF</div>
        <div className="col-span-4 text-[10px] font-bold text-slate-500 uppercase text-center">FABRIC NAME</div>
        <div className="col-span-2 text-[10px] font-bold text-slate-500 uppercase text-center">UNIT</div>
        <div className="col-span-2 text-[10px] font-bold text-slate-500 uppercase text-center">UNIT PRICE</div>
        <div className="col-span-2 flex justify-between items-center">
          <span className="text-[10px] font-bold text-slate-500 uppercase">TOTAL</span>
          <button 
            type="button" 
            onClick={addRow}
            className="bg-[#00c2cb] hover:bg-[#00aeb6] text-white h-5 w-5 flex items-center justify-center rounded-[3px] shadow-sm transition-all cursor-pointer active:scale-95 ml-auto"
          >
            <span className="text-lg font-light leading-none">+</span>
          </button>
        </div>
      </div>

      <div className="border-x border-b border-[#e2e8f0] rounded-b-lg overflow-hidden">
        {rows.map((row) => (
          <div key={row.id} className="grid grid-cols-12 gap-3 items-center border-b border-gray-50 last:border-0 p-3 hover:bg-slate-50 transition-colors">
            <div className="col-span-2">
              <input 
                type="text" 
                placeholder="Ref"
                value={row.ref}
                onChange={(e) => handleChange(row.id, 'ref', e.target.value)}
                className="w-full border border-slate-200 p-2 rounded text-[11px] outline-none focus:border-blue-400 text-black font-medium"
              />
            </div>

            <div className="col-span-4 text-[9px] text-slate-400 leading-tight px-2 text-center overflow-hidden">
              Single Jersey, 50% linen, 40% cotton, 19% lurex , 240oz, 110x76/45x45 (CMIA), 60"
            </div>

            <div className="col-span-2 relative">
              <input 
                type="number" 
                placeholder="Unit"
                value={row.unit}
                onChange={(e) => handleChange(row.id, 'unit', e.target.value)}
                className="w-full border border-slate-200 p-2 rounded text-[11px] outline-none focus:border-blue-400 text-black font-medium text-center pr-6"
              />
              <span className="absolute right-2 top-2.5 text-[10px] text-slate-400 opacity-70">📋</span>
            </div>

            <div className="col-span-2">
              <input 
                type="number" 
                placeholder="Unit Price"
                value={row.price}
                onChange={(e) => handleChange(row.id, 'price', e.target.value)}
                className="w-full border border-slate-200 p-2 rounded text-[11px] outline-none focus:border-blue-400 text-black font-medium text-center"
              />
            </div>

            <div className="col-span-2 flex items-center gap-2">
              <div className="w-full border border-slate-200 p-2 rounded text-[11px] bg-white text-slate-400 text-center font-bold min-h-[34px] flex items-center justify-center">
                {row.total || 'Total'}
              </div>
              
              {rows.length > 1 && (
                <button 
                  type="button" 
                  onClick={() => removeRow(row.id)}
                  className="text-red-500 hover:text-red-700 transition-colors cursor-pointer active:scale-90"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FabricCost;