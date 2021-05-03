const mercadopago = require("mercadopago");
const server = require("express").Router();
const fetch = require("node-fetch")

mercadopago.configure({
  access_token: process.env.ACCESS_TOKEN
});


server.post("/", async (req, res) => {
  let {products, user} = req.body;

  items = products && products.map(product => {
    return {
      title: product.name, 
      id: product.id, 
      quantity: Number(product.orderLine.quantity),
      unit_price: product.price
    }
  })

  let preference = {
    items,
    payer: {
      email: user.email,
      name: user.firstName+" "+user.lastName
    },
    back_urls: { 
      failure: "http://localhost:3001/ml/payment",
      pending: "http://localhost:3001/ml/payment",
      success: "http://localhost:3001/ml/payment"
    },
    marketplace: "NUMERIQUE"
  };
  
  const response = await mercadopago.preferences.create(preference)
  console.log(response);
  res.json(response);  
})


server.get("/payment", (req, res) => {
  const {status} = req.query;

  if (status==="approved") {
    fetch("http://localhost:3001/cart/1?status=Processing", { method: "PUT" })
    res.redirect("https://localhost:3000/payment");    
  }
})

module.exports = server;