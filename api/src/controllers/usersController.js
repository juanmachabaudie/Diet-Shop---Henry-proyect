const { Review, User, Order, Product } = require("../db");
const { checkUuid } = require("../helpers/utils");
const sgMail = require("@sendgrid/mail");
const SENDGRID_API_KEY = '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'

sgMail.setApiKey(SENDGRID_API_KEY)


// async function createUser(req, res, next) {
//   const { userName, email, password, isAdmin } = req.body; //true
//   const passAdmin = "henry";
//   try {
//     const userNameExist = await User.findOne({
//       where: { userName },
//     });
//     if (userNameExist) {
//       return res.json({ message: "nombre de usuario ya existente" });
//     }
//     const emailExist = await User.findOne({
//       where: { email },
//     });
//     if (emailExist) {
//       return res.json({ message: "mail ya existente" });
//     }
//     if (isAdmin) {
//       if (isAdmin === passAdmin) {
//         const newUser = await User.create({
//           userName,
//           email,
//           password,
//           isAdmin: true,
//         });
//         return res.json({ message: "administrador creado" });
//       } else {
//         return res.json({ message: "clave de administrador invalida" });
//       }
//     } else {
//       const newUser = await User.create({
//         userName,
//         email,
//         password,
//         isAdmin: false,
//       });
//       return res.json({ message: "usuario creado" });
//     }
//   } catch (error) {
//     next(error);
//   }
// }

//trae todos los usuarios
async function getUsers(req, res, next) {
  try {
    const users = await User.findAll();
    const arrUsers = [];
    if (users.length) {
      for (element of users) {
        const values = element.dataValues;
        const objUser = {
          uuid: values.uuid,
          userName: values.userName,
          email: values.email,
          password: values.password,
          isAdmin: values.isAdmin,
        };
        arrUsers.push(objUser);
      }
    } else {
      return res.send("base de datos vacia");
    }
    res.json(arrUsers);
  } catch (error) {
    next(error);
  }
}

//actualiza datos de Un Usuario
async function updateUser(req, res, next) {
  const { uuid, userName, email, password, isAdmin } = req.body;
  const passAdmin = "henry";
  try {
    const toEditUser = await User.findOne({
      where: {
        uuid,
      },
    });
    if (toEditUser) {
      const userNameExist = await User.findOne({
        where: { userName },
      });
      if (userNameExist) {
        return res.json({ message: "el nombre de usuario ya existe" });
      }
      const emailExist = await User.findOne({
        where: { email },
      });
      if (emailExist) {
        return res.json({ message: "el mail ya existe" });
      } else {
        toEditUser.update(req.body);
        return res.status(200).json({ message: "Usuario Actualizado" });
      }
    }
    return res.status(400).json({ message: "Usuario no encontrado" });
  } catch (error) {
    next(error);
  }
}

//borra usuario
async function deleteUser(req, res, next) {
  const { uuid } = req.body;
  try {
    if (checkUuid(uuid)) {
      const toDestroy = await User.findOne({
        where: {
          uuid,
        },
      });
      if (toDestroy) {
        User.destroy({
          where: {
            uuid,
          },
        });
        res.status(200).send("Usuario eliminado");
      } else {
        res.status(404).send("No se encuentra el usuario a eliminar");
      }
    } else {
      res.status(404).send("Id invalido");
    }
  } catch (error) {
    next(error);
  }
}

//trae perfil del usuario
async function userProfile(req, res, next) {
  const { userUuid } = req.params;
  try {
    if (userUuid && checkUuid(userUuid)) {
      const userFound = await User.findOne({ where: { uuid: userUuid } });
      if (userFound) {
        return res.json(userFound);
      }
    }
    return res.status(400).json({ message: "Usuario Inexistente" });
  } catch (error) {
    next(error);
  }
}

//El usuario inicia sesion
async function login(req, res, next) {
  try {
    const { userName, email, password, isAdmin } = req.body;
    if (userName) {
      const userFoundName = await User.findOne({
        where: {
          userName,
        },
      });
      if (userFoundName) {
        if (password === userFoundName.password) {
          return res.json(userFoundName);
        }
      }
    }
    if (email) {
      const userFoundEmail = await User.findOne({
        where: {
          email,
        },
      });
      if (userFoundEmail) {
        if (password === userFoundEmail.password) {
          return res.json(userFoundEmail);
        }
      }
    }
    return res.status(404).json({ message: "El usuario no existe" });
  } catch (error) {
    next(error);
  }
}

async function changeAdmin(req, res, next) {
  const { uuid } = req.body;
  try {
    const toEditUser = await User.findOne({
      where: {
        uuid,
      },
    });
    toEditUser.update(req.body);
    return res.status(200).json({ message: "Usuario Actualizado" });
  } catch (error) {
    next(error);
  }
}

