import Swal from "sweetalert2";

export const ToastComponent = (title, subtitle, icon) => {
   Swal.fire(title, subtitle, icon)
};
