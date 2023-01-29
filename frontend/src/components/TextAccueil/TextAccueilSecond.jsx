import { useState, useEffect } from "react";
import parse from "html-react-parser";
import axios from "axios";
import vegetables from "@assets/pictures/IMG_0349.webp";
import { Link } from "react-router-dom";

export default function TextAccueilSecond() {
  const [textHome, setTextHome] = useState([]);

  const getText = async () => {
    try {
      const data = await axios
        .get(`${import.meta.env.VITE_BACKEND_URL}text?page=home&textSection=2`)
        .then((response) => response.data);
      setTextHome(data);
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
      <img className="boxGlass" src={vegetables} alt="jardin" />
      {textHome.map((text) => (
        <section key={text.id}>
          <div className="body2">
            <p key={text.id}>{parse(text.body)}</p>
            <button type="button" className="buttonPanier">
              <Link to="/amap">
                <p>Plus de détails</p>
              </Link>
            </button>
          </div>
        </section>
      ))}
    </div>
  );
}
