import React from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../../../services/store";
import {
  setDeparture,
  setDestination,
  setDepartureDate,
  setArrivalDate,
} from "../../services/write.slice";

const WriteDetail = () => {
  const dispatch = useAppDispatch();

  const departure = useAppSelector((state) => state.write.diary.departure);
  const destination = useAppSelector((state) => state.write.diary.destination);
  const departureDate = useAppSelector(
    (state) => state.write.diary.departureDate
  );
  const arrivalDate = useAppSelector((state) => state.write.diary.arrivalDate);

  const departtureHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setDeparture(e.target.value));
  };
  const destinationHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setDestination(e.target.value));
  };
  const departureDateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setDepartureDate(e.target.value));
  };
  const arrivalDateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setArrivalDate(e.target.value));
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
            placeholder="날짜 선택"
            value={departureDate}
            onChange={departureDateHandler}
          />
          <TinyDetail>~</TinyDetail>
          <DateDetail
            type="date"
            placeholder="날짜 선택"
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
  width: 90%;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  margin: 3px 10px 3px 5px;

  width: 10%;
  height: 40px;

  @media ${({ theme }) => theme.device.mobile} {
    width: 10%;
    height: 40px;
  }
`;

const Detail = styled.input`
  display: flex;
  align-items: center;
  margin: 3px 5px;
  border: none;
  outline: none;

  width: 70%;
  height: 40px;

  font-size: 14px;

  @media ${({ theme }) => theme.device.mobile} {
    width: 70%;
    height: 40px;
  }
`;

const DateDetail = styled.input`
  display: flex;
  align-items: center;
  margin: 3px 5px;
  border: none;
  outline: none;

  width: 15vw;
  height: 40px;
  font-size: 14px;

  @media ${({ theme }) => theme.device.mobile} {
    width: 130px;
    height: 40px;
  }
`;

const TinyDetail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3px 3px;

  width: 20px;
  height: 40px;

  border: none;
`;
