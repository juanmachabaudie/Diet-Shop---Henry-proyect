const { Router } = require("express");
const {createUser, getUsers, updateUser} = require('../controllers/usersController')

const router = Router()

router.post("/create", createUser);
router.get("/", getUsers);
router.put("/update", updateUser);

module.exports = router;