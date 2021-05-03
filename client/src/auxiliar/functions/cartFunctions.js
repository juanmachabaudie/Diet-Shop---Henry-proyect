import { URL_BACK_CART_USERS, URL_BACK_CART } from "../constants/constants";

export const //agrega un producto al carrito de un usuario
  //recibe como parametro el id del usuario y el del producto
  addToCart = async (userId, productId, quantity=1) => {
    var Total = 0;
    await fetch(`${URL_BACK_CART_USERS}/${userId}/${productId}`, {
      method: "POST",
      body: JSON.stringify({quantity}),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => (Total = response));
    return Total;
  },
  //modifica la cantidad de un producto
  //recibe como parametro el id del usuario y el del producto
  modifyQuantity = async (userId, productId, quantity) => {
    var Total = 0;
    await fetch(`${URL_BACK_CART_USERS}/${userId}/cart/${productId}`, {
      method: "PUT",
      body: JSON.stringify({ quantity }), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => (response ? Total = response.Total: Total = 0));
    return Total;
  },
  cancelOrder = async (userId) => {
    await fetch(`${URL_BACK_CART_USERS}/orders/${userId}`, {
      method: "PUT",
      body: JSON.stringify({ status: "cancel" }), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("Success:", response));
  },
  getCart = async (userId) => {
    var r;
    await fetch(`${URL_BACK_CART}/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        r = data;
      })
      .catch(() => (r = {}));
    return r;
  },
  guestToDataBase = async (userId, products) =>{
    console.log(products);
    if(products) {
      await products.forEach(async product => await addToCart(userId, product.id, product.orderLine.quantity));
    }
  }
