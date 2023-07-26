import React from "react";
import styled from "styled-components";

interface ContentProps {
  contentid: number;
  firstimage: string;
  title: string;
}

const ContentBox = (props: ContentProps) => {
  return (
    <Container key={props.contentid}>
      <Wrapper>
        {props.firstimage ? (
          <ImageBox src={props.firstimage} />
        ) : (
          <WhiteBackground />
        )}
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

  width: 22vw;
  height: 20vw;
  border-radius: 8px;
  border: 0.5px solid #efefef;

  margin: 0 2vw 2vw 0;
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

const WhiteBackground = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;

  background-color: white;

  width: 100%;
  height: 100%;
  border-radius: 8px;
  object-fit: cover;
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
  opacity: 0.3;

  z-index: 1;
`;
const Title = styled.div`
  font-size: 20px;
  color: white;

  width: 100%;
  height: 60px;
  padding: 20px 20px;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: block;

  position: absolute;
  z-index: 10;
`;
