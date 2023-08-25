import React from "react";
import styled from "styled-components";
import LoginButton from "./components/LoginButton";

const Signin = () => {
  return (
    <Container>
      <Box>
        <Header>
          <Title>로그인</Title>
          <Message>당신의 여정을 놀다이어리와 함께 하세요✈️</Message>
        </Header>
        <Main>
          <ButtonContainer>
            {LOGIN_PROPS.map((props) => (
              <LoginButton
                src={props.icon}
                text={props.text}
                color={props.color}
              />
            ))}
          </ButtonContainer>
        </Main>
      </Box>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  border: 1px solid;
  border-color: #c8c8c8;
  border-radius: 3px;

  width: 400px;
  height: 470px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  @media ${({ theme }) => theme.device.mobile} {
    width: 90%;
  }
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 70px 0;
`;

const Title = styled.h1`
  margin-bottom: 30px;

  color: #6e6e6e;
  font-size: 26px;
  font-weight: 700;
`;

const Message = styled.div`
  color: #6e6e6e;
  font-size: 14px;
  font-weight: 400;
`;

const Main = styled.main`
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export default Signin;

const LOGIN_PROPS = [
  {
    icon: "/images/kakao_login_icon.png",
    text: "카카오 로그인",
    color: "#FEE500",
  },
  {
    icon: "/images/naver_login_icon.png",
    text: "네이버 로그인",
    color: "#03C75A",
  },
];
