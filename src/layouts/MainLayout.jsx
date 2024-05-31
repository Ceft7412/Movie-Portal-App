import React, { useState, useEffect, createContext } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import MainWrapper from "../components/MainWrapper";

export const SearchContext = React.createContext();
export const LayoutContext = createContext();

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 1280);

  const [searchTerm, setSearchTerm] = useState('');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSidebarOpen(window.innerWidth > 1280);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return (
    <>
      <Sidebar isOpen={isSidebarOpen} />
      <Navbar onMenuClick={toggleSidebar} title="Movie App" />
      <LayoutContext.Provider value={isSidebarOpen}>
        <MainWrapper isMoveOkay={isSidebarOpen} />
      </LayoutContext.Provider>
    </>
  );
};

export default MainLayout;
