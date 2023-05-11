import React from "react";
import styled from "styled-components";
import { GrImage, GrLocation, GrVideo } from "react-icons/gr";
import { AiOutlinePlus } from "react-icons/ai";
import { RxText } from "react-icons/rx";

import Editors from "./Editors";

const WriteMain = () => {
  return (
    <MainContainer>
      <IconContainer>
        <OptionBox>
          <AiOutlinePlus color="white" />
        </OptionBox>
        <ContentsBox>
          <IconBox>
            <RxText size="20" />
          </IconBox>
          <IconBox>
            <GrImage size="20" />
          </IconBox>
          <IconBox>
            <GrVideo size="20" />
          </IconBox>
          <IconBox>
            <GrLocation size="20" />
          </IconBox>
        </ContentsBox>
      </IconContainer>
      <Editors />
    </MainContainer>
  );
};

export default WriteMain;
const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  margin: 10px 5px;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 40px;
`;

const OptionBox = styled.div`
  width: 25px;
  height: 25px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #d8d8d8;

  margin: 5px;
`;

const IconBox = styled.div`
  width: 45px;
  height: 45px;
  padding: 10px 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid #d8d8d8;
`;

const ContentsBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: 30px;
  width: 200px;
  margin: 5px 0px;
`;
