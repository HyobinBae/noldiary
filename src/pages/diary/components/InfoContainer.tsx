import React from "react";
import styled from "styled-components";
import ProfileIcon from "../../../components/ProfileIcon";

import { RiSettings4Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../services/store";

const UserInfoSection = () => {
  const userInfoForUse = useAppSelector((state) => state.diary.getUserInfo);
  console.log(userInfoForUse);

  return (
    <Container>
      <BackgroundImage src={userInfoForUse?.backgroundImage} />
      <IconWrapper>
        <Box to="/setting">
          <RiSettings4Fill size={24} color={"white"} />
        </Box>
      </IconWrapper>
      <Wrapper>
        {userInfoForUse?.profileImage ? (
          <ProfileWrapper>
            <ProfileImage src={userInfoForUse.profileImage} />
          </ProfileWrapper>
        ) : (
          <ProfileIcon size={130} color={"ababab"} />
        )}

        <NickName>{userInfoForUse?.nickname}</NickName>
        <Message>{userInfoForUse?.message}</Message>
      </Wrapper>
      <SummaryWrapper>
        <Wrapper>
          <NumberBox>{userInfoForUse?.totalMyDiary}</NumberBox>
          <TextBox>내 일기</TextBox>
        </Wrapper>
        <DivideLine />
        <Wrapper>
          <NumberBox>{userInfoForUse?.totalSharedDiary}</NumberBox>
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
  height: 360px;
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
  height: 360px;
  object-fit: cover;

  border: none;

  position: absolute;
  z-index: 1;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  width: 100%;
  z-index: 3;
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

  z-index: 3;
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
  height: 100%;
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

  z-index: 3;
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
