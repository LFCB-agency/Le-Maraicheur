import { useState, useEffect } from "react";
import axios from "axios";
import parse from "html-react-parser";
import "../../styles/components/methode.scss";
import { Button } from "@mui/material";

export default function TextMethodeSecond() {
  const [textMethode, setTextMethode] = useState([]);
  const [showMore, setShowMore] = useState(false);
  // const mobile = window.screen.width <= 700;

  const getText = async () => {
    try {
      const data = await axios
        .get(
          `${import.meta.env.VITE_BACKEND_URL}text?page=methode&textSection=2`
        )
        .then((response) => response.data);
      setTextMethode(data);
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
      {textMethode.map((text) => (
        <div className="text-container" key={text.id}>
          {showMore ? (
            <p className="bodySec">{parse(text.body)}</p>
          ) : (
            `${text.body.substring(0, 250)}...`
          )}
          <Button className="showbutton" onClick={() => setShowMore(!showMore)}>
            {showMore ? "Less" : "More"}
          </Button>
        </div>
      ))}
    </div>
  );
}
