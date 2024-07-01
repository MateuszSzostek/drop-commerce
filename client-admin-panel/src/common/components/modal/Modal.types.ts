import { ModalProps } from "antd"

export interface IModal extends ModalProps {
  /**
   * Is this the simple version of  the modal?
   */
  styleType?: ModalStyleType
}
export enum ModalStyleType {
  SIMPLE = "simple",
}
