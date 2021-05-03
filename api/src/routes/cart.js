const server = require("express").Router();
const { Product, Category, Cart, User, OrderLine } = require("../db.js");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

server.post("/users/:idUser/:idProduct", async (req, res, next) => {
  var total = 0;
  const { quantity } = req.body;
  const userId = req.params.idUser;
  const [cart] = await Cart.findOrCreate({
    where: {
      [Op.and]: {
        status: "Cart",
        userId: req.params.idUser
      }
  }});
  cart.update({userId})
  const product = await Product.findOne({ where: { id: req.params.idProduct }});
  await OrderLine.findOrCreate({
    where: {
      productId: req.params.idProduct,
      cartId: cart.id,
    },
    defaults: {
      quantity,
      subTotal: quantity * product.price,
    },
  });
  await Cart.findOne({
    where: {
      id: cart.id
    },
    include: { model: Product },
  }).then((response) => {
    response.products.map((elem) => {
      total += Number(elem.orderLine.subTotal);
    });
  });
  cart.update({ total });
  return res.status(200).json(total);
});

// Retorna las ordenes de un usuario 

server.get("/users/:idUser", async (req, res, next) => {
  const { idUser } = req.params;
  Cart.findAll({
    where: {
      userId: idUser
    },
    include: { model: Product }
  })
    .then(response => {
      return res.status(200).json(response)
    })
    .catch(err => {
      return res.status(404).json({ error: err });
    })
});

//S49: ruta para devolver orden especifica
server.get("/orders/:id", (req, res) => {
  const id = req.params.id;
  Cart.findByPk(id, {
    include: { model: Product },
  })
  .then((response) => {
    console.log(response)
    return res.status(200).json(response);
  })
  .catch((err) => {
    return res.status(404).json({ error: err });
  });
});

//Ruta para traer el carrito actual de un usuario
server.get("/:userId", (req, res) => {
  const {userId} = req.params;
  Cart.findOne({ 
    where: {
      [Op.and]: {
        userId,
        status: "Cart"
      }
    },
    include: {model: Product}
  }).then((data) => {
    return res.status(200).json(data);
  })
})

// ruta para modificar el status de una orden
server.put("/:id", (req, res) => {
  const status = req.query.status;
  Cart.findByPk(req.params.id).then((response) => {
    response.update({ status });
    res.status(200).json(response);
    cart.addProduct(req.params.idProduct, { through: { quantity } });
    console.log(cart);
    return res.send("se actualizo la orden del carrito");
  });
});

//Devuelve las ordenes según su status o devuelve todas
server.get("/orders", (req, res, next) => {
  if (!req.query.status) {
    Cart.findAll({ include: { model: Product } })
      .then(carts => {
        let filterOrders = carts.filter(i => i.status !== "Cart");
        return res.status(200).json(filterOrders);
      })
      .catch(error => {
        return res.json({ error: error })
      })
  } else {
    Cart.findAll({
      where: { status: req.query.status },
      include: { model: Product },
    })
      .then((response) => {
        res.status(200).json(response);
      })
      .catch(error => {
        return res.json({ error: error })
      })
  }
});

// Ruta para modificar el quantity de un item
server.put("/users/:idUser/cart/:idProduct", async (req, res) => {
  var total = 0;
  const ID_USER = req.params.idUser;
  const ID_PROD = req.params.idProduct;
  const quantity = req.body.quantity;
  const [cart] = await Cart.findAll({
    where: { userId: ID_USER, status: "Cart" },
  });
  if (cart) {
    const [orderLine] = await OrderLine.findAll({
      where: { productId: ID_PROD, cartId: cart.id },
    });
    if (orderLine !== undefined) {
      orderLine.update({ quantity });
      if (orderLine.quantity == 0) orderLine.destroy();
      await Product.findOne({ where: { id: ID_PROD } }).then((product) =>
        orderLine.update({
          subTotal: Number(product.price) * Number(orderLine.quantity),
        })
      );
      await Cart.findOne({
        where: {
          id: cart.id,
        },
        include: { model: Product },
      }).then((response) => {
        response.products.map((elem) => {
          total += Number(elem.orderLine.subTotal);
        });
      });
      cart.update({ total })
      return res
        .status(200)
        .send("Se ha modificado la cantidad del producto");
    }
  }
  res.status(404).send("No se ha modificado la cantidad del producto");
});



// S47: ruta para modificar una orden especifica, le cambia status o total.
server.put("/orders/:id", (req, res) => {
  const id = req.params.id;
  const { total, status } = req.body;
  Cart.findAll({
    where: {
      userId: id
    },
  })
    .then((response) => {
      response[0].update({ status, total });
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});
module.exports = server;
