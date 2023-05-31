import React from "react";
import { Quill } from "react-quill";
import {
  useGetPresignedUrlMutation,
  useUploadImageMutation,
} from "../../../services/api";
import { useAppSelector } from "../../../services/store";
import { selectImageUrl, selectPresignedUrl } from "../services/write.slice";
import ImageResize from "quill-image-resize";

export const ToolBar = (quillRef) => {
  const [getPresignedUrl] = useGetPresignedUrlMutation();
  const [uploadImage] = useUploadImageMutation();
  const presignedUrl = useAppSelector(selectPresignedUrl).url;
  const imageUrl = useAppSelector(selectImageUrl);

  const imageHandler = () => {
    const input = document.createElement("input");

    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    document.body.appendChild(input);
    document.body.removeChild(input);
    input.click();

    input.onchange = async () => {
      const [file]: any = input.files;
      const formData = new FormData();
      formData.append("img", file);

      await getPresignedUrl(file);
      await uploadImage({ url: presignedUrl, file: file });

      const editor = quillRef.current.getEditor();
      const range = editor.getSelection();
      editor.insertEmbed(range.index, "image", imageUrl);
    };
  };

  return (
    <div id="toolbar" style={{ border: "none" }}>
      <span className="ql-formats">
        <select className="ql-size" defaultValue="medium">
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
          <option value="huge">Huge</option>
        </select>
        <select className="ql-header">
          <option value="1">Header 1</option>
          <option value="2">Header 2</option>
          <option value="3">Header 3</option>
          <option value="4">Header 4</option>
          <option value="5">Header 5</option>
          <option value="6">Header 6</option>
        </select>
      </span>
      <span className="ql-formats">
        <button className="ql-bold" />
        <button className="ql-italic" />
        <button className="ql-underline" />
        <button className="ql-strike" />
        <button className="ql-blockquote" />
      </span>
      <span className="ql-formats">
        <select className="ql-align" />
        <select className="ql-color" />
        <select className="ql-background" />
      </span>
      <span className="ql-formats">
        <button className="ql-image" onClick={imageHandler}></button>
        <button className="ql-video"></button>
        <button className="ql-link"></button>
      </span>
    </div>
  );
};

const undoChange = (quill: any) => {
  quill.history.undo();
};
const redoChange = (quill: any) => {
  quill.history.redo();
};

Quill.register("modules/ImageResize", ImageResize);
export const modules = {
  toolbar: {
    container: "#toolbar",
    handlers: {
      undo: undoChange,
      redo: redoChange,
    },
  },
  history: {
    delay: 500,
    maxStack: 100,
    userOnly: true,
  },
  ImageResize: {
    parchment: Quill.import("parchment"),
  },
};

export const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "align",
  "color",
  "background",
  "blockquote",
  "list",
  "image",
  "video",
  "link",
];
