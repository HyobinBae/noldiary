import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signin from "./pages/signin";
import KakaoLogin from "./pages/signin/components/KakaoLogin";
import NaverLogin from "./pages/signin/components/NaverLogin";
import Write from "./pages/write";
import RouteWithNavbar from "./RouteWithNavbar";
import RouteWithHeader from "./RouteWithHeader";
import DiaryDetail from "./pages/diary/components/DiaryDetail/DiaryDetail";
import Setting from "./pages/diary/components/Setting";
import Edit from "./pages/write/components/Edit/Edit";
import CourseList from "./pages/curation/components/TourCourse/CourseList";
import ContentDetail from "./pages/curation/components/ContentDetail/ContentDetail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/oauth/kakao" element={<KakaoLogin />} />
        <Route path="/oauth/naver" element={<NaverLogin />} />
        <Route path="/write" element={<Write />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route element={<RouteWithHeader />}>
          <Route path="/diary/:id" element={<DiaryDetail />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/curation/tourcourse/:id" element={<CourseList />} />
          <Route path="/curation/detail/:id" element={<ContentDetail />} />
        </Route>
        <Route path="/*" element={<RouteWithNavbar />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
