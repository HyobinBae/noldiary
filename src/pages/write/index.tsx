import React from "react";
import styled from "styled-components";
import WriteHeader from "./components/WriteHeader";
import WriteMain from "./components/WriteMain";

const Write = () => {
  return (
    <Container>
      <Box>
        <WriteHeader />
        <WriteMain />
      </Box>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 100px 0px 30px 0px;
`;

const Box = styled.div`
  width: 760px;
`;

export default Write;
