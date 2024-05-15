import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../pages/sharedComponents/Footer/Footer";
import NavBar from "../pages/sharedComponents/navBar/NavBar";

const Root = () => {
  return (
    <div>
      <NavBar />
      <Outlet></Outlet>
      {/* footer */}
      <Footer></Footer>
    </div>
  );
};

export default Root;
