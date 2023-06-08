import React, { useEffect } from "react";
import styled from "styled-components";
import TicketTitle from "./DiaryList/TicketTitle";
import TicketBody from "./DiaryList/TicketBody";
import ImageBox from "./DiaryList/ImageBox";
import { useGetDiaryListQuery } from "../../../services/api";

const DiaryList = () => {
  const getDiaryList = useGetDiaryListQuery();
  useEffect(() => {
    getDiaryList;
  });

  return (
    <>
      <Container>
        <InfoContainer>
          <TicketTitle />
          <TicketBody />
        </InfoContainer>
        <ImageContainer>
          <ImageBox />
        </ImageContainer>
      </Container>
    </>
  );
};

export default DiaryList;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
