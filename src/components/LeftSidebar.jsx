import React from 'react';

const LeftSidebar = () => {
  const menuItems = [
    { name: 'ONEBOARD', active: false },
    { name: 'ONE AIS', active: false },
    { name: 'ONE HCM', active: false },
    { name: 'ONE PLM (STYLE)', active: true },
    { name: 'ONE TNA', active: false },
    { name: 'BUDGET', active: false },
    { name: 'ONE PMS', active: false },
    { name: 'ONE QMS', active: false },
    { name: 'ONE SCM', active: false },
  ];

  return (
    <div className="w-[180px] bg-[#f0f9ff] h-screen flex flex-col border-r border-gray-200 fixed left-0 top-0 overflow-y-auto">
      <div className="p-4 mb-2 flex justify-center">
        <div className="text-[#4338ca] font-bold text-xl flex flex-col items-center">
          <span className="leading-none">ONE</span>
          <span className="text-[10px] tracking-[4px]">EXP</span>
        </div>
      </div>

      <div className="flex justify-between px-2 mb-4">
        <button className="text-[10px] text-blue-500 font-bold border border-blue-200 px-2 py-0.5 rounded">◀ PREV</button>
        <button className="text-[10px] text-blue-500 font-bold border border-blue-200 px-2 py-0.5 rounded">NEXT ▶</button>
      </div>

      <div className="flex-1">
        {menuItems.map((item) => (
          <div
            key={item.name}
            className={`flex items-center gap-2 px-3 py-2 text-[10px] font-bold cursor-pointer transition-all border-b border-white
              ${item.active ? 'bg-white text-teal-500 border-l-4 border-l-teal-400' : 'text-[#475569] hover:bg-white/50'}`}
          >
            <div className={`w-4 h-4 rounded-sm ${item.active ? 'bg-teal-500' : 'bg-blue-400'}`}></div>
            {item.name}
            <span className="ml-auto text-blue-400">▶</span>
          </div>
        ))}
      </div>

      <div className="mt-auto p-2">
        <div className="bg-[#4338ca] text-white text-[9px] p-2 rounded flex items-center justify-between mb-2">
          <div className="flex items-center gap-1">
             <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
             <span>BY: JOHIR1</span>
          </div>
        </div>
        <div className="flex gap-1">
          <button className="flex-1 bg-sky-100 text-sky-600 text-[10px] font-bold py-1.5 rounded border border-sky-200 flex items-center justify-center gap-1">
            👤 ACCOUNT
          </button>
          <button className="flex-1 bg-sky-100 text-sky-600 text-[10px] font-bold py-1.5 rounded border border-sky-200 flex items-center justify-center gap-1">
            ↳ LOGOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;