import React from "react";
import styled, { keyframes } from "styled-components";

const LoadingKakaoLogin = () => {
  return (
    <>
      <Loading>
        <LoadingText>곧 만날 수 있어요!</LoadingText>
        <LoadingImg
          src="https://devtalk.kakao.com/uploads/default/original/2X/8/8d3426581b592b46157de64b919d4378b504d346.gif"
          alt="로그인 중"
        />
      </Loading>
      ;
    </>
  );
};

export default LoadingKakaoLogin;

const Loading = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoadingAnimation = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const LoadingText = styled.div`
  font-size: 30px;
  font-weight: 700;

  animation: ${LoadingAnimation} 1.3s ease-in-out infinite;
`;

const LoadingImg = styled.img`
  width: 300px;
  margin-top: 50px;
`;
