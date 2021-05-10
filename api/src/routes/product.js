const { Router } = require("express");
const {
  getProducts,
  createProduct,
  deleteProduct,
  editProduct,
  getProductDetail,
  getProductsByCategory,
  searchProduct,
} = require("../controllers/productController");

const router = Router();

router.get("/", getProducts);

router.post("/create", createProduct);

router.put("/edit", editProduct);

router.delete("/delete", deleteProduct);

router.get("/detail", getProductDetail);

router.get("/filterByCategory?", getProductsByCategory);

router.get("/search", searchProduct);

module.exports = router;
