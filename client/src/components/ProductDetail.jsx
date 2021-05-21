// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";

// import { findProduct } from "../redux/actions/productActions";
// import { addToCart } from "../redux/actions/cartActions";

// import { red } from "@material-ui/core/colors";

// import {
//   makeStyles,
//   Card,
//   CardHeader,
//   CardMedia,
//   CardContent,
//   CardActions,
//   Collapse,
//   Avatar,
//   IconButton,
//   Typography,
// } from "@material-ui/core/";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     maxWidth: 700,
//     boxShadow: "0 0 30px",
//     marginLeft: "500px",
//     background: "#f3f6f7",
//   },
//   media: {
//     height: 0,
//     paddingTop: "56.25%", // 16:9
//   },
//   expand: {
//     transform: "rotate(0deg)",
//     marginLeft: "auto",
//     transition: theme.transitions.create("transform", {
//       duration: theme.transitions.duration.shortest,
//     }),
//   },
//   expandOpen: {
//     transform: "rotate(180deg)",
//   },
//   avatar: {
//     backgroundColor: red[500],
//   },
// }));

// export default function ProductDetail({ location }) {

//   const dispatch = useDispatch();
//   const classes = useStyles();

//   const { pathname } = location;

//   const uuid = pathname.split("/")[3];

//   useEffect(() => {
//     dispatch(findProduct(uuid));
//   }, [dispatch,uuid]);

//   const [count, setCount] = useState(1);

//   const defaultImg =
//     "https://lh3.googleusercontent.com/proxy/lDX77oEN-GsT0mLlLb6s3Y0sf3-EG9S3dqBV7cOsOrSSJ9_mlEtMb9I-nIj469riZT-Q3EA2N4nP6gzt-iwoSuOR_Fihd8cC";

//   const [expanded, setExpanded] = useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   const detail = useSelector((store) => store.products.product);

//   function handleChange(e) {
//     setCount(e.target.value);
//     if (detail.stock >= count || detail.stock <= count) {
//       setCount(detail.stock);
//       e.target.value = detail.stock;
//     }
//   }
//   //agregarAlCarrito
//   function handleClick() {
//     if (count > detail.stock) {
//       dispatch(addToCart(detail.uuid, count));
//     }
//   }
//   let checkStock;

//   if (detail.stock > 0) {
//     checkStock = (
//       <div>
//         <p>Stock: {detail.stock}</p>
//         <input
//           type="number"
//           placeholder=""
//           value={count}
//           onChange={handleChange}
//         />
//         <button value={detail.uuid} onClick={handleClick}>
//           Agregar al Carrito
//         </button>
//       </div>
//     );
//   } else {
//     checkStock = (
//       <div>
//         <p>Stock: Sin Stock</p>
//         <button value={detail.uuid} disabled>
//           Agregar al Carrito
//         </button>
//       </div>
//     );
//   }

//   return (
//     <Card className={classes.root}>
//       <CardHeader
//         avatar={
//           <Avatar aria-label="recipe" className={classes.avatar}>
//             diet
//           </Avatar>
//         }
//         title={detail.name}
//       />
//       <CardMedia
//         className={classes.media}
//         image={detail.image || defaultImg}
//         title={detail.name}
//       />
//       <CardContent>
//         <Typography paragraph variant="body" color="primary" component="p">
//           Descripción: {detail.description}
//         </Typography>
//         <Typography variant="body2" color="primary" component="p">
//           Precio: ${detail.price}
//         </Typography>
//         <Typography variant="body2" color="primary" component="p">
//           Categorias del Producto:
//           {detail.categories}
//         </Typography>
//         <Typography variant="body2" color="primary" component="p">
//           {checkStock}
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// }

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  makeStyles,
  Grid,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  IconButton,
  Typography,
  Container,
} from "@material-ui/core/";

import { FontAwesomIcon } from "@fortawesome/react-fontawesome";

import { findProduct } from "../redux/actions/productActions.js";

import defaultImg from '../imgs/default.svg';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  },
});

const ProductDetail = ({ location }) => {
  
  const detail = useSelector((store) => store.products.product);
  const dispatch = useDispatch();
  const classes = useStyles();

  const { pathname } = location;

  const uuid = pathname.split("/")[3];

  useEffect(() => {
    dispatch(findProduct(uuid));
  }, [dispatch, uuid]);

  return (
      <Container className={classes.root}>
        <Typography variant="h4" align="center">{detail.name}</Typography>
        <Grid xs={6}>
        <CardMedia
          component="img"
          alt={ detail.name }
          height="350"
          image={ detail.image || defaultImg }
        />
        </Grid>
        <Grid xs={6}>
          <Typography variant="body2">Categorias: {detail.categories}</Typography>
          <Typography variant="h5">{detail.name}</Typography>
          <Typography variant="body1">Descripcion: {detail.description}</Typography>

        </Grid>
        <Grid></Grid>
      </Container>
  );
};

export default ProductDetail;
