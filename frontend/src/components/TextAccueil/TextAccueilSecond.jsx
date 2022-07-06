import { useState, useEffect } from "react";
import axios from "axios";

export default function TextAccueilSecond() {
  const [textHome, setTextHome] = useState([]);

  const getText = async () => {
    try {
      const data = await axios
        .get(`${import.meta.env.VITE_BACKEND_URL}text?page=home&textSection=2`)
        .then((response) => response.data);
      setTextHome(data);
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
    <div className="textHome2">
      <img
        className="boxGlass"
        src="/src/assets/pictures/IMG_0349.png"
        alt="jardin"
      />
      {textHome.map((text) => (
        <div className="body2" key={text.id}>
          <p key={text.id}>{text.body}</p>
          <button type="button" className="buttonPanier">
            <p>Plus de détails</p>
          </button>
        </div>
      ))}
      <span className="panierUnderline" />
    </div>
  );
}
