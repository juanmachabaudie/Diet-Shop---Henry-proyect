const { Router } = require("express");
const {
  getProducts,
  createProduct,
  deleteProduct,
  editProduct,
  getProductDetail,
} = require("../controllers/productController");

const router = Router();

router.get("/", getProducts);

router.post("/create", createProduct);

router.put("/edit", editProduct);

router.delete("/delete", deleteProduct);

router.get("/detail/:productId", getProductDetail);

module.exports = router;
