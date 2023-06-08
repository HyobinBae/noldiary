import React from "react";
import { IoPersonCircleSharp } from "react-icons/io5";
import styled from "styled-components";

interface Props {
  size: number;
  color: string;
}

const ProfileIcon = ({ size, color }: Props) => {
  return (
    <Box>
      <IoPersonCircleSharp size={size} color={color}></IoPersonCircleSharp>
    </Box>
  );
};

export default ProfileIcon;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;
