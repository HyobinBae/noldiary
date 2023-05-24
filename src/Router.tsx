import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Curations from "./pages/curations";
import Signin from "./pages/signin";
import Footprints from "./pages/footprints";
import Write from "./pages/write";
import Diary from "./pages/diary";
import KakaoLogin from "./pages/signin/components/KakaoLogin";
import NaverLogin from "./pages/signin/components/NaverLogin";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/" element={<Curations />} />
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
