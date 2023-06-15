import React, { useEffect } from "react";
import styled from "styled-components";
import DiaryDetailHeader from "./DiaryDetailHeader";
import { useGetDiaryDetailQuery } from "../../../../services/api";
import { useParams } from "react-router-dom";

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
        <DiaryMain>
          <Content dangerouslySetInnerHTML={{ __html: contents }} />
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
`;

const DiaryMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 40%;
  line-height: 2;
`;
