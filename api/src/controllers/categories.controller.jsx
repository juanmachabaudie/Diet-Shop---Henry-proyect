const { Category } = require("../db");

export const getCategories = async (_req, res, next) => {
  try {
    const categories = await Category.findAll();
    return await res.send(categories);
  } catch (error) {
    next(error);
  }
};
