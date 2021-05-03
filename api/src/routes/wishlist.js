const server = require("express").Router();
const { Product, User } = require("../db.js");

server.post("/add/:productId/:userId", (req, res) => {
  Product.findByPk(req.params.productId)
    .then((response) => {
      response.addUser(req.params.userId);
      return res.status(200).json(response);
    })
    .catch((err) => {
      if (err) {
        res.status(404).json(err);
      }
    });
});

server.get("/get/:userId", (req, res) => {
  User.findByPk(req.params.userId, {
    include: { model: Product, through: { attributes: [] } },
  })
    .then((response) => res.status(200).json(response))
    .catch((err) => {
      if (err) {
        res.status(404).json(err);
      }
    });
});

server.delete("/:productId/:userId", (req, res) => {
  User.findByPk(req.params.userId)
    .then((response) => {
      response.removeProduct(req.params.productId);
      res
        .status(200)
        .json({ messagge: "Producto eliminado de la wishlist", response });
    })
    .catch((err) => {
      if (err) {
        res.status(404).json(err);
      }
    });
});

module.exports = server;
