import React from "react";
import UserInfoSection from "./components/InfoContainer";
import DiaryList from "./components/DiaryList/DiaryList";
import SearchBar from "./components//SearchBar/SearchBar";
import styled from "styled-components";

const Diary = (userInfo) => {
  return (
    <Container>
      <UserInfoSection />
      <SearchBar />
      <DiaryList />
    </Container>
  );
};

export default Diary;

const Container = styled.div`
  width: 100%;

  background-color: white;
`;
