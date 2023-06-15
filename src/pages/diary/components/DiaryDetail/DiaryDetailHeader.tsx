import React from "react";
import DivideLine from "../../../../components/DivideLine";
import styled from "styled-components";

const DiaryDetailHeader = ({ props }) => {
  return (
    <HeaderContainer>
      <TitleBox>{props?.title}</TitleBox>
      <DivideLine />
      <Container>
        <DetailContainer>
          <Title>From</Title>
          <Detail>{props?.departure}</Detail>
        </DetailContainer>
        <DetailContainer>
          <Title>To</Title>
          <Detail>{props?.destination}</Detail>
        </DetailContainer>
        <DetailContainer>
          <Title>Date</Title>
          <DetailContainer>
            <DateDetail>{props?.departureDate}</DateDetail>
            <TinyDetail>~</TinyDetail>
            <DateDetail>{props?.arrivalDate}</DateDetail>
          </DetailContainer>
        </DetailContainer>
      </Container>
    </HeaderContainer>
  );
};

export default DiaryDetailHeader;

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const TitleBox = styled.div`
  width: 100%;
  height: 55px;

  border: none;
  outline: none;
  font-size: 30px;

  ::placeholder {
    display: flex;
    align-items: center;

    padding: 10px 0px;
    font-size: 30px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 5px 0px;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  margin: 3px 5px;

  width: 10%;
  height: 40px;
`;

const Detail = styled.div`
  display: flex;
  align-items: center;
  margin: 3px 5px;
  border: none;
  outline: none;

  width: 50%;
  height: 40px;

  font-size: 14px;
`;

const DateDetail = styled.div`
  display: flex;
  align-items: center;
  margin: 3px 5px;
  border: none;
  outline: none;

  width: 15vw;
  height: 40px;

  font-size: 14px;
`;

const TinyDetail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3px 5px;

  width: 40px;
  height: 40px;

  border: none;
`;
