import React from "react";
import styled from "styled-components";
import ContentBox from "../CurationMain/ContentBox";
import { useGetCourseListQuery } from "../../../../services/api";
import TourCourseNavbar from "./TourCourseNavbar";

const CourseList = () => {
  const pageNo = pageNumber;
  const { data: courseList } = useGetCourseListQuery({ categoryCode, pageNo });
  console.log(courseList);

  return (
    <Container>
      <TourCourseNavbar />
      {/* <ContentWrapper>
        {courseList.map((data) => {
          return <ContentBox key={data.title} {...data} />;
        })}
      </ContentWrapper> */}
    </Container>
  );
};

export default CourseList;

const Container = styled.div``;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  flex-wrap: wrap;

  width: 100%;
  margin-bottom: 30px;
`;
