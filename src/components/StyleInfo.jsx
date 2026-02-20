import React from 'react';

const StyleInfoSection = ({ data, onUpdate }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onUpdate({ ...data, [name]: value });
  };

  const getStyle = (name, value) => {
    const required = [
      'companyName', 'item', 'status', 'department', 
      'termsOfSales', 'division', 'costingBy', 'currency'
    ];
    const isInvalid = required.includes(name) && (!value || value.trim() === "");
    
    return `w-full border p-[6px] rounded-[4px] text-[11px] outline-none transition-all duration-200 cursor-pointer
      ${isInvalid 
        ? 'border-[#ff9494] bg-[#fffafa] text-red-400' 
        : 'border-[#e2e8f0] focus:border-blue-400 text-black bg-white font-medium'}`;
  };

  return (
    <div className="bg-white p-5 rounded-sm border border-gray-200 shadow-sm font-sans mb-4">
      <div className="flex justify-between items-center mb-4 border-b border-gray-100 pb-1">
        <h2 className="text-[11px] font-bold text-[#475569] uppercase tracking-tight">
          Style Information
        </h2>
        <button type="button" className="bg-[#4338ca] text-white text-[9px] font-bold py-[5px] px-5 rounded-[3px] flex items-center gap-2 uppercase">
          <span className="text-xs font-bold leading-none">↑</span> Select File
        </button>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex gap-3 w-full">
          <div style={{ width: '40.5%' }}>
            <select name="companyName" value={data.companyName || ""} onChange={handleChange} className={getStyle('companyName', data.companyName)}>
              <option value="" className="text-black">COMPANY NAME</option>
              <option value="ABC Apparels Ltd" className="text-black font-semibold">ABC Apparels Ltd</option>
              <option value="Global Fashion" className="text-black font-semibold">Global Fashion</option>
            </select>
          </div>
          <div style={{ width: '19.5%' }}>
            <div className="relative">
              <input type="date" name="date" value={data.date || ""} onChange={handleChange} className={getStyle('date', data.date)} />
              <span className="absolute right-2 top-2 text-orange-400 text-[10px] pointer-events-none">📅</span>
            </div>
          </div>
          <div style={{ width: '19.5%' }}>
            <select name="item" value={data.item || ""} onChange={handleChange} className={getStyle('item', data.item)}>
              <option value="" className="text-black">ITEM</option>
              <option value="T-Shirt" className="text-black font-semibold">T-Shirt</option>
              <option value="Pants" className="text-black font-semibold">Pants</option>
            </select>
          </div>
        </div>

        <div className="flex gap-3 w-full">
          <div style={{ width: '19.5%' }}>
            <input name="styleNumber" placeholder="STYLE NUMBER" value={data.styleNumber || ""} onChange={handleChange} className={getStyle('styleNumber', data.styleNumber)} />
          </div>
          <div style={{ width: '19.5%' }}>
            <select name="season" value={data.season || ""} onChange={handleChange} className={getStyle('season', data.season)}>
              <option value="" className="text-black">SEASON</option>
              <option value="Summer 2026" className="text-black font-semibold">Summer 2026</option>
            </select>
          </div>
          <div style={{ width: '19.5%' }}>
            <select name="year" value={data.year || ""} onChange={handleChange} className={getStyle('year', data.year)}>
              <option value="" className="text-black">YEAR</option>
              <option value="2026" className="text-black font-semibold">2026</option>
            </select>
          </div>
          <div style={{ width: '19.5%' }}>
            <select name="status" value={data.status || ""} onChange={handleChange} className={getStyle('status', data.status)}>
              <option value="" className="text-black">STATUS</option>
              <option value="Active" className="text-black font-semibold">Active</option>
            </select>
          </div>
        </div>

        <div className="flex gap-3 w-full">
          <div style={{ width: '19.5%' }}>
            <select name="department" value={data.department || ""} onChange={handleChange} className={getStyle('department', data.department)}>
              <option value="" className="text-black">DEPARTMENT</option>
              <option value="Knitting" className="text-black font-semibold">Knitting</option>
            </select>
          </div>
          <div style={{ width: '19.5%' }}>
            <select name="termsOfSales" value={data.termsOfSales || ""} onChange={handleChange} className={getStyle('termsOfSales', data.termsOfSales)}>
              <option value="" className="text-black">TERMS OF SALES</option>
              <option value="FOB" className="text-black font-semibold">FOB</option>
            </select>
          </div>
          <div style={{ width: '19.5%' }}>
            <select name="division" value={data.division || ""} onChange={handleChange} className={getStyle('division', data.division)}>
              <option value="" className="text-black">DIVISION</option>
              <option value="Division A" className="text-black font-semibold">Division A</option>
            </select>
          </div>
          <div style={{ width: '19.5%' }}>
            <select name="labelBrand" value={data.labelBrand || ""} onChange={handleChange} className={getStyle('labelBrand', data.labelBrand)}>
              <option value="" className="text-black">LABEL/BRAND</option>
              <option value="Brand X" className="text-black font-semibold">Brand X</option>
            </select>
          </div>
        </div>

        <div className="flex gap-3 w-full">
          <div style={{ width: '19.5%' }} className="relative">
            <input type="number" name="quantity" placeholder="Quantity" value={data.quantity || ""} onChange={handleChange} className={getStyle('quantity', data.quantity)} />
            <span className="absolute right-2 top-2 text-[10px] text-gray-400">📋</span>
          </div>
          <div style={{ width: '19.5%' }}>
            <select name="costingBy" value={data.costingBy || ""} onChange={handleChange} className={getStyle('costingBy', data.costingBy)}>
              <option value="" className="text-black">COSTING BY</option>
              <option value="Admin" className="text-black font-semibold">Admin</option>
            </select>
          </div>
          <div style={{ width: '19.5%' }}>
            <select name="currency" value={data.currency || ""} onChange={handleChange} className={getStyle('currency', data.currency)}>
              <option value="" className="text-black">CURRENCY</option>
              <option value="USD" className="text-black font-semibold">USD</option>
              <option value="BDT" className="text-black font-semibold">BDT</option>
            </select>
          </div>
        </div>

        <div className="flex gap-3 w-full">
          <div style={{ width: '40.5%' }}>
            <select name="accessTo" value={data.accessTo || ""} onChange={handleChange} className={getStyle('accessTo', data.accessTo)}>
              <option value="" className="text-black">ACCESS TO</option>
              <option value="Private" className="text-black font-semibold">Private</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyleInfoSection;