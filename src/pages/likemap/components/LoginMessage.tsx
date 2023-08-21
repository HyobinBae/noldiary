import React from "react";
import styled from "styled-components";

const LoginMessage = () => {
  return (
    <Container>
      <Text>로그인 후 이용하세요</Text>
    </Container>
  );
};

export default LoginMessage;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: calc(100vh - 107px);
  background-color: #e8e8e8;
`;

const Text = styled.div`
  font-size: 28px;
  color: #8f8f8f;
`;
