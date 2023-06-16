import React from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../../services/store";
import { usePostDiaryMutation } from "../../../services/api";
import { useNavigate } from "react-router-dom";
import ColorButton from "../../../components/ColorButton";
import BorderButton from "../../../components/BorderButton";
import {
  setBookmark,
  setIsModalOpen,
  setIsPublic,
  setThumnailImage,
} from "../services/write.slice";
import DivideLine from "../../../components/DivideLine";
import { BsImage } from "react-icons/bs";

const SaveModal = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [postDiary] = usePostDiaryMutation();

  const diary = useAppSelector((state) => state.write.diary);
  const thumnailImage = useAppSelector(
    (state) => state.write.diary.thumnailImage
  );

  const thumnailImageHandler = (e) => {
    const imgSrc = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(imgSrc);

    return new Promise<void>((resolve) => {
      reader.onload = () => {
        dispatch(setThumnailImage(reader.result));
        resolve();
      };
    });
  };

  const isPublicHandler = (e) => {
    const booleanValue = JSON.parse(e.target.value);
    dispatch(setIsPublic(booleanValue));
    console.log(diary);
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
  };

  return (
    <>
      <BackGround></BackGround>
      <Container>
        <SettingContainer>
          <Wrapper>
            <SettingBox>
              <Title>썸네일 이미지</Title>
              <DivideLine />
              <ImageWrapper>
                {!thumnailImage ? (
                  <BsImage color="white" size={170} />
                ) : (
                  <ThumnailImage src={thumnailImage} />
                )}
              </ImageWrapper>
              <ImageUploader
                type="file"
                accept="image/*"
                onChange={thumnailImageHandler}
              />
            </SettingBox>
          </Wrapper>
          <Wrapper>
            <SettingBox>
              <Title>공개</Title>
              <DivideLine />
              <Content>
                <OptionWrapper>
                  <Option
                    id="public"
                    type="radio"
                    name="visibility"
                    value="true"
                    onClick={isPublicHandler}
                  />
                  <Label htmlFor="public">전체 공개</Label>
                </OptionWrapper>
                <OptionWrapper>
                  <Option
                    id="private"
                    type="radio"
                    name="visibility"
                    value="false"
                    onClick={isPublicHandler}
                  />
                  <Label htmlFor="private">비공개</Label>
                </OptionWrapper>
              </Content>
            </SettingBox>
            <SettingBox>
              <Title>북마크</Title>
              <DivideLine />
              <Content>
                <SelectWrapper>
                  <Option
                    id="bookmark"
                    type="checkbox"
                    name="북마크"
                    value="true"
                    onClick={bookmarkHandler}
                  />
                  <Label htmlFor="bookmark">북마크 하기</Label>
                </SelectWrapper>
              </Content>
            </SettingBox>
          </Wrapper>
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
  justify-content: flex-start;
  align-items: center;

  width: 60%;
  height: 428px;
  padding: 10px;
  background-color: white;
`;

const SettingContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  width: 100%;
  margin-bottom: 15px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  width: calc(100% / 2);
  padding: 20px 40px;
`;

const SettingBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  width: 100%;
  margin: 15px 0;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 200px;
  overflow: hidden;

  background-color: #bbbbbb;
`;

const ImageUploader = styled.input`
  width: 200px;
`;

const ThumnailImage = styled.img`
  width: 100%;
`;

const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  margin-right: 20px;
  width: 150px;

  font-weight: 600;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-right: 10px;

  cursor: pointer;
`;

const OptionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(95% / 2);
`;

const Label = styled.label`
  display: inline-block;

  width: 100%;
  height: 46px;

  border-radius: 5px;
  border: 1px solid #f1f1f1;
  background-color: white;
  color: #727272;

  font-size: 16px;
  font-weight: 600;

  text-align: center;
  line-height: 40px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;
const Option = styled.input`
  display: none;

  &:checked + ${Label} {
    border: 2px solid #2192ff;
    background-color: #2192ff;
    color: white;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 10px;
  margin-bottom: 30px;
`;

const SelectWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
`;
