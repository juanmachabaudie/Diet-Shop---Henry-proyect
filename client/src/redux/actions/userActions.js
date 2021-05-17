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
