const axios = require("axios");
const fetch = require("node-fetch");
const { uuid } = require("uuidv4");
const { Category } = require("../db");
const { Op } = require("sequelize");

//get all categories
async function getAllCategories(req, res, next) {
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
    req.body.id = uuid(); //BODY

    const { name, id } = req.body;
    const category = await Category.create({
      id: id,
      name: name,
    });
    return await res.send(category);
  } catch (error) {
    next(error);
  }
}

//delete a category
async function deleteCategory(req, res, next) {
  try {
    const { id } = req.body; //BODY
    const category = await Category.destroy({
      where: {
        id: id,
      },
    });
    const categories = await Category.findAll();
    return await res.send(categories);
  } catch (error) {
    next(error);
  }
}

//update or modify a category
async function updateCategory(req, res, next) {
  try {
    const { id, name } = req.body; //BODY
    const category = await Category.update(
      { name: name },
      {
        where: {
          id: id,
        },
      }
    );
    return await res.send(category);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllCategories,
  createCategory,
  deleteCategory,
  updateCategory,
};
