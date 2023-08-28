import React from "react";
import styled from "styled-components";
import MapArea from "./components/MapArea";
import LikeList from "./components/LikeList";
import { useGetUserInfoQuery } from "../../services/api";
import LoginMessage from "./components/LoginMessage";

const LikeMap = () => {
  const { data: userInfo } = useGetUserInfoQuery();
  return (
    <Container>
      {userInfo ? (
        <>
          <MapArea />
          <LikeList />
        </>
      ) : (
        <LoginMessage />
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;

  width: 100vw;
  height: calc(100vh - 107px);

  @media ${({ theme }) => theme.device.mobile} {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
  }
`;

export default LikeMap;
