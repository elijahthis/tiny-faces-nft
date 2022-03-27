import { createPortal } from "react-dom";
import "../css/modal.css";

const Modal = ({ openModal, children, setOpenModal }) => {
  return createPortal(
    <div
      className="modal"
      style={{ display: `${openModal ? "grid" : "none"}` }}
      onClick={() => {
        setOpenModal(false);
      }}
    >
      {children}
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;
