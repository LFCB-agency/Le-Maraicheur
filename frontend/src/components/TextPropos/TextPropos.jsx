import { useState, useEffect } from "react";
import "./TextPropos.css";
import axios from "axios";

export default function TextPropos() {
  const [textPropos, setTextPropos] = useState([]);

  const getText = async () => {
    try {
      const data = await axios
        .get(`${import.meta.env.VITE_BACKEND_URL}team`)
        .then((response) => response.data);
      setTextPropos(data);
      // console.log(data);
    } catch (err) {
      if (err.response.status === 401) {
        // eslint-disable-next-line
        alert("text doesn't exists");
      }
    }
  };
  useEffect(() => {
    getText();
  }, []);
  return (
    <div>
      {textPropos.map((text) => {
        return (
          <div className="team-container" key={text.id}>
            <img
              className="team-image"
              src={`${import.meta.env.VITE_IMAGES_URL}${text.file}`}
              alt={text.alt}
            />
            <h3 className="team-title">{text.title}</h3>
            <p className="team-body">{text.body}</p>
          </div>
        );
      })}
    </div>
  );
}
