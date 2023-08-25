import React from "react";
import styled from "styled-components";

const ImageBox = ({ image }) => {
  return (
    <Container>
      <TitleBox>
        <Title>Ticket</Title>
      </TitleBox>
      <ContentBox>
        <Image src={image} alt="thumbnailImage" />
      </ContentBox>
    </Container>
  );
};

export default ImageBox;

const Container = styled.div`
  width: 100%;
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 50px;
  background-color: #2192ff;

  border-radius: 8px 8px 0 0;
`;
const Title = styled.div`
  font-size: 24px;
  color: #ffffff;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 280px;

  background-color: #ffffff;

  border: 1px solid #e8e8e8;
  border-left-width: 2px;
  border-left-style: dashed;
  border-top: none;
  border-radius: 0 0 8px 8px;
`;

const Image = styled.img`
  width: 100%;
  height: 95%;
  object-fit: cover;
  overflow: hidden;

  padding: 20px 25px;
`;
