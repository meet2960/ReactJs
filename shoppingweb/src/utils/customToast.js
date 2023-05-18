import Swal from "sweetalert2";

export const CustomToast = (args = {}) => {
  return Swal.fire({ ...args, toast: true });
};
