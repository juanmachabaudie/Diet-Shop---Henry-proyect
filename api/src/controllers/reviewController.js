const { Review, User, Product } = require("../db");
const { checkUuid } = require("../helpers/utils");

async function createReview(req, res, next) {
  try {
    const { userUuid, text, productUuid } = req.body;
    const userReviewing = await User.findOne({
      where: {
        uuid: userUuid,
      },
    });

    const reviewByOrderStatus = await Order.findAll({ where: { userUuid } });
    for (let order of reviewByOrderStatus) {
      const values = order.dataValues;
      if (values.shippingState === "processing" || values.shippingState === "completed") {
        const productInOrderLines = order_lines.findAll({
          where: { orderUuid: values.uuid },
        });
        for (let product of productInOrderLines) {
          if (product.dataValues.productUuid === productUuid) {
            const productReviewed = await Product.findOne({
              where: {
                uuid: productUuid,
              },
              include: [{ model: Review }],
            });
            if (userReviewing && productReviewed) {
              for (let review of productReviewed.dataValues.reviews) {
                if (review.userUuid === userUuid) {
                  return res
                    .status(200)
                    .json({ message: "Ya has comentado sobre este producto" });
                }
              }
              await Review.create({
                text,
                userUuid,
                productUuid,
              });
              res.status(200).json({ message: "Gracias por su comentario" });
            } else {
              res.status(400).json({ message: "Usuario No Valido para Comentar" });
            }
          }
        }
      }
    }
  } catch (error) {
    next(error);
  }
}

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

async function deleteReview(req, res, next) {
  try {
    const { uuid } = req.body;
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
