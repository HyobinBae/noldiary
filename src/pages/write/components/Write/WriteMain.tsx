import React from "react";
import styled from "styled-components";
import Editors from "./Editors";

const WriteMain = () => {
  return (
    <MainContainer>
      <Editors />
    </MainContainer>
  );
};

export default WriteMain;
const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  margin: 10px 5px 40px;

  @media ${({ theme }) => theme.device.mobile} {
    width: 88vw;
  }
`;
