import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DivideLine from "../../../components/DivideLine";
import ProfileIcon from "../../../components/ProfileIcon";
import { BsImage } from "react-icons/bs";
import {
  useGetPresignedUrlMutation,
  useGetUserInfoQuery,
  usePatchUserInfoMutation,
} from "../../../services/api";
import ColorButton from "../../../components/ColorButton";
import { useAppDispatch, useAppSelector } from "../../../services/store";
import {
  setProfileImage,
  setBgImage,
  setNickname,
  setMessage,
} from "../services/diary.slice";

const Setting = () => {
  const [getPresignedUrl, { data: presignedUrl }] =
    useGetPresignedUrlMutation();
  const [patchUserInfo] = usePatchUserInfoMutation();
  const userInfo = useAppSelector((state) => state.diary.getUserInfo);

  const [isEditNickname, setIsEditNickname] = useState(false);
  const [isEditMessage, setIsEditMessage] = useState(false);
  const [profileImageSrc, setProfileImageSrc] = useState("");
  const [backgroundImageSrc, setBackgroundImageSrc] = useState("");
  const [profilePresignedUrl, setProfilePresignedUrl] = useState<string | null>(
    null
  );
  const [backgroundPresignedUrl, setBackgroundPresignedUrl] = useState<
    string | null
  >(null);

  const dispatch = useAppDispatch();

  const profileImage = useAppSelector(
    (state) => state.diary.userSetting.profileImage
  );
  const bgImage = useAppSelector(
    (state) => state.diary.userSetting.backgroundImage
  );
  const editedNickname = useAppSelector(
    (state) => state.diary.userSetting.nickname
  );
  const editedMessage = useAppSelector(
    (state) => state.diary.userSetting.message
  );
  const userSetting = useAppSelector((state) => state.diary.userSetting);

  const profileImageHandler = async (e) => {
    const [imgSrc]: any = e.target.files;

    const fileName = {
      url: "",
      fileName: imgSrc.name,
    };

    setProfileImageSrc(imgSrc);

    try {
      const response = await getPresignedUrl(fileName).unwrap();
      setProfilePresignedUrl(response.url);
    } catch (error) {
      console.log(error);
    }
  };

  const bgImageHandler = async (e) => {
    const [imgSrc]: any = e.target.files;
    const fileName = {
      url: "",
      fileName: imgSrc.name,
    };

    setBackgroundImageSrc(imgSrc);

    try {
      const response = await getPresignedUrl(fileName).unwrap();
      setBackgroundPresignedUrl(response.url);
    } catch (error) {
      console.log(error);
    }
  };

  const nicknameEditHandler = () => {
    !isEditNickname ? setIsEditNickname(true) : setIsEditNickname(false);
  };

  const nicknameInputHandler = (e) => {
    dispatch(setNickname(e.target.value));
  };

  const messageEditHandler = () => {
    !isEditMessage ? setIsEditMessage(true) : setIsEditMessage(false);
  };

  const messageInputHandler = (e) => {
    dispatch(setMessage(e.target.value));
  };

  const saveButtonHandler = () => {
    patchUserInfo(userSetting);
  };

  const profilePreview = profileImage || userInfo?.profileImage;
  const backgroundPreview = userInfo?.backgroundImage || bgImage;
  const nickname = userInfo?.nickname ? userInfo?.nickname : userInfo?.name;
  const message = userInfo?.message ? userInfo?.message : null;

  useEffect(() => {
    if (presignedUrl) {
      const uploadImage = async () => {
        await fetch(presignedUrl.url, {
          method: "PUT",
          headers: {
            "Content-Type": "image/*",
          },
          body: profileImageSrc,
        }).then((res) => {
          dispatch(setProfileImage(res.url.split("?", 1)[0]));
        });
      };

      uploadImage();
    }
  }, [profileImageSrc, profilePresignedUrl]);

  useEffect(() => {
    if (presignedUrl) {
      const uploadImage = async () => {
        await fetch(presignedUrl.url, {
          method: "PUT",
          headers: {
            "Content-Type": "image/*",
          },
          body: backgroundImageSrc,
        }).then((res) => {
          dispatch(setBgImage(res.url.split("?", 1)[0]));
        });
      };

      uploadImage();
    }
  }, [backgroundImageSrc, backgroundPresignedUrl]);

  return (
    <Container>
      <ImageContainer>
        <ImageWrapper>
          <ProfileImageWrapper>
            {profilePreview ? (
              <ThumbnailImage src={profilePreview} />
            ) : (
              <ProfileIcon color="#ababab" size={160} />
            )}
          </ProfileImageWrapper>
          <Label htmlFor="profile">프로필 업로드</Label>
          <ProfileImageUploader
            id="profile"
            type="file"
            accept="image/*"
            onChange={profileImageHandler}
          />
        </ImageWrapper>
        <VerticalLine />
        <ImageWrapper>
          <BgImageWrapper>
            {backgroundPreview ? (
              <ThumbnailImage src={backgroundPreview} />
            ) : (
              <BsImage color="white" size={160} />
            )}
          </BgImageWrapper>
          <Label htmlFor="background">배경 업로드</Label>
          <BgImageUploader
            id="background"
            type="file"
            accept="image/*"
            onChange={bgImageHandler}
          />
        </ImageWrapper>
      </ImageContainer>
      <Wrapper>
        <Box>
          <Title>닉네임</Title>
          <ContentWrapper>
            {isEditNickname ? (
              <Input type="text" onChange={nicknameInputHandler} />
            ) : (
              <Content>{editedNickname ? editedNickname : nickname}</Content>
            )}
            {isEditNickname ? (
              <EditConfirmButton onClick={nicknameEditHandler}>
                수정 완료
              </EditConfirmButton>
            ) : (
              <EditButton onClick={nicknameEditHandler}>수정</EditButton>
            )}
          </ContentWrapper>
        </Box>
        <Description>놀다이어리에서 사용할 닉네임입니다</Description>
        <DivideLine />
      </Wrapper>
      <Wrapper>
        <Box>
          <Title>상태메시지</Title>
          <ContentWrapper>
            {isEditMessage ? (
              <Input type="text" onChange={messageInputHandler} />
            ) : (
              <Content>{editedMessage ? editedMessage : message}</Content>
            )}
            {isEditMessage ? (
              <EditConfirmButton onClick={messageEditHandler}>
                수정 완료
              </EditConfirmButton>
            ) : (
              <EditButton onClick={messageEditHandler}>수정</EditButton>
            )}
          </ContentWrapper>
        </Box>
        <Description>
          내 일기 페이지의 프로필에 공개되는 상태메시지입니다
        </Description>
        <DivideLine />
      </Wrapper>

      <ButtonBox>
        <ColorButton
          text="저장"
          width="80px"
          height="40px"
          onClick={saveButtonHandler}
        />
      </ButtonBox>
    </Container>
  );
};

