import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footerGeneral">
      <div className="footerImg">
        <NavLink to="/" className="footerLink">
          <img
            className="socials"
            src="src/assets/pictures/social-network.png"
            alt="Facebook icon"
          />
        </NavLink>
        <NavLink to="/" className="footerLink">
          <img
            className="socials"
            src="src/assets/pictures/instagram.png"
            alt="instagram icon"
          />
        </NavLink>
      </div>
      <h3 className="footerTitle">Le Maraicheur</h3>
      <p className="footerAddress">
        Les Petites Guinières, 28480 La Croix-du-Perche
      </p>
      <span className="footerUnderline" />
      <p className="footerDroits"> © 2022, TOUTS DROITS RÉSERVÉS</p>
    </div>
  );
}
