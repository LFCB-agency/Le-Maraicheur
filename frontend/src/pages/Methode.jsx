/* eslint-disable import/no-unresolved */
import ImageMethode from "@components/ImageMethode/ImageMethode";
import MenuBurger from "@components/MenuBurger";
import Footer from "@components/Footer";
import TextMethode from "@components/TextMethode/TextMethode";
import TextMethodeSecond from "@components/TextMethode/TextMethodeSecond";
import "../components/TextMethode/textMethode.scss";
import ImageMethodeSecond from "@components/ImageMethode/ImageMethodeSecond";

export default function Methode() {
  return (
    <>
      <MenuBurger />
      <ImageMethode />
      <TextMethode />
      <span className="textUnderline" />
      <ImageMethodeSecond />
      <TextMethodeSecond />
      <Footer />
    </>
  );
}
