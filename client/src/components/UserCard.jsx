import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";

import { Button, Card, CardContent, Grid, Typography } from "@material-ui/core";

import { selectAdmins, selectBlockUser } from "../redux/actions/userActions.js";
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
    alignItems: "center",
  },
  rootSnack: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function UserCard(user) {
  console.log(user.data);
  const classes = useStyles();
  const dispatch = useDispatch();

  const addAdmin = (uuid, act) => {
    dispatch(selectAdmins(uuid, act));
  };

  const blockUser = (uuid, act) => {
    dispatch(selectBlockUser(uuid, act));
  };

  function allOnClicksTrue() {
    addAdmin(user.data.uuid, true);
  }

  function allOnClicksFalse() {
    addAdmin(user.data.uuid, false);
  }

  function allOnClicksBlockTrue() {
    blockUser(user.data.uuid, true);
  }

  function allOnClicksBlockFalse() {
    blockUser(user.data.uuid, false);
  }

  return (
    <Card className={classes.root}>
      <Grid item xs={3}>
        <CardContent className={classes.data}>
          <Typography>{user.data.email}</Typography>
        </CardContent>
      </Grid>
      <Grid item xs={3}>
        <CardContent>
          <Typography>{!user.data.isAdmin ? "" : "ADMINISTRADOR"}</Typography>
        </CardContent>
      </Grid>
      <Grid item xs={3} className={classes.buttons}>
        {!user.data.isAdmin ? (
          <>
            <Button
              onClick={allOnClicksTrue}
              color="primary"
              variant="contained"
            >
              Designar Admin
            </Button>
          </>
        ) : (
          <>
            <Button
              onClick={allOnClicksFalse}
              color="secondary"
              variant="contained"
            >
              Descartar Admin
            </Button>
          </>
        )}
      </Grid>
      <Grid item xs={3} className={classes.buttons}>
        {!user.data.blocked ? (
          <>
            <Button
              onClick={allOnClicksBlockTrue}
              color="primary"
              variant="contained"
            >
              Bloquear Usuario
            </Button>
          </>
        ) : (
          <>
            <Button
              onClick={allOnClicksBlockFalse}
              color="secondary"
              variant="contained"
            >
              Desbloquear Usuario
            </Button>
          </>
        )}
      </Grid>
    </Card>
  );
}
