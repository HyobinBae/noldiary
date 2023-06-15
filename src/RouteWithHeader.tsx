import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./components/Header";

const RouteWithHeader = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default RouteWithHeader;
