import React, { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";

import { Button, Card, CardContent, Grid, Typography, Modal } from "@material-ui/core";

import AddUser from "./AddUser";
import { selectAdmins } from "../redux/actions/userActions.js";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "0 0 50px rgb(234, 232, 300)",
    marginTop: "20px",
    display: "flex",
    justifyContent: "space-between",
  },
  data: {
    display: "flex",
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: 'center'
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

export default function UserCard({ uuid, userName, email, isAdmin }) {

  const classes = useStyles();

  const dispatch = useDispatch();

  const addAdmin = (uuid, act) => {
    dispatch(selectAdmins(uuid, act));
  };

  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
     <AddUser/>
    </div>
  );

  return (
    <Card className={classes.root}>
      <Grid item xs={3}>
        <CardContent className={classes.data}>
          <Typography>{userName}</Typography>
        </CardContent>
      </Grid>
      <Grid item xs={3}>
        <CardContent className={classes.data}>
          <Typography>{email}</Typography>
        </CardContent>
      </Grid>
      <Grid item xs={3}>
        <CardContent>
          <Typography>{!isAdmin ? "" : "ADMINISTRADOR"}</Typography>
        </CardContent>
      </Grid>
      <Grid item xs={3} className={classes.buttons}>
        {!isAdmin?
        <Button 
          onClick={() => addAdmin(uuid, true)}
          color="primary"
          variant="contained"
        >
          Designar Admin
        </Button>
        :
        <Button
          onClick={() => addAdmin(uuid, false)}
          color="secondary"
          variant="contained"
        >
          Descartar Admin
        </Button>
      }
      </Grid>
      <Grid item xs={3} className={classes.buttons}>
        <Button onClick={handleOpen} variant="contained">
          Reset Password
        </Button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {/* //componente de nico  */}
        {body}
      </Modal>
      </Grid>
    </Card>
  );
}