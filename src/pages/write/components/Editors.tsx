import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { ToolBar, formats, modules } from "./ToolBar";

const Editors = () => {
  const [value, setValue] = useState("");

  const editorStyle = {
    marginTop: "30px",
    height: "40vh",
  };

  console.log(value);

  return (
    <>
      <ToolBar />
      <ReactQuill
        placeholder="당신의 여정을 입력해보세요"
        theme="snow"
        value={value}
        onChange={setValue}
        style={editorStyle}
        formats={formats}
        modules={modules}
      />
    </>
  );
};

export default Editors;
