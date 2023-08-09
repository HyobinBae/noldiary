import React from "react";
import styled from "styled-components";
import MapArea from "./components/MapArea";
import LikeList from "./components/LikeList";

const LikeMap = () => {
  return (
    <Container>
      <LikeList />
      <MapArea />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
`;

export default LikeMap;
