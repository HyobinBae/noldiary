import React from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import { useAppDispatch, useAppSelector } from "../../../../services/store";
import {
  clearSearchCurationList,
  setKeyword,
  setPageNo,
} from "../../services/curation.slice";
import { getSearchCuration } from "../../../../services/api";
import type {} from "redux-thunk/extend-redux";

const CurationSearchBar = () => {
  const dispatch = useAppDispatch();

  const keyword = useAppSelector((state) => state.curation.keyword);
  const pageNo = useAppSelector((state) => state.curation.pageNo);

  const getKeyword = (e) => {
    dispatch(setKeyword(e.target.value));
  };

  const keyPressHandler = (e) => {
    if (e.key === "Enter" && keyword === "") {
      dispatch(clearSearchCurationList());
    } else if (e.key === "Enter" && keyword !== "") {
      e.preventDefault();
      dispatch(setPageNo(1));
      dispatch(getSearchCuration.initiate({ pageNo, keyword }));
    }
  };

  const searchHandler = (e) => {
    if (keyword === "") {
      dispatch(clearSearchCurationList());
    } else {
      e.preventDefault();
      dispatch(setPageNo(1));

      dispatch(getSearchCuration.initiate({ pageNo, keyword }));
    }
  };

  return (
    <Container>
      <Box>
        <Input
          type="search"
          onChange={getKeyword}
          onKeyDown={keyPressHandler}
        />
        <IconBox onClick={searchHandler}>
          <BiSearch size={30} />
        </IconBox>
      </Box>
    </Container>
  );
};

export default CurationSearchBar;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  margin-bottom: 40px;
`;

const Box = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 71%;
  height: 55px;
  border: 2px solid ${(props) => props.theme.colors.mainBlue};
  border-radius: 10px;
`;
const Input = styled.input`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  border: none;
  width: 100%;
  height: 100%;
  margin-left: 20px;

  font-size: 18px;

  :focus {
    outline: none;
  }
`;

const IconBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  padding: 20px;
  color: ${(props) => props.theme.colors.mainBlue};

  cursor: pointer;
`;
