import React from "react";
import styled from "styled-components";
import ContentBox from "./ContentBox";
import CurationCategory from "./CutationCategory";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../services/store";
import { setContentTypeID } from "../../services/curation.slice";
import { useGetContentsListByCategoryQuery } from "../../../../services/api";

const CurationList = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { data: CurationList } = useGetContentsListByCategoryQuery({
    category,
    pageNo,
  });

  const contentHandler = (data) => {
    navigate(`/curation/detail/${data.contentid}`);
    dispatch(setContentTypeID(data.contenttypeid));
  };

  return (
    <Container>
      <CurationCategory />
      <ContentWrapper>
        {CONTENT_LIST.map((data) => {
          console.log(data);
          return (
            <ContentBox
              key={data.contentid}
              onClick={() => {
                contentHandler(data);
              }}
              {...data}
            />
          );
        })}
      </ContentWrapper>
    </Container>
  );
};

export default CurationList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  width: 100%;
  height: 100%;

  padding: 0 14%;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  flex-wrap: wrap;

  width: 100%;
  margin: 0 0 20px 10px;
`;

const CONTENT_LIST = [
  {
    contentid: 1,
    firstimage:
      "http://tong.visitkorea.or.kr/cms/resource/17/1608017_image2_1.jpg",
    title: "가계해변",
  },
  {
    contentid: 2,
    firstimage:
      "http://tong.visitkorea.or.kr/cms/resource/60/2793060_image2_1.jpg",
    title: "가덕해양파크휴게소",
  },
  {
    contentid: 3,
    firstimage:
      "http://tong.visitkorea.or.kr/cms/resource/17/2706017_image2_1.jpg",
    title: "고하도 전망대",
  },
  {
    contentid: 4,
    firstimage:
      "http://tong.visitkorea.or.kr/cms/resource/17/2706017_image2_1.jpg",
    title: "고인돌",
  },
  {
    contentid: 5,
    firstimage:
      "http://tong.visitkorea.or.kr/cms/resource/17/2706017_image2_1.jpg",
    title: "스타벅스",
  },
];
