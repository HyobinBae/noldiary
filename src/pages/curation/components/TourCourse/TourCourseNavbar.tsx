import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../services/store";
import { useNavigate } from "react-router-dom";
import {
  setCourseCode,
  setCourseTitle,
  setPageNo,
} from "../../services/curation.slice";
import styled from "styled-components";
import {
  InitialButtonStyle,
  SelectedButtonStyle,
} from "../../../../components/Navbar";

export interface NavProps {
  navTitle: string;
  categoryCode: string;
}

export interface Styles {
  button: { color: string };
  bar: { background: string };
}

const TourCourseNavbar = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const selectedTitle = useAppSelector((state) => state.curation.courseTitle);

  const navHandler = (title: NavProps) => {
    dispatch(setCourseTitle(title.navTitle));
    // dispatch(setContentTypeID(1));
    dispatch(setCourseCode(title.categoryCode));
    dispatch(setPageNo(1));
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
      <Line />
    </>
  );
};

export default TourCourseNavbar;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  width: 70vw;
  overflow-x: scroll;

  cursor: pointer;

  ::-webkit-scrollbar {
    display: none;
  }

  @media ${({ theme }) => theme.device.mobile} {
    width: 90vw;
  }
`;

const ButtonBox = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: calc(70vw / 6);

  background: #ffffff;
  border-style: none;

  padding: 0;

  cursor: pointer;

  @media ${({ theme }) => theme.device.mobile} {
    width: 85px;
    margin: 0 5px;
    flex-wrap: nowrap;
  }
`;

const ButtonText = styled.div`
  width: auto;
  padding: 10px 0 0;

  font-size: 18px;
  color: #8f8f8f;

  @media ${({ theme }) => theme.device.mobile} {
    width: 85px;
    flex-wrap: nowrap;
  }
`;

const SelectedBar = styled.div`
  width: 100%;
  height: 4px;
  border-radius: 2px;
  margin-top: 9px;

  background: #ffffff;

  flex: none;
`;

const Line = styled.div`
  width: 70vw;
  border: 0.5px solid #c7c7c7;
  margin-bottom: 20px;
  @media ${({ theme }) => theme.device.mobile} {
    width: 90vw;
  }
`;

const NAVIGATION_LIST = [
  { navTitle: "가족코스", categoryCode: "C0112" },
  { navTitle: "나홀로코스", categoryCode: "C0113" },
  { navTitle: "힐링코스", categoryCode: "C0114" },
  { navTitle: "도보코스", categoryCode: "C0115" },
  { navTitle: "캠핑코스", categoryCode: "C0116" },
  { navTitle: "맛코스", categoryCode: "C0117" },
];
