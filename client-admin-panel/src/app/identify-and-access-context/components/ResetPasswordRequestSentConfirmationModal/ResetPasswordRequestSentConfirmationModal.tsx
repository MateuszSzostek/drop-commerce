import Modal from "../../../../common/components/modal/Modal"
import { useTranslation } from "react-i18next"
import { Text } from "../../../../common/components"
import { ResetPasswordRequestSentConfirmationModalProps } from "../../domain/identify-and-access-context"

export default function ResetPasswordRequestSentConfirmationModal({ isOpen }: ResetPasswordRequestSentConfirmationModalProps) {
  const [t] = useTranslation()

  return (
    <Modal open={isOpen} centered={true} footer={null} closable={false}>
      <Text>{t("reset-password-sent-confirmation-modal.message")}</Text>
    </Modal>
  )
}
