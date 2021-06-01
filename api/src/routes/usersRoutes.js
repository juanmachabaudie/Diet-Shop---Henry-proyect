const { Router } = require("express");
const {
  // createUser,
  getUsers,
  updateUser,
  changeAdmin,
  userProfile,
  login,
  deleteUser,
  sendOrder,
  getOrders,
  getShippingData,
  updateShippingData,
} = require("../controllers/usersController");

const router = Router();

// router.post("/create", createUser);
router.get("/", getUsers);
router.put("/update", updateUser);
router.put('/changeAdmin', changeAdmin)
router.delete("/delete", deleteUser);
router.get("/profile/:userUuid", userProfile);
router.post("/login", login);
router.post("/send-order", sendOrder);
router.get('/orders', getOrders);
router.get('/shipping', getShippingData);
router.put('/shipping/update', updateShippingData);

module.exports = router;
