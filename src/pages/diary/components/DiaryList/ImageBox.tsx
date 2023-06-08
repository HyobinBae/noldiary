import React from "react";
import styled from "styled-components";
const src = "/images/breads.jpeg";
const ImageBox = () => {
  return (
    <Container>
      <TitleBox>
        <Title>Ticket</Title>
      </TitleBox>
      <ContentBox>
        <Image src={src} alt="breads" />
      </ContentBox>
    </Container>
  );
};

export default ImageBox;

const Container = styled.div``;

const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 280px;
  height: 50px;
  background-color: #2192ff;

  border-radius: 15px 15px 0 0;
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

  width: 280px;
  height: 280px;
  background-color: #ffffff;

  border: 3px solid #2192ff;
  border-left-width: 3px;
  border-left-style: dashed;
  border-top: none;
  border-radius: 0 0 15px 15px;
`;

const Image = styled.img`
  height: 95%;
  overflow: hidden;

  padding: 20px 25px;
`;