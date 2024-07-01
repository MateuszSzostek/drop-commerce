import Modal from "../../../../common/components/modal/Modal"
import { useTranslation } from "react-i18next"
import { Text } from "../../../../common/components"
import { PasswordChangedConfirmationModalProps } from "../../domain/identify-and-access-context"

export default function PasswordChangedConfirmationModal({ isOpen }: PasswordChangedConfirmationModalProps) {
  const [t] = useTranslation()

  return (
    <Modal open={isOpen} centered={true} footer={null} closable={false}>
      <Text>{t("password-changed-confirmation-modal.message")}</Text>
    </Modal>
  )
}
