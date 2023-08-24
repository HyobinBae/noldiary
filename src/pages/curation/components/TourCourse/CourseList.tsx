import React from "react";
import styled from "styled-components";
import ContentBox from "../CurationMain/ContentBox";
import { useGetContentsListQuery } from "../../../../services/api";
import TourCourseNavbar from "./TourCourseNavbar";
import { useAppDispatch, useAppSelector } from "../../../../services/store";
import {
  setContentID,
  setContentTypeID,
  setTotalCount,
} from "../../services/curation.slice";
import PagenationButtons from "../PagenationButtons";
import { useNavigate } from "react-router-dom";

const CourseList = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const categoryCode = useAppSelector((state) => state.curation.courseCode);
  const pageNo = useAppSelector((state) => state.curation.pageNo);
  const totalCount = useAppSelector((state) => state.curation.totalCount);

  const { data: courseArray } = useGetContentsListQuery({
    categoryCode,
    pageNo,
  });
  const courseList = courseArray?.content;

  dispatch(setTotalCount(courseArray?.totalCount));

  const contentHandler = (data) => {
    dispatch(setContentID(data.contentid));
    dispatch(setContentTypeID("25"));
    navigate(`/curation/detail/${data.contentid}`);
  };

  return (
    <Container>
      <TourCourseNavbar />
      <TotalCount>{totalCount}개의 코스가 있습니다</TotalCount>
      <ContentWrapper>
        {courseList?.map((data) => {
          return (
            <ContentBox
              key={data.contentid}
              onClick={() => {
                contentHandler(data);
              }}
              {...data}
            />
          );
        })}
      </ContentWrapper>
      <PagenationButtons />
    </Container>
  );
};

export default CourseList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  width: 100vw;
  height: 100%;

  padding: 0 14%;

  @media ${({ theme }) => theme.device.mobile} {
    padding: 0 5%;
  }
`;

const TotalCount = styled.div`
  margin-bottom: 20px;
`;

const ContentWrapper = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  width: 100%;
  margin-bottom: 20px;

  flex-wrap: wrap;

  & > * {
    flex: 0 0 calc((70vw / 3) - 10px);
    margin-right: 15px;
    margin-bottom: 15px;

    &:nth-child(3n) {
      margin-right: 0;
    }

    @media ${({ theme }) => theme.device.mobile} {
      flex: 0 0 calc((100% / 2) - 5px);
      margin-right: 10px;
      margin-bottom: 10px;

      &:nth-child(2n) {
        margin-right: 0;
      }

      &:nth-child(3n) {
        margin-right: 10px;
      }

      &:nth-child(2n):nth-child(3n) {
        margin-right: 0;
      }
    }
  }
`;
