import React, { useState } from "react";
import styled from "styled-components";
import DivideLine from "../../../components/DivideLine";
import ProfileIcon from "../../../components/ProfileIcon";
import { BsImage } from "react-icons/bs";
import { useGetPresignedUrlMutation } from "../../../services/api";

const Setting = () => {
  const [profileImage, setProfileImage] = useState("");
  const [bgImage, setBgImage] = useState("");

  const [getPresignedUrl, { data: presignedUrl }] =
    useGetPresignedUrlMutation();

  const profileImageHandler = (e) => {
    const [imgSrc]: any = e.target.files;
    const fileName = {
      url: "",
      fileName: imgSrc.name,
    };

    setProfileImage(imgSrc);
    getPresignedUrl(fileName);
  };

  const bgImageHandler = (e) => {
    const [imgSrc]: any = e.target.files;
    const fileName = {
      url: "",
      fileName: imgSrc.name,
    };

    setBgImage(imgSrc);
    getPresignedUrl(fileName);
  };

  return (
    <Container>
      <ImageContainer>
        <ImageWrapper>
          <ProfileImageWrapper>
            {profileImage ? (
              <ThumnailImage src={profileImage} />
            ) : (
              <ProfileIcon color="#ababab" size={160} />
            )}
          </ProfileImageWrapper>
          <Label>프로필 업로드</Label>
          <ProfileImageUploader
            type="file"
            accept="image/*"
            onChange={profileImageHandler}
          />
        </ImageWrapper>
        <VerticalLine />
        <ImageWrapper>
          <BgImageWrapper>
            {bgImage ? (
              <ThumnailImage src={bgImage} />
            ) : (
              <BsImage color="white" size={160} />
            )}
          </BgImageWrapper>
          <Label>배경 업로드</Label>
          <BgImageUploader
            type="file"
            accept="image/*"
            onChange={bgImageHandler}
          />
        </ImageWrapper>
      </ImageContainer>
      <Wrapper>
        <Box>
          <Title>닉네임</Title>
          <Content>labinnnnn</Content>
        </Box>
        <Description>놀다이어리에서 사용할 닉네임입니다</Description>
        <DivideLine />
      </Wrapper>
      <Wrapper>
        <Box>
          <Title>상태메시지</Title>
          <Content>제주도 가서 놀자</Content>
        </Box>
        <Description>
          내 일기 페이지의 프로필에 공개되는 상태메시지입니다
        </Description>
        <DivideLine />
      </Wrapper>
      <Wrapper>
        <Box>
          <Title>이메일 정보</Title>
          <Content>amelie_@kakao.com</Content>
        </Box>
        <Description>놀다이어리에서 사용하는 소셜 이메일입니다</Description>
        <DivideLine />
      </Wrapper>
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
  padding-top: 60px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 60%;
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

  width: 60%;
  margin-bottom: 10px;
`;
const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  margin-bottom: 20px;
`;

const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  width: 100%;
  font-size: 18px;
  font-weight: 600;
`;

const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  width: 100%;
  font-size: 16px;
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

const ThumnailImage = styled.img`
  width: 100%;
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
