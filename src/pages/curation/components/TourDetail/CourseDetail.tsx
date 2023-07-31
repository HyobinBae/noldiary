import React, { useRef } from "react";
import styled from "styled-components";
import { useGetCourseDetailQuery } from "../../../../services/api";
import { useAppSelector } from "../../../../services/store";
import { useParams } from "react-router-dom";
import IconBar from "./IconBar";
import DetailNavbar from "./DetailNavbar";

const CourseDetail = () => {
  const { id } = useParams();
  const contentID = Number(id);
  const scrollRef = useRef([]);

  const contentTypeID = useAppSelector((state) => state.curation.contentTypeID);

  const { data: contentDetail } = useGetCourseDetailQuery({
    contentID,
    contentTypeID,
  });

  const CourseOverview = ({ content }) => {
    return <SubInfo dangerouslySetInnerHTML={{ __html: content }} />;
  };

  return (
    <Container>
      <DetailWrapper>
        <Title>{contentDetail?.common.title}</Title>
        <IconBar />
        <DetailNavbar scrollRef={scrollRef} />
        <ImageWrapper ref={scrollRef.current[0]}>
          <ImageBox src={contentDetail?.common.firstimage} />
        </ImageWrapper>
        <IntroductionWrapper>
          <SectionWrapper ref={scrollRef.current[1]}>
            <SubTitle>코스 소개</SubTitle>
            <DivideLine />
            <CourseOverview content={contentDetail?.common.overview} />
          </SectionWrapper>
          <SectionWrapper ref={scrollRef.current[2]}>
            <SubTitle>코스 요약</SubTitle>
            <DivideLine />
            <InfoWrapper>
              <ColorBox />
              <InfoTitle>총 거리</InfoTitle>
              <InfoText>{contentDetail?.introduction.distance}</InfoText>
            </InfoWrapper>
            {contentDetail?.introduction.taketime ? (
              <InfoWrapper>
                <ColorBox />
                <InfoTitle>소요 시간</InfoTitle>
                <InfoText>{contentDetail?.introduction.taketime}</InfoText>
              </InfoWrapper>
            ) : null}
          </SectionWrapper>
          <SectionWrapper ref={scrollRef.current[3]}>
            <SubTitle>코스 상세</SubTitle>
            <DivideLine />
            <SubInfo>
              {contentDetail?.course.map((data) => {
                return (
                  <>
                    <DetailTitleWrapper>
                      <ColorBox />
                      <DetailTitle>{data.subname}</DetailTitle>
                    </DetailTitleWrapper>
                    {data.subdetailimg ? (
                      <ImageWrapper>
                        <ImageBox src={data.subdetailimg} />
                      </ImageWrapper>
                    ) : null}
                    <DetailInfo
                      dangerouslySetInnerHTML={{
                        __html: data.subdetailoverview,
                      }}
                    />
                  </>
                );
              })}
            </SubInfo>
          </SectionWrapper>
        </IntroductionWrapper>
      </DetailWrapper>
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
  height: 100%;
`;

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 70vw;
  height: 100%;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 60px;

  font-size: 28px;
  font-weight: 600;
`;

const DivideLine = styled.div`
  width: 100%;
  border: 0.5px solid #d2d2d2;
  margin-bottom: 20px;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 38vw;
  margin-bottom: 20px;
`;

const ImageBox = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const IntroductionWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
`;

const SectionWrapper = styled.div``;

const SubTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  height: 60px;

  font-size: 24px;
  font-weight: 600;
`;

const SubInfo = styled.div`
  width: 100%;
  height: 100%;

  line-height: 1.8;

  font-size: 18px;
  margin-bottom: 40px;
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  height: 100%;
  margin-bottom: 40px;
`;

const InfoTitle = styled.div`
  width: 100%;
  /* height: 100%; */

  font-size: 18px;
`;

const InfoText = styled.div`
  width: 100%;
  /* height: 100%; */

  font-size: 18px;
`;

const DetailTitleWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  height: 40px;
  margin-bottom: 10px;
`;

const ColorBox = styled.div`
  width: 5px;
  height: 24px;
  background-color: #2192ff;
  margin-right: 10px;
`;

const DetailTitle = styled.div`
  width: 100%;
  font-size: 24px;
`;

const DetailInfo = styled.div`
  width: 100%;
  font-size: 18px;
  margin-bottom: 40px;
`;
