const { Router } = require("express");
const {
  getProducts,
  createProduct,
  deleteProduct,
  editProduct,
  getDetail,
} = require("../controllers/productController");

const router = Router();

router.get("/", getProducts);

router.post("/", createProduct);

router.put("/", editProduct);

router.delete("/", deleteProduct);

router.get("/detail/:productId", getDetail);

module.exports = router;
