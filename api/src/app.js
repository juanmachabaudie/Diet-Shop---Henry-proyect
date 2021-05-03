const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const routes = require("./routes/index.js");
//SDk de mercado pago
const mercadopago = require("mercadopago");

require("./db.js");

const server = express();

server.name = "API";

server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(morgan("dev"));
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// Cuenta del vendedor. (NOSOTROS)
mercadopago.configure({
  access_token:
    "APP_USR-4578884235716016-042015-fa446b74c80234af80eef38f8bca314d-746825150",
});

server.use("/", routes);

// Error catching endware.
server.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;

// Hola Victoria! Como va todo?

// Vi un post tuyo en LinkedIn sobre la búsqueda de un React Dev FrontEnd Jr. y me gustaría postularme.

// Estudié en el Bootcamp Henry y creé una aplicación que va a buscar datos a la API pública de Mercado Libre utilizando NodeJs+Express para el BackEnd y React para el FrontEnd (video:
// https://bit.ly/3twqawk
//  ).

// Además estoy participando activamente de Reactivistas, una propuesta de FrontEnd Café para profundizar sobre las bases de React. Siempre es bueno seguir trabajando sobre las bases de la librería.

// Actualmente estoy con algunas propuestas freelance pero estoy en búsqueda de un trabajo formal donde pueda crecer siendo parte de un equipo. Si tuviera la posibilidad de ingresar a una empresa, tengo decidido comenzar a estudiar analista de sistemas el próximo semestre para darle comienzo a un largo camino de desarrollo dentro del área.
