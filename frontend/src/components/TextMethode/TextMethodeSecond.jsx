import { useState, useEffect } from "react";
import axios from "axios";
import parse from "html-react-parser";
import "../../styles/components/methode.scss";
import { Button } from "@mui/material";

export default function TextMethodeSecond() {
  const [textMethode, setTextMethode] = useState([]);
  const [showMore, setShowMore] = useState(false);

  const getText = async () => {
    try {
      const data = await axios
        .get(
          `${import.meta.env.VITE_BACKEND_URL}text?page=methode&textSection=2`
        )
        .then((response) => response.data);
      setTextMethode(data);
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
    <section>
      {textMethode.map((text) => (
        <section key={text.id}>
          <div className="text-container">
            {showMore ? (
              <div className="bodySec">
                {parse(text.body.substring(0, 250).concat("..."))}
              </div>
            ) : (
              <div className="bodySec">{parse(text.body)}</div>
            )}
            <Button
              variant="outlined"
              id="buttondisabled"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Voir plus" : "Voir moins"}
            </Button>
          </div>
        </section>
      ))}
    </section>
  );
}
