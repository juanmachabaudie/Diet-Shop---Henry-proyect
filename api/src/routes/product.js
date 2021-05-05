const { Router } = require("express");
const { getProducts, createProduct, deleteProduct } = require("../controllers/productsController");

const router = Router();

router.get("/", getProducts);

router.post("/", createProduct);

router.delete("/", deleteProduct);

module.exports = router;
