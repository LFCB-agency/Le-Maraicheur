/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-restricted-globals */
/* eslint-disable */
import MenuBurger from "@components/MenuBurger";
import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Produit() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const data = await axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/product/visible`)
        .then((response) => response.data);
      setProducts(data);
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <section>
      <Navbar />
      <MenuBurger />
      <h1 className="titre-product">NOS PRODUITS</h1>
      <hr className="product-hr"></hr>
      <div className="products-picto">
        <Box
          sx={{
            alignItems: "center",
            flexGrow: 1,
            width: "45%",
            marginLeft: "0px",
          }}
        >
          <Grid
            container
            spacing={{ xs: 8, md: 8 }}
            columns={{ xs: 4, sm: 4, md: 8 }}
          >
            {products.map((items) => (
              <Grid
                xs={4}
                sm={4}
                md={4}
                item={true}
                key={items.id}
                sx={{ margin: 0 }}
              >
                <a
                  key={items.id}
                  className="product-image "
                  id="legume"
                  to={items.link}
                  target="_blank"
                >
                  <img
                    className="imageprod1"
                    src={`${import.meta.env.VITE_IMAGES_URL}${items.image}`}
                    alt={items.alt}
                  />
                  <p className="legume-product">{items.title}</p>
                  <span className="spanLine" />
                </a>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
      <Footer />
    </section>
  );
}
