import React from "react";
import Navbar from "../shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import "../common.scss";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
