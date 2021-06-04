import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import jwt from "jsonwebtoken";
import PurchaseCard from "./PurchaseCard.jsx";
import { getOrders } from "../redux/actions/userActions.js";
import {decodeToken} from "../helpers/utils.jsx";
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
}))

const Purchases = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const orders = useSelector(store => store.users.orders.arrOrders);
  const userEmail = decodeToken();

  useEffect(() => {
      dispatch(getOrders(userEmail));
  }, [dispatch]);

  return (
    <div>
      <div className={classes.offset}/>
     { orders?.map((e)=>{
       return (
       <PurchaseCard  
       data={e}
       />
     )
     })
}
    </div>
  );
};

export default Purchases;
