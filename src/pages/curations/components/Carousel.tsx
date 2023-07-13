import React from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import styled from "styled-components";

const Carousel = () => {
  return (
    <Container>
      <ImageWrapper></ImageWrapper>
      <IconWrapper>
        <IconBox>
          <FiChevronLeft size="26" color="white" />
        </IconBox>
        <IconBox>
          <FiChevronRight size="26" color="white" />
        </IconBox>
      </IconWrapper>
    </Container>
  );
};

export default Carousel;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 340px;
  background-color: #bbbbbb;

  position: relative;
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 100%;
  padding: 0px 25px;
  position: absolute;
`;

const IconBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 26px;
  height: 26px;
  cursor: pointer;
`;
