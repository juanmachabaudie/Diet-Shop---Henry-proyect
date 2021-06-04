import React, { useEffect } from "react";
import UserCard from "./UserCard.jsx";
import { getAllUsers } from "../redux/actions/userActions.js";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
}))

export default function Promote() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users.users);
  const change = useSelector((store) => store.users.change);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch,change]);

console.log(users)
  let thing = users.map((e) => (
    <UserCard
      key={e.uuid}
      data={e}
    />
  ));
  return (
      <Container>
        <div className={classes.offset}/>
          {thing}
      </Container>
  )
}
