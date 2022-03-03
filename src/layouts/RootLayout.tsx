import React from "react";
import { Outlet } from "react-router-dom";
import FooterLayout from "./FooterLayout";
import HeaderLayout from "./HeaderLayout";

const RootLayout = () => {
  return (
    <div>
      <HeaderLayout />
      <Outlet />
      <FooterLayout />
    </div>
  );
};

export default RootLayout;
