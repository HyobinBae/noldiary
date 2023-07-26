import React from "react";
import styled from "styled-components";

const item = {
  title: "가야의 왕릉을 찾아서",
  firstImage:
    "http://tong.visitkorea.or.kr/cms/resource/40/1999740_image2_1.jpg",
  overview:
    "거제도는 우리나라의 남해바다의 푸르름이 역사와 자연이 함께 어우러진 아름다운 도시다. 거대 조선소와 기업들 덕분에 의외로 외국인의 모습을 쉽게 볼 수 있고, 그래서 이국적인 정취와 우리 고유의 역사가 함께 꽃을 피운 곳이기도 하다. 그 색다름을 놓치지 말자",
};

const CourseDetail = () => {
  return (
    <Container>
      <SubTitleBox></SubTitleBox>
      <TextBox>{item.title}</TextBox>
      <ImageBox>{item.firstImage}</ImageBox>
      <TextBox>{item.overview}</TextBox>
    </Container>
  );
};

export default CourseDetail;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;

  margin: ;
`;

const SubTitleBox = styled.div``;
const TextBox = styled.div``;
const ImageBox = styled.img`
  width: 100%;
`;
