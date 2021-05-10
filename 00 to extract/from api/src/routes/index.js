const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
const productsRoute = require ('./product.js');
const categoryRoutes = require("./category.js");

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/products", productsRoute);
router.use("/category", categoryRoutes);

module.exports = router; 