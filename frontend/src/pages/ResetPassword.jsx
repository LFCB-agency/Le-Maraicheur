import "./Login.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "@services/axios";
import * as yup from "yup";

// password must contain almost one upper case, one lower case, a number and a special character contained in [!@#$%^&*], and have 8 to 32 characters
const schemaForResetPassword = yup.object().shape({
  temporaryPassword: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
      "Temporary Password must contain almost one upper case, one lower case, one number and a special character contained in [!@#$%^&*]"
    )
    .min(8, "Temporary Password must be almost 8 characters")
    .max(32, "Temporary Password must be max 32 characters")
    .required("Temporary Password is required"),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
      "Password must contain almost one upper case, one lower case, one number and a special character contained in [!@#$%^&*]"
    )
    .min(8, "Password must be almost 8 characters")
    .max(32, "Password must be max 32 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
      "Confirm Password must contain almost one upper case, one lower case, one number and a special character contained in [!@#$%^&*]"
    )
    .min(8, "Confirm Password and Password must be almost 8 characters")
    .max(32, "Confirm Password and Password must be max 32 characters")
    .required("Confirm Password is required")
    .oneOf([yup.ref("password")], "Password and Confirm Password must match"),
  email: yup
    .string()
    .email({
      minDomainSegments: 2,
      // tlds: { allow: ["com", "net"] },
    })
    .required(),
});

export default function ResetPassword() {
  const navigate = useNavigate();
  const [admData, setAdmData] = useState({
    email: "",
    password: "",
    temporaryPassword: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    setAdmData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await schemaForResetPassword.validate(admData);

      await axios.post(
        "adm/reset-password",
        {
          email: admData.email,
          password: admData.password,
          temporaryPassword: admData.temporaryPassword,
        },
        {
          withCredentials: true,
        }
      );

      setAdmData({
        email: "",
        password: "",
        temporaryPassword: "",
        confirmPassword: "",
      });

      return navigate("/admin");
    } catch (err) {
      return alert(err.message);
    }
  };

  return (
    <section className="login-container">
      <h1 className="login-title">Reset Password</h1>
      <form className="fields" onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email:{" "}
          <input
            className="login-input"
            id="email"
            placeholder="your email"
            type="email"
            value={admData.email}
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="temporaryPassword">
          Temporary Password:{" "}
          <input
            className="login-input"
            id="temporaryPassword"
            placeholder="your temporary password"
            type="password"
            value={admData.temporaryPassword}
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="password">
          New Password:{" "}
          <input
            className="login-input"
            id="password"
            placeholder="your new password"
            type="password"
            value={admData.password}
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="confirmPassword">
          Confirm Password:{" "}
          <input
            className="login-input"
            id="confirmPassword"
            placeholder="confirm your new password"
            type="password"
            value={admData.confirmPassword}
            onChange={handleInputChange}
          />
        </label>
        <button className="login-btn" type="submit">
          Reset Password
        </button>
      </form>
    </section>
  );
}
