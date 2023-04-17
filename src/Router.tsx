import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Noldiary from "./pages/main/Noldiary";
import Curations from "./pages/curations";
import Signin from "./pages/signin";
import Footprints from "./pages/footprints";
import Write from "./pages/write";
import Diary from "./pages/diary";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Noldiary />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/curations" element={<Curations />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/write" element={<Write />} />
          <Route path="/footprints" element={<Footprints />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
