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
  let userEmail;
  if (sessionStorage.getItem("user")) {
    let token = sessionStorage.getItem("user");
    if (token[0] === '"') {
      userEmail = jwt.decode(JSON.parse(token)).email;
      console.log(userEmail);
    } else {
      token = token.split('#')[0]
      userEmail = jwt.decode(token).email;
    }
  }
  return userEmail;
}