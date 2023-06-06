import React, { useRef, useMemo, useState, useEffect } from "react";
import ReactQuill from "react-quill";
import { Quill } from "react-quill";
import { useGetPresignedUrlMutation } from "../../../services/api";
import "react-quill/dist/quill.snow.css";

import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../../services/store";
import { setWriteContents } from "../services/write.slice";
import ImageResize from "quill-image-resize";

const Editors = () => {
  const quillRef = useRef<ReactQuill>(null);
  const [imageUrl, setImageUrl] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [getPresignedUrl, { data: presignedUrl }] =
    useGetPresignedUrlMutation();

  const dispatch = useAppDispatch();
  const writeContents = useAppSelector((state) => state.write.diary.contents);
  console.log("presignedUrl======", presignedUrl);

  const contentsHandler = (value: string) => {
    dispatch(setWriteContents(value));
  };

  const imageHandler = () => {
    const input = document.createElement("input");

    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.addEventListener("change", async () => {
      const [file]: any = input.files;
      const fileName = { fileName: file.name };
      setImageFile(file);

      await getPresignedUrl(fileName);
    });
  };

  useEffect(() => {
    if (presignedUrl) {
      const uploadImage = async () => {
        await fetch(presignedUrl.url, {
          method: "PUT",
          headers: {
            "Content-Type": "image/*",
          },
          body: imageFile,
        }).then((res) => {
          setImageUrl(res.url.split("?", 1)[0]);
        });
      };

      uploadImage();
    }
  }, [presignedUrl]);

  useEffect(() => {
    const editor = quillRef.current?.editor;
    const range = quillRef.current?.getEditor().getSelection()?.index;
    if (range !== null && range !== undefined) {
      editor?.insertEmbed(range, "image", imageUrl);
    }
  }, [imageUrl]);

  Quill.register("modules/ImageResize", ImageResize);

  const formats = [
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

  const undoChange = (quill: any) => {
    quill.history.undo();
  };
  const redoChange = (quill: any) => {
    quill.history.redo();
  };

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ size: [] }],
          [{ header: [1, 2, 3] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ align: [] }, { color: [] }, { background: [] }],
          ["image"],
        ],
        handlers: { image: imageHandler, undo: undoChange, redo: redoChange },
      },
      clipboard: {
        matchVisual: false,
      },
      history: {
        delay: 500,
        maxStack: 100,
        userOnly: true,
      },
      ImageResize: {
        parchment: Quill.import("parchment"),
      },
    }),
    []
  );

  return (
    <>
      {/* <ToolBar quillRef={quillRef} /> */}
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
