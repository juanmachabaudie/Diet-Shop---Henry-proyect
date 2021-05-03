import { URL_BACK } from "../constants/constants";

export const addToWishList = (productId, userId) => {
    fetch(`${URL_BACK}/wishlist/add/${productId}/${userId}`, {method: "POST"})
}