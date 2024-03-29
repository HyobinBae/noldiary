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

export const InitialButtonStyle = {
  button: { color: "#8F8F8F" },
  bar: { background: "#ffffff" },
};

export const SelectedButtonStyle = {
  button: {
    color: "#2192FF",
    fontWeight: 700,
  },
  bar: { background: "#2192FF", borderRadius: "5px" },
};

const Navbar = () => {
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
                    <SelectedBar style={SelectedButtonStyle.bar} />
                  </ButtonText>
                </>
              ) : (
                <>
                  <ButtonText style={InitialButtonStyle.button}>
                    {title.navTitle}
                    <SelectedBar style={InitialButtonStyle.bar} />
                  </ButtonText>
                </>
              )}
            </ButtonBox>
          );
        })}
      </Container>
      <DivideLine />
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
  width: 100vw;
  height: 47px;
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

  @media ${({ theme }) => theme.device.mobile} {
    width: calc(90% / 3);
  }
`;

const ButtonText = styled.div`
  width: auto;
  padding: 10px 0 0;

  font-size: 20px;
  font-weight: 600;

  color: #8f8f8f;
`;

const SelectedBar = styled.div`
  width: 100%;
  height: 4px;
  border-radius: 2px;
  margin-top: 9px;

  background: #ffffff;

  flex: none;
`;

const DivideLine = styled.div`
  width: 100%;
  border: 0.5px solid #d2d2d2;
`;

const NAVIGATION_TITLE = [
  { id: 1, navTitle: "떠나요", endpoint: "" },
  { id: 2, navTitle: "기록해요", endpoint: "diary" },
  { id: 3, navTitle: "좋아요", endpoint: "likemap" },
];
