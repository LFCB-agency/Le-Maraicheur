import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import "./carousel.css";

export default function Carousels() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplayspeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
          autoplayspeed: 4000,
          pauseOnHover: true,
        },
      },
    ],
  };

  const [imageCarousel, setImageCarousel] = useState([]);
  const getImage = async () => {
    try {
      const data = await axios
        .get(`${import.meta.env.VITE_BACKEND_URL}pictures?categories=carousel`)
        .then((response) => response.data);
      setImageCarousel(data);
      // console.log(data);
    } catch (err) {
      if (err.response.status === 401) {
        alert("Can't fetch pictures");
      }
    }
  };
  useEffect(() => {
    getImage();
  }, []);

  return (
    <div>
      <Slider {...settings}>
        {imageCarousel.map((image) => (
          <div key={image.id} className="carousel">
            <div className="card">
              <div className="card-top">
                <img
                  src={`${import.meta.env.VITE_IMAGES_URL}${image.file}`}
                  alt="a"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
