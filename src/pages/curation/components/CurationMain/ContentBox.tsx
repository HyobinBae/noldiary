import React from "react";
import styled from "styled-components";

interface ContentProps {
  thumbnailImage: string;
  title: string;
}

const ContentBox = (props: ContentProps) => {
  return (
    <Container key={props.thumbnailImage}>
      <Wrapper>
        <ImageBox src={props.thumbnailImage} />
        <CoverSheet />
        <Title>{props.title}</Title>
      </Wrapper>
    </Container>
  );
};

export default ContentBox;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 340px;
  height: 320px;
  border-radius: 8px;

  margin: 15px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;

  width: 100%;
  height: 100%;
  border-radius: 8px;

  position: relative;
`;
const ImageBox = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  border-radius: 8px;

  object-fit: cover;
`;
const CoverSheet = styled.div`
  position: absolute;
  width: 100%;
  height: 60px;
  border-radius: 0 0 8px 8px;

  background-color: black;
  opacity: 0.2;

  z-index: 1;
`;
const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  font-size: 20px;
  color: white;

  width: 100%;
  height: 60px;
  padding: 0 20px 0;

  position: absolute;
  z-index: 10;
`;
