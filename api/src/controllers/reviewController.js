const { Review, User, Product, Order, order_lines } = require("../db");
const { checkUuid } = require("../helpers/utils");

//crea una review por persona por producto
async function createReview(req, res, next) {
  try {

    const { userMail, text, productUuid, rating} = req.body;
    console.log('vos: ', userMail)

    if(!userMail){
      return res.status(400).json({ message: "Por favor inicie sesion para comentar el producto" });
    }

    const comment = text.name;
    const userReviewing = await User.findOne({
      where: {
        email: userMail.email,
      },
      include: [{ model: Review }],
    });

    const userReviews = userReviewing.dataValues.reviews;

    let flag = false
    for (let review of userReviews) {
      if (review.dataValues.productUuid === productUuid) {
        flag = true;
      }
    }

    if(flag) {
      return res.status(400).json({ message: "Usted ya comentó este producto" });
    } 

    const orders = await Order.findAll({
      where:{
        userUuid: userReviewing.uuid
      },
      include: [
        {
          model: Product,
        }
      ],
    });

    let flagProd = false;
    //busco las ordenes en completed y busco el producto que me mandan. 

    for(var i = 0; i<orders.length;i++)
    {
      for(var j=0;j<orders[i].dataValues.products.length;j++)
      {
        if(orders[i].dataValues.orderState === 'completed' && orders[i].dataValues.products[j].order_lines.dataValues.productUuid === productUuid)
        {
          flagProd = true;
        }
      }
    }
    
    if (!flagProd){
      return res.status(200).json({ message: "Antes de opinar compre nuestro producto" });
    }

    if(flagProd){
      const newReview = await Review.create({
        userUuid: userReviewing.uuid,
        text: comment,
        productUuid,
        rating,
      });
      console.log('se creo');
      return res.status(200).json({ message: "Comentario agregado!" });
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
        let arrReview = []
        let objReview
        for (review of productReviews){
          objReview={
            review: review.dataValues.text,
            rating: review.dataValues.rating,
            date: review.dataValues.createdAt,
          }
          const user = await User.findOne({
            where: {
              uuid: review.dataValues.userUuid,
            }
          })
          objReview = {
            ...objReview,
            userName: user.dataValues.firstName,
            userLast: user.dataValues.lastName,
            photo: user.dataValues.image,
          }
          arrReview.push(objReview)
        }
        console.log(arrReview)
        res.status(200).json(arrReview);
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
