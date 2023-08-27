import React, { useState } from "react";
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

  const [isEditedDeparture, setEditedDeparture] = useState(false);
  const [isEditedDestination, setEditedDestination] = useState(false);
  const [isEditedDepartureDate, setEditedDepartureDate] = useState(false);
  const [isEditedArrivalDate, setEditedArrivalDate] = useState(false);

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

  const departure = isEditedDeparture ? editedDeparture : prevDeparture;
  const destination = isEditedDestination ? editedDestination : prevDestination;
  const departureDate = isEditedDepartureDate
    ? editedDepartureDate
    : prevDepartureDate;
  const arrivalDate = isEditedArrivalDate ? editedArrivalDate : prevArrivalDate;

  console.log(departure, "====", destination, "====", departureDate);

  const departureHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setDeparture(e.target.value));
    setEditedDeparture(true);
  };
  const destinationHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setDestination(e.target.value));
    setEditedDestination(true);
  };
  const departureDateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setDepartureDate(e.target.value));
    setEditedDepartureDate(true);
  };
  const arrivalDateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setArrivalDate(e.target.value));
    setEditedArrivalDate(true);
  };

  console.log(departure);
  return (
    <Container>
      <DetailContainer>
        <Title>From</Title>
        <Detail type="text" value={departure} onChange={departureHandler} />
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
