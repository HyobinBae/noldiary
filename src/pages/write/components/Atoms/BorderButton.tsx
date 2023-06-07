import React from "react";
import styled from "styled-components";

interface Props {
  text: string;
  width: string;
  height: string;
  onClick: () => void;
}

const BorderButton = ({ text, width, height, onClick }: Props) => (
  <Button width={width} height={height} onClick={onClick}>
    {text}
  </Button>
);

export default BorderButton;

const Button = styled.div<{ width: string; height: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 1px solid #2192ff;
  border-radius: 60px;

  width: ${({ width }) => width};
  height: ${({ height }) => height};

  margin-right: 10px;
  background-color: white;
  color: #2192ff;

  cursor: pointer;
`;
