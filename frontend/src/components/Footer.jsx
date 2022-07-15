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
      <a
        href="https://www.google.com/maps/place/Le+Mara%C3%AEcheur/@48.29183,1.002115,15z/data=!4m5!3m4!1s0x0:0xfdbfc22c3c91e249!8m2!3d48.2918297!4d1.0021148?hl=fr"
        target="_blank"
        rel="noreferrer"
      >
        <p className="footerAddress">
          Les Petites Guinières, 28480 La Croix-du-Perche
        </p>
      </a>
      <span className="footerUnderline" />
      <p className="footerDroits"> © 2022, TOUTS DROITS RÉSERVÉS</p>
    </div>
  );
}
