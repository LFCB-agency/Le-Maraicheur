/* eslint-disable import/no-unresolved */
/* eslint-disable react/button-has-type */
import React, { useState } from "react";
import "./MenuBurger.css";
import logo1 from "@assets/pictures/logo1.png";
import house from "@assets/pictures/house.png";
import produit from "@assets/pictures/radish.png";
import methode from "@assets/pictures/plantadmin.png";
import propos from "@assets/pictures/people.png";
import contact from "@assets/pictures/email.png";
import { NavLink } from "react-router-dom";

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
          <img src={house} alt="logo accueil" />
          <NavLink to="/">Accueil</NavLink>
        </li>
        <li className="menu-items">
          <img src={methode} alt="logo méthode" />
          <NavLink to="/methode">La Methode</NavLink>
        </li>
        <li className="menu-items">
          <img src={produit} alt="logo produit" />
          <NavLink to="/produit">Nos Produits</NavLink>
        </li>
        <li className="menu-items">
          <img src={propos} alt="logo à propos" />
          <NavLink to="/propos">A propos</NavLink>
        </li>
        <li className="menu-items">
          <img src={contact} alt="logo contact" />
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}
