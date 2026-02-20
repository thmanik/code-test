import React from 'react';

const TrimCost = ({ rows, onUpdate }) => {
  const addRow = () => {
    onUpdate([...rows, { 
      id: Date.now(), 
      ref: '', 
      name: '', 
      unit: '', 
      qty: '', 
      price: '', 
      excs: '', 
      total: 0, 
      depend: 'DTM' 
    }]);
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
        
        // Calculation: (Qty * Price) + Excess %
        const qty = parseFloat(field === 'qty' ? val : row.qty) || 0;
        const price = parseFloat(field === 'price' ? val : row.price) || 0;
        const excs = parseFloat(field === 'excs' ? val : row.excs) || 0;
        
        const subTotal = qty * price;
        const totalWithExcs = subTotal + (subTotal * (excs / 100));
        
        updatedRow.total = totalWithExcs > 0 ? totalWithExcs.toFixed(2) : 0;
        return updatedRow;
      }
      return row;
    });
    onUpdate(updatedRows);
  };

  const grandTotal = rows.reduce((sum, row) => sum + (parseFloat(row.total) || 0), 0).toFixed(2);

  return (
    <div className="bg-white p-5 rounded-sm border border-gray-100 shadow-sm font-sans mb-4">
      <h2 className="text-[11px] font-bold text-[#475569] uppercase tracking-tight mb-2 px-1">
        TRIM COST/DZ
      </h2>

      {/* Table Header */}
      <div className="bg-[#f8fafc] grid grid-cols-12 gap-2 py-2 px-3 border border-[#e2e8f0] rounded-t-lg items-center">
        <div className="col-span-1 text-[9px] font-bold text-slate-500 uppercase">S.N.</div>
        <div className="col-span-2 text-[9px] font-bold text-slate-500 uppercase">REF.</div>
        <div className="col-span-2 text-[9px] font-bold text-slate-500 uppercase">Name</div>
        <div className="col-span-1 text-[9px] font-bold text-slate-500 uppercase text-center">Unit</div>
        <div className="col-span-1 text-[9px] font-bold text-slate-500 uppercase text-center">Qty</div>
        <div className="col-span-1 text-[9px] font-bold text-slate-500 uppercase text-center">Unit Price</div>
        <div className="col-span-1 text-[9px] font-bold text-slate-500 uppercase text-center">Excs[%]</div>
        <div className="col-span-1 text-[9px] font-bold text-slate-500 uppercase text-center">Total</div>
        <div className="col-span-1 text-[9px] font-bold text-slate-500 uppercase text-center">Depend</div>
        <div className="col-span-1 flex justify-end">
          <button 
            type="button" 
            onClick={addRow}
            className="bg-[#00c2cb] hover:bg-[#00aeb6] text-white h-6 w-6 flex items-center justify-center rounded-[4px] shadow-sm transition-all cursor-pointer active:scale-95"
          >
            <span className="text-xl font-light leading-none">+</span>
          </button>
        </div>
      </div>

      {/* Table Body */}
      <div className="border-x border-b border-[#e2e8f0] rounded-b-lg overflow-hidden">
        {rows.map((row, index) => (
          <div key={row.id} className="grid grid-cols-12 gap-2 items-center border-b border-gray-50 last:border-0 p-3 hover:bg-slate-50 transition-colors">
            <div className="col-span-1 text-[11px] text-slate-400 font-medium flex items-center gap-2">
              <span className="cursor-grab">☰</span> {index + 1}
            </div>
            
            <div className="col-span-2">
              <input 
                type="text" 
                placeholder="Ref"
                value={row.ref}
                onChange={(e) => handleChange(row.id, 'ref', e.target.value)}
                className="w-full border border-slate-200 p-1.5 rounded text-[10px] outline-none focus:border-blue-300 text-black font-medium"
              />
            </div>

            {/* NAME SELECT */}
            <div className="col-span-2">
              <select 
                value={row.name}
                onChange={(e) => handleChange(row.id, 'name', e.target.value)}
                className="w-full border border-slate-200 p-1.5 rounded text-[10px] font-bold outline-none text-slate-600 bg-white cursor-pointer uppercase"
              >
                <option value="">NAME</option>
                <option value="Sewing Thread">Sewing Thread</option>
                <option value="Main Label">Main Label</option>
                <option value="Care Label">Care Label</option>
                <option value="Size Label">Size Label</option>
                <option value="Hang Tag">Hang Tag</option>
                <option value="Poly Bag">Poly Bag</option>
                <option value="Button">Button</option>
                <option value="Zipper">Zipper</option>
                <option value="Elastic">Elastic</option>
                <option value="Interlining">Interlining</option>
                <option value="Carton">Carton</option>
              </select>
            </div>

            {/* UNIT SELECT */}
            <div className="col-span-1">
              <select 
                value={row.unit}
                onChange={(e) => handleChange(row.id, 'unit', e.target.value)}
                className="w-full border border-slate-200 p-1.5 rounded text-[10px] font-bold outline-none text-slate-600 bg-white cursor-pointer uppercase"
              >
                <option value="">UNIT</option>
                <option value="PCS">PCS</option>
                <option value="DZ">DZ</option>
                <option value="SET">SET</option>
                <option value="YDS">YDS</option>
                <option value="CONE">CONE</option>
                <option value="MTR">MTR</option>
                <option value="KG">KG</option>
              </select>
            </div>

            {/* QTY SELECT */}
            <div className="col-span-1">
              <select 
                value={row.qty}
                onChange={(e) => handleChange(row.id, 'qty', e.target.value)}
                className="w-full border border-slate-200 p-1.5 rounded text-[10px] font-bold outline-none text-slate-600 bg-white cursor-pointer uppercase"
              >
                <option value="">QTY</option>
                <option value="1">1</option>
                <option value="6">6</option>
                <option value="12">12</option>
                <option value="24">24</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
            </div>

            <div className="col-span-1">
              <input 
                type="number" 
                placeholder="$ U. Price"
                value={row.price}
                onChange={(e) => handleChange(row.id, 'price', e.target.value)}
                className="w-full border border-slate-200 p-1.5 rounded text-[10px] outline-none text-center font-medium"
              />
            </div>

            <div className="col-span-1">
              <input 
                type="number" 
                placeholder="Excs[%]"
                value={row.excs}
                onChange={(e) => handleChange(row.id, 'excs', e.target.value)}
                className="w-full border border-slate-200 p-1.5 rounded text-[10px] outline-none text-center font-medium"
              />
            </div>

            <div className="col-span-1">
              <div className="w-full bg-[#e2e8f0]/50 p-1.5 rounded text-[10px] text-slate-500 text-center font-bold min-h-[30px] flex items-center justify-center">
                $ {row.total}
              </div>
            </div>

            <div className="col-span-1">
              <div className="w-full bg-slate-100 p-1.5 rounded text-[10px] text-slate-400 text-center font-bold">
                {row.depend}
              </div>
            </div>

            <div className="col-span-1 flex justify-end">
              <button 
                type="button" 
                onClick={() => removeRow(row.id)}
                className="bg-[#b91c1c] hover:bg-red-700 text-white h-6 w-6 flex items-center justify-center rounded-[4px] transition-all cursor-pointer active:scale-90"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Grand Total */}
      <div className="flex justify-end mt-4 px-1">
        <div className="relative">
          <span className="absolute -top-3 left-2 bg-white px-1 text-[9px] font-bold text-blue-400">$ Total</span>
          <div className="bg-slate-100 border border-slate-200 px-8 py-2 rounded font-bold text-slate-700 text-sm min-w-[120px] text-center">
            {grandTotal}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrimCost;