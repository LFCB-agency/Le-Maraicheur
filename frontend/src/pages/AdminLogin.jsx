/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/pictures/logo1.png";
import eyesHidden from "../assets/pictures/invisible.png";
import eyesUnhidden from "../assets/pictures/yeux.png";

import axios from "../services/axios";

export default function AdminLogin({ setAdm }) {
  // const { dispatch } = userContext();
  const navigate = useNavigate();
  const [eyesVisible, setEyesVisible] = useState(eyesHidden);
  const [eyesStyle, setEyesStyle] = useState(true);
  const [passwordShown, setPasswordShown] = useState(false);
  const [admData, setAdmData] = useState({
    email: "",
    password: "",
  });
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
    setEyesStyle(!eyesStyle);

    if (eyesVisible === eyesHidden) {
      setEyesVisible(eyesUnhidden);
    } else if (eyesVisible === eyesUnhidden) {
      setEyesVisible(eyesHidden);
    }
  };
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
            <NavLink to="/">
              <p className="lostpassword">Mot de passe oublié ?</p>
            </NavLink>
            <input
              id="password"
              placeholder="Tapez ici votre mot de passe"
              type={passwordShown ? "text" : "password"}
              value={admData.password}
              onChange={handleInputChange}
            />
            <button
              type="button"
              onClick={togglePassword}
              className={eyesStyle ? "eyes-btn" : "eyes-btn-red"}
            >
              <img
                src={eyesVisible}
                alt="Oeil pour voir le mot de passe"
                className="eyesforpassword"
              />
            </button>
          </label>
          <button className="login-btn" type="submit">
            SE CONNECTER
          </button>
        </form>
      </div>
    </section>
  );
}
