import React from "react";
import { Link } from "react-router-dom";

const DashboardSidebar = () => {
  return (
    <div className="h-full">
      <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
        <li>
          <Link to="/dashboard">Dashboard Home</Link>
        </li>
        <li>
          <Link to="history">History</Link>
        </li>
        <li>
          <Link to="settings">LogOut</Link>
        </li>
        {/* Add more links as needed */}
      </ul>
    </div>
  );
};

export default DashboardSidebar;
