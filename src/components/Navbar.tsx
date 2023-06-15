import React from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../services/store";
import { setNavTitle } from "../pages/diary/services/diary.slice";
import { useNavigate } from "react-router-dom";

export interface ButtonProps {
  navTitle: string;
  endpoint: string;
}

export interface Styles {
  button: { color: string };
  bar: { background: string };
}

const Navbar = () => {
  const InitialButtonStyle = {
    button: { color: "#8F8F8F" },
    bar: { background: "#ffffff" },
  };

  const SelectedButtonStyle = {
    button: { color: "#2192FF" },
    bar: { background: "#2192FF" },
  };

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const selectedTitle = useAppSelector((state) => state.diary.setNavTitle);

  const navHandler = (title: ButtonProps) => {
    dispatch(setNavTitle(title.navTitle));
    navigate(`/${title.endpoint}`);
  };

  return (
    <>
      <Container>
        {NAVIGATION_TITLE.map((title) => {
          return (
            <ButtonBox
              key={title.id}
              onClick={() => {
                navHandler(title);
              }}
            >
              {selectedTitle === title.navTitle ? (
                <>
                  <ButtonText style={SelectedButtonStyle.button}>
                    {title.navTitle}
                  </ButtonText>
                  <SelectedBar style={SelectedButtonStyle.bar} />
                </>
              ) : (
                <>
                  <ButtonText style={InitialButtonStyle.button}>
                    {title.navTitle}
                  </ButtonText>
                  <SelectedBar style={InitialButtonStyle.bar} />
                </>
              )}
            </ButtonBox>
          );
        })}
      </Container>
    </>
  );
};

export default Navbar;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;

  cursor: pointer;
`;

const ButtonBox = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: calc(40% / 3);

  background: #ffffff;
  border-style: none;

  padding: 0;

  cursor: pointer;
`;

const ButtonText = styled.div`
  padding: 10px 0;

  font-size: 20px;
  font-weight: 600;

  color: #8f8f8f;
`;

const SelectedBar = styled.div`
  width: 100%;
  height: 4px;

  background: #ffffff;

  flex: none;
`;

const NAVIGATION_TITLE = [
  { id: 1, navTitle: "여기 어때", endpoint: "curations" },
  { id: 2, navTitle: "내 일기", endpoint: "diary" },
  { id: 3, navTitle: "내 발자취", endpoint: "footprints" },
];
