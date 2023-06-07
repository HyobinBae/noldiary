import React from "react";
import styled from "styled-components";

const TextButton = () => {
  return (
    <Box>
      <Text>글쓰기</Text>
    </Box>
  );
};

export default TextButton;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 15px;

  width: 60px;
  height: 30px;
  margin-right: 10px;

  background-color: #2192ff;
  color: white;

  cursor: pointer;
`;

const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 14px;
`;
