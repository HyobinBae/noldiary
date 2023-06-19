import React from "react";
import styled from "styled-components";
import ProfileIcon from "./ProfileIcon";

import { useNavigate } from "react-router-dom";
import ColorButton from "./ColorButton";

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
        <ColorButton
          width={"84px"}
          height={"36px"}
          text={"글쓰기"}
          onClick={buttonHandler}
        ></ColorButton>
        <ProfileIcon size={55} color={"#ababab"} />
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

  padding: 10px 20px 0;
  width: 100%;

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
