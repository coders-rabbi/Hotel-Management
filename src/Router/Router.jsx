import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Rooms from "../pages/Rooms/Rooms";

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
        element: <Rooms/>
      }
    ],
  },
]);

export default router;
