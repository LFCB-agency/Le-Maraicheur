export default function Footer() {
  return (
    <div className="footerGeneral">
      <div className="footerImg">
        <a
          href="https://www.facebook.com/lemaraicheur"
          target="_blank"
          rel="noreferrer"
          className="footerLink"
        >
          <img
            className="socials"
            src="src/assets/pictures/social-network.png"
            alt="Facebook icon"
          />
        </a>
        <a
          href="https://www.instagram.com/lemaraicheur/"
          target="_blank"
          rel="noreferrer"
          className="footerLink"
        >
          <img
            className="socials"
            src="src/assets/pictures/instagram.png"
            alt="instagram icon"
          />
        </a>
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
