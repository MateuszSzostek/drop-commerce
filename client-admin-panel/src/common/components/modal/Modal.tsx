import { Modal as AntModal } from "antd"
import { PropsWithChildren } from "react"
import { IModal, ModalStyleType } from "./Modal.types"
import "./Modal.style.scss"

export default function Modal({ children = "Modal Content", styleType = ModalStyleType.SIMPLE, ...props }: PropsWithChildren<IModal>) {
  return (
    <AntModal className={`modal modal--${styleType}`} {...props} data-cy>
      {children}
    </AntModal>
  )
}
