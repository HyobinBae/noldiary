import React, { useEffect } from "react";
import styled from "styled-components";
import ProfileIcon from "../../../components/ProfileIcon";
import { useGetUserInfoQuery } from "../../../services/api";
import { RiSettings4Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const UserInfoSection = () => {
  const { data: userInfo, refetch } = useGetUserInfoQuery();

  useEffect(() => {
    refetch();
  }, [userInfo]);

  return (
    <Container>
      <BackgroundImage src={userInfo?.backgroundImage}></BackgroundImage>
      <IconWrapper>
        <Box to="/setting">
          <RiSettings4Fill size={24} color={"white"} />
        </Box>
      </IconWrapper>
      <Wrapper>
        {userInfo?.profileImage ? (
          <ProfileWrapper>
            <ProfileImage src={userInfo.profileImage} />
          </ProfileWrapper>
        ) : (
          <ProfileIcon size={130} color={"ababab"} />
        )}

        <NickName>{userInfo?.nickname}</NickName>
        <Message>{userInfo?.message}</Message>
      </Wrapper>
      <SummaryWrapper>
        <Wrapper>
          <NumberBox>{userInfo?.totalMyDiary}</NumberBox>
          <TextBox>내 일기</TextBox>
        </Wrapper>
        <DivideLine />
        <Wrapper>
          <NumberBox>{userInfo?.totalSharedDiary}</NumberBox>
          <TextBox>공유 일기</TextBox>
        </Wrapper>
      </SummaryWrapper>
    </Container>
  );
};

export default UserInfoSection;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 330px;
  padding: 20px;

  background-color: #bbbbbb;

  margin-bottom: 40px;
  position: relative;
`;

const BackgroundImage = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 330px;

  background-color: red;
  border: none;

  position: absolute;
  z-index: -100;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  width: 100%;
`;

const Box = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20 20px 0;
`;

const ProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 110px;
  height: 110px;

  border-radius: 50%;
  overflow: hidden;
`;
const ProfileImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

const NickName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 20px 0 5px;
  font-size: 26px;
  font-weight: 600;
  color: white;
`;

const Message = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 10px;
  font-size: 12px;
  font-weight: 600;
  color: white;
`;

const SummaryWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 25px 0 25px 0;

  color: white;
`;

const NumberBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 26px;
  font-weight: 600;

  margin-bottom: 5px;
`;

const TextBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 12px;
  width: 80px;
`;

const DivideLine = styled.div`
  height: 60px;
  border: 1px solid white;
`;
