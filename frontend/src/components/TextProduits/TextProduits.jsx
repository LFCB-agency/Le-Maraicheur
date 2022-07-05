import { useState, useEffect } from "react";
import axios from "axios";

export default function TextProduits() {
  const [textProduit, setTextProduit] = useState([]);
  // const [imageHome, setImageHome] = useState([]);

  const getText = async () => {
    try {
      const data = await axios
        .get(`${import.meta.env.VITE_BACKEND_URL}text?page=produit`)
        .then((response) => response.data);
      setTextProduit(data);
      // console.log(data);
    } catch (err) {
      if (err.response.status === 401) {
        // eslint-disable-line
        alert("text doesn't exists");
      }
    }
  };
  useEffect(() => {
    getText();
  }, []);
  return (
    <div>
      {textProduit.map((text) => (
        <div key={text.id}>
          <h1 key="title1">{text.title}</h1>
          <p key="body1">{text.body}</p>
        </div>
      ))}
    </div>
  );
}
