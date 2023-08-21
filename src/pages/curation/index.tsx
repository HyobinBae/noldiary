import React from "react";
import styled from "styled-components";
import Carousel from "./components/CurationMain/Carousel";
import CurationList from "./components/CurationMain/CurationList";
import CurationSearchBar from "./components/CurationMain/CurationSearchBar";

import CurationSearchList from "./components/CurationMain/CurationSearchList";
import { useAppSelector } from "../../services/store";

const Curations = () => {
  const searchCurationList = useAppSelector(
    (state) => state.curation.searchCuration
  );

  const keyword = useAppSelector((state) => state.curation.keyword);

  return (
    <Container>
      <Carousel />
      <CurationSearchBar />
      {searchCurationList.content[0].contentid === 0 || !keyword ? (
        <CurationList />
      ) : (
        <CurationSearchList />
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
`;

export default Curations;
