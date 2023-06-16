// import React from "react";
// import styled from "styled-components";

// const Curations = () => {
//   return <Title>추천</Title>;
// };

// const Title = styled.div``;

// export default Curations;

import React from "react";
import styled from "styled-components";

const Text = () => {
  return (
    <>
      <RadioInput id="public" type="radio" name="visibility" />
      <RadioLabel htmlFor="public">전체 공개</RadioLabel>

      <RadioInput id="private" type="radio" name="visibility" />
      <RadioLabel htmlFor="private">비공개</RadioLabel>
    </>
  );
};

export default Text;

const RadioLabel = styled.label`
  display: inline-block;
  width: 80px;
  height: 35px;
  border-radius: 5px;
  background-color: white;
  color: #2192ff;
  text-align: center;
  line-height: 35px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const RadioInput = styled.input`
  display: none;

  &:checked + ${RadioLabel} {
    background-color: #2192ff;
    color: white;
  }
`;
