/* eslint-disable import/no-unresolved */
/* eslint-disable react/button-has-type */
import React, { useState } from "react";
import "./MenuBurger.css";
import logo1 from "@assets/pictures/logo1.png";

export default function MenuBurger() {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };
  return (
    <nav className={`menu-burger ${showLinks ? "show-nav" : "hide-nav"}`}>
      <div className="menu-logo">
        <img src={logo1} alt="logo maraicheur" />
        <button className="nav-burger" onClick={handleShowLinks}>
          <span className="burger-bar" />
        </button>
      </div>
      <ul className="menu-links">
        <li className="menu-items">
          <a href="/" className="menu-link">
            Accueil
          </a>
        </li>
        <li className="menu-items">
          <a href="/" className="menu-link">
            La Méthode
          </a>
        </li>
        <li className="menu-items">
          <a href="/" className="menu-link">
            Nos Produits
          </a>
        </li>
        <li className="menu-items">
          <a href="/" className="menu-link">
            A Propos
          </a>
        </li>
        <li className="menu-items">
          <a href="/" className="menu-link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
