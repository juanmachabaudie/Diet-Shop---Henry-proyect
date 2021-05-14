const { Router } = require("express");
const {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
} = require("../controllers/usersController");

const router = Router();

router.post("/create", createUser);
router.get("/", getUsers);
router.put("/update", updateUser);
router.delete("/delete", deleteUser);

module.exports = router;