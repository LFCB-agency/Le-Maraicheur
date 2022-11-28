import { useState, useEffect } from "react";
import parse from "html-react-parser";
import axios from "axios";

export default function TextAmapSecond() {
  const [textAmap, setTextAmap] = useState([]);

  const getText = async () => {
    try {
      const data = await axios
        .get(`${import.meta.env.VITE_BACKEND_URL}text?page=amap&textSection=2`)
        .then((response) => response.data);
      setTextAmap(data);
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
    <div className="body-amap-2">
      {textAmap.map((text) => (
        <div key={text.id}>{parse(text.body)}</div>
      ))}
    </div>
  );
}
