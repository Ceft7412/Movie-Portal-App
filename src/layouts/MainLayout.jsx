import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import React from "react";
import MainWrapper from "../components/MainWrapper";

const MainLayout = () => {
  return (
    <>
      <Sidebar />
      <Navbar title="Movie App" />

      <MainWrapper />
    </>
  );
};

export default MainLayout;
