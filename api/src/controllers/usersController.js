const { User } = require("../db");

async function createUser(req, res, next) {
  const { userName, email, password, isAdmin } = req.body; //true
  const passAdmin = "henry";
  try {
    const userNameExist = await User.findOne({
      where: { userName },
    });
    if (userNameExist) {
      return res.json({ message: "nombre de usuario ya existente" });
    }
    const emailExist = await User.findOne({
      where: { email },
    });
    if (emailExist) {
      return res.json({ message: "mail ya existente" });
    }
    if (isAdmin) {
      if (isAdmin === passAdmin) {
        const newUser = await User.create({
          userName,
          email,
          password,
          isAdmin,
        });
        return res.json({ message: "administrador creado" });
      } else {
        return res.json({ message: "clave de administrador invalida" });
      }
    } else {
      const newUser = await User.create({
        userName,
        email,
        password,
        isAdmin: "",
      });
      return res.json({ message: "usuario creado" });
    }
  } catch (error) {
    next(error);
  }
}

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
    console.log(toEditUser);
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

//trae todos los usuarios
async function getUser(req, res, next) {
  const { userName } = req.params;
  try {
    const user = await User.findOne({ where: { userName } });
    if (user === null) {
      return res.send("Usuario No Existe");
    } else {
      return res.send(user);
    }
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createUser,
  getUsers,
  updateUser,
  getUser,
};
