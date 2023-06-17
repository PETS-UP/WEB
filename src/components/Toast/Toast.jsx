import Swal from "sweetalert2";

export const ToastComponent = (title, subtitle, status) => {
   Swal.fire(title, subtitle, status ? "success" : "error");
};

