export const addUser = (datos) => {
  return async (dispatch) => {
    if (datos.password === datos.confirmPassword) {
      const res = await fetch("http://localhost:3001/users/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datos),
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
    console.log('getAllUsers', resJson)
    dispatch({
      type: 'GET_USERS',
      payload: resJson,
    });
  }
};

export const selectAdmins = (uuid, act) => {
  return async (dispatch) => {
    console.log(act)
    let datos = {}
    if (act) {
      console.log('verdadero')
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
    console.log(datos)
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
if (data.newPassword === data.confirmPassword){
  const toChange = {
    "uuid" : data.uuid,
    "password" : data.newPassword
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
      dispatch ({
        type: "RESET_PASSWORD",
        payload: {message: "Las contraseñas no coinciden"},
      });
    }
  };
};

