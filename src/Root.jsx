import { Outlet } from "react-router-dom";



export default function Root() {
  return (
    <div className="mx-auto">

      <div className=" p-4">
        <Outlet />
      </div>
    </div>
  );
}
