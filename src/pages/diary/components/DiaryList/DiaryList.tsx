import React, { useEffect } from "react";
import styled from "styled-components";
import TicketTitle from "./TicketTitle";
import TicketBody from "./TicketBody";
import ImageBox from "./ImageBox";
import { useGetDiaryListQuery } from "../../../../services/api";
import { Link } from "react-router-dom";

const DiaryList = () => {
  const { data: diaryList, refetch } = useGetDiaryListQuery();

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <ListContainer>
      {diaryList?.map((data) => {
        return (
          <Container key={data._id} to={`/diary/${data._id}`}>
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

const Container = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 80%;
  margin-bottom: 40px;

  cursor: pointer;
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
