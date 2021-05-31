import React from "react";
import {
  Button,
  Container,
  Typography,
  makeStyles,
  Grid,
  Modal,
  Fade,
  Backdrop,
} from "@material-ui/core";

//styles
const useStyle = makeStyles((theme) => ({
  item: {
    marginLeft: "auto",
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
    alignItems: "center",
    background: "#f3f6f7",
  },
  image: {
    height: 150,
    display: "flex",
    justifyContent: "space-between",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

//function
const PurchaseCard = (order) => {
  const classes = useStyle();
  const day = order.data.date.split("T")[0];

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container className={classes.item}>
      <Grid container>
        <Grid item sm={2}>
          <Typography variant="span">DIA DE LA COMPRA: </Typography>
          <Typography variant="span">{day}</Typography>
        </Grid>

        <Grid item sm={2}>
          <Typography variant="span">ESTADO DE LA ORDEN: </Typography>
          <Typography variant="span">{order.data.order_state}</Typography>
        </Grid>

        <Grid item sm={2}>
          <Typography variant="span">ESTADO DEL ENVIO: </Typography>
          <Typography variant="span">{order.data.shipping_state}</Typography>
        </Grid>

        <Grid item sm={2}>
          <Typography variant="span">USUARIO: </Typography>
          <Typography variant="span">{order.data.user}</Typography>
        </Grid>
      </Grid>
      <Button variant="contained" onClick={handleOpen}>
        Detalle de la compra
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Button onClick={handleClose}> X </Button>
            {order.data.products?.map((prod) => {
              return (
                <div>
                  <img className={classes.image} src={prod.image[0]} alt="" />
                  <div>
                    <Typography variant="span">PRODUCTO: </Typography>
                    <Typography variant="span">{prod.name}</Typography>
                  </div>
                  <div>
                    <Typography variant="span">CANTIDAD: </Typography>
                    <Typography variant="span">{prod.quantity}</Typography>
                  </div>
                  <div>
                    <Typography variant="span">PRECIO: </Typography>
                    <Typography variant="span">{prod.price}</Typography>
                  </div>
                  <div>
                    <Typography variant="span">SUB TOTAL: </Typography>
                    <Typography variant="span">{prod.price * prod.quantity}</Typography>
                  </div>
                </div>
              );
            })}
          </div>
        </Fade>
      </Modal>
    </Container>
  );
};

export default PurchaseCard;
