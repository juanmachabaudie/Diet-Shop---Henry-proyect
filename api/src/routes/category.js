const { Router } = require("express");
const {
  getAllCategories,
  createCategory,
  deleteCategory,
  updateCategory,
} = require("../controllers/category");
const router = Router();

router.get("/", getAllCategories);
router.post("/create", createCategory);
router.post("/delete", deleteCategory);
router.post("/update", updateCategory);

module.exports = router;
