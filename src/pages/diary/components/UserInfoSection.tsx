import React from "react";
import styled from "styled-components";
import ProfileIcon from "../../../components/ProfileIcon";
import { useAppSelector } from "../../../services/store";
import { RiSettings4Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const UserInfoSection = () => {
  const userInfo = useAppSelector((state) => state.diary.getUserInfo);

  return (
    <Container>
      {userInfo?.backgroundImage ? (
        <BackgroundWrapper>
          <BackgroundImage src={userInfo?.backgroundImage} />
        </BackgroundWrapper>
      ) : (
        <BackgroundWrapper />
      )}
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
        {userInfo ? (
          <>
            <NickName>{userInfo?.nickname}</NickName>
            <Message>{userInfo?.message}</Message>
          </>
        ) : (
          <>
            {/* <NickName>닉네임</NickName>
            <Message>메세지</Message> */}
            <LoginMessage>로그인 하세요</LoginMessage>
          </>
        )}
      </Wrapper>
      <SummaryWrapper>
        <Wrapper>
          {userInfo ? (
            <NumberBox>{userInfo?.totalMyDiary}</NumberBox>
          ) : (
            <NumberBox>0</NumberBox>
          )}

          <TextBox>내 일기</TextBox>
        </Wrapper>
        <DivideLine />
        <Wrapper>
          {userInfo ? (
            <NumberBox>{userInfo?.totalSharedDiary}</NumberBox>
          ) : (
            <NumberBox>0</NumberBox>
          )}

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
  height: 340px;
  margin-bottom: 40px;

  background-color: #bbbbbb;
  position: relative;
  @media ${({ theme }) => theme.device.mobile} {
    height: 300px;
  }
`;

const BackgroundWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  border: none;

  position: absolute;
  z-index: 1;
`;

const BackgroundImage = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  object-fit: cover;

  border: none;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  width: 100%;

  z-index: 3;
  position: absolute;
  top: 10px;
  left: -10px;
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
  margin: 10px 0;

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

const LoginMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 32px 0 15px;
  font-size: 26px;
  font-weight: 600;
  color: white;
`;

const SummaryWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

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
