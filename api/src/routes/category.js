const { Router } = require("express");
const {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
  getCategoryByName,
  byCategory,
} = require("../controllers/categoryController");
const router = Router();

router.get("/", getCategories);

router.post("/create", createCategory);

router.put("/update", updateCategory);

router.delete("/delete", deleteCategory);

router.get("/byName", getCategoryByName);

router.get("/search", byCategory);

module.exports = router;