async function resetPassword(req, res, next) {
  try {
    const { email } = req.body;
  } catch (error) {
    next(error);
  }
}

async function sendOrder(req, res, next) {
  // const { order, userUuid } = req.body;
  // try {

  //   const user = await User.findOne({
  //     where: {
  //       uuid: userUuid
  //     },
  //     include: [
  //       {
  //         model: Order,
  //         where: {
  //           orderState: 'cart',
  //         },
  //         attributes: ['uuid']
  //       }
  //     ]
  //   });
  //   console.log("USER WITH ORDER: ", user.dataValues.orders[0].dataValues.uuid);
  //   const orderId = user.dataValues.orders[0].dataValues.uuid;
  //   const html = `
  //     <div>
  //         <h1>Orden</h1>
  //         <table>
  //             <tr>
  //                 <th>Producto</th>
  //                 <th> | </th>
  //                 <th>Cantidad</th>
  //                 <th> | </th>
  //                 <th>Precio</th>
  //             </tr>
  //             ${order.map(({ name, order_line, price }) => {
  //     return (
  //       `
  //                     <tr>
  //                         <td>${name}</td>
  //                         <td> | </td>
  //                         <td>${order_line.quantity}</td>
  //                         <td> | </td>
  //                         <td>${price}</td>
  //                     </tr>
  //                     `
  //     )
  //   })}
  //         </table>
  //         <hr />
  //         <table>
  //             <tr>
  //                 <td>Total:</td>
  //                 <td></td>
  //                 <td></td>
  //                 <td></td>
  //                 <td>${order.reduce((acc, { order_line, price }) => acc + (price * order_line.quantity), 0)}</td>
  //             </tr>
  //         </table>
  //         <br />
  //         <a href=${`http://localhost:3001/user/orders/${orderUuid}`} >Ingrese aquí para ver los detalles de su compra</a>
  //         <br />
  //         <h3>¡Gracias por su compra!</h3>
  //     </div>
  // `;

  //   const message = {
  //     to: user.email,
  //     from: 'dager2115@gmail.com',
  //     subject: 'Ésta es su orden de compra en Healthy Henry',
  //     text: 'Ésta es su orden de compra en Healthy Henry',
  //     html: html
  //   };

  //   sgMail.send(message)
  //     .then(response => res.send(response))
  //     .catch(err => console.log("ERROR ENVIANDO ORDEN: ", err));

  // } catch (error) {
  //   next(error)
  // }
//}

const { order, userId } = req.body;
const user = await User.findOne({
  where: {
            uuid: userId
        },
        include: [
            {
                model: Order,
                where: {
                    orderState: 'cart',
                  }, 
                  attributes: ['uuid']
              }
          ]
        });
        //console.log("USER WITH ORDER: ", user.dataValues.orders[0].dataValues.id);
      
    const orderId = user.dataValues.orders[0].dataValues.uuid;
    const html = `
        <div>
            <h1>Order</h1>
            <table>
                <tr>
                    <th>Producto</th>
                    <th> | </th>
                    <th>Cantidad</th>
                    <th> | </th>
                    <th>Precio</th>
                </tr>
                ${ order.map(({ name, order_line, price, discount }) => {
                    return (
                        `
                        <tr>
                            <td>${name}</td>
                            <td> | </td>
                            <td>${order_line.quantity}</td>
                            <td> | </td>
                            <td>${price - (price * (discount / 100))}</td>
                        </tr>
                        `
                    )
                })}
            </table>
            <hr />
            <table>
                <tr>
                    <td>Total:</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>${order.reduce((acc, {order_line, price, discount}) => acc + ((price - (price * (discount / 100))) * order_line.quantity), 0)}</td>
                </tr>
            </table>
            <br />
            <a href=${`http://localhost:3001/user/orders/${orderId}`} >Ingrese aquí para ver los detalles de su compra</a>
            <br />
            <h3>¡Gracias por su compra!</h3>
        </div>
    `;

    const message = {
        to: user.email,
        from: 'dager2115@gmail.com',
        subject: 'Ésta es su orden de Un Jardin Especial',
        text: 'Ésta es su orden de Un Jardin Especial',
        html: html
    };

    sgMail.send(message)
    .then(response => res.send(response))
    .catch(err => console.log("ERROR ENVIANDO ORDEN: ", err));
};

module.exports = {
  // createUser,
  getUsers,
  updateUser,
  changeAdmin,
  deleteUser,
  userProfile,
  login,
  resetPassword,
  sendOrder,
};
