import React from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";

const Carousel = () => {
  const navigate = useNavigate();
  const clickHandler = (title) => {
    navigate(`curation/tourcourse/${title}`);
  };

  return (
    <Container>
      <CarouselWrapper
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-next",
          prevEl: ".swiper-prev",
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        touchStartPreventDefault={false}
        simulateTouch={false}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {CAROUSEL_LIST.map((data) => {
          return (
            <Wrapper
              key={data.categoryCode}
              onClick={() => clickHandler(data.title)}
            >
              <ImageWrapper>
                <CoverSheet />
                <BackgroundImage src={data.imageURL} />
                <TextWrapper>
                  <TextBox>{data.category}</TextBox>
                  <TitleBox>{data.title}</TitleBox>
                </TextWrapper>
              </ImageWrapper>
            </Wrapper>
          );
        })}
      </CarouselWrapper>
      <IconWrapper>
        <IconBox className="swiper-prev">
          <FiChevronLeft size="26" color="white" />
        </IconBox>
        <IconBox className="swiper-next">
          <FiChevronRight size="26" color="white" />
        </IconBox>
      </IconWrapper>
    </Container>
  );
};

export default Carousel;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  height: 340px;
  margin-bottom: 40px;
  background-color: #bbbbbb;

  position: relative;
`;

const CarouselWrapper = styled(Swiper)`
  width: 100%;
  height: 100%;

  position: relative;
  z-index: 1;
`;

const Wrapper = styled(SwiperSlide)`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  object-fit: cover;

  position: relative;
`;

const CoverSheet = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.2;

  position: absolute;
  z-index: 1;
`;

const BackgroundImage = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  width: 100%;
  height: 100%;
  padding: 40px 80px;

  position: absolute;
  z-index: 10;
`;

const TextBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  color: white;
  font-size: 18px;

  width: 100%;
  margin-bottom: 10px;
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  color: white;
  font-size: 38px;

  width: 100%;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 100%;
  padding: 0px 25px;

  position: absolute;

  z-index: 2;
  background: none;

  pointer-events: none;
`;

const IconBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 26px;
  height: 26px;
  cursor: pointer;

  z-index: 3;

  pointer-events: auto;

  & > * {
    pointer-events: none;
  }
`;

const CAROUSEL_LIST = [
  {
    category: "가족코스",
    categoryCode: "C0112",
    title: "봄 햇살 내리는 목장으로 초대",
    imageURL:
      "http://tong.visitkorea.or.kr/cms/resource/19/2640119_image2_1.bmp",
  },
  {
    category: "나홀로코스",
    categoryCode: "C0113",
    title: "고풍스러움이 흐르는 북촌",
    imageURL:
      "http://tong.visitkorea.or.kr/cms/resource/82/893882_image2_1.jpg",
  },
  {
    category: "힐링코스",
    categoryCode: "C0114",
    title: "가을 바다를 즐길 수 있는 목포 1박2일 여행 코스",
    imageURL:
      "http://tong.visitkorea.or.kr/cms/resource/17/2706017_image2_1.jpg",
  },
  {
    category: "도보코스",
    categoryCode: "C0115",
    title: "가야의 고대문화가 잠든 고령 땅을 밟다",
    imageURL:
      "http://tong.visitkorea.or.kr/cms/resource/96/1002896_image2_1.jpg",
  },
  {
    category: "캠핑코스",
    categoryCode: "C0116",
    title: "백두대간 마구령과 고치령에서 즐기는 캠핑여행",
    imageURL:
      "http://tong.visitkorea.or.kr/cms/resource/23/2654223_image2_1.jpg",
  },
  {
    category: "맛코스",
    categoryCode: "C0117",
    title: "춘천 명물 닭갈비 먹으러 고고싱!",
    imageURL:
      "http://tong.visitkorea.or.kr/cms/resource/05/2365605_image2_1.jpg",
  },
];
