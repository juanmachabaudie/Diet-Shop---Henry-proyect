const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
const productRoutes = require("./productRoutes");
const categoryRoutes = require("./categoryRoutes");

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/product", productRoutes);
router.use("/category", categoryRoutes);

module.exports = router;
