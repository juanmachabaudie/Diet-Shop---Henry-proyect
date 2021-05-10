const { Router } = require("express");
const {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
  getCategoryByName,
} = require("../controllers/categoryController");
const router = Router();

router.get("/", getCategories);

router.post("/create", createCategory);

router.put("/update", updateCategory);

router.delete("/delete", deleteCategory);

router.get("/byName", getCategoryByName);

module.exports = router;
