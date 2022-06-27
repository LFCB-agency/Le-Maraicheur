import "../assets/sass/adminhome.scss";
import logo from "../assets/pictures/logo1.png";
import home from "../assets/pictures/house.png";
import method from "../assets/pictures/plantadmin.png";
import product from "../assets/pictures/radish.png";
import about from "../assets/pictures/people.png";
import contact from "../assets/pictures/email.png";
import modal from "../assets/pictures/pop-up.png";

export default function AdminHome() {
  return (
    <section className="background-home">
      <div className="leftpannel">
        <div className="logo-position-home">
          <img src={logo} alt="" className="logo-size-home" />
        </div>
        <nav>
          <div className="icon-container">
            <img src={home} alt="icon home" className="icon-home" />
            <p>Accueil</p>
          </div>
          <div className="icon-container">
            <img src={method} alt="icon method" className="icon-method" />
            <p>La Méthode</p>
          </div>
          <div className="icon-container">
            <img src={product} alt="icon product" className="icon-product" />
            <p>Nos Produits</p>
          </div>
          <div className="icon-container">
            <img src={about} alt="icon about" className="icon-about" />
            <p>À propos</p>
          </div>
          <div className="icon-container">
            <img src={contact} alt="icon contact" className="icon-contact" />
            <p>Contact</p>
          </div>
          <div className="icon-container">
            <img src={modal} alt="icon modal" className="icon-modal" />
            <p>Pop-up</p>
          </div>
        </nav>
      </div>
    </section>
  );
}
