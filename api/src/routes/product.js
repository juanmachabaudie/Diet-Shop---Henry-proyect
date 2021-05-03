const server = require("express").Router();
const { Product, Category, Review, User } = require("../db.js");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

//Trae todos los productos
server.get("/", (req, res, next) => {
  Product.findAll({
    include: {
      model: Category,
      through: { attributes: [] },
    },
  })
    .then((products) => {
      res.status(200).json(products);
    })
    .catch((error) => {
      res.json({ error: error });
    });
});

//Trae los productos que coincidan con el input pasado por quiery
server.get("/search", (req, res) => {
  var { query } = req.query;
  Product.findAll({
    where: {
      [Op.or]: {
        name: {
          [Op.iLike]: `%${query}%`,
        },
        description: {
          [Op.iLike]: `%${query}%`,
        },
      },
    },
    include: {
      model: Category,
      as: "categories",
      through: { attributes: [] },
    },
  })
    .then((results) => res.json(results))
    .catch((error) => {
      res.json({ error: error });
    });
});

//Trae el producto del id especificado por params
server.get("/:id", (req, res) => {
  Product.findByPk(req.params.id, {
    include: {
      model: Category,
      as: "categories",
      through: { attributes: [] },
    },
  })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      res.json({ error: error });
    });
});

//Crea un producto via formulario, recibe informacion por el body

server.post("/", (req, res) => {
  const { name, price, description, image, categories, stock } = req.body;
  Product.create({
    name: name,
    price: price,
    description: description,
    image: image,
    stock: stock,
  })
    .then((product) => {
      product.addCategory(categories);
      return res.status(200).send("The product has been created succesfully");
    })
    .catch((error) => {
      res.json({ error: error });
    });
});

//Modifica un producto en particular buscandolo por id pasado por params
//Hacer obligatorio la eleccion de categorias (inputs de categorias)
//A este producto se le asignaran las categorias enviadas sin importar las anteriores

server.put("/:id", (req, res) => {
  const { name, description, price, categories, stock } = req.body;
  Product.findByPk(req.params.id)
    .then((product) => {
      product.setCategories(categories);
      product.update({ name, description, price, stock });
      return res.status(200).send("Product has been modified");
    })
    .catch((error) => {
      res.json({ error: error });
    })
    .catch((error) => {
      res.json({ error: error });
    });
});

//Unica ruta para modificar stock de un producto
server.put("/stock/:id", (req, res) => {
  const { stock } = req.body;
  Product.findByPk(req.params.id)
    .then((product) => {
      product.update({ stock });
      return res.status(200).send("Product stock has been modifiedd");
    })
    .catch((error) => {
      res.json({ error: error });
    });
});

//Eliminara el producto en especifico del id pasado por params
server.delete("/:id", (req, res) => {
  var id = req.params.id;
  Product.destroy({ where: { id: id } })
    .then(() => {
      res.send("The product has been removed from database.");
    })
    .catch((error) => {
      res.json({ error: error });
    });
});

// --------------------------- REVIEW ---------------------------------------------------

// Ruta para agregar una review
server.post("/review/:userId/:productId", (req, res) => {
  const { userId, productId } = req.params;
  const { desc, calif } = req.body;
  Review.create({ description: desc, calification: calif, productId: productId, userId: userId })
    .then(review => {
      res.status(200).json(review);
    })
    .catch(() => {
      res.send("No se pudo crear")
    })

});

// Ruta para eliminar review
server.delete("/review/:reviewId", (req, res) => {
  Review.destroy({
    where: {
      id: req.params.reviewId,
    },
  })
    .then(res.status(200).send("review deleted"))
    .catch(res.status(404).send("cannot delete review"));
});

// ruta que te devuelve todas las reviews de un producto
server.get("/:id/review", (req, res) => {
  var id = req.params.id;
  Review.findAll({
    where: {
      productId: id
    },
    include: {model: User}
  })
    .then((respuesta) => {
      res.status(200).json(respuesta);
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = server;
