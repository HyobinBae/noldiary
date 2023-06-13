import React from "react";
import { IoPersonCircle } from "react-icons/io5";
import styled from "styled-components";

interface Props {
  size: number;
  color: string;
}

const ProfileIcon = ({ size, color }: Props) => {
  return (
    <Box size={size}>
      <IconBox>
        <IoPersonCircle size={size} color={color} />
      </IconBox>
    </Box>
  );
};

export default ProfileIcon;

const Box = styled.div<{ size: number }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({ size }) => size * 0.7}px;
  height: ${({ size }) => size * 0.65}px;

  background-color: white;
  border-radius: 50%;

  cursor: pointer;
  position: relative;
`;

const IconBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
