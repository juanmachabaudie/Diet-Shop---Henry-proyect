const { Product, Category } = require("../db");
const { checkUuid, productCategory } = require("../helpers/utils");

const productsController = {
  //Traemos todos los productos con todas sus props.
  getProducts: async (req, res, next) => {
    try {
      const dbProducts = await Product.findAll();
      res.json(dbProducts);
    } catch (error) {
      next(error);
    }
  },

  createProduct: async (req, res, next) => {
    //Creamos el producto con las prop name/description/image/thumbnail/price/stock.
    //categories es un array que llega desde el front. >>> MANDARLO COMO ARRAY <<<
    const {
      name,
      description,
      image,
      thumbnail,
      price,
      stock,
      categories,
    } = req.body;

    try {
      const exist = await Product.findOne({ where: { name } });
      if (exist) {
        return res.status(400).send("Producto ya existente");
      }
      const newProduct = await Product.create({
        name,
        description,
        image,
        thumbnail,
        price,
        stock,
      });

      //en category me pusheo el nombre de la categoria que hay en el array CATEGORIES
      for (eachCategory of categories) {
        const categoryToAdd = await Category.findOne({ //Recibir arreglos de uuid y armarlo con eso 
          where: { name: eachCategory },
        });
        newProduct.addCategory(categoryToAdd);
      }
      res.status(200).send(name + " agregado");
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
      toEditProduct.update(req.body);  //HAY QUE ESTAR SEGURO DE QUE LLEGA UN UUID
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
    const { id } = req.body;
    try {
      if (checkUuid(id)) {
        const toDestroy = await Product.findOne({
          where: {
            uuid: id,
          },
        });
        if (toDestroy) {
          Product.destroy({
            where: {
              uuid: id,
            },
          });
          res.status(200).send("Producto eliminado");
        } else {
          res.status(404).send("no se encuentra el producto a eliminar");
        }
      } else {
        res.status(404).send("id invalido");
      }
    } catch (error) {
      next(error);
    }
  },
  getProductDetail: async (req, res, next) => {
    //Traemos el detalle del producto llamandolo por su id
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

module.exports = productsController;
