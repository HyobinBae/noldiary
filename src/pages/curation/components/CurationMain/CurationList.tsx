import React from "react";
import styled from "styled-components";
import ContentBox from "./ContentBox";
import CurationCategory from "./CutationCategory";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../services/store";
import { setContentTypeID, setTotalCount } from "../../services/curation.slice";
import { useGetContentsListByCategoryQuery } from "../../../../services/api";
import PagenationButtons from "../PagenationButtons";

const CurationList = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const category = useAppSelector((state) => state.curation.category);
  const pageNo = useAppSelector((state) => state.curation.pageNo);
  const totalCount = useAppSelector((state) => state.curation.totalCount);

  const { data: categoryContents } = useGetContentsListByCategoryQuery({
    category,
    pageNo,
  });

  dispatch(setTotalCount(categoryContents?.totalCount));

  const contentHandler = (data) => {
    navigate(`/curation/detail/${data.contentid}`);
    dispatch(setContentTypeID(data.contenttypeid));
  };

  const curationList = categoryContents?.content;

  return (
    <Container>
      <CurationCategory />
      <TotalCount>{totalCount}개의 코스가 있습니다</TotalCount>
      <ContentWrapper>
        {curationList?.map((data) => {
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

export default CurationList;

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
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  margin-bottom: 20px;
  margin-left: 10px;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  flex-wrap: wrap;

  width: 100%;
  margin: 0 0 20px 10px;
`;
