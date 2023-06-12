import React from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../../services/store";
import { usePostDiaryMutation } from "../../../services/api";
import { useNavigate } from "react-router-dom";
import ColorButton from "./Atoms/ColorButton";
import BorderButton from "./Atoms/BorderButton";
import {
  setBookmark,
  setIsModalOpen,
  setIsPublic,
} from "../services/write.slice";

const SaveModal = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [postDiary] = usePostDiaryMutation();

  const diary = useAppSelector((state) => state.write.diary);
  const isModalOpen = useAppSelector((state) => state.write.isModalOpen);

  const isPublicHandler = (e) => {
    const booleanValue = JSON.parse(e.target.value);
    dispatch(setIsPublic(booleanValue));
  };

  const bookmarkHandler = () => {
    diary.bookmark === false
      ? dispatch(setBookmark(true))
      : dispatch(setBookmark(false));
  };

  const publishHandler = () => {
    postDiary(diary);
    navigate("/diary");
  };

  const exitHandler = () => {
    dispatch(setIsModalOpen(false));
    console.log(isModalOpen);
  };

  return (
    <>
      <BackGround></BackGround>
      <Container>
        <SettingContainer>
          <SettingBox>
            <Title>공개</Title>
            <Content>
              <Content>
                <Option
                  type="radio"
                  name="공개"
                  value="true"
                  onClick={isPublicHandler}
                />
                <Label>공개</Label>
              </Content>
              <Content>
                <Option
                  type="radio"
                  name="공개"
                  value="false"
                  onClick={isPublicHandler}
                />
                <Label>비공개</Label>
              </Content>
            </Content>
          </SettingBox>
          <SettingBox>
            <Title>북마크</Title>
            <Content>
              <Option
                type="checkbox"
                name="북마크"
                value="true"
                onClick={bookmarkHandler}
              />
            </Content>
          </SettingBox>
        </SettingContainer>
        <ButtonBox>
          <BorderButton
            width={"56px"}
            height={"32px"}
            text={"취소"}
            onClick={exitHandler}
          />
          <ColorButton
            onClick={publishHandler}
            width={"56px"}
            height={"32px"}
            text={"발행"}
          />
        </ButtonBox>
      </Container>
    </>
  );
};

export default SaveModal;

const BackGround = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;

  background-color: #000000;
  opacity: 0.4;
`;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 500px;
  height: 200px;
  background-color: white;
`;

const SettingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  margin-bottom: 30px;
`;
const SettingBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 15px 0;
`;

const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  margin-right: 20px;
  width: 60px;

  font-weight: 600;
`;

const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  margin-right: 10px;
`;

const Label = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Option = styled.input`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  background-color: white;

  width: 20px;
  height: 20px;
  margin-bottom: 5px;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 20px;
  gap: 10px;
`;
