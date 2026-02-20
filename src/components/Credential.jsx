import React from 'react';

const Credential = ({ list, onUpdate }) => {
  const addField = () => {
    onUpdate([...list, { id: Date.now(), type: 'TIN', value: '', courierAcc: '', carrier: '', source: '', accessTo: '' }]);
  };

  const removeField = (id) => {
    if (list.length > 1) {
      onUpdate(list.filter(item => item.id !== id));
    }
  };

  const handleChange = (id, field, val) => {
    onUpdate(list.map(item => item.id === id ? { ...item, [field]: val } : item));
  };

  return (
    <div className="bg-white p-5 rounded-sm border border-gray-200 shadow-sm font-sans mb-4">
      {/* Header Section */}
      <div className="flex items-center mb-4">
        <h2 className="text-xs font-bold text-slate-700 uppercase tracking-wider border-b-2 border-slate-800 pb-0.5">
          CREDENTIAL
        </h2>
        <div className="flex-grow border-t border-gray-100 ml-2"></div>
      </div>

      <div className="flex flex-col gap-3">
        {list.map((item, index) => (
          <div key={item.id} className="grid grid-cols-12 gap-3 items-center">
            
            {/* Column 1: Dropdown + Input + Action Button */}
            <div className="col-span-12 md:col-span-5 flex items-stretch">
              <div className="flex border border-slate-200 rounded overflow-hidden w-full focus-within:border-blue-400 transition-all bg-white">
                <select 
                  value={item.type} 
                  onChange={(e) => handleChange(item.id, 'type', e.target.value)}
                  className="bg-slate-50 px-2 border-r border-slate-200 text-[10px] font-bold text-slate-700 outline-none cursor-pointer min-w-[65px] uppercase"
                >
                  <option value="TIN">TIN</option>
                  <option value="BIN">BIN</option>
                  <option value="VAT">VAT</option>
                </select>
                <input 
                  type="text" 
                  value={item.value || ""} 
                  placeholder="ENTER NUMBER"
                  onChange={(e) => handleChange(item.id, 'value', e.target.value)}
                  className="w-full px-3 py-1.5 text-xs outline-none text-black font-medium placeholder:text-slate-300"
                />
              </div>
              
              <button 
                type="button" 
                onClick={index === 0 ? addField : () => removeField(item.id)}
                className={`ml-2 flex items-center justify-center min-w-[32px] h-[32px] rounded text-white shadow-sm transition-all active:scale-90 
                  ${index === 0 ? 'bg-teal-500 hover:bg-teal-600' : 'bg-red-600 hover:bg-red-700'}`}
              >
                {index === 0 ? (
                  <span className="text-xl font-light leading-none">+</span>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                )}
              </button>
            </div>

            {/* Column 2: Courier Acc / Source */}
            <div className="col-span-12 md:col-span-4">
              <input 
                type="text" 
                placeholder={index === 0 ? "COURIER ACC. NO:" : "SOURCE"}
                value={index === 0 ? item.courierAcc : item.source}
                onChange={(e) => handleChange(item.id, index === 0 ? 'courierAcc' : 'source', e.target.value)}
                className="w-full border border-slate-200 p-2 rounded text-[10px] uppercase placeholder:text-slate-400 outline-none focus:border-blue-300 text-black font-medium"
              />
            </div>

            {/* Column 3: Carrier / Access To */}
            <div className="col-span-12 md:col-span-3">
              {index === 0 ? (
                <input 
                  type="text" 
                  placeholder="CARRIER"
                  value={item.carrier}
                  onChange={(e) => handleChange(item.id, 'carrier', e.target.value)}
                  className="w-full border border-slate-200 p-2 rounded text-[10px] uppercase placeholder:text-slate-400 outline-none focus:border-blue-300 text-black font-medium"
                />
              ) : (
                <select 
                  value={item.accessTo}
                  onChange={(e) => handleChange(item.id, 'accessTo', e.target.value)}
                  className="w-full border border-slate-200 p-2 rounded text-[10px] font-bold outline-none focus:border-blue-300 text-black cursor-pointer bg-white"
                >
                  <option value="">Access To</option>
                  <option value="Private">Private</option>
                  <option value="Public">Public</option>
                </select>
              )}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Credential;