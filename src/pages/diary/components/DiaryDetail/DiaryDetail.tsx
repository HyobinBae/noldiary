import React, { useEffect } from "react";
import styled from "styled-components";
import DiaryDetailHeader from "./DiaryDetailHeader";
import { useGetDiaryDetailQuery } from "../../../../services/api";
import { useParams } from "react-router-dom";
import DivideLine from "../../../../components/DivideLine";

const DiaryDetail = () => {
  const { id } = useParams();

  const { data: diaryDetail, refetch } = useGetDiaryDetailQuery(id ?? "");

  useEffect(() => {
    refetch();
  }, [refetch]);

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
`;

const DiaryMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;

  margin-top: 20px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  width: 70%;
  line-height: 2;
`;
