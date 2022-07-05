import { useState, useEffect } from "react";
import axios from "axios";

export default function ImageMethode() {
  const [imageMethode, setImageMethode] = useState([]);
  // const [imageHome, setImageHome] = useState([]);

  const getText = async () => {
    try {
      const data = await axios
        .get(`${import.meta.env.VITE_BACKEND_URL}pictures?categories=methode`)
        .then((response) => response.data);
      setImageMethode(data);
      // console.log(data);
    } catch (err) {
      if (err.response.status === 401) {
        // eslint-disable-line
        alert("Picture doesn't exists");
      }
    }
  };
  useEffect(() => {
    getText();
  }, []);
  return (
    <div>
      {imageMethode.map((image) => (
        <div key={image.id}>
          <img
            src={`${import.meta.env.VITE_IMAGES_URL}${image.file}`}
            alt={image.alt}
          />
        </div>
      ))}
    </div>
  );
}
