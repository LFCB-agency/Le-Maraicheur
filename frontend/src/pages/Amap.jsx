import Navbar from "@components/Navbar";
import MenuBurger from "@components/MenuBurger";
import Footer from "@components/Footer";
import TextAmap from "@components/TextAmap/TextAmap";
import TextAmapSecond from "@components/TextAmap/TextAmapSecond";
import TextAmapThird from "@components/TextAmap/TextAmapThird";
import TextAmapFourth from "@components/TextAmap/TextAmapFourth";
import TextAmapFifth from "@components/TextAmap/TextAmapFifth";

export default function Amap() {
  return (
    <>
      <Navbar />
      <MenuBurger />
      <h2 className="amap-main-title">
        AMAP
        <span className="spanLine" />
      </h2>
      <TextAmap />
      <h2 className="amapTitle">
        MES AVANTAGES
        <span className="spanLine" />
      </h2>
      <TextAmapSecond />
      <h2 className="amapTitle">
        L'AMAP Maraîcheur
        <span className="spanLine" />
      </h2>
      <TextAmapThird />
      <h2 className="amapTitle">
        ABONNEMENTS
        <span className="spanLine" />
      </h2>
      <TextAmapFourth />
      <h2 className="amapTitle">
        PANIER
        <span className="spanLine" />
      </h2>
      <TextAmapFifth />

      <Footer />
    </>
  );
}
