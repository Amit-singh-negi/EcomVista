import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const Sidebar = () => {
  return (
    <div className="w-[18%] min-h-screen bg-white border-r border-gray-200 shadow-sm">
      <div className="flex flex-col gap-3 p-5">

        <NavLink
          to="/Add"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200
            ${
              isActive
                ? "bg-blue-100 border-l-4 border-blue-600 text-blue-600 font-semibold"
                : "border border-gray-200 hover:bg-gray-100 hover:border-gray-300"
            }`
          }
        >
          <img className="w-5 h-5" src={assets.add_icon} alt="" />
          <p className="hidden md:block">Add Items</p>
        </NavLink>

        <NavLink
          to="/List"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200
            ${
              isActive
                ? "bg-blue-100 border-l-4 border-blue-600 text-blue-600 font-semibold"
                : "border border-gray-200 hover:bg-gray-100 hover:border-gray-300"
            }`
          }
        >
          <img className="w-5 h-5" src={assets.order_icon} alt="" />
          <p className="hidden md:block">List Items</p>
        </NavLink>

        <NavLink
          to="/Orders"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200
            ${
              isActive
                ? "bg-blue-100 border-l-4 border-blue-600 text-blue-600 font-semibold"
                : "border border-gray-200 hover:bg-gray-100 hover:border-gray-300"
            }`
          }
        >
          <img className="w-5 h-5" src={assets.order_icon} alt="" />
          <p className="hidden md:block">Orders</p>
        </NavLink>

      </div>
    </div>
  );
};

export default Sidebar;