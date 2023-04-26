import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { API } from "../../../config";
import LoadingKakaoLogin from "./LoadingKakaoLogin";

export const API_KEY = process.env.REACT_APP_API_KEY_KAKAO;
export const REDIRECT_URL = process.env.REACT_APP_REDIRECT_URL_KAKAO;

const KakaoAuth = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const code = searchParams.get("code");

  const getToken = async () => {
    const kakaoRes = await fetch(`${API.signIn}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        redirect_url: REDIRECT_URL,
        code: code,
      }),
    });

    const { jsonWebToken } = await kakaoRes.json();
    console.log(kakaoRes);

    if (!jsonWebToken) {
      alert("카카오 로그인 실패");
      return navigate("/signin");
    }

    localStorage.setItem("token", jsonWebToken);

    navigate("/");
  };

  useEffect(() => {
    getToken();
  });

  return <LoadingKakaoLogin />;
};

export default KakaoAuth;
