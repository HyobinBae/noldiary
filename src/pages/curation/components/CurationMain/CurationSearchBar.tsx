import React from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import { useAppDispatch, useAppSelector } from "../../../../services/store";
import {
  clearSearchCurationList,
  setKeyword,
  setPageNo,
  setTotalCount,
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
      dispatch(getSearchCuration.initiate({ pageNo, keyword })).then((res) =>
        dispatch(setTotalCount(res.data?.totalCount))
      );
    }
  };

  const searchHandler = (e) => {
    if (keyword === "") {
      dispatch(clearSearchCurationList());
    } else {
      e.preventDefault();
      dispatch(setPageNo(1));
      dispatch(getSearchCuration.initiate({ pageNo, keyword })).then((res) =>
        dispatch(setTotalCount(res.data?.totalCount))
      );
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
  height: 55px;
  margin-bottom: 40px;

  @media ${({ theme }) => theme.device.mobile} {
    margin-bottom: 20px;
  }
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 70%;
  height: 55px;
  border: 2px solid ${(props) => props.theme.colors.mainBlue};
  border-radius: 50px;
  box-shadow: 3px 3px 10px 2px #e8e8e8;

  @media ${({ theme }) => theme.device.mobile} {
    width: 90%;
  }
`;

const Input = styled.input`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  border: none;
  width: 100%;
  height: 98%;
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
