import React from "react";
import DashboardLeft from "../DashboardLeft";
import FavoritesList from "./FavoritesList";

const FavoritesDahsboard = () => {
  return (
    <>
      <div className="shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]  bg-slate-800 w-full mt-3 rounded-sm  transition-all delay-150 flex px-3">
        <DashboardLeft />
        <div className="basis-4/5">
          <FavoritesList />
        </div>
      </div>
    </>
  );
};

export default FavoritesDahsboard;
