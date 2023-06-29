import React from "react";
import styled from "styled-components";
import TicketTitle from "./TicketTitle";
import TicketBody from "./TicketBody";
import ImageBox from "./ImageBox";
import { useGetSearchDiaryQuery } from "../../../../services/api";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../../services/store";

const SearchDiaryList = () => {
  const queryName = useAppSelector((state) => state.diary.setSearchQuery);
  const keyword = useAppSelector((state) => state.diary.setKeyword);

  const { data: diarySearchList } = useGetSearchDiaryQuery({
    queryName,
    keyword,
  });

  return (
    <ListContainer>
      <div>안녕하세요</div>
      {diarySearchList?.map((data) => {
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

export default SearchDiaryList;

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
