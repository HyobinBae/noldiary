import React from "react";
import styled from "styled-components";

interface ContentProps {
  contentid: number;
  firstimage: string;
  title: string;
  onClick: React.MouseEventHandler<HTMLElement>;
}

const ContentBox = (props: ContentProps) => {
  return (
    <Container key={props.contentid} onClick={props.onClick}>
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

const Container = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  width: calc((70vw / 3) - 10px);
  height: calc((58vw / 3) - 20px);
  border-radius: 8px;
  border: 0.5px solid #efefef;

  box-shadow: 3px 3px 10px 2px #e8e8e8;

  cursor: pointer;

  @media ${({ theme }) => theme.device.mobile} {
    width: calc(90% / 2);
    height: 30vw;
    border-radius: 8px;
    border: 0.5px solid #efefef;
  }
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
  height: 52px;
  border-radius: 0 0 8px 8px;

  background-color: black;
  opacity: 0.4;

  z-index: 1;

  @media ${({ theme }) => theme.device.mobile} {
    height: 40px;
  }
`;

const Title = styled.div`
  font-size: 18px;
  color: white;

  width: 100%;
  height: 52px;
  padding: 16px 16px;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: block;

  position: absolute;
  z-index: 10;

  @media ${({ theme }) => theme.device.mobile} {
    font-size: 14px;
    height: 40px;
    padding: 12px 12px;
  }
`;
