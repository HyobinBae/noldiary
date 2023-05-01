import React from "react";
import styled from "styled-components";
import { API_KEY, REDIRECT_URL } from "./KakaoLogin";
import { NAVER_CLIENT_ID, NAVER_CALLBACK_URL, STATE } from "./NaverLogin";

interface Props {
  src: string;
  text: string;
  color: string;
}

const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${API_KEY}&redirect_uri=${REDIRECT_URL}&response_type=code`;
const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&redirect_uri=${NAVER_CALLBACK_URL}&state=${STATE}`;

const LoginButton = ({ src, text, color }: Props) => {
  const AUTH_URL = text === "카카오 로그인" ? KAKAO_AUTH_URL : NAVER_AUTH_URL;

  return (
    <Button href={AUTH_URL} style={{ backgroundColor: color }}>
      <IconBox>
        <img src={src} alt="login icon" width="20px" />
      </IconBox>
      <TextBox>
        <Text>{text}</Text>
      </TextBox>
    </Button>
  );
};

const Button = styled.a`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  border: none;
  border-radius: 3px;

  width: 280px;
  height: 45px;

  margin-bottom: 20px;
`;

const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-right: 0.5px solid white;

  width: 40px;
  height: 100%;
`;

const TextBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 250px;
  height: 100%;
`;

const Text = styled.div``;

export default LoginButton;
