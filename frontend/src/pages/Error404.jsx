import React from "react";
import { NavLink } from "react-router-dom";

const Error404 = () => {
  return (
    <section>
      <div className="wrap">
        <h1 className="error404">
          <span className="style-4">4</span>0
          <span className="style-4bis">4</span>
        </h1>
        <div className="base">
          <div className="flowerpot" />
          <div className="blade blade-center" />
          <div className="blade blade-left-s" />
          <div className="blade blade-right-s" />
          <div className="blade blade-left-l" />
          <div className="blade blade-right-l" />
        </div>
        <div className="return404">
          <h2>Il n'y a qu'une plante ici..</h2>
          <NavLink to="/">Retourner dans la serre</NavLink>
        </div>
      </div>
    </section>
  );
};

export default Error404;
