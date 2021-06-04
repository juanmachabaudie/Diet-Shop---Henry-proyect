import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Reviews from "./Reviews.jsx";
import { sweetAlert, decodeToken } from '../helpers/utils.jsx'
import { findProduct } from "../redux/actions/productActions.js";
import { addToCart } from '../redux/actions/cartActions.js'
import { makeStyles, Box, Grid, CardMedia, Typography, Button } from "@material-ui/core/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faEdit } from "@fortawesome/free-solid-svg-icons";
import defaultImg from "../imgs/default.svg";

const useStyles = makeStyles((theme) => ({
  description: {
    flexDirection: "column",
  },
}));


const ProductDetail = ({ location }) => {
  const classes = useStyles();
  const detail = useSelector((store) => store.products.product);
  const dispatch = useDispatch();

  const user = decodeToken();
  let userAdmin
  if(user){ userAdmin = user.isAdmin; }
  

  const { pathname } = location;

  const uuid = pathname.split("/")[3];

  useEffect(() => {
    dispatch(findProduct(uuid));
  }, [dispatch, uuid]);

  function clickToAdd(){
    dispatch(addToCart(detail.uuid, detail.name, detail.description, detail.stock, detail.image, detail.price, 1))
    sweetAlert({ icon: 'success', title: `${detail.name} agregado al carrito`, showConfirmButton: false, timer: 1000}) 
  }

  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box m={5}>
            <CardMedia
              component="img"
              alt={detail.name}
              height="500"
              image={detail.image || defaultImg}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box m={5} display="flex" className={classes.description}>
            <Box m={2}>
              <Typography variant="body2" color="primary" component="p">
                Categorias: {detail.categories}
              </Typography>
            </Box>
            <Box m={2}>
              <Typography variant="h4" color="initial">
                {detail.name}
              </Typography>
            </Box>
            <Box m={2}>
              <Typography variant="h4" color="primary" component="p">
                Precio: ${detail.price}
              </Typography>
            </Box>
            <Box m={2}>
              <Typography variant="h6" color="primary" component="p">
                Stock: {detail.stock}
              </Typography>
            </Box>
            <Box m={2}>
              <Typography variant="body1" color="primary" component="p">
                Descripción: {detail.description}
              </Typography>
            </Box>
            <Button onClick={clickToAdd}><FontAwesomeIcon icon={faCartPlus}/>Agregar al Carrito </Button>
          </Box>
          { userAdmin?
          <Box>
            <Button href={`/product/edit/${uuid}`}>
              <FontAwesomeIcon size = "3x" icon={faEdit} />
            </Button>
          </Box>
: <></>}
        </Grid>

        <Grid item xs={12} md={6}>
          <Box display="flex" justifyContent="center">
            <Reviews productUuid={uuid}/>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductDetail;


