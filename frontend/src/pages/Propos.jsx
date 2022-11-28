import TextPropos from "@components/TextPropos/TextPropos";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import MenuBurger from "@components/MenuBurger";
import { Helmet } from "react-helmet";

export default function Propos() {
  return (
    <div>
      <Helmet>
        <meta
          description="Site Internet Du Maraicher Maraicheur Antoine Debray"
          charSet="utf-8"
          keywords="Maraicher, Maraicheur, Antoine Debray, Debray, Sol Vivant, Gestion du sol,
       Culture de la terre, terre, fetile, agriculteur, légumes premium, champs, paysan "
        />
        <link href="http://lemaraicheur.com/apropos" />
      </Helmet>
      <Navbar />
      <MenuBurger />
      <TextPropos />
      <Footer />
    </div>
  );
}
