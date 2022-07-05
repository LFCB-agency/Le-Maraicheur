import TextAccueil from "@components/TextAccueil/TextAccueil";
import TextAccueilSecond from "@components/TextAccueil/TextAccueilSecond";
import Carousels from "@components/Carousel/Carousels";

export default function Accueil() {
  return (
    <>
      <Carousels />
      <TextAccueil />
      <h2 className="panierTitle">
        LE PANIER
        <span className="spanLine" />
      </h2>
      <TextAccueilSecond />
    </>
  );
}
