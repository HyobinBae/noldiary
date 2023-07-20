import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../services/store";
import { useNavigate } from "react-router-dom";
import { setCourseTitle } from "../../services/curation.slice";
import styled from "styled-components";

export interface NavProps {
  navTitle: string;
  categoryCode: string;
}

export interface Styles {
  button: { color: string };
  bar: { background: string };
}

const TourCourseNavbar = () => {
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
  const selectedTitle = useAppSelector((state) => state.curation.courseTitle);

  const navHandler = (title: NavProps) => {
    dispatch(setCourseTitle(title.navTitle));
    navigate(`/curation/tourcourse/${title.navTitle}`);
  };

  return (
    <>
      <Container>
        {NAVIGATION_LIST.map((title) => {
          return (
            <ButtonBox
              key={title.navTitle}
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

export default TourCourseNavbar;

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

  width: calc(80% / 6);

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

const NAVIGATION_LIST = [
  { navTitle: "가족코스", categoryCode: "C0112" },
  { navTitle: "나홀로코스", categoryCode: "C0113" },
  { navTitle: "힐링코스", categoryCode: "C0114" },
  { navTitle: "도보코스", categoryCode: "C0115" },
  { navTitle: "캠핑코스", categoryCode: "C0116" },
  { navTitle: "맛코스", categoryCode: "C0117" },
];
