import React from "react";
import styled from "styled-components";
import DivideLine from "./components/DivideLine";

const Write = () => {
  return (
    <Container>
      <DescriptionBox></DescriptionBox>
      <Title value={"제목"} />
      <DivideLine />
    </Container>
  );
};

const Container = styled.div`
  margin: 10px 25vw;
`;
const Title = styled.input`
  width: 100%;
  height: 50px;

  border: none;
`;
const DescriptionBox = styled.div``;

export default Write;
