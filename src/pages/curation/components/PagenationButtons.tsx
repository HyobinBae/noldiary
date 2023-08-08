import React from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../../services/store";
import Pagination from "@mui/material/Pagination";
import { setPageNo } from "../services/curation.slice";

const PagenationButtons = () => {
  const dispatch = useAppDispatch();

  const currentPage = useAppSelector((state) => state.curation.pageNo);
  const totalCount = useAppSelector((state) => state.curation.totalCount);
  const pages = Math.floor(totalCount / 12) + 1;

  const pageHandler = (e, newPage) => {
    dispatch(setPageNo(newPage));
  };

  return (
    <Container>
      <Pagination
        count={pages}
        shape="rounded"
        onChange={pageHandler}
        page={currentPage}
      />
    </Container>
  );
};

export default PagenationButtons;

const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 40px;
`;
