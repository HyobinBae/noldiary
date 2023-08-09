import React from "react";
import { Routes, Route } from "react-router-dom";

import MainHeader from "./components/MainHeader";
import Diary from "./pages/diary";
import Curations from "./pages/curation";
import LikeMap from "./pages/likemap";

const RouteWithNavbar = () => {
  return (
    <>
      <MainHeader />
      <Routes>
        <Route path="/" element={<Curations />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/likemap" element={<LikeMap />} />
      </Routes>
    </>
  );
};

export default RouteWithNavbar;
