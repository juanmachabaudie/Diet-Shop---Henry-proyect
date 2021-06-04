import React, { useEffect } from "react";
import Carouselmages from "./Carousel";
import { useDispatch } from "react-redux";
import { changeOrderStatus } from "../redux/actions/cartActions.js";
import {decodeToken} from "../helpers/utils.jsx";
import StoreSelector from './StoreSelector';

export function Home() {
  const dispatch = useDispatch();
  const userEmail = decodeToken();

  useEffect(() => {
    const url = window.location.href;
    if (url.includes("status")) {
      dispatch(changeOrderStatus(userEmail));
    }

    if (url.includes("loginGoogle")) {
      const token = url.split("=")[2];
      window.sessionStorage.setItem("user", token);
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
