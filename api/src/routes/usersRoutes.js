const { Router } = require("express");
const {
  createUser,
  getUsers,
  updateUser,
  getUser,
} = require("../controllers/usersController");

const router = Router();

router.post("/create", createUser);
router.get("/", getUsers);
router.put("/update", updateUser);
router.get("/:userName", getUser);

module.exports = router;
