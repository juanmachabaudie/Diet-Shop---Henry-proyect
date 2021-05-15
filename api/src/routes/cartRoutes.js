const { Router } = require("express");
const { createOrUpdateCart, getCartItems, deleteCart } = require("../controllers/cartController");
const router = Router();

router.get("/", getCartItems);
router.delete("/", deleteCart);
router.put("/createOrUpdate", createOrUpdateCart);

module.exports = router;
