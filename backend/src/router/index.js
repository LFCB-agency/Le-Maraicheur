const express = require("express");

// const AdminRoutes = require("./Adm.routes");
// const PicturesRoutes = require("./Pictures.routes");
// const PopUpRoutes = require("./PopUp.routes");
<<<<<<< HEAD
// const TextRoutes = require("./Text.routes");
const PreOrderRoutes = require("./PreOrder.routes");
=======
const TextRoutes = require("./Text.routes");
// const PreOrderRoutes = require("./PreOrder.routes");
>>>>>>> dev
// const ProductsRoutes = require("./Products.routes");

const router = express.Router();

// router.use("/adm", AdminRoutes);
// router.use("/pictures", PicturesRoutes);
// router.use("/popup", PopUpRoutes);
// router.use("/products", ProductsRoutes);
<<<<<<< HEAD
// router.use("/text", TextRoutes);
router.use("/preorder", PreOrderRoutes);
=======
router.use("/text", TextRoutes);
// router.use("/preorder", PreOrderRoutes);
>>>>>>> dev

module.exports = router;
