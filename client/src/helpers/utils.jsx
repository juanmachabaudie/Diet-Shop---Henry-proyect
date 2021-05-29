import Swal from "sweetalert2";

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
