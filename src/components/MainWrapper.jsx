import React from "react";
import CardsContainer from "../views/pages/Dashboard";
import {Outlet} from "react-router-dom";
import Movies from "../views/pages/Movies";
const MainWrapper = ({ isMoveOkay }) => {
  return (
    <div
      className={`antialiased min-h-screen bg-slate-800 pt-[66px] pb-[66px] `}
    >
      <div
        className={`max-w-[2000px] min-[2000px]:m-auto w-full h-full py-14 px-5 transition-all ease-in-out duration-700 lg:py-5 
      ${isMoveOkay ? "lg:pl-[255px]" : "lg:pl-[20px]"}
      md:pl-[20px]
    `}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default MainWrapper;
