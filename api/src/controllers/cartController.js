const { Cart } = require("../db");
const { Op } = require("sequelize");
const { checkUuid } = require("../helpers/utils");

// CART = [ {}, {} ]

async function createOrUpdateCart(req, res, next) {
  try {
    const { uuid, items } = req.body; // [{}, {}, {qty}]
    if (uuid && checkUuid(uuid)) {
      const cart = await Cart.findOne({ where: { uuid } });
      if (cart) {
        const newCart = await cart.update(req.body);
        return res.send(newCart);
      }
      const newCart = await Cart.create({
        uuid: uuid(),
        items,
      });
      return res.send(newCart);
    } else {
      return res.status(404).send({ error: "El Carrito No Existe" });
    }
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createOrUpdateCart,
};
