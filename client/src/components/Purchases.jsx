import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import jwt from "jsonwebtoken";
import PurchaseCard from "./PurchaseCard.jsx";
import { getOrders } from "../redux/actions/userActions.js";

const Purchases = () => {
  const dispatch = useDispatch();
  const orders = useSelector(store => store.users.orders.arrOrders);
  console.log(orders)
  let userEmail;
  if (sessionStorage.getItem("user")) {
    let tokeen;
    const token = sessionStorage.getItem("user");
    if (token[0] === '"') {
      tokeen = JSON.parse(token);
    } else {
      tokeen = token;
    }
    userEmail = jwt.decode(tokeen).email
  }
  useEffect(() => {
      dispatch(getOrders(userEmail));
  }, [dispatch]);

  return (
    <div>
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
