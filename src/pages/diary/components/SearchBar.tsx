import React from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";

const SearchBar = () => {
  return (
    <Container>
      <Box>
        <Input type="search" />
        <IconBox>
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
  width: 90%;
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
`;
