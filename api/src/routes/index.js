const { Router } = require("express");

const categoryRoutes = require("./category");

const router = Router();

router.use("/category", categoryRoutes);

module.exports = router;
