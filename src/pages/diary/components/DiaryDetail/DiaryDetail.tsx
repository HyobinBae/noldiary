import React from "react";
import styled from "styled-components";
import DiaryDetailHeader from "./DiaryDetailHeader";
import { useGetDiaryDetailQuery } from "../../../../services/api";
import { useParams } from "react-router-dom";
import DivideLine from "../../../../components/DivideLine";

const DiaryDetail = () => {
  const { id } = useParams();

  const { data: diaryDetail } = useGetDiaryDetailQuery(id ?? "");

  const contents = diaryDetail?.contents;

  return (
    <>
      <Container>
        <DiaryDetailHeader props={diaryDetail} />
        <LineContainer>
          <DivideLine />
        </LineContainer>
        <DiaryMain>
          <Content dangerouslySetInnerHTML={{ __html: contents || "" }} />
        </DiaryMain>
      </Container>
    </>
  );
};

export default DiaryDetail;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  margin-top: 20px;
`;

const LineContainer = styled.div`
  width: 50%;

  @media ${({ theme }) => theme.device.mobile} {
    width: 90%;
  }
`;

const DiaryMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;

  margin-top: 20px;

  @media ${({ theme }) => theme.device.mobile} {
    width: 90%;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  width: 70%;

  line-height: 2;

  img {
    max-width: 100%;
  }

  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
  }
`;
