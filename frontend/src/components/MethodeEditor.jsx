/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import { useState, useRef } from "react";
import axios from "axios";
import JoditEditor from "jodit-react";
import Upload from "@pages/Upload";
import AlertSucces from "./AlertSucces";

const TextEditor = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  let updatedContent = "";
  const [currentId, setCurrentId] = useState();
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");

  const config = {
    readonly: false,
    height: 350,
    allowResizeX: false,
    allowResizeY: false,
    showCharsCounter: false,
    showWordsCounter: false,
    showXPathInStatusbar: false,
    buttons: [
      "bold",
      "strikethrough",
      "underline",
      "italic",
      "|",
      "outdent",
      "indent",
      "|",
      "font",
      "brush",
      "|",
      "table",
      "link",
      "|",
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
      "bold",
      "strikethrough",
      "underline",
      "italic",
      "|",
      "outdent",
      "indent",
      "|",
      "font",
      "brush",
      "|",
      "table",
      "link",
      "|",
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
          "Poppins, sans-serif": "Poppins",
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
    if (
      confirm(
        "Êtes vous sûr de vouloir soumettre ces modifications? \nCliquer sur OK pour confirmer ou annuler."
      )
    ) {
      axios
        .put(`${import.meta.env.VITE_BACKEND_URL}text/${id}`, {
          body: updatedContent,
        })
        .then((response) => {
          setMessage(response.data);
          return (
            setSuccess(true),
            setTimeout(() => {
              window.location.reload();
            }, 1500)
          );
        });
      setSuccess(false);
    }
  };
  const buttonStyle = (id) =>
    currentId === id ? "button-admin-choice" : "button-admin-choice-disable";
  return (
    <section>
      {success ? <AlertSucces message={message} /> : ""}
      <button
        type="button"
        onClick={() => fetchTextById(7)}
        className={buttonStyle(7)}
      >
        Introduction
      </button>
      <button
        type="button"
        onClick={() => fetchTextById(8)}
        className={buttonStyle(8)}
      >
        Section: N°1
      </button>
      <button
        type="button"
        onClick={() => fetchTextById(9)}
        className={buttonStyle(9)}
      >
        Section: N°2
      </button>
      <button
        type="button"
        onClick={() => fetchTextById(10)}
        className={buttonStyle(10)}
      >
        Section: N°3
      </button>
      <div className="text-editor">
        <JoditEditor
          ref={editor}
          value={content}
          config={config}
          // onBlur={handleUpdate}
          onChange={(newContent) => {
            updatedContent = newContent;
          }}
        />
      </div>
      <div className="button-container--adminhome">
        <button
          type="button"
          onClick={() => insertTextById(currentId)}
          className="editor-btn"
        >
          Soumettre
        </button>
      </div>
      <Upload />
    </section>
  );
};

export default TextEditor;
