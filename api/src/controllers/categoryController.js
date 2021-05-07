const { uuid } = require("uuidv4");
const { Category } = require("../db");
const { Op } = require("sequelize");
const { checkUuid } = require("../helpers/utils");

async function getCategories(_req, res, next) {
  try {
    const categories = await Category.findAll();
    return await res.send(categories);
  } catch (error) {
    next(error);
  }
}

//create a category
async function createCategory(req, res, next) {
  try {
    const { name } = req.body;
    const find = await Category.findOne({
      where: {
        name,
      },
    });
    if (find) {
      return res.status().send("Category Already Exists");
    }
    const category = await Category.create({
      id: uuid(),
      name,
    });
    return await res.send(category);
  } catch (error) {
    next(error);
  }
}

//delete a category
async function deleteCategory(req, res, next) {
  try {
    const { id, name } = req.body; //BODY
    if (checkUuid(id)) {
      const category = await Category.destroy({
        where: {
          id,
        },
      });
      if (category) {
        return await res.send({ name: name, id: id });
      }
      return res.status(404).send("Id not found");
    } else {
      return res.status(400).send("Invalid");
    }
  } catch (error) {
    next(error);
  }
}

//update or modify a category
async function updateCategory(req, res, next) {
  try {
    const { id, name } = req.body; //BODY
    const category = await Category.update(
      { name },
      {
        where: {
          id,
        },
      }
    );
    return await res.send(category);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getCategories,
  createCategory,
  deleteCategory,
  updateCategory,
};
