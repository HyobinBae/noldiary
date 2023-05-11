import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faFilm,
  faImage,
  faLocationDot,
  faPlus,
  faT,
} from "@fortawesome/free-solid-svg-icons";

const Editor = () => {
  return (
    <MainContainer>
      <Main></Main>
      <IconContainer>
        <OptionBox>
          <FontAwesomeIcon icon={faPlus as IconProp} size="lg" color="white" />
        </OptionBox>
        <ContentsBox>
          <IconBox>
            <FontAwesomeIcon icon={faT as IconProp} size="xl" color="#9e9e9e" />
          </IconBox>
          <IconBox>
            <FontAwesomeIcon
              icon={faImage as IconProp}
              size="xl"
              color="#909090"
            />
          </IconBox>
          <IconBox>
            <FontAwesomeIcon
              icon={faFilm as IconProp}
              size="xl"
              color="#909090"
            />
          </IconBox>
          <IconBox>
            <FontAwesomeIcon
              icon={faLocationDot as IconProp}
              size="xl"
              color="#909090"
            />
          </IconBox>
        </ContentsBox>
      </IconContainer>
    </MainContainer>
  );
};

export default Editor;
const MainContainer = styled.main`
  display: flex;
  justify-content: flex-start;

  margin: 3px 5px;
`;
const Main = styled.div``;

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
`;
