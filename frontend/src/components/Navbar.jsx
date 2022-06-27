import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/upload">Upload</NavLink>
          </li>
          <li>
            <NavLink to="/methode">La Methode</NavLink>
          </li>
          <li>
            <NavLink to="/produit">Nos Produits</NavLink>
          </li>
          <li>
            <NavLink to="/propos">A propos</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
