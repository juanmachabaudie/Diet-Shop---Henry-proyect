const { Review, User, Product, Order, order_lines } = require("../db");
const { checkUuid } = require("../helpers/utils");

//crea una review por persona por producto
async function createReview(req, res, next) {
  try {
    const { userUuid, text, productUuid } = req.body;
    const userReviewing = await User.findOne({
      where: {
        uuid: userUuid,
      },
      include: [{ model: Review }],
    });
    const userReviews = userReviewing.dataValues.reviews;
    if (!userReviews.length) {
      const newReview = await Review.create({
        userUuid,
        text,
        productUuid,
      });
    }
    for (let review of userReviews) {
      if (review.productUuid === productUuid) {
        return res.status(400).json({ message: "Usted ya comento este producto" });
      } else {
        const newReview = await Review.create({
          userUuid,
          text,
          productUuid,
        });
      }
    }
  } catch (error) {
    next(error);
  }
}

//devuelve todas las reviews de un producto
async function getReviewsByProduct(req, res, next) {
  try {
    const { productUuid } = req.params;

    if (checkUuid(productUuid)) {
      const productReviews = await Review.findAll({
        where: {
          productUuid,
        },
      });
      if (productReviews) {
        res.status(200).json(productReviews);
      } else {
        res.status(400).json({ message: "Sin comentarios" });
      }
    } else {
      res.status(400).json({ message: "Id inexistente" });
    }
  } catch (error) {
    next(error);
  }
}

//esta ruta actualiza el comentario del usuario mandando el id de la review y el texto
async function updateReview(req, res, next) {
  try {
    const { uuid } = req.body; // review a modificar
    if (checkUuid(uuid)) {
      const reviewToEdit = await Review.findOne({
        where: {
          uuid: uuid,
        },
      });
      if (reviewToEdit) {
        reviewToEdit.update(req.body); // cambiamos el text
        res.status(200).json({ message: "Comentario Actualizado" });
      } else {
        res.status(400).json({ message: "No se ha podido Actualizar" });
      }
    } else {
      res.status(400).json({ message: "Id inexistente" });
    }
  } catch (error) {
    next(error);
  }
}

//elima una review por paramas ya que lo que tiene que recibir es un unico dato (el id de la review)
async function deleteReview(req, res, next) {
  try {
    const { uuid } = req.params;
    if (checkUuid(uuid)) {
      const toDestroy = await Review.findOne({
        where: {
          uuid,
        },
      });
      if (toDestroy) {
        Review.destroy({
          where: {
            uuid,
          },
        });
        res.status(200).json({ message: "Comentario eliminado" });
      } else {
        res.status(404).json({ message: "No se encuentra el comentario a eliminar" });
      }
    } else {
      res.status(400).json({ message: "Id inexistente" });
    }
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createReview,
  getReviewsByProduct,
  updateReview,
  deleteReview,
};
