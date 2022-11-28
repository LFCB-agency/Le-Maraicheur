/* eslint-disable import/no-unresolved */
import ImageMethode from "@components/ImageMethode/ImageMethode";
import MenuBurger from "@components/MenuBurger";
import Footer from "@components/Footer";
import TextMethode from "@components/TextMethode/TextMethode";
import TextMethodeSecond from "@components/TextMethode/TextMethodeSecond";
import ImageMethodeSecond from "@components/ImageMethode/ImageMethodeSecond";
import ImageMethodeThird from "@components/ImageMethode/ImageMethodeThird";
import ImageMethodeFourth from "@components/ImageMethode/ImageMethodeFourth";
import TextMethodeThird from "@components/TextMethode/TextMethodeThird";
import TextMethodeFourth from "@components/TextMethode/TextMethodeFourth";
import Navbar from "@components/Navbar";
import { Helmet } from "react-helmet";

export default function Methode() {
  return (
    <>
      <Helmet>
        <meta
          description="Site Internet Du Maraicher Maraicheur Antoine Debray"
          charSet="utf-8"
          keywords="Maraicher, Maraicheur, Antoine Debray, Debray, Sol Vivant, Gestion du sol,
       Culture de la terre, terre, fetile, agriculteur, légumes premium, champs, paysan "
        />
        <link href="http://lemaraicheur.com/methode" />
      </Helmet>
      <Navbar />
      <MenuBurger />
      <ImageMethode />
      <TextMethode />
      <div className="methodeGrid">
        <div className="gridimg2">
          <ImageMethodeSecond />
        </div>
        <div className="gridtext2">
          <TextMethodeSecond />
        </div>
        <div className="gridimg3">
          <ImageMethodeThird />
        </div>
        <div className="gridtext3">
          <TextMethodeThird />
        </div>
        <div className="gridimg4">
          <ImageMethodeFourth />
        </div>
        <div className="gridtext4">
          <TextMethodeFourth />
        </div>
      </div>
      <Footer />
    </>
  );
}
