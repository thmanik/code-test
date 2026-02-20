import React, { useState } from 'react';

const StyleInfoSection = ({ data, onUpdate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('ITEM');
  const [modalRows, setModalRows] = useState({
    SCATCH: [{ id: 1, img: null }],
    ITEM: [{ id: 1, img: null }],
    TRIM: [{ id: 1, img: null }],
    APPLICATION: [{ id: 1, img: null }],
    MEAS: [{ id: 1, img: null }]
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    onUpdate({ ...data, [name]: value });
  };

  const handleImageChange = (tab, id, file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const updatedRows = modalRows[tab].map(row => 
        row.id === id ? { ...row, img: reader.result } : row
      );
      setModalRows({ ...modalRows, [tab]: updatedRows });
    };
    reader.readAsDataURL(file);
  };

  const addModalRow = () => {
    setModalRows({ ...modalRows, [activeTab]: [...modalRows[activeTab], { id: Date.now(), img: null }] });
  };

  const removeModalRow = (tab, id) => {
    if (modalRows[tab].length) {
      setModalRows({ ...modalRows, [tab]: modalRows[tab].filter(row => row.id !== id) });
    }
  };

  const getStyle = (name, value) => {
    const required = ['companyName', 'item', 'status', 'department', 'termsOfSales', 'division', 'costingBy', 'currency'];
    const isInvalid = required.includes(name) && (!value || (typeof value === 'string' && value.trim() === ""));
    return `w-full border p-[6px] rounded-[4px] text-[11px] outline-none transition-all duration-200 cursor-pointer text-black
      ${isInvalid ? 'border-[#ff9494] bg-[#fffafa]' : 'border-[#e2e8f0] focus:border-blue-400 bg-white font-medium'}`;
  };

  return (
    <div className="bg-white p-5 rounded-sm border border-gray-200 shadow-sm font-sans mb-4">
      <div className="flex justify-between items-center mb-4 border-b border-gray-100 pb-1">
        <h2 className="text-[11px] font-bold text-[#475569] uppercase tracking-tight">Style Information</h2>
        <button type="button" onClick={() => setIsModalOpen(true)} className="bg-[#4338ca] text-white text-[9px] font-bold py-[5px] px-5 rounded-[3px] flex items-center gap-2 uppercase cursor-pointer">
          <span className="text-xs font-bold leading-none">↑</span> Select File
        </button>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex gap-3 w-full">
          <div style={{ width: '40.5%' }}>
            <select name="companyName" value={data.companyName || ""} onChange={handleChange} className={getStyle('companyName', data.companyName)}>
              <option value="" className="text-black">COMPANY NAME</option>
              <option value="ABC Apparels Ltd" className="text-black">ABC Apparels Ltd</option>
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
              <option value="T-Shirt" className="text-black">T-Shirt</option>
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
              <option value="Summer 2026" className="text-black">Summer 2026</option>
            </select>
          </div>
          <div style={{ width: '19.5%' }}>
            <select name="year" value={data.year || ""} onChange={handleChange} className={getStyle('year', data.year)}>
              <option value="" className="text-black">YEAR</option>
              <option value="2026" className="text-black">2026</option>
            </select>
          </div>
          <div style={{ width: '19.5%' }}>
            <select name="status" value={data.status || ""} onChange={handleChange} className={getStyle('status', data.status)}>
              <option value="" className="text-black">STATUS</option>
              <option value="Active" className="text-black">Active</option>
            </select>
          </div>
        </div>
        <div className="flex gap-3 w-full">
          <div style={{ width: '19.5%' }}>
            <select name="department" value={data.department || ""} onChange={handleChange} className={getStyle('department', data.department)}>
              <option value="" className="text-black">DEPARTMENT</option>
              <option value="Knitting" className="text-black">Knitting</option>
            </select>
          </div>
          <div style={{ width: '19.5%' }}>
            <select name="termsOfSales" value={data.termsOfSales || ""} onChange={handleChange} className={getStyle('termsOfSales', data.termsOfSales)}>
              <option value="" className="text-black">TERMS OF SALES</option>
              <option value="FOB" className="text-black">FOB</option>
            </select>
          </div>
          <div style={{ width: '19.5%' }}>
            <select name="division" value={data.division || ""} onChange={handleChange} className={getStyle('division', data.division)}>
              <option value="" className="text-black">DIVISION</option>
              <option value="Division A" className="text-black">Division A</option>
            </select>
          </div>
          <div style={{ width: '19.5%' }}>
            <select name="labelBrand" value={data.labelBrand || ""} onChange={handleChange} className={getStyle('labelBrand', data.labelBrand)}>
              <option value="" className="text-black">LABEL/BRAND</option>
              <option value="Brand X" className="text-black">Brand X</option>
            </select>
          </div>
        </div>
        <div className="flex gap-3 w-full">
          <div style={{ width: '19.5%' }} className="relative">
            <input type="number" name="quantity" placeholder="Quantity" value={data.quantity || ""} onChange={handleChange} className={getStyle('quantity', data.quantity)} />
          </div>
          <div style={{ width: '19.5%' }}>
            <select name="costingBy" value={data.costingBy || ""} onChange={handleChange} className={getStyle('costingBy', data.costingBy)}>
              <option value="" className="text-black">COSTING BY</option>
              <option value="Admin" className="text-black">Admin</option>
            </select>
          </div>
          <div style={{ width: '19.5%' }}>
            <select name="currency" value={data.currency || ""} onChange={handleChange} className={getStyle('currency', data.currency)}>
              <option value="" className="text-black">CURRENCY</option>
              <option value="USD" className="text-black">USD</option>
            </select>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-md shadow-2xl w-full max-w-4xl overflow-hidden">
            <div className="bg-[#14b8a6] p-2 text-center relative">
              <h3 className="text-white text-[11px] font-bold uppercase tracking-[2px]">Image Slide View</h3>
              <button onClick={() => setIsModalOpen(false)} className="absolute right-3 top-2 text-white text-xs cursor-pointer">✕</button>
            </div>

            <div className="flex bg-[#14b8a6]">
              {['SCATCH', 'ITEM', 'TRIM', 'APPLICATION', 'MEAS'].map(tab => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-2 text-[10px] font-bold border-r border-teal-600 cursor-pointer ${activeTab === tab ? 'bg-white text-[#14b8a6]' : 'text-white hover:bg-teal-700'}`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="p-4 bg-[#f8fafc]">
              <div className="bg-white border border-[#e2e8f0] rounded-lg overflow-x-auto shadow-sm">
                <div className="min-w-[750px]">
                  <div className="grid grid-cols-12 bg-white p-3 border-b text-[10px] font-bold text-slate-500 uppercase items-center">
                    <div className="col-span-1">S.N.</div>
                    <div className="col-span-4 text-center">Particulars</div>
                    <div className="col-span-4 text-center">Tag Style</div>
                    <div className="col-span-2 text-center">Image</div>
                    <div className="col-span-1 flex justify-end">
                      <button type="button" onClick={addModalRow} className="bg-[#00c2cb] text-white h-6 w-6 rounded-md flex items-center justify-center cursor-pointer">
                        <span className="text-lg">+</span>
                      </button>
                    </div>
                  </div>

                  <div className="max-h-[300px] overflow-y-auto divide-y divide-slate-50">
                    {modalRows[activeTab].map((row, index) => (
                      <div key={row.id} className="grid grid-cols-12 p-3 items-center gap-3">
                        <div className="col-span-1 text-[11px] text-slate-400 font-medium">☰ {index + 1}</div>
                        <div className="col-span-4">
                          <select className="w-full border border-slate-200 p-2 rounded text-[10px] font-bold uppercase outline-none text-black bg-white">
                            <option value="" className="text-black">CAPTIONS</option>
                            <option value="front" className="text-black">Front View</option>
                          </select>
                        </div>
                        <div className="col-span-4">
                          <select className="w-full border border-slate-200 p-2 rounded text-[10px] font-bold uppercase outline-none text-black bg-white">
                            <option value="" className="text-black">TAG STYLE</option>
                            <option value="main" className="text-black">Main Label</option>
                          </select>
                        </div>
                        <div className="col-span-2 flex flex-col items-center gap-2">
                          <label className="cursor-pointer bg-[#4f46e5] p-1.5 rounded-md text-white shadow-sm hover:bg-indigo-700">
                            <input type="file" className="hidden" accept="image/*" onChange={(e) => handleImageChange(activeTab, row.id, e.target.files[0])} />
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                          </label>
                          {row.img && <img src={row.img} alt="Preview" className="w-10 h-10 border rounded shadow-sm object-cover" />}
                        </div>
                        <div className="col-span-1 flex justify-end">
                          <button type="button" onClick={() => removeModalRow(activeTab, row.id)} className="bg-[#b91c1c] text-white h-7 w-7 flex items-center justify-center rounded-[4px] cursor-pointer">
                            <svg className="h-4 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-3 mt-6">
                <button type="button" onClick={() => setIsModalOpen(false)} className="bg-[#f29100] text-white px-8 py-2 rounded text-[10px] font-bold uppercase cursor-pointer flex items-center gap-2">
                  <span className="bg-white/20 rounded-full w-4 h-4 flex items-center justify-center text-[8px]">✕</span> CANCEL
                </button>
                <button type="button" onClick={() => setIsModalOpen(false)} className="bg-[#008000] text-white px-8 py-2 rounded text-[10px] font-bold uppercase cursor-pointer flex items-center gap-2">
                  <span className="bg-white/20 rounded-full w-4 h-4 flex items-center justify-center text-[8px]">💾</span> SAVE
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StyleInfoSection;