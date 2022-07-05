import TextAccueil from "@components/TextAccueil/TextAccueil";
import TextAccueilSecond from "@components/TextAccueil/TextAccueilSecond";
import Carousels from "@components/Carousel/Carousels";
import MenuBurger from "@components/MenuBurger";
import Footer from "@components/Footer";

export default function Accueil() {
  return (
    <>
      <MenuBurger />
      <Carousels />
      <TextAccueil />
      <h2 className="panierTitle">
        LE PANIER
        <span className="spanLine" />
      </h2>
      <TextAccueilSecond />
      <Footer />
    </>
  );
}
