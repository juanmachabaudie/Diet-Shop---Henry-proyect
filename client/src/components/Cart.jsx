import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCartReload } from '../redux/actions/cartActions.js'
import CartItem from "../components/CartItem";
import CartTotal from "../components/CartTotal";

import { Container, makeStyles, Typography } from "@material-ui/core";

const useStyle = makeStyles({
  cart: {
    marginLeft: "0px",
  },
  title: {
    color: "#f50057"
  }
  
});

const Cart = () => {
  const classes = useStyle();
  const dispatch = useDispatch();

  const cartItems = useSelector(state => state.cart.cartItems);
  useEffect(() => {
    dispatch(setCartReload());
  }, [dispatch])
  
  //esto va a mostrar todos los productos que tiene un usuario en su carrito//y mostraremos los items cart y el total cart
  return (
    <div>
    <table>
      <th>
        <Container className={classes.cart}>
          <div>
            <h4 className={classes.title}>Mis Productos</h4>
          </div>
          <hr />
          <Container>
            <Container>
              {
                cartItems?.map((product) => (
                  <CartItem key={product.uuid} product={product} />
                )) 
              }
            </Container>
          </Container>
        </Container>
        <hr />
      </th>
      <th>
        <Container>
          <CartTotal cartItems={cartItems}/>
        </Container>
      </th>
    </table>
  </div>
  );
};

export default Cart;
 
//cartItems={cartItems}
//key={product.uuid}