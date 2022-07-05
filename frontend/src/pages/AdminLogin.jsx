import "../assets/sass/adminlogin.scss";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/pictures/logo1.png";

import axios from "../services/axios";

export default function AdminLogin({ setAdm }) {
  // const { dispatch } = userContext();
  const navigate = useNavigate();
  const [admData, setAdmData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setAdmData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  // eslint-disable-next-line consistent-return
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!admData.email || !admData.password) {
      return alert("You must provide an email and a password");
    }
    try {
      const { data } = await axios.post("adm/login", admData, {
        withCredentials: true,
      });
      // console.log(data);
      setAdmData({ email: "", password: "" });
      setAdm({ email: data.email });
      navigate("/admin/log");
      // dispatch({ type: "LOGIN", payload: data });
    } catch (err) {
      return alert(err.message);
    }
  };

  const handlePasswordForgotten = async () => {
    if (!admData.email) {
      return alert("You must provide an email");
    }

    try {
      const { data } = await axios.post(
        "adm/password-forgotten",
        {
          email: admData.email,
        },
        { withCredentials: true }
      );
      return alert(JSON.stringify(data));
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
              value={admData.email}
              onChange={handleInputChange}
            />
          </label>
          <label htmlFor="password">
            Mot de passe *{" "}
            <input
              id="password"
              placeholder="Tapez ici votre mot de passe"
              type="password"
              value={admData.password}
              onChange={handleInputChange}
            />
          </label>
          <button className="login-btn" type="submit">
            SE CONNECTER
          </button>
          <Link to="/reset">
            <button
              type="button"
              className="login-btn"
              onClick={handlePasswordForgotten}
            >
              Password Forgotten
            </button>
          </Link>
        </form>
      </div>
    </section>
  );
}
