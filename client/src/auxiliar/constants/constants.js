export const URL_BACK = "http://localhost:3001",
  //Trae todos los productos
  //Se puede usar para traer productos por id, colocando /:id despues de la ruta
  URL_BACK_PRODUCTS = `${URL_BACK}/products`,
  //Trae todos los categorias
  //Se puede usar para traer categorias por id, colocando /:id despues de la ruta
  URL_BACK_CATEGORIES = `${URL_BACK}/categories`,
  //Trae todos los productos que coincidan en nombre o descripción con el input de busqueda
  //Ejemplo de uso: `${URL_BACK_SEARCH + input}`
  URL_BACK_SEARCH = `${URL_BACK_PRODUCTS}/search?query=`,
  //Crea un usario si este no existe de lo contrario devuelve {error: "mensaje de error"}
  URL_BACK_USERS = `${URL_BACK}/users`,
  //agrega un producto al carrito del usuario
  URL_BACK_CART_USERS = `${URL_BACK}/cart/users`,
  //trae los productos del carrito
  URL_BACK_CART = `${URL_BACK}/cart`,
  SEND_EMAIL = `${URL_BACK}/email`,
  USERS_LOGIN = `${URL_BACK_USERS}/log-in`,
  PAYMENT = `${URL_BACK}/ml`,
  WISHLIST = `${URL_BACK}/wishlist/add`;
