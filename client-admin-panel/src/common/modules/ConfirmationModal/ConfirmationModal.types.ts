import { ButtonStyleType } from "../../components"

export interface IConfirmationModal {
  title: string
  acceptText: string
  cancelText: string
  handleAccept: () => void
  handleCancel: () => void
  isOpen: boolean
  content: React.ReactNode
  confirmButtonStyle?: ButtonStyleType
}
