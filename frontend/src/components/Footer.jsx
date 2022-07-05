export default function Footer() {
  return (
    <div className="footerGeneral">
      <div className="footerImg">
        <a
          className="footerLink"
          href="https://developer.mozilla.org/fr/docs/Web/HTML/Element/a"
        >
          <img
            className="socials"
            src="src/assets/pictures/social-network.png"
            alt="Facebook icon"
          />
        </a>
        <a
          className="footerLink"
          href="https://developer.mozilla.org/fr/docs/Web/HTML/Element/a"
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
      <p className="footerDroits"> ©2022, TOUT DROIT RÉSERVÉ</p>
    </div>
  );
}
