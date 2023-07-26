import React, { useEffect } from "react";
import styled from "styled-components";
import ContentBox from "../CurationMain/ContentBox";
import { useGetCourseListQuery } from "../../../../services/api";
import TourCourseNavbar from "./TourCourseNavbar";
import { useAppDispatch, useAppSelector } from "../../../../services/store";
import { setTotalCount } from "../../services/curation.slice";
import PagenationButtons from "./PagenationButtons";

const CourseList = () => {
  const dispatch = useAppDispatch();

  const categoryCode = useAppSelector((state) => state.curation.courseCode);
  const pageNo = useAppSelector((state) => state.curation.pageNo);
  const totalCount = useAppSelector((state) => state.curation.totalCount);

  const { data: courseArray } = useGetCourseListQuery({ categoryCode, pageNo });
  const courseList = courseArray?.content;

  dispatch(setTotalCount(courseArray?.totalCount));
  console.log(categoryCode);

  return (
    <Container>
      <TourCourseNavbar />
      <TotalCount>{totalCount}개의 코스가 있습니다</TotalCount>
      <ContentWrapper>
        {courseList?.map((data) => {
          return <ContentBox key={data.contentid} {...data} />;
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
  justify-content: flex-start;
  align-items: flex-start;

  width: 100%;
  height: 100%;

  padding: 0 14%;
`;
const TotalCount = styled.div`
  margin-bottom: 20px;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  flex-wrap: wrap;

  width: 100%;

  margin-bottom: 20px;
`;
