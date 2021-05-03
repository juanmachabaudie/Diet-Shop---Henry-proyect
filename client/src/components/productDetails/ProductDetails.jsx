import React, { useContext, useState } from "react";
import "./Styles.css";
import useStyles from "./Styles";
import { Dialog, DialogContent, IconButton, Slide } from "@material-ui/core";
import { ArrowBack, AddShoppingCart } from "@material-ui/icons";
import ProductsContext from "../../context/Products/ProductsContext";
import PopUpsContext from "../../context/PopUps/PopUpsContext";
import { addToCart } from "../../auxiliar/functions/cartFunctions";
import {postCartGuest} from "../../auxiliar/functions/CartWest";
import Review from "../../components/review/Review";
import { useSelector } from "react-redux";
const TransitionComponent = (props) => <Slide direction="right" {...props} />;

const ProductDetails = () => {
  const classes = useStyles();
  const { product } = useContext(ProductsContext);
  const {id} = useSelector(state => state.user)
  const { setDetails, details, setCart } = useContext(PopUpsContext);

  const onHandleClick = async () => {
    if(id !== "GUEST"){
      await addToCart(id, product.id);
      setCart(true);
    }else{
    
      await postCartGuest(product)
      setCart(true);
    }
  };

  return product ? (
    <Dialog
      TransitionComponent={TransitionComponent}
      onBackdropClick={() => setDetails(false)}
      open={details}
      maxWidth="xl"
    >
      <DialogContent className={classes.DialogContent} style={{ padding: "0" }}>
        <IconButton
          style={{ position: "absolute" }}
          onClick={() => {
            setDetails(false);
          }}
        >
          <ArrowBack style={{ color: "white" }} />
        </IconButton>
        <div className="DetailsContainer">
          <img
            className="DetailsImage"
            src={product.image}
            alt="details image"
          />
          <div className="infoContainer">
            <h2 className={classes.ProductName}>{product.name}</h2>
            <div style={{ alignSelf: "flex-start", alignContent: "left" }}>
              <h6 className={classes.Artist}>@ElArtista</h6>
              <p className={classes.Description}>
                {product.description}, Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Eos, explicabo, consequatur quam autem cum
                odit tenetur reiciendis iste impedit minus, accusantium
                consectetur repellat! Veritatis itaque, inventore aliquid est
                tempore odio!
              </p>
              
            </div>

            <div className="toCart">
              <div className="price">
                <p>Precio: $ {product.price}</p>
                <p>
                  Stock : {product.stock == 0 ? "No Disponible" : product.stock}{" "}
                </p>
              </div>
              <div>
                {/* <Button variant="contained" onClick={()=>{if(counter>1){setCounter(counter-1)}else setCounter(0)}}>-</Button>
              <Button variant="contained">{counter}</Button>
              <Button variant="contained" onClick={()=>{setCounter(counter+1)}}>+</Button> */}
                {product.stock !== 0 && (
                  <IconButton onClick={onHandleClick}>
                    <AddShoppingCart />
                  </IconButton>
                )}
              </div>
            </div>
          <Review product={product}/> 
          </div>
        </div>
      </DialogContent>
    </Dialog>
  ) : (
    <></>
  );
};

export default ProductDetails;
