const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
const productsRoute = require ('./product.js');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/products", productsRoute);

module.exports = router; 
