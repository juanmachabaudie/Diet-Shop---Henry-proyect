const { Router } = require("express");
const {
  getCategories,
  createCategory,
  deleteCategory,
  updateCategory,
} = require("../controllers/categoryController");
const router = Router();

router.get("/", getCategories);
router.post("/create", createCategory);
router.post("/delete", deleteCategory);
router.post("/update", updateCategory);

module.exports = router;
