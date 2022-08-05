import CardContent from "@mui/material/CardContent";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ArticleCard() {
  const [article, setArticle] = useState();

  const getArticle = async () => {
    try {
      const data = await axios
        .get(`${import.meta.env.VITE_BACKEND_URL}article`)
        .then((response) => response.data);
      setArticle(data);
      // console.log(data);
    } catch (err) {
      if (err.sendStatus === 401) {
        // eslint-disable-next-line
        alert("Can't fetch Articles");
      }
    }
  };

  useEffect(() => {
    getArticle();
  }, []);

  return (
    <div className="card-main-container">
      {/* sans le boolean avant le map, le site crash */}
      {article?.map((items) => (
        <section key={items.id} className="card-container-article">
          <CardContent key={items.id}>
            <a href={items.link} alt={items.alt}>
              <h2 className="card-article-title">{items.title}</h2>
            </a>
            <img
              className="card-image-article"
              src={`${import.meta.env.VITE_IMAGES_URL}${items.image}`}
              alt={items.alt}
            />
          </CardContent>
        </section>
      ))}
    </div>
  );
}
