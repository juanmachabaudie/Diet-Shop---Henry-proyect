const { Product } = require("../db");

const productsController = {
  getProducts: async (req, res, next) => {
    //Traemos todos los productos con todas sus props.
    const dbProducts = await Product.findAll();
    res.json(dbProducts);
  },

  createProduct: async (req, res, next) => {
    //Creamos el producto con las prop name/description/image/thumbnail/price/stock.
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
  editProduct: async (req, res, next) => {
    // Editamos el producto aún teniendo el mismo id
    try {
      const { id } = req.body;
      const toEditProduct = await Product.findOne({
        where: {
          uuid: id,
        },
      });
      toEditProduct.update(req.body);
      if (toEditProduct) {
        res.status(200).send("Producto Actualizado");
      } else {
        res.status(400).send("Producto no encontrado");
      }
    } catch (error) {
      next(error);
    }
  },
  deleteProduct: async (req, res, next) => {
    //Borramos producto llamandolo por su id
    try {
      const { id } = req.body;
      if (checkUuid(id)){
      const toDestroy = await Product.findOne({
        where: {
          uuid: id,
        },
      });
      if (toDestroy) {
        Product.destroy({
          where: {
            uuid: id,
          }
        });
        res.status(200).send("Producto eliminado");
      } else {
        res.status(404).send("no se encuentra el producto a eliminar");
      }
    } else {
      res.status(404).send("id invalido")
    }
    } catch (error) {
      next(error);
    }
  },
  getDetail: async (req, res, next) => { //Traemos el detalle del producto llamandolo por su id
    try {
      const { productId } = req.params;
      // ↓↓↓ Validación ↓↓↓↓
      
      if (checkUuid(productId)) {
        const product = await Product.findOne({
          where: {
            uuid: productId,
          },
        });
        if (product) {
          res.status(200).json(product);
        } else {
          res.status(404).send("no encontrado");
        }
      } else {
        res.status(500).send("id invalido");
      }
    } catch (error) {
      next(error);
    }
  },
};

const checkUuid = (uuid) => {
  const uuidSplit = uuid.split("-");
  return uuid.length === 36 && uuidSplit.length === 5
}

module.exports = productsController;
