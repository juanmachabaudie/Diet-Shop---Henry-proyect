import axios from 'axios';
import jwt from 'jsonwebtoken';
import { sweetAlert } from '../../helpers/utils.jsx'

export const addUser = (datos) => {
  return async (dispatch) => {
    if (datos.password === datos.confirmPassword) {
      const { firstName, lastName, email, password, img } = datos
      const data = {
        firstName,
        lastName,
        email,
        password,
        isAdmin: false,
        image: img,
      }
      const res = await fetch("http://localhost:3001/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const resJson = await res.json();
      dispatch({
        type: "ADD_USER",
        payload: resJson,
      });
    } else {
      dispatch({
        type: "ADD_USER",
        payload: { message: "Las contraseñas no coinciden" },
      });
    }
  };

};

export const getAllUsers = () => {
  return async (dispatch) => {
    const res = await fetch("http://localhost:3001/user/");
    const resJson = await res.json();
    dispatch({
      type: 'GET_USERS',
      payload: resJson,
    });
  }
};

export const selectBlockUser = (uuid,act) => async (dispatch) => {
console.log(uuid)
console.log(act)
let datos = {}
    if (act) {
      datos = {
        "uuid": uuid,
        "blocked": true
      }
    } else {
      datos = {
        "uuid": uuid,
        "blocked": false
      }
    }
    const res = await axios.put("http://localhost:3001/user/blockUser", datos)
    console.log(res)
    dispatch({
      type: "ADMINS",
      payload: res.data,
    });
}

export const selectAdmins = (uuid, act) => {
  return async (dispatch) => {
    let datos = {}
    if (act) {
      datos = {
        "uuid": uuid,
        "isAdmin": true
      }
    } else {
      datos = {
        "uuid": uuid,
        "isAdmin": false
      }
    }
    const res = await fetch("http://localhost:3001/user/changeAdmin", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datos),
    });
    const resJson = await res.json();
    dispatch({
      type: "ADMINS",
      payload: resJson,
    });
  }

}

export const resetUserPassword = (data) => {
  return async (dispatch) => {
    if (data.newPassword === data.confirmPassword) {
      const toChange = {
        "uuid": data.uuid,
        "password": data.newPassword
      }
      const res = await fetch("http://localhost:3001/user/update", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(toChange),
      })
      const responseJson = await res.json();
      dispatch({
        type: "RESET_PASSWORD",
        payload: responseJson,
      });
    } else {
      dispatch({
        type: "RESET_PASSWORD",
        payload: { message: "Las contraseñas no coinciden" },
      });
    }
  };
};

export const logIn = (data) => {
  return async (dispatch) => {
    try {
      const user = await axios.post('/auth/login/email', data)
      if(!user.data.message){
        const userData = jwt.decode(user.data)
        console.log(userData)
        if(userData.blocked){
          sweetAlert(`${userData.firstName.toUpperCase()}`, 'SIN ACCESO', 'ACEPTAR')
        } else {
        sweetAlert(`BIENVENIDO ${userData.firstName.toUpperCase()}`, '', 'ACEPTAR')
        window.sessionStorage.setItem('user', JSON.stringify(user.data))
        }
      }else{
        console.log(user.data.message)
        sweetAlert(user.data.message, "Intente nuevamente")
      }
    } catch (error){
      console.log(error.status)
    }
  }
}

export const userLogout = () => {
  return async (dispatch) => {
    window.sessionStorage.clear();
    window.localStorage.clear();
    window.location.replace('http://localhost:3000/')
  }
}

export const getOrders = (userEmail) => async (dispatch) => {
  console.log(userEmail)
  const orders = await axios.get(`/user/orders?user=${userEmail}`)
  dispatch({ type: "GET_ORDERS", payload: orders.data })
}

export const userShipping = (userEmail) => async (dispatch) => {
  const shippingData = await axios.get(`/user/shipping?user=${userEmail}`)
  dispatch({ type: "GET_SHIPPING", payload: shippingData.data })
}

export const uploadShippingData = (userEmail, datos) => async () => {
  console.log(datos)
  const uploadData = await axios.put(`/user/shipping/update?user=${userEmail}`, datos)
}