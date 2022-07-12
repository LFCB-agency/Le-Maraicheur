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
      <div className="products-picto">
        <Link className="product-image" to="*">
          <img
            className="imageprod1"
            alt=" vegetable "
            src="src/assets/pictures/vegetable.png"
          />
          <p className="legume-product">NOS LÉGUMES</p>
        </Link>
        <span className="spanLine" />
        <Link className="product-image" to="*">
          <img
            className="imageprod2"
            alt=" oil "
            src="src/assets/pictures/oil.png"
          />
          <p className="legume-product"> PRODUITS FERMIERS</p>
        </Link>
        <span className="spanLine" />
        <Link className="product-image" to="*">
          <img
            className="imageprod3"
            alt="plants"
            src="src/assets/pictures/plant.png"
          />
          <p className="legume-product">NOS PLANTS</p>
        </Link>
        <span className="spanLine" />
        <Link className="product-image" to="*">
          <img
            className="imageprod4"
            alt="basket"
            src="src/assets/pictures/basket.png"
          />
          <p className="legume-product">LE PANIER</p>
        </Link>
        <span className="spanLine" />
      </div>
      <br />
      <Footer />
    </>
  );
}
