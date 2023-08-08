import React, { useEffect } from "react";
import styled from "styled-components";
import ContentBox from "./ContentBox";

import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../services/store";
import {
  selectSearchCurationList,
  setContentTypeID,
  setTotalCount,
} from "../../services/curation.slice";
import PagenationButtons from "../PagenationButtons";
import { getSearchCuration } from "../../../../services/api";

const CurationSearchList = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const totalCount = useAppSelector((state) => state.curation.totalCount);
  const keyword = useAppSelector((state) => state.curation.keyword);
  const pageNo = useAppSelector((state) => state.curation.pageNo);

  const searchCurationList = useAppSelector(selectSearchCurationList);

  useEffect(() => {
    if (keyword) {
      dispatch(getSearchCuration.initiate({ pageNo, keyword })).then((res) =>
        dispatch(setTotalCount(res.data?.totalCount))
      );
    }
  }, [dispatch, pageNo, keyword]);

  const contentHandler = (data) => {
    navigate(`/curation/detail/${data.contentid}`);
    dispatch(setContentTypeID(data.contenttypeid));
  };

  return (
    <Container>
      <TotalCount>{totalCount}개의 코스가 있습니다</TotalCount>
      <ContentWrapper>
        {searchCurationList.content.map((data) => {
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
        <PagenationButtons />
      </ContentWrapper>
    </Container>
  );
};

export default CurationSearchList;

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
