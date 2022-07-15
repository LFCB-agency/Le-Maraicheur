/* eslint-disable react/self-closing-comp */
import { Link } from "react-router-dom";
import MenuBurger from "@components/MenuBurger";
import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import "../styles/components/produit.scss";

export default function Produit() {
  return (
    <>
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
        <Link className="product-image" id="panier" to="*">
          <img
            className="imageprod4"
            alt="basket"
            src="src/assets/pictures/basket.png"
          />
          <p className="legume-product">LE PANIER</p>
          <span className="spanLine" />
        </Link>
      </div>
      <br />
      <Footer />
    </>
  );
}
