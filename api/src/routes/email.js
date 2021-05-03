const server = require("express").Router();
const { Category, Product } = require("../db.js");
const nodemailer = require("nodemailer");

server.post("/:email", (req, res) => {
  let email = req.params.email;
  let { html, subject, text } = req.body;
  let transport = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: "ari.hegmann96@ethereal.email",
      pass: "KyRn4uhkMM1mpXKmuV",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  var mailOptions = {
    from: "nombreDeLaPagina",
    text: text,
    to: email,
    subject: subject,
    html,
  };

  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(404).send(error);
      console.log("the email cannot be send");
    } else {
      res.status(200).json(info.messageId);
      console.log("email sended succesfully", info.messageId);
    }
  });
});

module.exports = server;
