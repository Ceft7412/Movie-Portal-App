import React from "react";
import Login from "../views/Login";

const Wrapper = () => {
  return (
    <div className="wrapper font-body bg-slate-400 antialiased ">
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <Login />
      </div>
    </div>
  );
};

export default Wrapper;
