import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainHeader from "./components/MainHeader";
import Diary from "./pages/diary";
import Write from "./pages/write";
import Signin from "./pages/signin";
import KakaoLogin from "./pages/signin/components/KakaoLogin";
import NaverLogin from "./pages/signin/components/NaverLogin";
import Curations from "./pages/curations";
import Footprints from "./pages/footprints";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <MainHeader />
        <Routes>
          <Route path="/" element={<Curations />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/curations" element={<Curations />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/write" element={<Write />} />
          <Route path="/footprints" element={<Footprints />} />
          <Route path="/oauth/kakao" element={<KakaoLogin />} />
          <Route path="/oauth/naver" element={<NaverLogin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
