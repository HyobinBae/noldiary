import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { ToolBar, formats, modules } from "./ToolBar";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../../services/store";
import { setWriteContents } from "../services/write.slice";

const Editors = () => {
  const dispatch = useAppDispatch();
  const writeContents = useAppSelector((state) => state.write.diary.contents);

  const contentsHandler = (value: string) => {
    dispatch(setWriteContents(value));
  };

  return (
    <>
      <ToolBar />
      <QuillStyle
        placeholder="당신의 여정을 입력해보세요"
        value={writeContents}
        onChange={contentsHandler}
        formats={formats}
        modules={modules}
      />
    </>
  );
};

export default Editors;
const QuillStyle = styled(ReactQuill)`
  margin-top: 30px;
  height: 100vh;

  ::placeholder {
    font-size: 40px;
  }
  .ql-container {
    border: none;
  }
`;
