const checkUuid = (uuid) => {
  const uuidSplit = uuid.split("-");
  return uuid.length === 36 && uuidSplit.length === 5;
};
// ↓ funcion para traer la relacion ↓
const productCategory = async (data) => {
  const { product_category } = require("../db")
  let relacion = await product_category.findAll({
    where: {
      productUuid: productId,
    },
  });
  const categories = await Category.findAll();
  const categoryArray = [];

  for (let i = 0; i < relacion.length; i++) {
    for (let j = 0; j < categories.length; j++) {
      if (relacion[i].productUuid == categories[j].id) {
        categoryArray.push(categories[j].name);
      }
    }
  }
  return categoryArray;
};

module.exports = {
  checkUuid,
  productCategory
};
