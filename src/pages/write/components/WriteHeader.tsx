import React from "react";
import DivideLine from "./DivideLine";
import WriteDetail from "./WriteDetail";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../../services/store";
import { setTitle } from "../services/write.slice";

const WriteHeader = () => {
  const dispatch = useAppDispatch();
  const title = useAppSelector((state) => state.write.title);

  const titleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setTitle(e.target.value));
  };

  return (
    <>
      <TitleBox
        type="text"
        value={title}
        placeholder="제목을 입력하세요"
        onChange={titleHandler}
      ></TitleBox>
      <DivideLine />
      <WriteDetail />
      <DivideLine />
    </>
  );
};

export default WriteHeader;

const TitleBox = styled.input`
  width: 100%;
  height: 55px;

  border: none;
  outline: none;
  font-size: 30px;

  ::placeholder {
    display: flex;
    align-items: center;

    padding: 10px 0px;
    font-size: 30px;
  }
`;
