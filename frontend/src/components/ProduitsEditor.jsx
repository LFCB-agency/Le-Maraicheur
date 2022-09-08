/* eslint-disable no-undef */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import { useState, useRef } from "react";
import axios from "axios";
import JoditEditor from "jodit-react";
import Upload from "@pages/Upload";
import AlertSucces from "./AlertSucces";

const ProduitsEditor = () => {
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
          "Poppins, sans-serif": "Poppins",
        },
      },
    },
  };

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
          setSuccess(true);
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
        onClick={() => fetchTextById(2)}
        className={buttonStyle(2)}
      >
        Pop-Up Panier
      </button>
      <button
        type="button"
        onClick={() => fetchTextById(11)}
        className={buttonStyle(11)}
      >
        AMAP
      </button>
      <button
        type="button"
        onClick={() => fetchTextById(12)}
        className={buttonStyle(12)}
      >
        MES AVANTAGES
      </button>
      <button
        type="button"
        onClick={() => fetchTextById(13)}
        className={buttonStyle(13)}
      >
        MARAICHEUR
      </button>
      <button
        type="button"
        onClick={() => fetchTextById(14)}
        className={buttonStyle(14)}
      >
        ABONNEMENTS
      </button>
      <button
        type="button"
        onClick={() => fetchTextById(15)}
        className={buttonStyle(15)}
      >
        CONTENU PANIER
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
      {/* <Upload /> */}
      <div className="button-container-produits">
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

export default ProduitsEditor;
