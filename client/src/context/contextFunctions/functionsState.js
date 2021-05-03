import React, {useContext} from "react";
import FunctionsContext from "./functionsContext";
import {useDispatch} from 'react-redux';
import { authenticatedUser } from "../../redux/actions";
import ProductsContext from '../Products/ProductsContext';
import Cookies from 'universal-cookie';
import { getCart, guestToDataBase } from "../../auxiliar/functions/cartFunctions";
import { getCartGuest } from "../../auxiliar/functions/CartWest";

const FunctionsState = (props) => {
  const {setCartCount} = useContext(ProductsContext)
  const dispatch = useDispatch();

  const countItems = (products) => {
      let count = 0;
      products.map((product => {
          count += Number(product.orderLine.quantity);
      }))
      console.log(count)
      return count;
  }


  const onLogIn = async (user) => {
    const cookies = new Cookies();
    if (user) {
      dispatch(authenticatedUser(user));
      cookies.set("userId", user.id, "/");
      await guestToDataBase(user.id, getCartGuest().products)
      localStorage.clear("cart")
      const userCart = await getCart(user.id);
      if(userCart) setCartCount(countItems(userCart.products));
    }
  }

  return (
    <FunctionsContext.Provider
      value={{
       onLogIn
      }}
    >
      {props.children}
    </FunctionsContext.Provider>
  );
};

export default FunctionsState;