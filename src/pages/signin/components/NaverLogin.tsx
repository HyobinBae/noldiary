import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { API } from "../../../config";
import LoadingLogin from "./LoadingLogin";

export const NAVER_CLIENT_ID = process.env.REACT_APP_NAVER_CLIENT_ID;
export const NAVER_CALLBACK_URL = process.env.REACT_APP_REDIRECT_URL_NAVER;
export const STATE = Math.random();

const NaverLogin = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const code = searchParams.get("code");

  const getToken = async () => {
    try {
      const NaverRes = await fetch(`${API.signInNaver}?code=${code}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      });

      const response = await NaverRes.json();
      console.log(response);

      if (!response.token) {
        alert("네이버 로그인 실패");
        return navigate("/signin");
      }

      localStorage.setItem("token", response.token);

      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getToken();
  });

  return (
    <LoadingLogin src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQirW8CQe24atXnY8zPlmIQ84ALhqgLI6bjkQ&usqp=CAU" />
  );
};

export default NaverLogin;
