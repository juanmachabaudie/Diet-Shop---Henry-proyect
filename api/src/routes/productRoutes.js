const { Router } = require("express");
const {
  getProducts,
  getProductDetail,
  createProduct,
  deleteProduct,
  updateProduct,
  productsByCategory,
  searchProduct,
} = require("../controllers/productController");

const router = Router();

router.get("/", getProducts);
router.post("/create", createProduct);
router.put("/update", updateProduct);
router.delete("/delete", deleteProduct);
router.get("/detail/:uuid", getProductDetail);
router.get("/filterByCategory", productsByCategory);
router.get("/search", searchProduct);

module.exports = router;
