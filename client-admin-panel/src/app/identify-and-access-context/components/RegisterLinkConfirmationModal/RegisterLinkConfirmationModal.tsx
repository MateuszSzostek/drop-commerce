import Modal from "../../../../common/components/modal/Modal"
import { useTranslation } from "react-i18next"
import { Text } from "../../../../common/components"
import { RegisterLinkConfirmationModalProps } from "../../domain/identify-and-access-context"

export default function RegisterLinkConfirmationModal({ isOpen }: RegisterLinkConfirmationModalProps) {
  const [t] = useTranslation()

  return (
    <Modal open={isOpen} centered={true} footer={null} closable={false}>
      <Text>{t("register-confirmation-link-modal.message")}</Text>
    </Modal>
  )
}
