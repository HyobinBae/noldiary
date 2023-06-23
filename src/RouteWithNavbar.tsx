import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import MainHeader from "./components/MainHeader";
import Diary from "./pages/diary";
import Curations from "./pages/curations";
import Footprints from "./pages/footprints";
import { useGetUserInfoQuery } from "./services/api";
import { useAppDispatch } from "./services/store";
import { setUserInfo } from "./pages/diary/services/diary.slice";

const RouteWithNavbar = () => {
  const dispatch = useAppDispatch();
  const { data: userInfo, refetch } = useGetUserInfoQuery();
  dispatch(setUserInfo(userInfo));

  useEffect(() => {
    refetch();
  }, [userInfo]);

  return (
    <>
      <MainHeader />
      <Routes>
        <Route path="/" element={<Diary />} />
        <Route path="/curations" element={<Curations />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/footprints" element={<Footprints />} />
      </Routes>
    </>
  );
};

export default RouteWithNavbar;
