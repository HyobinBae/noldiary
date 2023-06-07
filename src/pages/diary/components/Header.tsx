import React from "react";
import styled from "styled-components";
import ProfileIcon from "./ProfileIcon";
import TextButton from "./TextButton";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const buttonHandler = () => {
    navigate("/write");
  };

  return (
    <Container>
      <LogoBox>
        <img src="/images/놀다이어리 logo.png" alt="놀다이어리" width={100} />
      </LogoBox>
      <ButtonBox>
        <TextButton onClick={buttonHandler} />
        <ProfileIcon size={55} color={"grey"} />
      </ButtonBox>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 10px 20%;
  width: 100%;
  height: 64px;

  background-color: white;
`;

const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
