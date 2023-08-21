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
          <LikeList />
          <MapArea />
        </>
      ) : (
        <LoginMessage />
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
`;

export default LikeMap;
