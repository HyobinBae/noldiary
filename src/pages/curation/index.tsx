import React from "react";
import styled from "styled-components";
import Carousel from "./components/CurationMain/Carousel";
import CurationList from "./components/CurationMain/CurationList";
import CurationSearchBar from "./components/CurationMain/CurationSearchBar";

import { useAppSelector } from "../../services/store";
import CurationSearchList from "./components/CurationMain/CurationSearchList";

const Curations = () => {
  const searchCurationList = useAppSelector(
    (state) => state.curation.searchCuration
  );

  const keyword = useAppSelector((state) => state.curation.keyword);

  return (
    <Container>
      <Carousel />
      <CurationSearchBar />
      {searchCurationList.content[0].contentid !== 0 && keyword ? (
        <CurationSearchList />
      ) : (
        <CurationList />
      )}
    </Container>
  );
};

const Container = styled.div``;

export default Curations;
