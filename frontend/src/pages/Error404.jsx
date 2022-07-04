import React from "react";
import { NavLink } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="scene">
      <div className="garden">
        <div className="error404">
          <h1>ERREUR 404</h1>
          <p>Page non trouvée</p>
          <NavLink to="/">Revenir sur le site</NavLink>
        </div>
        <div className="dirt" />
        <div className="seed" />
        <div className="carrot">
          <div className="leaf">
            <span />
            <span />
            <span />
          </div>
          <div className="root">
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className="beet">
          <div className="leaf">
            <span />
          </div>
          <div className="root" />
        </div>
        <div className="garlic">
          <div className="leaf">
            <span />
            <span />
            <span />
          </div>
          <div className="root">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error404;
