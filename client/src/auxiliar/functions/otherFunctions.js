import {
  SEND_EMAIL,
  URL_BACK_USERS,
  USERS_LOGIN,
  PAYMENT,
  WISHLIST,
} from "../constants/constants";

export const register = (inputs) => {
  return fetch(URL_BACK_USERS, {
    method: "POST",
    body: JSON.stringify(inputs),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const sendEmail = (email) => {
  fetch(SEND_EMAIL + "/" + email, {
    method: "POST",
    body: JSON.stringify({ subject: "cualquier cosa", html: "" }),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const logIn = (userName, password) => {
  return fetch(USERS_LOGIN, {
    method: "POST",
    body: JSON.stringify({ userName, password }),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: 'include'
  });
};

export const generatePaymentLink = async (user, products) => {
  let link = "";
  await fetch(PAYMENT, {
    method: "POST",
    body: JSON.stringify({ user, products }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((r) => r.json())
    .then((data) => {
      console.log(data);
      link = data.response.sandbox_init_point;
    });
  return link;
};

export const addToWishList = async (productId, userId) => {
  await fetch(`${WISHLIST}/${productId}/${userId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
