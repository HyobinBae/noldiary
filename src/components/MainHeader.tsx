import React from "react";
import Header from "../pages/diary/components/Header";
import Navbar from "../pages/diary/components/Navbar";
import styled from "styled-components";

const MainHeader = () => {
  return (
    <Container>
      <Header />
      <Navbar />
    </Container>
  );
};

export default MainHeader;

const Container = styled.div`
  padding: 10px 10% 0px;
  width: 100%;

  background-color: white;
`;
