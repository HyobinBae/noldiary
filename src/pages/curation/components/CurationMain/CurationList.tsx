import React from "react";
import styled from "styled-components";
import ContentBox from "./ContentBox";
import CurationCategory from "./CutationCategory";

const CurationList = () => {
  return (
    <Container>
      <CurationCategory />
      <ContentWrapper>
        {CONTENT_LIST.map((data) => {
          return <ContentBox key={data.title} {...data} />;
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
    title: "가계해변",
    thumbnailImage:
      "http://tong.visitkorea.or.kr/cms/resource/17/1608017_image2_1.jpg",
  },
  {
    title: "가덕해양파크휴게소",
    thumbnailImage:
      "http://tong.visitkorea.or.kr/cms/resource/60/2793060_image2_1.jpg",
  },
  {
    title: "고하도 전망대",
    thumbnailImage:
      "http://tong.visitkorea.or.kr/cms/resource/17/2706017_image2_1.jpg",
  },
  {
    title: "고인돌",
    thumbnailImage:
      "http://tong.visitkorea.or.kr/cms/resource/17/2706017_image2_1.jpg",
  },
  {
    title: "스타벅슨",
    thumbnailImage:
      "http://tong.visitkorea.or.kr/cms/resource/17/2706017_image2_1.jpg",
  },
];
