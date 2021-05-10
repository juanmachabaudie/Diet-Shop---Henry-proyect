const { Category } = require("../db");

const checkUuid = (uuid) => {
  const uuidSplit = uuid.split("-");
  return uuid.length === 36 && uuidSplit.length === 5;
};

// ↓ funcion para traer la relacion ↓
const productCategory = async (data) => {
  const { product_category } = require("../db");
  let relacion = await product_category.findAll({
    where: {
      productUuid: data,
    },
  });
  const categoryArray = [];
  for (element of relacion) {
    let category = await Category.findOne({
      where: {
        uuid: element.dataValues.categoryUuid,
      },
    });
    categoryArray.push(category.dataValues.name);
  }
  return categoryArray;
};

module.exports = {
  checkUuid,
  productCategory,
};
