const server = require("express").Router();
const { Product, User } = require("../db.js");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

//Esto es para definir el tiempo de vida del token, tiene que ser pasado en segundos
//3 dias es igual a: 3 dias, por 24 hs cada uno, por 60 min/hora, por 60 seg/min
const tokenExpire = 3 * 24 * 60 * 60;

//Funcion que crea el token
const createToken = (id) => {
  return jwt.sign({ id }, JWT_SECRET, {
    expiresIn: tokenExpire
  });
}

var salts = bcrypt.genSaltSync(10);


server.post("/", async (req, res, next) => {
  console.log("SALT: ", salts);
  const { userName, firstName, lastName, email, password, admin } = req.body;
  const hashPassword = await bcrypt.hash(password, salts); // salt = "uhasduhie3q287he2uy"
  const [user, created] = await User.findOrCreate({
    where: { email: email },
    defaults: {
      email,
      userName,
      firstName: firstName,
      lastName: lastName,
      password: hashPassword,
      admin: admin,
    },
  });
  if (created) {
    const token = createToken(user.id);
    console.log(token)
    res.cookie('jwt', token, { httpOnly: true, maxAge: tokenExpire * 1000 }) //se multiplica por 1000 porq las cookies toman el tiempo en milisegundos
    return res.json({ message: "usuario creado con exito", user: user });
  } else {
    return res.json({ error: "El usuario ya existe", user: user });
  }
});

//Ruta para modificar un usuario
//Pasar por param el "id" del usuario que esta entrando a modificar sus datos
server.put("/:id", async (req, res) => {
  const { firstName, lastName, password, email, userName } = req.body;
  if (password) {
    const hashPassword = await bcrypt.hash(password, salts);
    User.findByPk(req.params.id)
      .then((user) => {
        user.update({ firstName, lastName, password: hashPassword, email, userName });
        return res.status(200).send("User has been modified");
      })
      .catch((error) => {
        return res.json({ error });
      });
  } else {
    User.findByPk(req.params.id)
      .then((user) => {
        user.update({ firstName, lastName, email, userName });
        return res.status(200).send("User has been modified");
      })
      .catch((error) => {
        return res.json({ error });
      });
  }
});

//Ruta para obtener usuario por id
server.get("/:id", async (req, res) => {
  const { id } = req.params
  var user;
  await User.findOne({ where: { id } })
    .then(data => user = data)
  return res.json(user);
});
//Ruta para obtener todos los usuarios
server.get("/", (req, res) => {
  User.findAll().then((users) => {
    return res.status(200).json(users);
  });
});

//Ruta para borrar un usuario

server.delete("/:userId", (req, res) => {
  User.destroy({ where: { id: req.params.userId } })
    .then((response) => {
      res.status(200).send("User deleted");
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

server.post("/log-in", async (req, res) => {
  const { userName, password } = req.body;
  // const newPass = await bcrypt.compare(password, salts);
  await User.findOne({ where: { userName } }).then(async (user) => {
    if (user) {
      return await bcrypt.compare(password, user.password, (err, same) => {
        if (same) {
          const token = createToken(user.id);
          console.log(token)
          res.cookie('jwt', token, { maxAge: tokenExpire * 1000 })
          return res.json(user);
        }
        return res.json({ passwordError: "contraseña invalida" });
      })
    }
    return res.json({ userError: "este usuario no existe" });
  });
});

module.exports = server;
