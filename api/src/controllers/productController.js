const { Product, Category } = require("../db");
const { checkUuid, productCategory } = require("../helpers/utils");
const Sequelize = require("sequelize");
const { updateCategory } = require("./categoryController");

const productsController = {
  //Traemos todos los productos con todas sus props.
  getProducts: async (req, res, next) => {
    try {
      const dbProducts = await Product.findAll();
      const arrProducts = [];
      if (dbProducts.length) {
        for (element of dbProducts) {
          const values = element.dataValues;
          let arrCategories = await productCategory(values.uuid);
          const objProduct = {
            id: values.uuid,
            name: values.name,
            description: values.description,
            image: values.image,
            thumbnail: values.thumbnail,
            price: values.price,
            stock: values.stock,
            categories: arrCategories,
          };
          arrProducts.push(objProduct);
        }
      } else {
        return res.send("base de datos vacia");
      }
      res.json(arrProducts);
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
        return res.status(400).json({ message: "Producto ya existente" });
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
        const categoryToAdd = await Category.findOne({
          //Recibir arreglos de uuid y armarlo con eso
          where: { name: eachCategory },
        });
        newProduct.addCategory(categoryToAdd);
      }
      res.status(200).json({ message: "Producto Agregado!" });
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
      if (toEditProduct) {
        toEditProduct.update(req.body); //HAY QUE ESTAR SEGURO DE QUE LLEGA UN UUID
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
      const { uuid } = req.query;
      // ↓↓↓ Validación ↓↓↓↓
      if (checkUuid(uuid)) {
        const product = await Product.findOne({
          where: {
            uuid: uuid,
          },
        });
        if (product) {
          const values = product.dataValues;
          let arrCategories = await productCategory(values.uuid);
          const objProduct = {
            id: values.uuid,
            name: values.name,
            description: values.description,
            image: values.image,
            thumbnail: values.thumbnail,
            price: values.price,
            stock: values.stock,
            categories: arrCategories,
          };
          console.log("Values: ", objProduct);
          res.status(200).json(objProduct);
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
  //>>>>>>>>>♂>>>>>♥♪>>>>>>>>>>> SE PUEDE HACER UN REQUEST AL BACK DESDE EL BACK? <<<<<<♂<<<<<♥<<<<♪<<<<<<<<<<♂
  getProductsByCategory: async (req, res, next) => {
    console.log(req.query);
    try {
      const { reqCategories } = req.query; //categories es un array, mandarlo desde el front como ARRAY!!!!
      const filteredProducts = await Product.findAll();
      const arrProducts = [];
      if (filteredProducts.length) {
        for (element of filteredProducts) {
          const values = element.dataValues;
          let arrCategories = await productCategory(values.uuid);
          const objProduct = {
            name: values.name,
            description: values.description,
            image: values.image,
            thumbnail: values.thumbnail,
            price: values.price,
            stock: values.stock,
            categories: arrCategories,
          };
          arrProducts.push(objProduct);
        }
        let a = [];
        for (element of arrProducts) {
          for (each of element.categories) {
            for (cate of reqCategories) {
              if (each === cate) {
                a.push(element);
              }
            }
          }
        }
        if (a) {
          res.status(200).send(a);
        } else {
          res.status(200).send("No hay productos con esas categorias");
        }
      } else {
        return res.send("base de datos vacia");
      }
    } catch (error) {
      next(error);
    }
  },

  searchProduct: async (req, res, next) => {
    const { name } = req.query;
    try {
      const all = await Product.findAll({
        where: {
          name: {
            [Sequelize.Op.like]: `%${name}%`,
          },
        },
      });
      res.send(all);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = productsController;
