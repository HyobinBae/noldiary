import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signin from "./pages/signin";
import KakaoLogin from "./pages/signin/components/KakaoLogin";
import NaverLogin from "./pages/signin/components/NaverLogin";
import Write from "./pages/write";
import RouteWithHeader from "./RouteWithHeader";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/oauth/kakao" element={<KakaoLogin />} />
          <Route path="/oauth/naver" element={<NaverLogin />} />
          <Route path="/write" element={<Write />} />
          <Route path="/*" element={<RouteWithHeader />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
