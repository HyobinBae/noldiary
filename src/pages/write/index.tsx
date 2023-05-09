import React from "react";
import styled from "styled-components";
import WriteHeader from "./components/WriteHeader";

const Write = () => {
  return (
    <Container>
      <WriteHeader></WriteHeader>
    </Container>
  );
};

const Container = styled.div`
  margin: 10px 25vw;
`;

export default Write;
