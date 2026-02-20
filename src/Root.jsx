import { Outlet } from "react-router-dom";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";


export default function Root() {
  return (
    <div className="flex min-h-screen bg-[#f8fafc]">
      <LeftSidebar />

      <main className="flex-1 mx-[180px] p-4">
        <div className="flex justify-end mb-4">
           <button className="bg-sky-500 p-1 rounded shadow-sm">
             <div className="w-5 h-0.5 bg-white my-0.5"></div>
             <div className="w-5 h-0.5 bg-white my-0.5"></div>
             <div className="w-5 h-0.5 bg-white my-0.5"></div>
           </button>
        </div>
        <Outlet />
      </main>

      <RightSidebar />
    </div>
  );
}