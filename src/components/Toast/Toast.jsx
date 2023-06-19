import Swal from "sweetalert2";

export const ToastComponent = (title, subtitle, timer, timerProgressBar, icon) => {
   Swal.fire(title, subtitle, icon)
};
