import React from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../../../services/store";
import {
  setDeparture,
  setDestination,
  setDepartureDate,
  setArrivalDate,
} from "../../services/write.slice";

const EditDetail = () => {
  const dispatch = useAppDispatch();

  const prevDeparture = useAppSelector(
    (state) => state.diary.getDiaryDetail.departure
  );
  const prevDestination = useAppSelector(
    (state) => state.diary.getDiaryDetail.destination
  );
  const prevDepartureDate = useAppSelector(
    (state) => state.diary.getDiaryDetail.departureDate
  );
  const prevArrivalDate = useAppSelector(
    (state) => state.diary.getDiaryDetail.arrivalDate
  );

  const editedDeparture = useAppSelector(
    (state) => state.write.diary.departure
  );
  const editedDestination = useAppSelector(
    (state) => state.write.diary.destination
  );
  const editedDepartureDate = useAppSelector(
    (state) => state.write.diary.departureDate
  );
  const editedArrivalDate = useAppSelector(
    (state) => state.write.diary.arrivalDate
  );

  const departure = editedDeparture ? editedDeparture : prevDeparture;
  const destination = editedDestination ? editedDestination : prevDestination;
  const departureDate = editedDepartureDate
    ? editedDepartureDate
    : prevDepartureDate;
  const arrivalDate = editedArrivalDate ? editedArrivalDate : prevArrivalDate;

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

export default EditDetail;

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
  outline: none;

  width: 50%;
  height: 40px;

  font-size: 14px;
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
