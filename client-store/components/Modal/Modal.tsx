import { PropsWithChildren } from "react";
import "./Modal.styles.css";
import useModal from "./useModal";

interface IModal {
  isOpen: boolean;
  onClose?: () => void;
  onSuccess?: () => void;
}

export default function Modal({ children, isOpen }: PropsWithChildren<IModal>) {
  useModal();

  return (
    <div className={`modal ${isOpen === true ? "active" : ""}`}>
      <div className="modal__body">{children}</div>
    </div>
  );
}
