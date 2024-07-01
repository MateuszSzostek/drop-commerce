import Modal from "../../components/modal/Modal"
import useConfirmationModal from "./useConfirmationModal"
import { IConfirmationModal } from "./ConfirmationModal.types"
import { Button, ButtonStyleType } from "../../components"
import { Col, Row } from "antd"

export default function ConfirmationModal({
  title,
  isOpen,
  acceptText,
  cancelText,
  content,
  confirmButtonStyle = ButtonStyleType.PRIMARY_DANGER,
  handleAccept,
  handleCancel,
}: IConfirmationModal) {
  const {} = useConfirmationModal()

  return (
    <Modal
      centered
      open={isOpen}
      title={title}
      onOk={handleAccept}
      onCancel={handleCancel}
      footer={() => (
        <>
          <Row>
            <Button onClick={handleAccept} styleType={confirmButtonStyle} style={{ marginRight: "16px" }}>
              {acceptText}
            </Button>
            <Button onClick={handleCancel} styleType={ButtonStyleType.SECONDARY}>
              {cancelText}
            </Button>
          </Row>
        </>
      )}>
      {content}
    </Modal>
  )
}
