import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import ReceiptLongRoundedIcon from "@mui/icons-material/ReceiptLongRounded";
import LayersRoundedIcon from "@mui/icons-material/LayersRounded";
import Inventory2RoundedIcon from "@mui/icons-material/Inventory2Rounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import SupervisorAccountRoundedIcon from "@mui/icons-material/SupervisorAccountRounded";

const Sidebar = () => {
  //   const location = useLocation();
  const [activeItem, setActiveItem] = useState("Dashboard");
  const menuItems = [
    {
      name: "Dashboard",
      icon: <GridViewRoundedIcon fontSize="small" />,
      href: "/dashboard",
    },
    {
      name: "Transaction",
      icon: <ReceiptLongRoundedIcon fontSize="small" />,
      href: "/transaction",
    },
    {
      name: "Category",
      icon: <LayersRoundedIcon fontSize="small" />,
      href: "/category",
    },
    {
      name: "Product",
      icon: <Inventory2RoundedIcon fontSize="small" />,
      href: "/product",
    },
    {
      name: "Employee",
      icon: <PersonRoundedIcon fontSize="small" />,
      href: "/employee",
    },
    {
      name: "Admin",
      icon: <SupervisorAccountRoundedIcon fontSize="small" />,
      href: "/admin",
    },
  ];

  return (
    <div className="sidebar-wrapper font-body bg-gray-100 fixed top-[60px] h-full lg:left-0 md:w-[190px] lg:w-[200px] border-r border-gray-300 overflow-auto z-5 hidden sm:block">
      <div className="sidebar-wrapper-fl flex flex-col p-3 pl-5 md:pl-8">
        <div className="item flex flex-col gap-5">
          {menuItems.map((item) => (
            <Link
              to={item.href}
              className={`sub ${item.name === activeItem ? "active" : ""}`}
              onClick={() => setActiveItem(item.name)}
            >
              <div className="text group flex gap-2 items-center hover:text-orange-500">
                <i
                  className={`p-1 rounded-md group-hover:bg-orange-200 flex items-center ${
                    item.name === activeItem
                      ? "ring-1 text-orange-500 bg-orange-200 ring-orange-100"
                      : "bg-gray-200 "
                  }`}
                >
                  {item.icon}
                </i>
                <span
                  className={`${
                    item.name === activeItem
                      ? "font-medium text-orange-500"
                      : ""
                  }`}
                >
                  {item.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
