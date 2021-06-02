import Swal from "sweetalert2";
import jwt from 'jsonwebtoken';

export const sweetAlert = (
  title = "Wargning",
  text,
  confirmButtonText = "OK",
) => {
  Swal.fire({
    title: title,
    text: text,
    confirmButtonText: confirmButtonText,
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