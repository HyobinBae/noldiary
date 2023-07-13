import React from "react";
import styled from "styled-components";

interface Props {
  text: string;
  width: string;
  height: string;
  onClick: () => void;
}

const ColorButton = ({ text, width, height, onClick }: Props) => (
  <Button width={width} height={height} onClick={onClick}>
    {text}
  </Button>
);

export default ColorButton;

const Button = styled.div<{ width: string; height: string }>`
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 20px;

  width: ${({ width }) => width};
  height: ${({ height }) => height};

  background-color: #2192ff;
  color: white;

  cursor: pointer;

  &:hover {
    background-color: #50aaff;
  }
`;
