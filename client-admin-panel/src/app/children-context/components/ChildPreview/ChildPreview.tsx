import { Col, Row } from "antd"
import { TextStyleType, Text, Button, ButtonStyleType, Table } from "../../../../common/components"
import { useTranslation } from "react-i18next"
import useChildPreview from "./useChildPreview"
import ConfirmationModal from "../../../../common/modules/ConfirmationModal/ConfirmationModal"

export default function ChildPreview() {
  const { t } = useTranslation()
  const { handleEditChild, handleDeleteChild, handleDeleteChildConfirmation, handleDeleteChildCancel, deleteConfirmationModal } = useChildPreview()

  return (
    <>
      <Row style={{ width: "100%" }} className="bring-in-anim">
        <Col span={24}>
          <Row>
            <Col span={12}>
              {" "}
              <Text styleType={TextStyleType.PRIMARY_TITLE}>
                {t("children.preview.title")} {"{placeholder}"}
              </Text>
            </Col>
            <Col span={12}>
              <Row justify="end">
                <Button styleType={ButtonStyleType.PRIMARY} onClick={handleEditChild} style={{ marginRight: "16px" }}>
                  {t("children.preview.edit-button")}
                </Button>
                <Button styleType={ButtonStyleType.PRIMARY_DANGER} onClick={handleDeleteChild}>
                  {t("children.preview.delete-button")}
                </Button>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col span={6}>
              <Text styleType={TextStyleType.APP_REGULAR_BOLD}>{t("children.preview.parents")}</Text>
            </Col>
            <Col span={6}>
              <Text styleType={TextStyleType.APP_REGULAR}>{"{placeholder}"}</Text>
            </Col>
          </Row>
          <Row style={{ width: "100%" }}>
            <Col span={24}></Col>
          </Row>
          <Row>
            <Col span={6}>
              <Text styleType={TextStyleType.APP_REGULAR_BOLD}>{t("children.preview.wardens")}</Text>
            </Col>
            <Col span={6}>
              <Text styleType={TextStyleType.APP_REGULAR}>{"{placeholder}"}</Text>
            </Col>
          </Row>

          <Row style={{ width: "100%" }}>
            <Col span={24}></Col>
          </Row>
        </Col>
      </Row>
      <ConfirmationModal
        acceptText={t("children.preview.delete-confirmation-accept-button")}
        cancelText={t("children.preview.delete-confirmation-cancel-button")}
        isOpen={deleteConfirmationModal}
        handleCancel={handleDeleteChildCancel}
        handleAccept={handleDeleteChildConfirmation}
        title={t("children.preview.delete-confirmation-title")}
        content={t("children.preview.delete-confirmation-content")}
      />
    </>
  )
}
