import axios from "axios";
import { useState, useEffect } from "react";

export default function Update() {
  const [update, setUpdate] = useState([]);

  const getUpdate = async () => {
    try {
      const data = await axios
        .get("http://localhost:8000/api/pictures?picSection=2&categories=home")
        .then((response) => response.data);
      setUpdate(data);
      // console.log(data);
    } catch (err) {
      if (err.response.status === 401) {
        // eslint-disable-line
        alert("Data can't be reached");
      }
    }
  };
  useEffect(() => {
    getUpdate();
  }, []);

  return (
    <div>
      <ul>
        {update?.map((picture) => (
          <li key={picture.id}>{picture.file}</li>
        ))}
      </ul>
    </div>
  );
}
