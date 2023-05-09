import React, { useState } from "react";
import styled from "styled-components";

const WriteDetail = () => {
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");

  const departtureHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDeparture(e.target.value);
  };
  const destinationHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDestination(e.target.value);
  };
  const DateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };
  console.log(departure, "ddddd", destination, "ddddd", date);

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
          <Detail type="date" value={date} onChange={DateHandler} />~
          <Detail type="date" value={date} />
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

  width: 50%;
  height: 40px;

  border: none;
`;
