import React from "react";

const Newsletter = () => {
  return (
    <section>
      <div className="newsletter-container">
        <p>
          Abonnez-vous à notre newsletter pour recevoir toute notre actualité
        </p>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://mailchi.mp/d089c18cb9a9/inscription-nl"
        >
          <button type="button">S'inscrire</button>
        </a>
      </div>
    </section>
  );
};

export default Newsletter;
