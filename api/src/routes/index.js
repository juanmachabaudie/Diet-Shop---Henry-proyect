const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
const productRoutes = require("./productRoutes");
const categoryRoutes = require("./categoryRoutes");
const cartRoutes = require("./cartRoutes");
const orderRoutes = require("./orderRoutes");
const userRoutes = require("./usersRoutes");
const checkoutRoutes = require("./checkoutRoutes");
const auth = require('./auth')

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/auth", auth)
router.use("/product", productRoutes);
router.use("/category", categoryRoutes);
router.use("/cart", cartRoutes);
router.use("/order", orderRoutes);
router.use("/user", userRoutes);
router.use("/checkout", checkoutRoutes)

module.exports = router;
