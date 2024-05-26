import React from "react";
import Movies from "../components/Movies";
const MainWrapper = () => {
  return (
    <div className="antialiased">
      <div className="min-h-screen h-screen bg-slate-900">
        <div className="h-full  pt-[60px] mx-6 sm:mx-60">
          <Movies />
        </div>
      </div>
    </div>
  );
};

export default MainWrapper;
