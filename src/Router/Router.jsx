import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Rooms from "../pages/Rooms/Rooms";
import Login from "../pages/Login/Login";
import RegisterPage from "../pages/RegisterPage.jsx/RegisterPage";
import UserDashboardHome from "../dashboard/User/UserDashboardHome/UserDashboardHome";
import DashboardLayout from "../dashboard/dashboardLayout/DashboardLayout";
import UserHistory from "../dashboard/User/UserHistory/UserHistory";
import Booking from "../dashboard/Admin/Booking/Booking";
import AdminHistory from "../dashboard/Admin/History/AdminHistory";
import ManageUsers from "../dashboard/Admin/Users/ManageUsers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/roomsList",
        element: <Rooms />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <UserDashboardHome />,
      },
      {
        path: "history",
        element: <UserHistory />,
      },
      {
        path: "booking",
        element: <Booking />,
      },
      {
        path: "admin_history",
        element: <AdminHistory />,
      },
      {
        path: "manage_users",
        element: <ManageUsers />,
      },

      // Add more routes as needed
    ],
  },
]);

export default router;
