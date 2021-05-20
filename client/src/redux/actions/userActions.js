export const addUser = (datos) => {
  return async (dispatch) => {
    console.log(datos);
    if (datos.password === datos.confirmPassword) {
      const res = await fetch("/users/create", {
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

