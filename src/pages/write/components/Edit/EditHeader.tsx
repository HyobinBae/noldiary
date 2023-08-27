import React, { useState } from "react";
import DivideLine from "../../../../components/DivideLine";
import EditDetail from "./EditDetail";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../../../services/store";
import { setTitle } from "../../services/write.slice";

const EditHeader = () => {
  const [edited, setEdited] = useState(false);
  const dispatch = useAppDispatch();
  const editedTitle = useAppSelector((state) => state.write.diary.title);
  const prevTitle = useAppSelector((state) => state.diary.getDiaryDetail.title);

  const title = edited ? editedTitle : prevTitle;

  const titleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setTitle(e.target.value));
    setEdited(true);
  };

  return (
    <>
      <TitleBox
        type="text"
        value={title}
        placeholder="제목을 입력하세요"
        onChange={titleHandler}
      ></TitleBox>
      <DivideLine />
      <EditDetail />
      <DivideLine />
    </>
  );
};

export default EditHeader;

const TitleBox = styled.input`
  width: 100%;
  height: 55px;

  border: none;
  outline: none;
  font-size: 30px;

  ::placeholder {
    display: flex;
    align-items: center;

    padding: 10px 0px;
    font-size: 30px;
  }
`;
