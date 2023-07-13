import React from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import FilterModal from "./FilterModal";
import { useAppDispatch, useAppSelector } from "../../../../services/store";
import { setKeyword } from "../../services/diary.slice";
import { getSearchDiary } from "../../../../services/api";

const SearchBar = () => {
  const dispatch = useAppDispatch();
  const queryName = useAppSelector((state) => state.diary.setSearchQuery);
  const keyword = useAppSelector((state) => state.diary.setKeyword);

  const keyPressHandler = (e) => {
    console.log(e.keyCode);
    if (e.keyCode === 13) {
      dispatch(getSearchDiary.initiate({ queryName, keyword }));
    }
  };

  const getKeyword = (e) => {
    dispatch(setKeyword(e.target.value));
  };

  const searchHandler = () => {
    console.log("eeee");
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

export default SearchBar;
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

  width: 71%;
  height: 55px;
  border: 2px solid #2192ff;
  border-radius: 10px;
`;
const Input = styled.input`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  border: none;
  width: 80%;
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
  color: #2192ff;

  cursor: pointer;
`;
