import React from "react";
import styled from "styled-components";

const TicketBody = ({
  departure,
  destination,
  departureDate,
  arrivalDate,
  contents,
}) => {
  console.log(destination);
  return (
    <InfoContainer>
      <Container>
        <Box>
          <InfoTitle>From</InfoTitle>
          <InfoContent>{departure}</InfoContent>
        </Box>
        <Box>
          <InfoTitle>To</InfoTitle>
          <InfoContent>{destination}</InfoContent>
        </Box>
        <Box>
          <InfoTitle>Departure</InfoTitle>
          <InfoContent>{departureDate}</InfoContent>
        </Box>
        <Box>
          <InfoTitle>Destination</InfoTitle>
          <InfoContent>{arrivalDate}</InfoContent>
        </Box>
      </Container>
      <Container>
        <Box>
          <InfoTitle>Description</InfoTitle>
          <Content>{contents}</Content>
        </Box>
      </Container>
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: calc(100% / 2);
  height: 100%;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  margin-bottom: 14px;
  height: 100%;
`;

const InfoTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 150px;
  height: 16px;

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

const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  width: 150px;
  height: 100%;

  font-size: 18px;
`;
