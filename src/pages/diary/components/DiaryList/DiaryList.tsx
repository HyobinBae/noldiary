import React from "react";
import styled from "styled-components";
import TicketTitle from "./TicketTitle";
import TicketBody from "./TicketBody";
import ImageBox from "./ImageBox";
import { useGetDiaryListQuery } from "../../../../services/api";
import { Link } from "react-router-dom";

const DiaryList = () => {
  const { data: diaryList } = useGetDiaryListQuery();

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
              <ImageBox image={data.thumbnailImage} />
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

  width: 70%;
  margin-bottom: 40px;

  cursor: pointer;
  box-shadow: 3px 3px 10px 2px #e8e8e8;
  border-radius: 8px 8px 8px 8px;

  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    margin-bottom: 20px;
    box-shadow: none;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 70%;
  border-radius: 8px 8px 8px 8px;

  @media ${({ theme }) => theme.device.mobile} {
    width: 90%;
    box-shadow: 3px 3px 10px 2px #e8e8e8;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 30%;
  @media ${({ theme }) => theme.device.mobile} {
    display: none;
  }
`;
