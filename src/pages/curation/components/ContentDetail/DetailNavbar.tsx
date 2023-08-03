import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  InitialButtonStyle,
  SelectedButtonStyle,
} from "../../../../components/Navbar";
import { useAppSelector } from "../../../../services/store";

const DetailNavbar = ({ scrollRef }) => {
  const [selectedNav, setSelectedNav] = useState("이미지보기");
  const contentTypeID = useAppSelector((state) => state.curation.contentTypeID);

  const navHandler = (data) => {
    setSelectedNav(data.title);
    scrollRef.current[data.idx]?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      scrollRef.current.forEach((ref, idx) => {
        if (ref.offsetTop - 180 < window.scrollY) {
          setSelectedNav(DETAIL_NAV_COURSE[idx].title);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollRef]);

  return (
    <>
      {contentTypeID === 25 ? (
        <NavWrapper>
          {DETAIL_NAV_COURSE.map((data) => {
            return (
              <ButtonBox>
                {selectedNav === data.title ? (
                  <>
                    <NavText
                      key={data.idx}
                      onClick={() => navHandler(data)}
                      style={SelectedButtonStyle.button}
                    >
                      {data.title}
                    </NavText>
                    <Bar style={SelectedButtonStyle.bar} />
                  </>
                ) : (
                  <NavText
                    key={data.idx}
                    onClick={() => navHandler(data)}
                    style={InitialButtonStyle.button}
                  >
                    {data.title}
                  </NavText>
                )}
              </ButtonBox>
            );
          })}
        </NavWrapper>
      ) : (
        <NavWrapper>
          {DETAIL_NAV_DEFAULT.map((data) => {
            return (
              <ButtonBox>
                {selectedNav === data.title ? (
                  <>
                    <NavText
                      key={data.idx}
                      onClick={() => navHandler(data)}
                      style={SelectedButtonStyle.button}
                    >
                      {data.title}
                    </NavText>
                    <Bar style={SelectedButtonStyle.bar} />
                  </>
                ) : (
                  <NavText
                    key={data.idx}
                    onClick={() => navHandler(data)}
                    style={InitialButtonStyle.button}
                  >
                    {data.title}
                  </NavText>
                )}
              </ButtonBox>
            );
          })}
        </NavWrapper>
      )}
    </>
  );
};
export default DetailNavbar;

const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  width: 100%;
  height: 52px;
  border-top: 1px solid #d2d2d2;
  border-bottom: 1px solid #d2d2d2;
  margin-bottom: 20px;

  position: sticky;
  top: 0;
  z-index: 1;
  background-color: #ffffff;
  opacity: 0.9;
`;

const ButtonBox = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: calc(70vw / 4);

  background: #ffffff;
  border-style: none;

  cursor: pointer;
`;

const NavText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 11px 0 10px 0;

  font-size: 18px;

  cursor: pointer;
`;

const Bar = styled.div`
  width: 60%;
  height: 4px;
  border-radius: 2px;

  background: #ffffff;

  display: flex;
  justify-content: center;
  align-items: flex-end;

  padding-bottom: 0;
`;

const DETAIL_NAV_COURSE = [
  { idx: 0, title: "이미지 보기" },
  { idx: 1, title: "코스 소개" },
  { idx: 2, title: "코스 요약" },
  { idx: 3, title: "코스 상세" },
];

const DETAIL_NAV_DEFAULT = [
  { idx: 0, title: "이미지 보기" },
  { idx: 1, title: "여행지 소개" },
  { idx: 2, title: "여행지 정보" },
  { idx: 3, title: "여행지 상세" },
];
