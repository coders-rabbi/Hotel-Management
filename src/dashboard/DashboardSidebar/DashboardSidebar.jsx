import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../authProvider/AuthProvider";
import { FaUserTie } from "react-icons/fa";

const DashboardSidebar = () => {
  const [userData, setUserData] = useState();
  const { logOut, loggedUser } = useContext(AuthContext);

  const role = userData?.role;

  useEffect(() => {
    fetch(`http://localhost:5000/users/${loggedUser?.email}`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);

  return (
    <div className="h-full">
      <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
        <div className="mb-8">
          <div className="text-6xl m-auto flex justify-center items-center bg-white w-32 h-32 rounded-full shadow-lg">
            <FaUserTie />
          </div>
          <p className="text-center text-2xl font-semibold mt-4">
            {loggedUser?.displayName}
          </p>
        </div>

        {role === "user" ? (
          <>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="history">History</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="booking">Booking</Link>
            </li>
            <li>
              <Link to="admin_history">Ad_History</Link>
            </li>
            <li>
              <Link to="manage_users">Manage Users</Link>
            </li>
          </>
        )}

        <li>
          <Link
            onClick={() => {
              logOut();
            }}
          >
            LogOut
          </Link>
        </li>
        {/* Add more links as needed */}
      </ul>
    </div>
  );
};

export default DashboardSidebar;
