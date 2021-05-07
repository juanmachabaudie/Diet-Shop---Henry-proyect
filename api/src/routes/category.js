const { Router } = require("express");
const {
  getCategories,
  createCategory,
  deleteCategory,
 
} = require("../controllers/categoryController");
const router = Router();

router.get("/", getCategories);

router.post("/create", createCategory);

router.delete("/delete", deleteCategory);

// router.post("/update", updateCategory);

module.exports = router;
