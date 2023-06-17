import React from "react";
import styled from "styled-components";
import DivideLine from "../../../components/DivideLine";

const Setting = () => {
  return (
    <Container>
      <Wrapper>
        <Title>닉네임</Title>
        <Content>"닉네임 input"</Content>
      </Wrapper>
      <DivideLine />
      <Wrapper>
        <Title>상태메시지</Title>
        <Content>"상메는뭘로 input"</Content>
      </Wrapper>
      <DivideLine />
    </Container>
  );
};

export default Setting;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 90%;
  padding: 60px 20px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Title = styled.div`
  font-size: 20px;

  margin-right: 20px;
`;

const Content = styled.div`
  font-size: 14px;
`;
