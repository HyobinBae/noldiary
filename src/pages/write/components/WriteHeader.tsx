import React, { useState } from "react";
import DivideLine from "./DivideLine";
import WriteDetail from "./WriteDetail";
import styled from "styled-components";

const WriteHeader = () => {
  const [title, setTitle] = useState("");
  const titleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <>
      <TitleBox
        type="text"
        value={title}
        placeholder="제목"
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
  height: 50px;

  border: none;
`;
