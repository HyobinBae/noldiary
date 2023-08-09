import React from "react";
import styled from "styled-components";
import { useGetLikeListQuery } from "../../../services/api";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../services/store";
import {
  setContentID,
  setContentTypeID,
} from "../../curation/services/curation.slice";
import { setSelectedMapX, setSelectedMapY } from "../services/likemap.slice";

const LikeList = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { data: likeList } = useGetLikeListQuery();

  const moveButtonHandler = (data) => {
    dispatch(setContentID(data.contentid));
    dispatch(setContentTypeID(data.contenttypeid));
    navigate(`/curation/detail/${data.contentid}`);
  };

  const findMarkerHandler = (data) => {
    dispatch(setSelectedMapX(data.mapx));
    dispatch(setSelectedMapY(data.mapy));
  };

  return (
    <Container>
      {likeList?.map((data) => {
        return (
          <>
            <ContentContainer
              onClick={() => {
                findMarkerHandler(data);
              }}
            >
              <ImageWrapper src={data.firstimage} />
              <TextWrapper>
                <Title>{data.title}</Title>
                <Address>{data.addr1}</Address>
              </TextWrapper>
              <IconWrapper
                onClick={() => {
                  moveButtonHandler(data);
                }}
              >
                <BsFillArrowRightCircleFill size={34} color="black" />
              </IconWrapper>
            </ContentContainer>
            <DivideLine />
          </>
        );
      })}
    </Container>
  );
};

export default LikeList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  width: 414px;
  height: calc(100vh - 107px);
  background-color: white;
  overflow-x: scroll;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  width: 100%;
  padding: 15px 20px 15px;

  &:hover {
    background-color: #e8e8e8;
  }
`;

const ImageWrapper = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 80px;
  height: 80px;
  margin-right: 10px;
  border-radius: 5px;
  object-fit: cover;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  margin-right: 10px;
`;

const Title = styled.div`
  font-size: 18px;
  width: 240px;
  height: 24px;
  line-height: 1.4;
  margin-bottom: 10px;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-wrap: break-word;
  display: block;
`;

const Address = styled.div`
  font-size: 12px;
  width: 240px;
  line-height: 1.4;

  color: ${(props) => props.theme.colors.mainGrey};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-wrap: break-word;
  display: block;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;

  opacity: 0.5;
  cursor: pointer;
`;

const DivideLine = styled.div`
  width: 100%;
  border: 0.5px solid #d2d2d2;
`;
