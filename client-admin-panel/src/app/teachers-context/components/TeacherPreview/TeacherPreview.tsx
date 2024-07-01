import { Col, Row } from "antd"
import { TextStyleType, Text, Button, ButtonStyleType, Table } from "../../../../common/components"
import { useTranslation } from "react-i18next"
import useGroupPreview from "./useTeacherPreview"
import ConfirmationModal from "../../../../common/modules/ConfirmationModal/ConfirmationModal"

export default function TeacherPreview() {
  const { t } = useTranslation()
  const { handleEditTeacher, handleDeleteTeacher, handleDeleteTeacherConfirmation, handleDeleteTeacherCancel, deleteConfirmationModal } = useGroupPreview()

  return (
    <>
      <Row style={{ width: "100%" }} className="bring-in-anim">
        <Col span={24}>
          <Row>
            <Col span={12}>
              {" "}
              <Text styleType={TextStyleType.PRIMARY_TITLE}>
                {t("teachers.preview.teacher-title")} {"{placeholder}"}
              </Text>
            </Col>
            <Col span={12}>
              <Row justify="end">
                <Button styleType={ButtonStyleType.PRIMARY} onClick={handleEditTeacher} style={{ marginRight: "16px" }}>
                  {t("teachers.preview.edit-button")}
                </Button>
                <Button styleType={ButtonStyleType.PRIMARY_DANGER} onClick={handleDeleteTeacher}>
                  {t("teachers.preview.delete-button")}
                </Button>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col span={6}>
              <Text styleType={TextStyleType.APP_REGULAR_BOLD}>{t("teachers.preview.some-data")}</Text>
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
              <Text styleType={TextStyleType.APP_REGULAR_BOLD}>{t("teachers.preview.some-data")}</Text>
            </Col>
            <Col span={6}>
              <Text styleType={TextStyleType.APP_REGULAR}>{"{placeholder}"}</Text>
            </Col>
          </Row>
        </Col>
      </Row>
      <ConfirmationModal
        acceptText={t("teachers.preview.delete-confirmation-accept-button")}
        cancelText={t("teachers.preview.delete-confirmation-cancel-button")}
        isOpen={deleteConfirmationModal}
        handleCancel={handleDeleteTeacherCancel}
        handleAccept={handleDeleteTeacherConfirmation}
        title={t("teachers.preview.delete-confirmation-title")}
        content={t("teachers.preview.delete-confirmation-content")}
      />
    </>
  )
}
