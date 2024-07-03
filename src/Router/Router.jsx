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

      // Add more routes as needed
    ],
  },
]);

export default router;
