/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import { useState, useRef } from "react";
import axios from "axios";
import JoditEditor from "jodit-react";

const TextEditor = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  let updatedContent = "";
  const [currentId, setCurrentId] = useState();

  const config = {
    readonly: false,
    height: 400,
    buttons: [
      "source",
      "|",
      "bold",
      "strikethrough",
      "underline",
      "italic",
      "|",
      "outdent",
      "indent",
      "|",
      "font",
      "fontsize",
      "brush",
      "|",
      "table",
      "link",
      "|",
      "align",
      "undo",
      "redo",
      "|",
      "hr",
      "eraser",
      "|",
      "symbol",
      "print",
    ],
    buttonsXS: [
      "source",
      "|",
      "bold",
      "strikethrough",
      "underline",
      "italic",
      "|",
      "outdent",
      "indent",
      "|",
      "font",
      "fontsize",
      "brush",
      "|",
      "table",
      "link",
      "|",
      "align",
      "undo",
      "redo",
      "|",
      "hr",
      "eraser",
      "|",
      "symbol",
      "print",
    ],
    controls: {
      font: {
        list: {
          "Montserrat,sans-serif": "Montserrat",
        },
      },
    },
  };
  // const handleUpdate = (e) => {
  //   const editorContent = e.target.value;
  //   updatedContent = editorContent;
  // };

  const fetchTextById = (id) => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/text/${id}`)
      .then((result) => {
        setCurrentId(result.data.id);
        updatedContent = result.data.body;
        return setContent(result.data.body);
      });
  };

  const insertTextById = (id) => {
    axios.put(`${import.meta.env.VITE_BACKEND_URL}text/${id}`, {
      body: updatedContent,
    });
  };

  return (
    <div className="text-editor">
      <button type="button" onClick={() => fetchTextById(3)}>
        A propos/1
      </button>
      <button type="button" onClick={() => fetchTextById(4)}>
        A propos/2
      </button>
      <button type="button" onClick={() => fetchTextById(5)}>
        A propos/3
      </button>
      <button type="button" onClick={() => fetchTextById(6)}>
        A propos/4
      </button>

      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        // onBlur={handleUpdate}
        onChange={(newContent) => {
          updatedContent = newContent;
        }}
      />
      <button type="button" onClick={() => insertTextById(currentId)}>
        Submit
      </button>
    </div>
  );
};

export default TextEditor;
