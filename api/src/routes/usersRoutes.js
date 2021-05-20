const { Router } = require("express");
const {
  createUser,
  getUsers,
  updateUser,
  getUser,
  changeAdmin,
} = require("../controllers/usersController");

const router = Router();

router.post("/create", createUser);
router.get("/", getUsers);
router.put("/update", updateUser);
router.get("/:userName", getUser);
router.put('/changeAdmin', changeAdmin)

module.exports = router;
