import React from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../../services/store";
import { setNavTitle } from "../services/diary.slice";

export interface ButtonProps {
  id: number;
  navTitle: string;
  sort: string;
}

export interface Styles {
  button: { color: string };
  bar: { background: string };
}

const Navbar = () => {
  const InitialButtonStyle = {
    button: { color: "#8F8F8F" },
    bar: { background: "#dedede" },
  };

  const SelectedButtonStyle = {
    button: { color: "#2192FF" },
    bar: { background: "#2192FF" },
  };

  const dispatch = useAppDispatch();
  const selectedTitle = useAppSelector((state) => state.diary.setNavTitle);

  const getNavTitle = (navTitle: string) => {
    dispatch(setNavTitle(navTitle));
    console.log(selectedTitle);
  };

  return (
    <>
      <Container>
        {NAVIGATION_TITLE.map((title) => {
          return (
            <ButtonBox
              key={title.id}
              onClick={() => {
                getNavTitle(title.navTitle);
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
  justify-content: space-around;
  align-items: flex-start;

  padding: 10px 20%;
  width: 100%;
  height: 64px;

  background: #ffffff;

  cursor: pointer;
`;

const ButtonBox = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;

  width: calc(100% / 3);
  height: 55px;

  background: #ffffff;
  border-style: none;

  padding: 0;

  cursor: pointer;
`;

const ButtonText = styled.div`
  width: 80px;
  margin-bottom: 10px;

  font-size: 14px;

  color: #8f8f8f;
`;

const SelectedBar = styled.div`
  width: 100%;
  height: 4px;

  background: #ffffff;

  flex: none;
`;

const NAVIGATION_TITLE = [
  { id: 1, navTitle: "여기 어때" },
  { id: 2, navTitle: "내 일기" },
  { id: 3, navTitle: "내 발자취" },
];
