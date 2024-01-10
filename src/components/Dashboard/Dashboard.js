"use client";
import DashboardLeft from "./DashboardLeft";
import MyAccount from "./Account/MyAccount";

const Dashboard = () => {
  return (
    <>
      <div className="shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]  bg-slate-800 w-full mt-3 rounded-sm  transition-all delay-150 flex px-3">
        <DashboardLeft />
        <div className="basis-4/5">
          <MyAccount />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
