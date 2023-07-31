import React from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../../../services/store";
import { HiOutlineShare } from "react-icons/hi";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { setHeart } from "../../services/curation.slice";

const IconBar = () => {
  const dispatch = useAppDispatch();
  const isHeart = useAppSelector((state) => state.curation.heart);

  const heartHandler = () => {
    isHeart === true ? dispatch(setHeart(false)) : dispatch(setHeart(true));
  };

  return (
    <IconWrapper>
      <IconBox onClick={heartHandler}>
        {isHeart === false ? (
          <FaRegHeart size={20} />
        ) : (
          <FaHeart size={20} color="#ff4040" />
        )}
      </IconBox>
      <IconBox>
        <HiOutlineShare size={20} />
      </IconBox>
    </IconWrapper>
  );
};

export default IconBar;

const IconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  width: 100%;
  height: 40px;
  margin-bottom: 10px;
`;

const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 26px;
  height: 26px;
  margin-left: 5px;

  cursor: pointer;
`;
