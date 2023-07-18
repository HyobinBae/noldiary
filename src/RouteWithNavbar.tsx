import React from "react";
import { Routes, Route } from "react-router-dom";

import MainHeader from "./components/MainHeader";
import Diary from "./pages/diary";
import Curations from "./pages/curation";
import Footprints from "./pages/footprints";

const RouteWithNavbar = () => {
  return (
    <>
      <MainHeader />
      <Routes>
        <Route path="/" element={<Curations />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/footprints" element={<Footprints />} />
      </Routes>
    </>
  );
};

export default RouteWithNavbar;
