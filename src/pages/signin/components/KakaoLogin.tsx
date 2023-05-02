import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { API } from "../../../config";
import LoadingLogin from "./LoadingLogin";

export const API_KEY = process.env.REACT_APP_API_KEY_KAKAO;
export const REDIRECT_URL = process.env.REACT_APP_REDIRECT_URL_KAKAO;

const KakaoLogin = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const code = searchParams.get("code");

  const getToken = async () => {
    try {
      //카카오 로그인 토큰 받아오기
      const kakaoRes = await fetch(`${API.kakaoAuth}`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `grant_type=authorization_code&client_id=${API_KEY}&redirect_url=${REDIRECT_URL}&code=${code}`,
      });

      const { access_token } = await kakaoRes.json();

      if (!access_token) {
        alert("카카오 로그인 실패");
        return navigate("/signin");
      }

      //카카오 토큰으로 백 서버 jwToken 받아오기
      const localRes = await fetch(`${API.signInKakao}`, {
        method: "POST",
        headers: {
          Authorization: access_token,
        },
      });

      const { accessToken } = await localRes.json();

      if (!accessToken) {
        alert("카카오 로그인 실패");
        return navigate("/signin");
      }

      localStorage.setItem("token", accessToken);

      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  return (
    <LoadingLogin src="https://devtalk.kakao.com/uploads/default/original/2X/8/8d3426581b592b46157de64b919d4378b504d346.gif" />
  );
};

export default KakaoLogin;
