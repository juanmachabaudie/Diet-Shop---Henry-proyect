const { Product } = require("../db");

const productsController = {
  getProducts: async (req, res, next) => {
    const dbProducts = await Product.findAll();
    res.json(dbProducts);
  },

  createProduct: async (req, res, next) => {
    const { name, description, image, thumbnail, price, stock } = req.body;
    try {
      const newProduct = await Product.create({
        name,
        description,
        image,
        thumbnail,
        price,
        stock,
      });
      res.json(newProduct);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = productsController;
