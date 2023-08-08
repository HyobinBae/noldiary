import React, { useState } from "react";
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

const IconBar = ({ likeProps, contentID }) => {
  const { data: isLike } = useGetLikeQuery(contentID);
  const token = localStorage.getItem("token");

  const [response, setResponse] = useState(isLike);
  const dispatch = useAppDispatch();

  const likeHandler = () => {
    (token && isLike === true) || response === true
      ? dispatch(deleteLike.initiate(likeProps.contentid)).then((res) => {
          if ("data" in res) {
            setResponse(res.data);
          }
        })
      : dispatch(postLike.initiate(likeProps)).then((res) => {
          if ("data" in res) {
            setResponse(res.data);
          }
        });
  };

  return (
    <IconWrapper>
      <IconBox onClick={likeHandler}>
        {isLike === true || response === true ? (
          <FaHeart size={20} color="#ff4040" />
        ) : (
          <FaRegHeart size={20} />
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
