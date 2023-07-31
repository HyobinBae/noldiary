import React from "react";
import styled from "styled-components";
import ContentBox from "./ContentBox";
import CurationCategory from "./CutationCategory";
import { useNavigate } from "react-router-dom";

const CurationList = () => {
  const navigate = useNavigate();

  const contentHandler = (data) => {
    navigate(`/curation/detail/${data}`);
  };

  return (
    <Container>
      <CurationCategory />
      <ContentWrapper>
        {CONTENT_LIST.map((data) => {
          return (
            <ContentBox
              key={data.contentid}
              onClick={() => {
                contentHandler(data.contentid);
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
  width: 1140px;

  margin: 40px 190px 10px 190px;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  flex-wrap: wrap;

  width: 100%;
  margin-bottom: 30px;
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
