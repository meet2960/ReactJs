import Swal from "sweetalert2";

export const CustomToast = (args = {}) => {
  return Swal.fire({
    ...args,
    toast: true,
    timerProgressBar: true,
    timer: 1000,
    position: "top-right",
    showConfirmButton: false,
  });
};
