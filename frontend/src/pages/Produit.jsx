/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-restricted-globals */
/* eslint-disable */

import { Link } from "react-router-dom";
import parse from "html-react-parser";
import MenuBurger from "@components/MenuBurger";
import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AlertError from "@components/AlertError";

export default function Produit() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    height: "auto",
    backdropFilter: "blur(30px)",
    transform: "translate(-50%, -50%)",
    width: "90%",
    borderRadius: "8px",
    background: "rgba( 255, 255, 255, 0.2 )",
    boxShadow: "0 8px 32px 0 rgba(253, 253, 253, 0.37)",
    outline: "none",
  };
  const [textHome, setTextHome] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [error, setError] = useState(false);
  const getText = async () => {
    try {
      const data = await axios
        .get(`${import.meta.env.VITE_BACKEND_URL}text?page=home&textSection=2`)
        .then((response) => response.data);
      setTextHome(data);
      // console.log(data);
    } catch (err) {
      if (err) {
        setError(true);
      }
    }
  };
  useEffect(() => {
    getText();
  }, []);
  return (
    <section>
      {error ? <AlertError /> : ""}
      <Navbar />
      <MenuBurger />
      <h1 className="titre-product">NOS PRODUITS</h1>
      <hr className="product-hr"></hr>
      <div className="products-picto">
        <Link className="product-image " id="legume" to="*">
          <img
            className="imageprod1"
            alt=" vegetable "
            src="src/assets/pictures/vegetable.png"
          />
          <p className="legume-product">NOS LÉGUMES</p>
          <span className="spanLine" />
        </Link>
        <Link className="product-image" id="fermier" to="*">
          <img
            className="imageprod2"
            alt=" oil "
            src="src/assets/pictures/oil.png"
          />
          <p className="legume-product"> PRODUITS FERMIERS</p>
          <span className="spanLine" />
        </Link>
        <Link className="product-image" id="plant" to="*">
          <img
            className="imageprod3"
            alt="plants"
            src="src/assets/pictures/plant.png"
          />
          <p className="legume-product">NOS PLANTS</p>
          <span className="spanLine" />
        </Link>
        <div className="product-image" id="panier">
          <img
            className="imageprod4"
            alt="basket"
            src="src/assets/pictures/basket.png"
            onClick={handleOpen}
          />
          <p className="legume-product" onClick={handleOpen}>
            LE PANIER
          </p>
          <span className="spanLine" />
        </div>

        {textHome.map((text) => (
          <section key={text.id}>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <CloseIcon
                  onClick={handleClose}
                  style={{
                    color: "white",
                    float: "right",
                    marginRight: "5px",
                    marginTop: "5px",
                    cursor: "pointer",
                  }}
                />
                <Typography
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "25px",
                  }}
                >
                  {parse(text.title)}
                </Typography>
                <Typography
                  id="modal-modal-description"
                  sx={{ mt: 2 }}
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    color: "white",
                    textAlign: "center",
                    marginTop: "3em",
                    marginLeft: "15px",
                    marginRight: "15px",
                  }}
                >
                  {parse(text.body)}
                </Typography>
                <div className="button-modal-container">
                  <Link to="/contact">
                    <button
                      type="button"
                      className="modal-button-preorder"
                      style={{ marginTop: "3em" }}
                    >
                      {" "}
                      JE COMMANDE{" "}
                    </button>
                  </Link>
                </div>
              </Box>
            </Modal>
          </section>
        ))}
      </div>
      <br />
      <Footer />
    </section>
  );
}
