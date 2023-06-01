import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <LogoBox>
        <img src="/images/놀다이어리 logo.png" alt="놀다이어리" width={80} />
      </LogoBox>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  margin: 10px 40px;
  width: 100vw;
  height: 64px;

  background-color: white;
`;

const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
