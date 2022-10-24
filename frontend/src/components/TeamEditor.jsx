/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import { useState } from "react";
import axios from "axios";

const TextEditor = () => {
  const [content, setContent] = useState("");
  const [categories, setCategories] = useState("");
  const [section, setSection] = useState("");

  const insertText = () => {
    const data = { body: content, textSection: section, page: categories };
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}text`, data)
      .then((result) => {
        return (
          setContent(result.data.body),
          setTimeout(() => {
            window.location.reload();
          }, 1500)
        );
      });
  };

  return (
    <div className="text-editor">
      <label htmlFor="picture-description">
        {" "}
        Contenu
        <input
          type="text"
          placeholder="contenu"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </label>
      <label htmlFor="picture-categories">
        Select a categorie :
        <select
          value={categories}
          onChange={(e) => setCategories(e.target.value)}
        >
          <option value="select">Select</option>
          <option value="propos">propos</option>
        </select>
      </label>
      <label htmlFor="picture-categories">
        Select a categorie :
        <select value={section} onChange={(e) => setSection(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </label>
      <button type="button" onClick={() => insertText()}>
        Soumettre un nouveau texte
      </button>
    </div>
  );
};

export default TextEditor;