export default Setting;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding-top: 40px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 50%;
  height: 300px;
  margin-bottom: 40px;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const VerticalLine = styled.div`
  height: 300px;
  margin: 0 10px 0;

  border-right: 1px solid #d2d2d2;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 50%;
  margin-bottom: 10px;
`;
const Box = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  margin-bottom: 20px;
`;

const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  width: 26%;
  font-size: 18px;
  font-weight: 600;
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  height: 40px;
  font-size: 16px;
`;

const Input = styled.input`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  width: 100%;
  height: 40px;
  font-size: 16px;

  :focus {
    outline: none;
  }
`;

const EditButton = styled.button`
  width: 80px;
  height: 38px;
  border: none;
  background-color: white;
  color: #2192ff;
  font-size: 14px;

  &:hover {
    cursor: pointer;
    color: #50aaff;
  }
`;

const EditConfirmButton = styled.button`
  width: 80px;
  height: 38px;
  border: none;
  background-color: white;
  color: #2192ff;
  font-size: 14px;

  &:hover {
    cursor: pointer;
    color: #50aaff;
  }
`;

const Description = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  font-size: 12px;
  color: #ababab;
  margin-bottom: 10px;
`;

const Label = styled.label`
  display: inline-block;

  width: 100%;
  height: 46px;
  margin-top: 10px;

  border-radius: 5px;

  background-color: #2192ff;
  color: white;

  font-size: 16px;
  font-weight: 600;

  text-align: center;
  line-height: 45px;
  cursor: pointer;

  &:hover {
    background-color: #50aaff;
  }
`;

const ProfileImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;

  background-color: #ffffff;
`;

const ProfileImageUploader = styled.input`
  display: none;
`;

const ThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const BgImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 500px;
  height: 200px;
  overflow: hidden;

  background-color: #ababab;
`;

const BgImageUploader = styled.input`
  display: none;
`;

const ButtonBox = styled.div`
  margin-top: 20px;
`;
