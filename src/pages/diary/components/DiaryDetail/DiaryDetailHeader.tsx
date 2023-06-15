import React from "react";
import styled from "styled-components";

const DiaryDetailHeader = ({ props }) => {
  return (
    <HeaderContainer>
      <TitleBox>{props?.title}</TitleBox>
      <Container>
        <Wrapper>
          <DetailContainer>
            <Detail>{props?.departure}</Detail>
          </DetailContainer>
          <TinyDetail>-</TinyDetail>
          <DetailContainer>
            <Detail>{props?.destination}</Detail>
          </DetailContainer>
        </Wrapper>
        <Wrapper>
          <DetailContainer>
            <DetailContainer>
              <DateDetail>{props?.departureDate}</DateDetail>
              <TinyDetail>~</TinyDetail>
              <DateDetail>{props?.arrivalDate}</DateDetail>
            </DetailContainer>
          </DetailContainer>
        </Wrapper>
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

  width: 100%;
`;

const TitleBox = styled.div`
  display: flex;

  justify-content: flex-start;
  align-items: center;

  width: 50%;
  height: 55px;

  margin-bottom: 20px;
  border: none;
  outline: none;
  font-size: 40px;

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
  align-items: flex-start;
  margin: 5px 0px;

  width: 50%;
  color: #828282;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-right: 10px;

  width: 30%;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const Detail = styled.div`
  display: flex;
  align-items: center;
  margin: 3px 5px;
  border: none;
  outline: none;

  height: 20px;

  font-size: 14px;
`;

const DateDetail = styled.div`
  display: flex;
  align-items: center;
  margin: 3px 5px;
  border: none;
  outline: none;

  height: 20px;

  font-size: 14px;
`;

const TinyDetail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3px 5px;

  width: 15px;
  height: 20px;

  border: none;
`;
