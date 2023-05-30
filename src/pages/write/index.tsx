import React from "react";
import styled from "styled-components";
import WriteHeader from "./components/WriteHeader";
import WriteMain from "./components/WriteMain";
import { usePostDiaryMutation } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../services/store";

const Write = () => {
  const diary = useAppSelector((state) => state.write.diary);

  console.log(diary);
  const navigate = useNavigate();
  const [postDiary] = usePostDiaryMutation();

  const publishHandler = () => {
    postDiary(diary);
    navigate("/diary");
  };

  return (
    <>
      <Container>
        <Header>
          <BorderButton>저장</BorderButton>
          <ColorButton onClick={publishHandler}>발행</ColorButton>
        </Header>
        <Box>
          <WriteHeader />
          <WriteMain />
        </Box>
      </Container>
    </>
  );
};

export default Write;

const Header = styled.header`
  display: flex;
  justify-content: flex-end;

  width: 100%;

  margin: 20px 200px 30px 30px;
`;

const BorderButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 1px solid #2192ff;
  border-radius: 15px;

  width: 55px;
  height: 30px;
  margin-right: 10px;
  background-color: white;
  color: #2192ff;
`;

const ColorButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 15px;

  width: 55px;
  height: 30px;
  margin-right: 10px;
  background-color: #2192ff;
  color: white;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 0px 30px;
`;

const Box = styled.div`
  width: 760px;
`;
