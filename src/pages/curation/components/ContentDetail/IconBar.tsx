import React from "react";
import styled from "styled-components";
import { useAppDispatch } from "../../../../services/store";
import { HiOutlineShare } from "react-icons/hi";
import { FaHeart, FaRegHeart } from "react-icons/fa";

import {
  deleteLike,
  postLike,
  useGetLikeQuery,
} from "../../../../services/api";
import type {} from "redux-thunk/extend-redux";

const IconBar = (contentID) => {
  const { data: isLike, error } = useGetLikeQuery(contentID);
  const token = localStorage.getItem("token");

  const dispatch = useAppDispatch();

  const likeHandler = () => {
    token && isLike === true
      ? dispatch(deleteLike.initiate(contentID))
      : dispatch(postLike.initiate(true));
  };

  return (
    <IconWrapper>
      <IconBox onClick={likeHandler}>
        {isLike === false ? (
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
