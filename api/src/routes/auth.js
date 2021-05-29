const server = require("express").Router();
const jwt = require("jsonwebtoken");
const passport = require("passport");
const { User, Order, Product } = require("../db.js");

const { SECRET_JWT, DB_HOST, USE_PORT } = process.env;

/// ESTRATEGIA GOOGLE ///
server.get('/login/google', passport.authenticate('google', {scope: ["profile", "email"],}));
server.get("/login/google/callback", (req, res, next) => {
  passport.authenticate("google", (err, user) => {    console.log("ENTRE A AUTHENTICATE: ")
    if (err) return next(err);
    if (!user) {
      res.redirect(`http://localhost:3000/login?error=401`);
    } else {
      console.log(user) // aca tengo todos los datos del usuarios de google como para cargarlo en la db
      const token = jwt.sign(user.toJSON(), SECRET_JWT);
      res.redirect(`http://localhost:3000/?loginGoogle=true&t=${token}`);
    }
  })(req, res, next);
});

/// ESTRATEGIA LOCAL ///
server.post("/login/email", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return next(err);
    if (!user) {
      return res
        .status(401)
        .json({
          status: "error",
          code: "unauthorized",
          message: "Usuario y/o contraseña inválidos",
          info,
        });
    } else {
      return res.send(
        jwt.sign(
          {
            uuid: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            isAdmin: user.isAdmin,
            image: user.image,
          },
          `${SECRET_JWT}`
        )
      );
    }
  })(req, res, next);
});

server.post("/register", async (req, res) => {
  const { firstName, lastName, email, password, isAdmin, image } = req.body;
  try {
    if (!firstName || !lastName || !email || !password) {
      res.status(400).json({ message: "Datos incompletos" });
    } else {
      const user = await User.create({
        firstName,
        lastName,
        email, 
        password,
        isAdmin,
        image,
      });
      
      return res.send(
        jwt.sign(
          {
            uuid: user.uuid,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            isAdmin: user.isAdmin
          },
          SECRET_JWT
        )
      );
    }
  } catch (err) {
    console.log(err)
    res.status(400).json({ message: "No se ha podido registrar al usuario" });
  }
});

// server.get("/me", async (req, res) => {
//   if (!req.user) {
//     // se genera con el token que viene en el header
//     res.sendStatus(401);
//   } else if (!req.user.id) {
//     res.sendStatus(401);
//   } else {
//     const user = await User.findOne({
//       where: { uuid },
//       include: [       
//         { model: Order, include: Product },
//       ],
//     });
//     const { uuid, firstName, lastName, email } = user;
//     res.json({ uuid, firstName, lastName, email });
//   }
// });

module.exports = server;