import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../services/store";
import ProfileIcon from "./ProfileIcon";
import ColorButton from "./ColorButton";

const Header = () => {
  const userInfoForUse = useAppSelector((state) => state.diary.getUserInfo);

  const navigate = useNavigate();
  const buttonHandler = () => {
    navigate("/write");
  };
  const mainHandler = () => {
    navigate("/");
  };

  const profileIconHandler = () => {
    const token = localStorage.getItem("token");
    token ? navigate("/setting") : navigate("/signin");
  };

  return (
    <Container>
      <LogoBox onClick={mainHandler}>
        <img src="/images/놀다이어리 logo.png" alt="놀다이어리" width={100} />
      </LogoBox>
      <ButtonBox>
        <ColorButton
          width={"84px"}
          height={"36px"}
          text={"글쓰기"}
          onClick={buttonHandler}
        ></ColorButton>
        <ProfileWrapper onClick={profileIconHandler}>
          {userInfoForUse.profileImage ? (
            <ProfileImage src={userInfoForUse?.profileImage} />
          ) : (
            <ProfileIcon size={55} color={"#ababab"} />
          )}
        </ProfileWrapper>
      </ButtonBox>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 10px 20px 0;
  width: 100%;

  background-color: white;
`;

const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 43px;
  height: 43px;
  border-radius: 50%;
  overflow: hidden;

  background-color: #ffffff;
  cursor: pointer;
`;
const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
