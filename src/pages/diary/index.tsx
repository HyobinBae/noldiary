import React from "react";
import UserInfoSection from "./components/InfoContainer";
import DiaryList from "./components/DiaryList/DiaryList";
import SearchBar from "./components/SearchBar";
import styled from "styled-components";

const Diary = () => {
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
