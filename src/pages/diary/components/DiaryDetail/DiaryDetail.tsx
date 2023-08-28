import React from "react";
import styled from "styled-components";
import DiaryDetailHeader from "./DiaryDetailHeader";
import { useGetDiaryDetailQuery } from "../../../../services/api";
import { useParams } from "react-router-dom";
import DivideLine from "../../../../components/DivideLine";
import ReactQuill from "react-quill";

const DiaryDetail = () => {
  const { id } = useParams();

  const { data: diaryDetail } = useGetDiaryDetailQuery(id ?? "");

  const contents = diaryDetail?.contents;
  console.log(contents);

  return (
    <>
      <Container>
        <DiaryDetailHeader props={diaryDetail} />
        <LineContainer>
          <DivideLine />
        </LineContainer>
        <DiaryMain>
          {/* <Content
            id="editor"
            dangerouslySetInnerHTML={{ __html: contents || "" }}
          /> */}
          <Content value={contents} readOnly={true} theme={"bubble"} />
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

const Content = styled(ReactQuill)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  width: 70%;

  line-height: 2;

  img {
    max-width: 100%;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
  }

  .ql-container {
    width: 100%;
    padding: 0px;
  }
  .ql-editor {
    width: 100%;
    padding: 0px;
  }
`;
