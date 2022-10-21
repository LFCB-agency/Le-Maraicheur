/* eslint-disable no-alert */
// eslint-disable-next-line import/no-unresolved
/* eslint-disable no-restricted-globals */
/* eslint-disable consistent-return */

import axios from "@services/axios";
import { useState, useEffect } from "react";
import "../App.css";

export default function Upload() {
  const [selectedFile, setSelectedFile] = useState();
  const [fileCreated, setFileCreated] = useState();
  const [description, setDescription] = useState("");
  const [categories, setCategories] = useState("");
  const [section, setSection] = useState("");
  const [updateFile, setUpdateFile] = useState();
  const [text, setText] = useState();
  const [textId, setTextId] = useState();
  const [content, setContent] = useState("");
  const [image, setImage] = useState([]);

  // on va specifier que seulement deux types de fichiers peuvent fonctionner
  const handleInput = (e) => {
    const file = e.target.files[0];
    if (file.type !== "image/png" && file.type !== "image/jpeg") {
      // eslint-disable-next-line
      return alert("Select a jpeg or a png image");
    }
    return setSelectedFile(e.target.files[0]);
  };

  const insertText = () => {
    const data = {
      body: content,
      textSection: section,
      page: categories,
    };
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}text`, data)
      .then((result) => {
        return setContent(result.data.body);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append(
      "pictureData",
      JSON.stringify({
        description,
        categories,
        textId,
        picSection: section,
      })
    );

    if (
      confirm(
        "Êtes vous sûr de vouloir soumettre ces modifications? \nCliquer sur OK pour confirmer ou annuler."
      )
    )
      try {
        const { data } = await axios.post("team/upload", formData);
        // console.log(data);
        return (
          setFileCreated(data),
          alert(
            "Text Equipier ajouté !",
            setTimeout(() => {
              window.location.reload();
            }, 1500)
          )
        );
      } catch (err) {
        console.warn(err);
        // eslint-disable-next-line
      }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append(
      "pictureData",
      JSON.stringify({ description, categories, picSection: section })
    );
    const id = updateFile;
    if (
      confirm(
        "Êtes vous sûr de vouloir soumettre ces modifications? \nCliquer sur OK pour confirmer ou annuler."
      )
    )
      try {
        const { data } = await axios.put(
          `${import.meta.env.VITE_BACKEND_URL}pictures/update/${id}`,
          formData
        );
        return (
          setUpdateFile(data),
          alert(
            "Equipier ajouté !",
            setTimeout(() => {
              window.location.reload();
            }, 1500)
          )
        );
      } catch (err) {
        console.warn(err);
        // eslint-disable-next-line
        return alert(err.message);
      }
  };

  const getImage = async () => {
    try {
      const data = await axios
        .get(
          `${import.meta.env.VITE_BACKEND_URL}pictures?categories=${categories}`
        )
        .then((response) => response.data);
      // console.log(data);
      setImage(data);
    } catch (err) {
      if (err.response.status === 401) {
        // eslint-disable-next-line
        alert("Picture doesn't exists");
      }
    }
  };

  const getText = async () => {
    try {
      const data = await axios
        .get(`${import.meta.env.VITE_BACKEND_URL}text`)
        .then((response) => response.data);
      // console.log(data);
      setText(data.filter((item) => item.page === "propos"));
    } catch (err) {
      if (err.response.status === 401) {
        // eslint-disable-next-line
        alert("Picture doesn't exists");
      }
    }
  };
  useEffect(() => {
    getImage();
    getText();
  }, [categories]);

  return (
    <div>
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
          Submit new text
        </button>
      </div>
      <form className="upload-container" onSubmit={handleSubmit}>
        <label htmlFor="upload-picture">
          Select a pic :
          <input
            type="file"
            accept="image/png, image/jpeg"
            onChange={handleInput}
          />
        </label>
        <label htmlFor="picture-description">
          {" "}
          Picture Description :
          <input
            type="text"
            placeholder="picture description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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
          {categories === "propos" && (
            <select onChange={(e) => setTextId(e.target.value)}>
              {text.map((item) => (
                <option value={item.id}>{item.body.substring(0, 50)}</option>
              ))}
            </select>
          )}
        </label>
        <label htmlFor="picture-section">
          Select a section :
          <select value={section} onChange={(e) => setSection(e.target.value)}>
            <option value="select">Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </label>
        <label htmlFor="picture-id">
          <select onChange={(e) => setUpdateFile(e.target.value)}>
            <option value="Select">Select</option>
            {image.length ? (
              image.map((img) => (
                <option value={img.id} key={img.id}>
                  {img.file}
                </option>
              ))
            ) : (
              <option value="Select">Select</option>
            )}
          </select>
        </label>

        <button type="submit"> Upload Pic</button>

        {/* <Update /> */}
        {updateFile && (
          <img
            src={`${import.meta.env.VITE_IMAGES_URL}${updateFile.file}`}
            alt={updateFile.alt}
          />
        )}
        <button type="button" onClick={handleUpdate}>
          {" "}
          Update Pic
        </button>
        {fileCreated && (
          <img
            className="upload-image"
            src={`${import.meta.env.VITE_IMAGES_URL}${fileCreated.file}`}
            alt={fileCreated.alt}
          />
        )}
      </form>
    </div>
  );
}
