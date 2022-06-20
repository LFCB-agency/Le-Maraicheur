const express = require("express");

const AdminRoutes = require("./Adm.routes");
const PicturesRoutes = require("./Pictures.routes");
// const PopUpRoutes = require("./PopUp.routes");
const TextRoutes = require("./Text.routes");
const PreOrderRoutes = require("./PreOrder.routes");
// const ProductsRoutes = require("./Products.routes");

const router = express.Router();

router.use("/adm", AdminRoutes);
router.use("/pictures", PicturesRoutes);
// router.use("/popup", PopUpRoutes);
// router.use("/products", ProductsRoutes);
router.use("/text", TextRoutes);
router.use("/preorder", PreOrderRoutes);

module.exports = router;
