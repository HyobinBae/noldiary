import React from "react";
import UserInfoSection from "./components/UserInfoSection";
import DiaryList from "./components/DiaryList/DiaryList";
import SearchBar from "./components/SearchBar/SearchBar";
import styled from "styled-components";
import SearchDiaryList from "./components/DiaryList/SearchDiaryList";
import { useAppSelector } from "../../services/store";

const Diary = () => {
  const keyword = useAppSelector((state) => state.diary.setKeyword);

  return (
    <Container>
      <UserInfoSection />
      <SearchBar />
      {!keyword ? <DiaryList /> : <SearchDiaryList />}
    </Container>
  );
};

export default Diary;

const Container = styled.div`
  width: 100%;

  background-color: white;
`;
