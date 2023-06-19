import Swal from "sweetalert2";

export const ToastComponent = (title, subtitle, timer, timerProgressBar, status) => {
   Swal.fire(title, subtitle, status ? "success" : "error");
};
