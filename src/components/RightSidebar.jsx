import React from 'react';

const RightSidebar = () => {
  return (
    <div className="w-[180px] bg-[#1e293b] h-screen fixed right-0 top-0 text-white flex flex-col overflow-hidden">
      <div className="bg-slate-400/30 p-4 text-center border-b border-slate-700">
        <div className="text-2xl font-light tracking-tight">01:40:13</div>
        <div className="text-xl font-bold">PM Dhaka</div>
        <div className="text-[10px] text-blue-300 mt-1 uppercase font-bold">Sunday November</div>
        <div className="text-4xl font-bold mt-1">09</div>
      </div>

      <div className="flex-1 bg-[#1e3a8a] flex flex-col items-center justify-center relative">
        <div className="absolute top-4 left-0 w-full px-4 flex justify-between items-start">
           <div className="text-left">
              <div className="text-sm font-medium">Dhaka</div>
              <div className="text-3xl font-bold">28°C</div>
              <div className="text-[8px] opacity-70">Feels like: 31°C</div>
              <div className="text-[8px] opacity-70">Forecast: Haze</div>
           </div>
        </div>
      </div>

      <div className="bg-white p-4 flex flex-col items-center justify-center gap-2">
        <div className="text-[#1e3a8a] font-black italic text-lg leading-none">berrylabs</div>
        <div className="text-[8px] text-slate-400 uppercase tracking-tighter">Empowered By</div>
      </div>
    </div>
  );
};

export default RightSidebar;