/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/self-closing-comp */
/* eslint-disable import/newline-after-import */
/* eslint-disable import/no-unresolved */
import React from "react";
import "@components/ContactForm.css";
import MenuBurger from "@components/MenuBurger";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
const Contact = () => {
  return (
    <div>
      <Navbar />
      <MenuBurger />
      <h1 className="titre-contact">Nous contacter</h1>
      <hr className="hr-contact"></hr>
      <div className="wrapper">
        <div className="form">
          <form name="contact" method="post" className="contact_form">
            <img
              className="logo-maraicheur"
              src="./src/assets/pictures/logo2.png"
            />
            <h3 className="info-contact">Informations personnelles : </h3>
            <div className="name-contact">
              <label className="contact-label">
                Prénom*{" "}
                <input className="nom-prenom" type="text" name="prénom" />
              </label>

              <label className="contact-label">
                Nom* <input className="nom-prenom" type="text" name="nom" />
              </label>
            </div>
            <label>
              Email* <input className="email" type="email" name="email" />
            </label>

            <label className="message-contact">
              Message* <textarea name="message" rows="10" cols="50"></textarea>
            </label>

            <button className="button-contact" type="submit">
              Soumettre
            </button>
          </form>
        </div>
        <div className="img-contact">
          <img
            className="image-contact"
            src="./src/assets/pictures/Contact.jpeg"
            alt="image-antoine"
          ></img>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
