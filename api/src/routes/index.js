const { Router } = require("express");
// import all routers;
const productRouter = require("./product.js");
const categoryRouter = require("./category.js");
const emailRouter = require("./email.js");
const userRouter = require("./user.js");
const cartRouter = require("./cart");
const authRouter = require("./auth");
const mercadoPagoRouter = require("./mercadopago");
const wishListRouter = require("./wishlist");
const router = Router();

// load each router on a route
// i.e: router.use('/auth', authRouter);
// router.use('/auth', authRouter);
router.use("/products", productRouter);
router.use("/categories", categoryRouter);
router.use("/email", emailRouter);
router.use("/users", userRouter);
router.use("/cart", cartRouter);
router.use("/auth", authRouter);
router.use("/ml", mercadoPagoRouter);
router.use("/wishlist", wishListRouter);

module.exports = router;
