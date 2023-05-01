import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { API } from "../../../config";
import LoadingKakaoLogin from "./LoadingLogin";

export const NAVER_CLIENT_ID = process.env.REACT_APP_NAVER_CLIENT_ID;
export const NAVER_CALLBACK_URL = process.env.REACT_APP_REDIRECT_URL_NAVER;
export const STATE = crypto.randomUUID();

const NaverLogin = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const code = searchParams.get("code");

  const getToken = async () => {
    try {
      const localRes = await fetch(
        `${API.signInNaver}?code=${code}&state=${STATE}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ code, STATE }),
        }
      );

      const { accessToken } = await localRes.json();
      console.log(localRes);

      if (!accessToken) {
        alert("네이버 로그인 실패");
        return navigate("/signin");
      } else {
        localStorage.setItem("token", accessToken);
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  return (
    <LoadingKakaoLogin src="https://media3.giphy.com/media/kEKcOWl8RMLde/giphy.gif" />
  );
};

export default NaverLogin;
