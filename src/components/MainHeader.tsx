import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
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
  padding: 10px 20px 0;
  width: 100%;

  background-color: white;
`;
