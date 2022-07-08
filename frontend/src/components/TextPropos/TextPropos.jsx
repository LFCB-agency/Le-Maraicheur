import { useState, useEffect } from "react";
import parse from "html-react-parser";
import axios from "axios";

export default function TextPropos() {
  const [textPropos, setTextPropos] = useState([]);
  // const [imageHome, setImageHome] = useState([]);

  const getText = async () => {
    try {
      const data = await axios
        .get(`${import.meta.env.VITE_BACKEND_URL}text?page=propos`)
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
      {textPropos.map((text) => (
        <div key={text.id}>
          <h1 key="title1">{text.title}</h1>
          <p key="body1">{parse(text.body)}</p>
        </div>
      ))}
    </div>
  );
}
