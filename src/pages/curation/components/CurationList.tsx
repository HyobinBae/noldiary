import React from "react";
import styled from "styled-components";
import ContentBox from "./ContentBox";

const CurationList = () => {
  return (
    <Container>
      {CONTENT_LIST.map((data) => {
        return <ContentBox key={data.title} {...data} />;
      })}
    </Container>
  );
};

export default CurationList;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 15px;
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
];
