import React, { useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { ToolBar, formats, modules } from "./ToolBar";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../../services/store";
import { setWriteContents } from "../services/write.slice";

const Editors = () => {
  const quillRef = useRef<ReactQuill | null>(null);
  const dispatch = useAppDispatch();
  const writeContents = useAppSelector((state) => state.write.diary.contents);

  const contentsHandler = (value: string) => {
    dispatch(setWriteContents(value));
  };

  return (
    <>
      <ToolBar />
      <QuillEditor
        ref={quillRef}
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
const QuillEditor = styled(ReactQuill)`
  margin-top: 30px;
  height: 100vh;

  ::placeholder {
    font-size: 40px;
  }
  .ql-container {
    border: none;
  }
`;
