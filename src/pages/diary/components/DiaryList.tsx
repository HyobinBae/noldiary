import React, { useEffect } from "react";
import styled from "styled-components";
import TicketTitle from "./DiaryList/TicketTitle";
import TicketBody from "./DiaryList/TicketBody";
import ImageBox from "./DiaryList/ImageBox";
import { useGetDiaryListQuery } from "../../../services/api";

const DiaryList = () => {
  const { data: diaryList, refetch } = useGetDiaryListQuery();

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <ListContainer>
      {diaryList?.map((data) => {
        return (
          <Container>
            <InfoContainer>
              <TicketTitle title={data.title} />
              <TicketBody
                departure={data.departure}
                destination={data.destination}
                departureDate={data.departureDate}
                arrivalDate={data.arrivalDate}
                contents={data.contents}
                bookmark={data.bookmark}
              />
            </InfoContainer>
            <ImageContainer>
              <ImageBox image={data.thumnailImage} />
            </ImageContainer>
          </Container>
        );
      })}
    </ListContainer>
  );
};

export default DiaryList;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 80%;
  margin-bottom: 40px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 62%;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 28%;
`;
