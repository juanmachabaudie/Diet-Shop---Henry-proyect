import React, { useContext } from "react";
import { CardActions, Typography, IconButton } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import Styles from "./productStyle";
import ProductsContext from "../../../context/Products/ProductsContext";
import PopUpsContext from "../../../context/PopUps/PopUpsContext";
import { addToCart } from "../../../auxiliar/functions/cartFunctions";
import { postCartGuest } from "../../../auxiliar/functions/CartWest";
import { useSelector, useDispatch } from "react-redux";
import WishList from "../../wishList/wishList";

function Product({ product }) {
  const { id } = useSelector((state) => state.user);
  const Classes = Styles();
  const { setProduct } = useContext(ProductsContext);
  const { setDetails, setCart } = useContext(PopUpsContext);

  const onHandleClick = async () => {
    if (id !== "GUEST") {
      await addToCart(id, product.id);
      setCart(true);
    } else {
      await postCartGuest(product);
      setCart(true);
    }
  };

  return (
    <div className={Classes.container}>
      {product.stock !== 0 && (
        <div className={Classes.price}>
          <CardActions
            style={{ display: "flex", justifyContent: "flex-end" }}
            disableSpacing
            className={Classes.cardActions}
          >
            <Typography
              style={{ marginRight: "20%" }}
              variant="h5"
              className={Classes.priceButton}
            >
              {`$ ${product.price}`}
            </Typography>
            <AddShoppingCart onClick={onHandleClick} className={Classes.priceButton} />
          <WishList productId={product.id} userId={id} />
          </CardActions>
        </div>
      )}
      <img
        alt={product.name}
        className={Classes.root}
        src={product.image}
        onClick={() => {
          setProduct(product);
          setDetails(true);
        }}
      />
    </div>
  );
}

export default Product;
