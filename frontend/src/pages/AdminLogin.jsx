/* eslint-disable import/no-unresolved */
/* eslint-disable no-alert */
import "../assets/sass/adminlogin.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "@contexts/UserContext";
import logo from "../assets/pictures/logo1.png";

import axios from "../services/axios";

export default function AdminLogin() {
  const { dispatch } = userContext();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userData.email || !userData.password) {
      return alert("You must provide an email and a password");
    }
    try {
      const { data } = await axios.post("adm/login", userData, {
        withCredentials: true,
      });
      // console.log(data);
      setUserData({ email: "", password: "" });
      dispatch({ type: "LOGIN", payload: data });
      return navigate("adm/logout");
    } catch (err) {
      return alert(err.message);
    }
  };

  return (
    <section className="background">
      <div className="container">
        <div className="logo-position">
          <img src={logo} alt="Logo du Maraîcheur" className="logo-property" />
        </div>
        <div className="introduction">
          <h1>Le Maraîcheur - Administration</h1>
          <p>
            Bienvenue, veuillez saisir votre email administrateur ainsi que
            votre mot de passe pour vous connecter au panneau d’administration.
          </p>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="email">
            Email:{" "}
            <input
              id="email"
              placeholder="monemail@gmail.com"
              type="email"
              value={userData.email}
              onChange={handleInputChange}
            />
          </label>
          <label htmlFor="password">
            Mot de passe *{" "}
            <input
              id="password"
              placeholder="Tapez ici votre mot de passe"
              type="password"
              value={userData.password}
              onChange={handleInputChange}
            />
          </label>
          <button className="login-btn" type="submit">
            SE CONNECTER
          </button>
        </form>
      </div>
    </section>
  );
}
