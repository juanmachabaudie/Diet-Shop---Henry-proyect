const { Router } = require("express");
const {
  createUser,
  getUsers,
  updateUser,
  changeAdmin,
  userProfile,
  login,
  deleteUser,

} = require("../controllers/usersController");

const router = Router();

router.post("/create", createUser);
router.get("/", getUsers);
router.put("/update", updateUser);
router.put('/changeAdmin', changeAdmin)
router.delete("/delete", deleteUser);
router.get("/profile/:userUuid", userProfile);
router.post("/login", login);

module.exports = router;
