import React from "react";
import styled from "styled-components";

const TicketBody = () => {
  return (
    <InfoContainer>
      <Box>
        <InfoTitle>{"출발"}</InfoTitle>
        <InfoContent>{"안녕"}</InfoContent>
      </Box>
      <Box>
        <InfoTitle>departure</InfoTitle>
        <InfoContent>Dscription</InfoContent>
      </Box>
    </InfoContainer>
  );
};

export default TicketBody;

const InfoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  width: 600px;
  height: 280px;

  background-color: #ffffff;
  border: 3px solid #2192ff;
  border-right-width: 2px;
  border-right-style: none;
  border-top: none;
  border-radius: 0 0 15px 15px;

  padding: 20px 40px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  width: calc(100% / 2);
`;

const InfoTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 150px;
  height: 20px;

  color: #8f8f8f;
  font-size: 12px;
`;

const InfoContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 150px;
  height: 30px;
  font-size: 18px;
`;
