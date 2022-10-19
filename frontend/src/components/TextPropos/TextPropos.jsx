import { useState, useEffect } from "react";
import axios from "axios";
import parse from "html-react-parser";
import { Button } from "@mui/material";

export default function TextPropos() {
  const [textPropos, setTextPropos] = useState([]);
  const [showMore, setShowMore] = useState(false);

  const getText = async () => {
    try {
      const data = await axios
        .get(`${import.meta.env.VITE_BACKEND_URL}pictures`)
        .then((response) => response.data);
      setTextPropos(data.filter((pic) => pic.categories === "propos"));
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
    <div className="team-main">
      <h2 className="teamtitle">Notre Équipe</h2>
      <span className="spanLine" />
      {textPropos.map((text) => (
        <div className="team-container" key={text.id}>
          <div className="container-image-propos">
            <div className="container--paragraphe-propos">
              <p className="team-title">{text.title}</p>
            </div>
            <img
              className="team-image"
              src={`${import.meta.env.VITE_IMAGES_URL}${text.file}`}
              alt={text.alt}
            />
          </div>
          {showMore ? (
            <p className="team-body">
              {parse(text.text.substring(0, 250).concat("..."))}
            </p>
          ) : (
            <p className="team-body">{parse(text.text)}</p>
          )}
          <Button
            sx={{
              margin: "0px",
            }}
            variant="outlined"
            id="buttonshowmore"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Voir plus" : "Voir moins"}
          </Button>
        </div>
      ))}
    </div>
  );
}
