/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/self-closing-comp */
/* eslint-disable import/newline-after-import */
/* eslint-disable import/no-unresolved */
import React from "react";
import "@components/ContactForm.css";
import MenuBurger from "@components/MenuBurger";
const Contact = () => {
  return (
    <div>
      <MenuBurger />
      <div className="contact">
        <img
          className="image-contact"
          src="./src/assets/pictures/Contact.jpeg"
          alt="image-antoine"
        ></img>
        <form name="contact" method="post" className="contact_form">
          <label>
            Prénom* <input type="text" name="prénom" />
          </label>

          <label>
            Nom* <input type="text" name="nom" />
          </label>

          <label>
            Email* <input type="email" name="email" />
          </label>

          <label>
            Message* <textarea name="message"></textarea>
          </label>

          <button type="submit">Soumettre</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
