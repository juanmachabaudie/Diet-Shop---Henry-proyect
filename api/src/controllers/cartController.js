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
        const modifiedCart = await cart.update(items);
        return res.send(modifiedCart);
      }
    } else if (items) {
      const newCart = await Cart.create({
        uuid,
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

/* async function createOrUpdateCart(req, res, next) {
  try {
    // const { userUuid, items } = req.body; // [{}, {}, {qty}]

    userUuid = null;
    items = [{
      name: "Almendras amargas",
      image: "fotoDeAlmendras",
      price: "250",
      stock: "50",
      qty: "350",
    }, 
    {
      name: "Alfajores",
      image: "fotoDeAlfajores",
      price: "400",
      stock: "5",
      qty: "2",
    }];

    let modItems = JSON.stringify(items);
    if (userUuid && checkUuid(userUuid)) {
      const cart = await Cart.findOne({ where: { userUuid } });
      if (cart) {
        const newCart = await cart.update(req.body);
        return res.send(newCart);
      }
    } else if (items) {
      console.log('only items')
      const newCart = await Cart.create({
        userUuid,
        items,
      });
      return res.send(newCart);
    } else {
      return res.status(404).send({ error: "El Carrito No Existe" });
    }
  } catch (error) {
    next(error);
  }
} */
