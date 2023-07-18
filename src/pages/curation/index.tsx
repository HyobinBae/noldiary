import React from "react";
import styled from "styled-components";
import Carousel from "./components/Carousel";
import CurationList from "./components/CurationList";

const Curations = () => {
  return (
    <Container>
      <Carousel />

      <CurationList />
    </Container>
  );
};

const Container = styled.div``;

export default Curations;
