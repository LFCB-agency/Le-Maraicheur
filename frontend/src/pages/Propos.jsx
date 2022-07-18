import TextPropos from "@components/TextPropos/TextPropos";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import MenuBurger from "@components/MenuBurger";

export default function Propos() {
  return (
    <div>
      <Navbar />
      <MenuBurger />
      <TextPropos />
      <Footer />
    </div>
  );
}
