/* eslint-disable react/self-closing-comp */
/* eslint-disable no-restricted-globals */
/* eslint-disable */

import { Link } from "react-router-dom";
import parse from "html-react-parser";
import MenuBurger from "@components/MenuBurger";
import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import useModal from "@services/useModal";
import { useEffect, useState } from "react";
import axios from "axios";
import Modal2 from "@components/Modal2";

export default function Produit() {
  const [textHome, setTextHome] = useState([]);
  const { isShowing, toggle } = useModal();
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
    <section>
      <Navbar />
      <MenuBurger />
      <h1 className="titre-product">NOS PRODUITS</h1>
      <hr className="product-hr"></hr>
      <div className="products-picto">
        <Link className="product-image " id="legume" to="*">
          <img
            className="imageprod1"
            alt=" vegetable "
            src="src/assets/pictures/vegetable.png"
          />
          <p className="legume-product">NOS LÉGUMES</p>
          <span className="spanLine" />
        </Link>
        <Link className="product-image" id="fermier" to="*">
          <img
            className="imageprod2"
            alt=" oil "
            src="src/assets/pictures/oil.png"
          />
          <p className="legume-product"> PRODUITS FERMIERS</p>
          <span className="spanLine" />
        </Link>
        <Link className="product-image" id="plant" to="*">
          <img
            className="imageprod3"
            alt="plants"
            src="src/assets/pictures/plant.png"
          />
          <p className="legume-product">NOS PLANTS</p>
          <span className="spanLine" />
        </Link>
        <div className="product-image" id="panier">
          <img
            className="imageprod4"
            alt="basket"
            src="src/assets/pictures/basket.png"
            onClick={toggle}
          />
          <p className="legume-product">LE PANIER</p>
          <span className="spanLine" />
        </div>

        {textHome.map((text) => (
          <div className="modal-container">
            <Modal2
              isShowing={isShowing}
              hide={toggle}
              key={text.id}
              title={text.title}
              body={parse(text.body)}
            />
          </div>
        ))}
      </div>
      <br />
      <Footer />
    </section>
  );
}
