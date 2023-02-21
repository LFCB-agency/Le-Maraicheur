/* eslint-disable react/jsx-no-undef */
/* eslint-disable import/no-unresolved */
import TextAccueil from "@components/TextAccueil/TextAccueil";
import TextAccueilSecond from "@components/TextAccueil/TextAccueilSecond";
import Carousels from "@components/Carousels";
import MenuBurger from "@components/MenuBurger";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Newsletter from "@components/Newsletter";
import ArticleCard from "@components/ArticleCard";
import { Helmet } from "react-helmet";

export default function Accueil() {
  return (
    <>
      <Helmet>
        <meta
          charSet="utf-8"
          name="description"
          content="Antoine Debray, Le Maraicheur maraicher situé à La Croix-du-Perche"
        />
        <meta
          name="keyword"
          content="DEBRAY ANTOINE, DEBRAY, maraicheur, maraicher, Croix-du-Perche, Les petites Guignieres, sol vivant, ferme"
        />
        <link rel="icon" type="image/svg+xml" href="src/assets/logo1.webp" />
        <title>Accueil - Le Maraicheur </title>
        <link href="https://lemaraicheur.fr/" />
      </Helmet>
      <Navbar />
      <MenuBurger />
      <Carousels />
      <div className="class-format">
        <TextAccueil />
        <h2 className="panierTitle">
          LE PANIER
          <span className="spanLine" />
        </h2>
        <TextAccueilSecond />
        <h2 className="panierTitle">
          PRESSE
          <span className="spanLine" />
        </h2>
        <ArticleCard />
        <h2 className="panierTitle">
          NEWSLETTER
          <span className="spanLine" />
        </h2>
        <Newsletter />
      </div>
      <Footer />
    </>
  );
}
