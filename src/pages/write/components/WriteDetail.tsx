import React, { useState } from "react";
import styled from "styled-components";

const WriteDetail = () => {
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");

  const departtureHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDeparture(e.target.value);
  };
  const destinationHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDestination(e.target.value);
  };
  const departureDateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDepartureDate(e.target.value);
  };
  const arrivalDateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setArrivalDate(e.target.value);
  };

  return (
    <Container>
      <DetailContainer>
        <Title>From</Title>
        <Detail type="text" value={departure} onChange={departtureHandler} />
      </DetailContainer>
      <DetailContainer>
        <Title>To</Title>
        <Detail type="text" value={destination} onChange={destinationHandler} />
      </DetailContainer>
      <DetailContainer>
        <Title>Date</Title>
        <DetailContainer>
          <DateDetail
            type="date"
            value={departureDate}
            onChange={departureDateHandler}
          />
          <TinyDetail>~</TinyDetail>
          <DateDetail
            type="date"
            value={arrivalDate}
            onChange={arrivalDateHandler}
          />
        </DetailContainer>
      </DetailContainer>
    </Container>
  );
};

export default WriteDetail;

const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 5px 0px;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  margin: 3px 5px;

  width: 10%;
  height: 40px;
`;

const Detail = styled.input`
  display: flex;
  align-items: center;
  margin: 3px 5px;
  border: none;

  width: 50%;
  height: 40px;

  font-size: 20px;
`;

const DateDetail = styled.input`
  display: flex;
  align-items: center;
  margin: 3px 5px;
  border: none;

  width: 15vw;
  height: 40px;

  font-size: 20px;
`;

const TinyDetail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3px 5px;

  width: 40px;
  height: 40px;

  border: none;
`;
