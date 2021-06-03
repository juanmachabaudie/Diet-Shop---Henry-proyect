import Swal from "sweetalert2";
import jwt from 'jsonwebtoken';

export const sweetAlert = (props) => {
  console.log(props)
  Swal.fire({
    icon: props.icon,
    title: props.title,
    showConfirmButton: props.showConfirmButton,
    timer: props.timer,
  });
};

export const decodeToken = () => {
  let user;
  if (sessionStorage.getItem("user")) {
    let token = sessionStorage.getItem("user");
    if (token[0] === '"') {
      user = jwt.decode(JSON.parse(token));
      console.log(user);
    } else {
      token = token.split('#')[0]
      user = jwt.decode(token);
    }
  }
  return user;
}