import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ArticleCard() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    autoplayspeed: 2500,
    adaptiveHeight: true,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          autoplay: false,
          autoplayspeed: 2500,
          adaptiveHeight: true,
          pauseOnHover: true,
        },
      },
    ],
  };
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
    <div className="article-carousel-container">
      <Slider {...settings}>
        {article?.map((items) => (
          <div key={items.id} className="card-main-container">
            <h2 className="card-article-title">{items.title}</h2>
            <a
              rel="noreferrer"
              target="_blank"
              href={items.link}
              alt={items.alt}
            >
              <img
                className="card-image-article"
                src={`${import.meta.env.VITE_IMAGES_URL}${items.image}`}
                alt={items.alt}
              />
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
}
