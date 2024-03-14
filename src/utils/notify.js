import { Zoom, toast } from "react-toastify";

const notify = (theme, timer, type, text) => {
  if (type === "success") {
    toast.success(text, {
      position: "top-center",
      autoClose: timer,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme,
      transition: Zoom,
    });
  } else if (type === "error") {
    toast.error(text, {
      position: "top-center",
      autoClose: timer,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme,
      transition: Zoom,
    });
  }
};
export default notify;
