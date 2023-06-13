import React, { useEffect } from "react";
import styled from "styled-components";
import ProfileIcon from "./ProfileIcon";
import { useGetUserInfoQuery } from "../../../services/api";

const UserInfoSection = () => {
  const { data: userInfo, refetch } = useGetUserInfoQuery();

  useEffect(() => {
    refetch();
  }, [refetch]);
  console.log(userInfo);

  return (
    <Container>
      <Wrapper>
        <ProfileIcon size={120} color={"grey"} />
        <NickName>Labinnnnn</NickName>
        <Message>태국에서 뭐사오지?</Message>
      </Wrapper>
      <SummaryWrapper>
        <Wrapper>
          <NumberBox>14</NumberBox>
          <TextBox>내 일기</TextBox>
        </Wrapper>
        <DivideLine />
        <Wrapper>
          <NumberBox>2</NumberBox>
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
  padding: 10px 20px 0;

  background-image: url("images/dessert.jpeg");
  background-size: cover;

  margin-bottom: 40px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 20px 0;
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

  margin-top: 25px;

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
`;

const DivideLine = styled.div`
  height: 60px;
  border: 1px solid white;
`;
