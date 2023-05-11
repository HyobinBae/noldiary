import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Editors = () => {
  const [value, setValue] = useState("");

  const editorStyle = {
    marginTop: "30px",
  };

  console.log(value);

  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={setValue}
      style={editorStyle}
    />
  );
};

export default Editors;
