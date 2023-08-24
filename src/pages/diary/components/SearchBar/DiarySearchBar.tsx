import React from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import FilterModal from "./FilterModal";
import { useAppDispatch, useAppSelector } from "../../../../services/store";
import { setKeyword } from "../../services/diary.slice";
import { getSearchDiary } from "../../../../services/api";
import type {} from "redux-thunk/extend-redux";

const DiarySearchBar = () => {
  const dispatch = useAppDispatch();
  const queryName = useAppSelector((state) => state.diary.setSearchQuery);
  const keyword = useAppSelector((state) => state.diary.setKeyword);

  const keyPressHandler = (e) => {
    if (e.keyCode === 13) {
      dispatch(getSearchDiary.initiate({ queryName, keyword }));
    }
  };

  const getKeyword = (e) => {
    dispatch(setKeyword(e.target.value));
  };

  const searchHandler = () => {
    dispatch(getSearchDiary.initiate({ queryName, keyword }));
  };

  return (
    <Container>
      <Box>
        <FilterModal />
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

export default DiarySearchBar;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  margin-bottom: 40px;
`;

const Box = styled.div`
  display: flex;
  justify-content: flex-end;
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
  width: 80%;
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
  color: #2192ff;

  cursor: pointer;
`;
