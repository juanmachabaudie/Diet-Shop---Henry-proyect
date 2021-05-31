import React, { useEffect } from "react";
import Carouselmages from "./Carousel";
import { useDispatch } from "react-redux";
import { changeOrderStatus } from "../redux/actions/cartActions.js";
import jwt from 'jsonwebtoken';

export function Home() {
  const dispatch = useDispatch();
  let userEmail;
  if (sessionStorage.getItem("user")){
  let tokeen;
  const token = sessionStorage.getItem("user");
  if (token[0] === '"'){
    tokeen = JSON.parse(token);
  } else {
    tokeen = token;
  }
  userEmail = jwt.decode(tokeen).email;
  }
  useEffect(() => {
    const url = window.location.href;
    if (url.includes("status")) {
      dispatch(changeOrderStatus(userEmail));
    }
    
    if (url.includes('loginGoogle')){
      const token = url.split('=')[2];
      window.sessionStorage.setItem('user', token)
    }
    //Aca van los if's para las autenticaciones
  }, [dispatch]);

  return (
    <div>
      <Carouselmages />
    </div>
  );
}

export default Home;
