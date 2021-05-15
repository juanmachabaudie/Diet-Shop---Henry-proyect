const { Cart } = require("../db");
const { Op } = require("sequelize");
const { checkUuid } = require("../helpers/utils");

// CART = [ {}, {} ]

// S40 : Crear Ruta para vaciar el carrito
async function deleteCart(req, res, next) {
  const { uuid } = req.body;
  try {

    if (checkUuid(uuid)) {
      const cart = await Cart.findOne({
        where: {
          uuid,
        },
      });

      if (cart) {
        Cart.destroy({
          where: {
            uuid,
          },
        });
        return res.status(200).send("Carrito eliminado");
      } else {
        return res.status(404).send("El carrito no existe.");
      }

    } else {
      return res.status(404).send("uuid invalido");
    }
  } catch (error) {
    next(error);
  }
}

// S39 : Crear Ruta que retorne todos los items del Carrito
async function getCartItems(_req, res, next) {
  try {
    let allCartItems = await Cart.findAll();

    (allCartItems.length <= 0)
      ? await res.send('El carrito está vacio.')
      : await res.send(allCartItems);

  } catch (error) {
    next(error);
  }
}

async function createOrUpdateCart(req, res, next) {
  try {
    const { uuid, items } = req.body; // [{}, {}, {qty}]
    // let modItems = JSON.stringify(items);
    // console.log("TypeOF : ", typeof modItems);
    console.log('hello from createOrUpdateCart');
    // const uuid = null;
    // const items = [{
    //   uuid: "5e858a20-af70-11eb-a312-d17ba18e5a68",
    //   name: "Alfajores",
    //   image: "urlimage",
    //   price: "400",
    //   stock: "25",
    //   qty: "2",
    // }, {
    //   uuid: "5e858a20-af70-11eb-a312-d17ba18e5a69",
    //   name: "Tuco",
    //   image: "urlimage",
    //   price: "500",
    //   stock: "1000",
    //   qty: "1",
    // }];

    if (uuid && checkUuid(uuid)) {
      const cart = await Cart.findOne({ where: { uuid } });
      if (cart) {
        const modifiedCart = await cart.update(items);
        return res.send(modifiedCart);
      }
    } else if (items) {
      const newCart = await Cart.create({
        // uuid,
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
  deleteCart,
  getCartItems,
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
