import { useState } from "react";

import axios from "@services/axios";

export default function Upload() {
  const [selectedFile, setSelectedFile] = useState();
  const [fileCreated, setFileCreated] = useState();
  // const [updateFile, setUpdateFile] = useState();
  const [description, setDescription] = useState("");

  // on va specifier que seulement deux types de fichiers peuvent fonctionner
  const handleInput = (e) => {
    const file = e.target.files[0];
    if (file.type !== "image/png" && file.type !== "image/jpeg") {
      return alert("Select a jpeg or a png image");
    }
    return setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("alt", JSON.stringify({ description }));
    try {
      const { data } = await axios.post("pictures/upload", formData);
      return setFileCreated(data);
    } catch (err) {
      console.warn(err);
      return alert(err.message);
    }
  };

  // const handleUpdate = async (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("file", updateFile);
  //   formData.append("alt", JSON.stringify({ description }));
  //   try {
  //     const { data } = await axios.post("images/put", formData);
  //     return setUpdateFile(data);
  //   } catch (err) {
  //     return alert(err.message);
  //   }
  // };
  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit"> Upload Pic</button>
      {fileCreated && (
        <img
          src={`${import.meta.env.VITE_IMAGES_URL}${fileCreated.file}`}
          alt={fileCreated.alt}
        />
      )}

      {/* <button type="submit"> Update Pic</button>
      {updateFile && (
        <img
          src={`${import.meta.env.VITE_IMAGES_URL}${updateFile.file}`}
          alt={updateFile.alt}
        />
      )} */}
    </form>
  );
}
