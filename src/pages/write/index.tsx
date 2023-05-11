import React from "react";
import styled from "styled-components";
import WriteHeader from "./components/WriteHeader";
import Editor from "./components/WriteMain";

const Write = () => {
  return (
    <Container>
      <WriteHeader />
      <Editor />
    </Container>
  );
};

const Container = styled.div`
  margin: 10px 25vw;
`;

export default Write;
