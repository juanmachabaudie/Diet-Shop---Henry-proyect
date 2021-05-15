import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addUser } from "../redux/actions/userActions.js";

export default function AddUser() {
  const dispatch = useDispatch();
  const store = useSelector((store) => store);

  const added = store.users.message;

  const [datos, setDatos] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAdmin: "",
  });

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = (event) => {
    event.preventDefault();
    dispatch(addUser(datos));
    setDatos({
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
      isAdmin: "",
    });
  };

  return (
    <div>
      <form onSubmit={enviarDatos}>
        <div>
          <section>
            <input
              value={datos.userName}
              type="text"
              placeholder="Nombre De Usuario"
              name="userName"
              onChange={handleInputChange}
            />
          </section>
          <section>
            <input
              value={datos.email}
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleInputChange}
            />
          </section>
          <section>
            <input
              value={datos.password}
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleInputChange}
            />
          </section>
          <section>
            <input
              value={datos.confirmPassword}
              type="password"
              placeholder="confirmPassword"
              name="confirmPassword"
              onChange={handleInputChange}
            />
          </section>
          <section>
            <input
              value={datos.isAdmin}
              type="password"
              placeholder="Clave de administrador"
              name="isAdmin"
              onChange={handleInputChange}
            />
          </section>
        </div>
        <input type="submit" value="Agregar" />
        <div>{added.message}</div>
      </form>
    </div>
  );
}
