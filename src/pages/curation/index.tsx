import React from "react";
import styled from "styled-components";
import Carousel from "./components/CurationMain/Carousel";
import CurationList from "./components/CurationMain/CurationList";
import CurationSearchBar from "./components/CurationMain/CurationSearchBar";

const Curations = () => {
  return (
    <Container>
      <Carousel />
      <CurationSearchBar />
      <CurationList />
    </Container>
  );
};

const Container = styled.div``;

export default Curations;
