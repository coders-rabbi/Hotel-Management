import React from "react";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "../DashboardSidebar/DashboardSidebar";
import UserDashboardHome from "../User/UserDashboardHome/UserDashboardHome";
import UserHistory from "../User/UserHistory/UserHistory";
import { FaBars } from "react-icons/fa";

const DashboardLayout = () => {
  return (
    <div className="max-w-screen-lg m-auto">
      <div className="drawer lg:drawer-open gap-5">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary lg:drawer-open lg:hidden 10"
          >
            <FaBars />
          </label>
          <Outlet></Outlet>
        </div>

        <div className="drawer-side">
          <DashboardSidebar />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
