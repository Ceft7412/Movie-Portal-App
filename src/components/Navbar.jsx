import React from "react";

const Navbar = () => {
  return (
    <div className="nav-wrapper font-sans fixed w-full h-[60px] bg-slate-900 z-10 pl-8 p-2 border-b border-gray-600">
      <div className="nav-wrapper-fl flex items-center h-full text-white justify-between">
        <div className="left">
          <div className="logo">
            <span className="text-logo ">Movie Project</span>
          </div>
        </div>
        <div className="right mr-10">
          <div className="item">
            <span className="text-white">About Me</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
