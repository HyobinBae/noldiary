import React, { useRef } from "react";
import styled from "styled-components";
import { useGetContentDetailQuery } from "../../../../services/api";
import { useAppSelector } from "../../../../services/store";
import { useParams } from "react-router-dom";
import IconBar from "./IconBar";
import DetailNavbar from "./DetailNavbar";
const ContentDetail = () => {
  const { id } = useParams();
  const contentID = Number(id);

  const contentTypeID = useAppSelector((state) => state.curation.contentTypeID);

  const { data: contentDetail } = useGetContentDetailQuery({
    contentID,
    contentTypeID,
  });

  const likeProps = {
    contentid: Number(contentDetail?.common.contentid),
    contenttypeid: contentDetail?.common.contenttypeid,
    title: contentDetail?.common.title,
    firstimage: contentDetail?.common.firstimage,
    addr1: contentDetail?.common.addr1,
    mapx: Number(contentDetail?.common.mapx),
    mapy: Number(contentDetail?.common.mapy),
  };
  console.log(likeProps);

  const ContentOverview = ({ content }) => {
    return <SubInfo dangerouslySetInnerHTML={{ __html: content }} />;
  };

  const UseTime = ({ content }) => {
    return <InfoText dangerouslySetInnerHTML={{ __html: content }} />;
  };

  const TourDetailInfo = ({ content }) => {
    return <DetailInfo dangerouslySetInnerHTML={{ __html: content }} />;
  };

  const hasRoutine = contentDetail?.routine && contentDetail.routine.length > 0;
  const numSections = hasRoutine ? 4 : 3;
  const scrollRef = useRef(new Array(numSections).fill(null));

  if (contentDetail?.common.contenttypeid === "25") {
    return (
      <Container>
        <DetailWrapper>
          <Title>{contentDetail?.common.title}</Title>
          <IconBar likeProps={likeProps} contentID={contentID} />
          <DetailNavbar scrollRef={scrollRef} hasRoutine={hasRoutine} />
          <ImageWrapper ref={(ref) => (scrollRef.current[0] = ref)}>
            <ImageBox src={contentDetail?.common.firstimage} />
          </ImageWrapper>
          <IntroductionWrapper>
            <SectionWrapper ref={(ref) => (scrollRef.current[1] = ref)}>
              <SubTitle>코스 소개</SubTitle>
              <DivideLine />
              <ContentOverview content={contentDetail?.common.overview} />
            </SectionWrapper>
            <SectionWrapper ref={(ref) => (scrollRef.current[2] = ref)}>
              <SubTitle>코스 요약</SubTitle>
              <DivideLine />
              <InfoContainer>
                <InfoWrapper>
                  <PointBox />
                  <InfoTitle>총 거리</InfoTitle>
                  <InfoText>{contentDetail?.introduction.distance}</InfoText>
                </InfoWrapper>
                {contentDetail?.introduction.taketime ? (
                  <InfoWrapper>
                    <PointBox />
                    <InfoTitle>소요 시간</InfoTitle>
                    <InfoText>{contentDetail?.introduction.taketime}</InfoText>
                  </InfoWrapper>
                ) : null}
              </InfoContainer>
            </SectionWrapper>
            <SectionWrapper ref={(ref) => (scrollRef.current[3] = ref)}>
              <SubTitle>코스 상세</SubTitle>
              <DivideLine />
              <SubInfo>
                {contentDetail?.course?.map((data) => {
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
  } else
    return (
      <Container>
        <DetailWrapper>
          <Title>{contentDetail?.common.title}</Title>
          <IconBar likeProps={likeProps} contentID={contentID} />
          <DetailNavbar scrollRef={scrollRef} hasRoutine={hasRoutine} />
          {!contentDetail?.image ? (
            <ImageWrapper ref={(ref) => (scrollRef.current[0] = ref)}>
              <ImageBox src={contentDetail?.common.firstimage} />
            </ImageWrapper>
          ) : (
            //이미지 캐러셀로 바꾸기
            <ImageWrapper ref={(ref) => (scrollRef.current[0] = ref)}>
              <ImageBox src={contentDetail?.image?.originimgurl} />
            </ImageWrapper>
          )}
          <IntroductionWrapper>
            <SectionWrapper ref={(ref) => (scrollRef.current[1] = ref)}>
              <SubTitle>여행지 소개</SubTitle>
              <DivideLine />
              <ContentOverview content={contentDetail?.common.overview} />
            </SectionWrapper>
            <>
              {contentTypeID === "12" && (
                <SectionWrapper ref={(ref) => (scrollRef.current[2] = ref)}>
                  <SubTitle>여행지 정보</SubTitle>
                  <DivideLine />
                  <InfoContainer>
                    <InfoWrapper>
                      <PointBox />
                      <InfoTitle>문의 및 안내</InfoTitle>
                      <InfoText>
                        {contentDetail?.introduction.infocenter}
                      </InfoText>
                    </InfoWrapper>
                    <InfoWrapper>
                      <PointBox />
                      <InfoTitle>쉬는날</InfoTitle>
                      <InfoText>
                        {contentDetail?.introduction.restdate}
                      </InfoText>
                    </InfoWrapper>
                    <InfoWrapper>
                      <PointBox />
                      <InfoTitle>이용 시간</InfoTitle>
                      <UseTime content={contentDetail?.introduction.usetime} />
                    </InfoWrapper>
                    <InfoWrapper>
                      <PointBox />
                      <InfoTitle>주차 시설</InfoTitle>
                      <InfoText>{contentDetail?.introduction.parking}</InfoText>
                    </InfoWrapper>
                  </InfoContainer>
                </SectionWrapper>
              )}
              {contentTypeID === "14" && (
                <SectionWrapper ref={(ref) => (scrollRef.current[2] = ref)}>
                  <SubTitle>여행지 정보</SubTitle>
                  <DivideLine />
                  <InfoContainer>
                    <InfoWrapper>
                      <PointBox />
                      <InfoTitle>문의 및 안내</InfoTitle>
                      <InfoText>
                        {contentDetail?.introduction.infocenterculture}
                      </InfoText>
                    </InfoWrapper>
                    <InfoWrapper>
                      <PointBox />
                      <InfoTitle>쉬는날</InfoTitle>
                      <InfoText>
                        {contentDetail?.introduction.restdateculture}
                      </InfoText>
                    </InfoWrapper>
                    <InfoWrapper>
                      <PointBox />
                      <InfoTitle>이용 시간</InfoTitle>
                      <UseTime
                        content={contentDetail?.introduction.usetimeculture}
                      />
                    </InfoWrapper>
                    <InfoWrapper>
                      <PointBox />
                      <InfoTitle>주차 시설</InfoTitle>
                      <InfoText>
                        {contentDetail?.introduction.parkingculture}
                      </InfoText>
                    </InfoWrapper>
                  </InfoContainer>
                </SectionWrapper>
              )}
              {contentTypeID === "15" && (
                <SectionWrapper ref={(ref) => (scrollRef.current[2] = ref)}>
                  <SubTitle>여행지 정보</SubTitle>
                  <DivideLine />
                  <InfoContainer>
                    <InfoWrapper>
                      <PointBox />
                      <InfoTitle>주최자 정보</InfoTitle>
                      <InfoText>
                        {contentDetail?.introduction.sponsor1}
                      </InfoText>
                    </InfoWrapper>
                    <InfoWrapper>
                      <PointBox />
                      <InfoTitle>주최자 연락처</InfoTitle>
                      <InfoText>
                        {contentDetail?.introduction.sponsor1tel}
                      </InfoText>
                    </InfoWrapper>
                    <InfoWrapper>
                      <PointBox />
                      <InfoTitle>행사 시작일</InfoTitle>
                      <InfoText>
                        {contentDetail?.introduction.eventstartdate}
                      </InfoText>
                    </InfoWrapper>
                    <InfoWrapper>
                      <PointBox />
                      <InfoTitle>행사 종료일</InfoTitle>
                      <InfoText>
                        {contentDetail?.introduction.eventenddate}
                      </InfoText>
                    </InfoWrapper>
                    <InfoWrapper>
                      <PointBox />
                      <InfoTitle>행사 장소</InfoTitle>
                      <InfoText>
                        {contentDetail?.introduction.eventplace}
                      </InfoText>
                    </InfoWrapper>
                  </InfoContainer>
                </SectionWrapper>
              )}
              {contentTypeID === "28" && (
                <SectionWrapper ref={(ref) => (scrollRef.current[2] = ref)}>
                  <SubTitle>여행지 정보</SubTitle>
                  <DivideLine />
                  <InfoContainer>
                    <InfoWrapper>
                      <PointBox />
                      <InfoTitle>문의 및 안내</InfoTitle>
                      <InfoText>
                        {contentDetail?.introduction.infocenterleports}
                      </InfoText>
                    </InfoWrapper>
                    <InfoWrapper>
                      <PointBox />
                      <InfoTitle>쉬는날</InfoTitle>
                      <InfoText>
                        {contentDetail?.introduction.restdateleports}
                      </InfoText>
                    </InfoWrapper>
                    <InfoWrapper>
                      <PointBox />
                      <InfoTitle>이용 시간</InfoTitle>
                      <UseTime
                        content={contentDetail?.introduction.usetimeleports}
                      />
                    </InfoWrapper>
                    <InfoWrapper>
                      <PointBox />
                      <InfoTitle>주차 시설</InfoTitle>
                      <InfoText>
                        {contentDetail?.introduction.parkingleports}
                      </InfoText>
                    </InfoWrapper>
                  </InfoContainer>
                </SectionWrapper>
              )}
              {contentTypeID === "32" && (
                <SectionWrapper ref={(ref) => (scrollRef.current[2] = ref)}>
                  <SubTitle>여행지 정보</SubTitle>
                  <DivideLine />
                  <InfoContainer>
                    <InfoWrapper>
                      <PointBox />
                      <InfoTitle>문의 및 안내</InfoTitle>
                      <InfoText>
                        {contentDetail?.introduction.infocenterlodging}
                      </InfoText>
                    </InfoWrapper>
                    <InfoWrapper>
                      <PointBox />
                      <InfoTitle>수용 가능 인원</InfoTitle>
                      <InfoText>
                        {contentDetail?.introduction.accomcountlodging}
                      </InfoText>
                    </InfoWrapper>
                    <InfoWrapper>
                      <PointBox />
                      <InfoTitle>예약 안내</InfoTitle>
                      <InfoText>
                        {contentDetail?.introduction.reservationlodging}
                      </InfoText>
                    </InfoWrapper>
                    <InfoWrapper>
                      <PointBox />
                      <InfoTitle>주차 시설</InfoTitle>
                      <InfoText>
                        {contentDetail?.introduction.parkinglodging}
                      </InfoText>
                    </InfoWrapper>
                  </InfoContainer>
                </SectionWrapper>
              )}
              {contentTypeID === "38" && (
                <SectionWrapper ref={(ref) => (scrollRef.current[2] = ref)}>
                  <SubTitle>여행지 정보</SubTitle>
                  <DivideLine />
                  <InfoContainer>
                    <InfoWrapper>
                      <PointBox />
                      <InfoTitle>문의</InfoTitle>
                      <InfoText>
                        {contentDetail?.introduction.infocentershopping}
                      </InfoText>
                    </InfoWrapper>
                    <InfoWrapper>
                      <PointBox />
                      <InfoTitle>영업 시간</InfoTitle>
                      <UseTime content={contentDetail?.introduction.opentime} />
                    </InfoWrapper>
                    <InfoWrapper>
                      <PointBox />
                      <InfoTitle>판매 품목</InfoTitle>
                      <InfoText>
                        {contentDetail?.introduction.salesitem}
                      </InfoText>
                    </InfoWrapper>
                    <InfoWrapper>
                      <PointBox />
                      <InfoTitle>쉬는 날</InfoTitle>
                      <InfoText>
                        {contentDetail?.introduction.restdateshopping}
                      </InfoText>
                    </InfoWrapper>
                  </InfoContainer>
                </SectionWrapper>
              )}
              {contentTypeID === "39" && (
                <SectionWrapper ref={(ref) => (scrollRef.current[2] = ref)}>
                  <SubTitle>여행지 정보</SubTitle>
                  <DivideLine />
                  <InfoContainer>
                    <InfoWrapper>
                      <PointBox />
                      <InfoTitle>문의 및 안내</InfoTitle>
                      <InfoText>
                        {contentDetail?.introduction.infocenterfood}
                      </InfoText>
                    </InfoWrapper>
                    <InfoWrapper>
                      <PointBox />
                      <InfoTitle>쉬는날</InfoTitle>
                      <InfoText>
                        {contentDetail?.introduction.restdatefood}
                      </InfoText>
                    </InfoWrapper>
                    <InfoWrapper>
                      <PointBox />
                      <InfoTitle>이용 시간</InfoTitle>
                      <UseTime
                        content={contentDetail?.introduction.opentimefood}
                      />
                    </InfoWrapper>
                    <InfoWrapper>
                      <PointBox />
                      <InfoTitle>주차 시설</InfoTitle>
                      <InfoText>
                        {contentDetail?.introduction.parkingfood}
                      </InfoText>
                    </InfoWrapper>
                  </InfoContainer>
                </SectionWrapper>
              )}
            </>
            {hasRoutine ? (
              <SectionWrapper ref={(ref) => (scrollRef.current[3] = ref)}>
                <SubTitle>여행지 상세</SubTitle>
                <DivideLine />
                <SubInfo>
                  {contentDetail?.routine?.map((data) => {
                    return (
                      <>
                        <DetailTitleWrapper>
                          <ColorBox />
                          <DetailTitle>{data.infoname}</DetailTitle>
                        </DetailTitleWrapper>
                        <TourDetailInfo content={data.infotext} />
                      </>
                    );
                  })}
                </SubInfo>
              </SectionWrapper>
            ) : null}
          </IntroductionWrapper>
        </DetailWrapper>
      </Container>
    );
};

export default ContentDetail;

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

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  height: 100%;
  margin-bottom: 20px;
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  width: 100%;
  height: 100%;
  margin-bottom: 20px;
`;

const PointBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 5px;
  height: 18px;
  background-color: #2192ff;

  margin: 5px 10px 6px 0;
  line-height: 1.8;
`;

const InfoTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 30%;
  height: 100%;

  line-height: 1.8;
  font-size: 18px;
`;

const InfoText = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  width: 100%;
  height: 100%;
  line-height: 1.8;
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
