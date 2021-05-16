import Swal from "sweetalert2";

export const sweetAlert = (
  title = "Wargning",
  text,
  icon = "error",
  confirmButtonText = "OK",
  timer = 8000
) => {
  Swal.fire({
    title: title,
    text: text,
    icon: icon,
    confirmButtonText: confirmButtonText,
    timer: timer,
  });
};

 export const capitalizeFirstLetter = (word) => {
    if (typeof word !== "string") return "";
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

