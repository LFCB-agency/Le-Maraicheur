import "./Login.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "@contexts/UserContext";

import axios from "../services/axios";

export default function Login() {
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
    <section className="login-container">
      <h1 className="login-title">Sign In</h1>
      <form className="fields" onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email:{" "}
          <input
            className="login-input"
            id="email"
            placeholder="your email"
            type="email"
            value={userData.email}
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="password">
          Password:{" "}
          <input
            className="login-input"
            id="password"
            placeholder="your password"
            type="password"
            value={userData.password}
            onChange={handleInputChange}
          />
        </label>
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </section>
  );
}
