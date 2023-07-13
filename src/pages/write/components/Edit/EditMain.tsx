import React from "react";
import styled from "styled-components";
import EditEditor from "./EditEditor";

const EditMain = () => {
  return (
    <MainContainer>
      <EditEditor />
    </MainContainer>
  );
};

export default EditMain;
const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  margin: 10px 5px;
`;
