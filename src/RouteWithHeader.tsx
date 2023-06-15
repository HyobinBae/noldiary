import React from "react";
import { Routes, Route } from "react-router-dom";

import MainHeader from "./components/MainHeader";
import Diary from "./pages/diary";
import Curations from "./pages/curations";
import Footprints from "./pages/footprints";
import DiaryDetail from "./pages/diary/components/DiaryDetail/DiaryDetail";

const RouteWithHeader = () => {
  return (
    <>
      <MainHeader />
      <Routes>
        <Route path="/" element={<Curations />} />
        <Route path="/curations" element={<Curations />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/diary/:id" element={<DiaryDetail />} />
        <Route path="/footprints" element={<Footprints />} />
      </Routes>
    </>
  );
};

export default RouteWithHeader;
