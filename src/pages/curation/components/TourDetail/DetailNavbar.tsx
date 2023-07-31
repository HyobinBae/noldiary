import React from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../../../services/store";
import { setDetailNavIndex } from "../../services/curation.slice";

const DetailNavbar = ({ scrollRef }) => {
  const dispatch = useAppDispatch();
  const navIndex = useAppSelector((state) => state.curation.detailNavIndex);

  console.log(navIndex);
  const navHandler = (index) => {
    dispatch(setDetailNavIndex(index));
    scrollRef.current[index]?.scrollIntoView({ behavior: "smooth" });
  };
  console.log(scrollRef.current);

  return (
    <NavWrapper>
      {DETAIL_NAVTITLE.map((data) => {
        return (
          <NavText key={data.idx} onClick={() => navHandler(data.idx)}>
            {data.navTitle}
          </NavText>
        );
      })}
    </NavWrapper>
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
`;

const NavText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: calc(70vw / 4);

  font-size: 18px;
  font-weight: 600;

  cursor: pointer;
`;

const DETAIL_NAVTITLE = [
  { idx: 0, navTitle: "코스 소개" },
  { idx: 1, navTitle: "코스 요약" },
  { idx: 2, navTitle: "코스 상세" },
  { idx: 3, navTitle: "이미지 보기" },
];
