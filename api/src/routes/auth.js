const router = require("express").Router();
const jwt = require("jsonwebtoken");
const { User } = require("../db");
const nodemailer = require("nodemailer");
const fetch = require("node-fetch");

router.post("/login", async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  if (!user) res.status(401).json({ error: "Invalid credentials" });
  else if (!(password === user.password))
    res.status(401).json({ error: "Invalid credentials" });
  else {
    const { id, firstName, lastName, email, userName, admin } = user;
    jwt.sign(
      {
        userData: {
          id,
          firstName,
          lastName,
          email,
          userName,
          admin,
        },
      },
      process.env.TOKEN_SECRET,
      (error, token) => {
        if (error) res.status(400).json({ error });
        else res.json({ token });
      }
    );
  }
});

router.get("/me", (req, res, next) => {
  const token = req.headers["token"];
  if (!token) res.json({ status: "Not Logged", data: null });
  else {
    jwt.verify(token, process.env.TOKEN_SECRET, (error, data) => {
      if (error) res.status(401).send({ error });
      else res.json({ data });
    });
  }
});

router.post("/passwordReset", async (req, res) => {
  const email = req.body.email;
  const user = await User.findOne({ where: { email } });
  if (!user) {
    return res.status(401).json({ error: "User invalid" });
  }
  let token = jwt.sign({ id: user.id }, process.env.RESET_PASSWORD_KEY);
  console.log("aca va el token", token);

  await user.update({ resetPass: token });

  await fetch(`http://localhost:3001/email/${email}`, {
    method: "POST",
    body: JSON.stringify({
      html: `<a href="https://localhost:3000/resetPassword/${user.id}/${token}">Recupera contraseña</a>`,
      subject: "recuperaste la contraseña salamin",
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.status(200).send("Se envio el token a tu email");
});

router.post("/promote/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (!user) return res.status(404).json({ error: "Usuario no encontrado" });
    if (user.admin) user.admin = false;
    else user.admin = true;
    await user.save();
    res.json({ message: "Usuario promovido a Administrador", user });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
