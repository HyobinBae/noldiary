import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import UserInfoSection from "./components/InfoContainer";
import DiaryList from "./components/DiaryList";
import styled from "styled-components";
import SearchBar from "./components/SearchBar";

const Diary = () => {
  return (
    <Container>
      <Header />
      <Navbar />
      <UserInfoSection />
      <SearchBar />
      <DiaryList />
    </Container>
  );
};

export default Diary;

const Container = styled.div`
  padding: 10px 10%;
  width: 100%;
  height: 64px;

  background-color: white;
`;
