import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Noldiary from "./pages/main/Noldiary";
import Curations from "./pages/curations";
import Signin from "./pages/signin";
import Footprints from "./pages/footprints";
import Write from "./pages/write";
import Diary from "./pages/diary";
import KakaoAuth from "./pages/signin/components/KakaoAuth";
import LoadingKakaoLogin from "./pages/signin/components/LoadingKakaoLogin";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Noldiary />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/oauth/kakao" element={<KakaoAuth />} />
          <Route path="/kakao" element={<LoadingKakaoLogin />} />
          <Route path="/curations" element={<Curations />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/write" element={<Write />} />
          <Route path="/footprints" element={<Footprints />} />
          <Route path="/oauth/kakao" element={<KakaoAuth />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
