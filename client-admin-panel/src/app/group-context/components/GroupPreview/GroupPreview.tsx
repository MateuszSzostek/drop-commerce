import { Col, Row } from "antd"
import { TextStyleType, Text, Button, ButtonStyleType, Table } from "../../../../common/components"
import { useTranslation } from "react-i18next"
import useGroupPreview from "./useGroupPreview"
import ConfirmationModal from "../../../../common/modules/ConfirmationModal/ConfirmationModal"

export default function GroupPreview() {
  const { t } = useTranslation()
  const {
    childrenOfGroup,
    kidsInGroupTableColumns,
    teachersOfGroup,
    wardensOfGroupTableColumns,
    handleEditGroup,
    handleDeleteGroup,
    handleDeleteGroupConfirmation,
    handleDeleteGroupCancel,
    handleOpenKidPreview,
    handleAsignChild,
    deleteConfirmationModal,
    groupData,
  } = useGroupPreview()

  return (
    <>
      <Row style={{ width: "100%" }} className="bring-in-anim">
        <Col span={24}>
          <Row>
            <Col span={12}>
              {" "}
              <Text styleType={TextStyleType.PRIMARY_TITLE}>
                {t("groups.preview.title")} {groupData?.name}
              </Text>
            </Col>
            <Col span={12}>
              <Row justify="end">
                <Button styleType={ButtonStyleType.PRIMARY} onClick={handleEditGroup} style={{ marginRight: "16px" }}>
                  {t("groups.preview.edit-button")}
                </Button>
                <Button styleType={ButtonStyleType.PRIMARY_DANGER} onClick={handleDeleteGroup}>
                  {t("groups.preview.delete-button")}
                </Button>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col span={6}>
              <Text styleType={TextStyleType.APP_REGULAR_BOLD}>{t("groups.preview.wardens")}</Text>
            </Col>
            <Col span={6}>
              <Text styleType={TextStyleType.APP_REGULAR}>{"{placeholder}"}</Text>
            </Col>
          </Row>
          <Row>
            <Col span={6}>
              <Text styleType={TextStyleType.APP_REGULAR_BOLD}>{t("groups.preview.kids-amount")}</Text>
            </Col>
            <Col span={6}>
              <Text styleType={TextStyleType.APP_REGULAR}>{groupData?.childrenAmount}</Text>
            </Col>
          </Row>
          <Row justify="end">
            <Col>
              <Button styleType={ButtonStyleType.PRIMARY} onClick={handleAsignChild} style={{ marginRight: "16px" }}>
                {t("groups.preview.asign-child-button")}
              </Button>
            </Col>
          </Row>
          <Row style={{ width: "100%" }}>
            <Col span={24}>
              <Table
                onRow={(record) => {
                  return {
                    onClick: () => {
                      //   handleOpenKidPreview(record.id)
                    },
                  }
                }}
                columns={kidsInGroupTableColumns}
                dataSource={childrenOfGroup}
              />
            </Col>
          </Row>
          <Row>
            <Col span={6}>
              <Text styleType={TextStyleType.APP_REGULAR_BOLD}>{t("groups.preview.teachers")}</Text>
            </Col>
            <Col span={6}>
              <Text styleType={TextStyleType.APP_REGULAR}>{"{placeholder}"}</Text>
            </Col>
          </Row>
          <Row justify="end">
            <Col>
              <Button styleType={ButtonStyleType.PRIMARY} onClick={handleAsignChild} style={{ marginRight: "16px" }}>
                {t("groups.preview.asign-teacher-button")}
              </Button>
            </Col>
          </Row>
          <Row style={{ width: "100%" }}>
            <Col span={24}>
              <Table
                onRow={(record) => {
                  return {
                    onClick: () => {
                      //   handleOpenKidPreview(record.id)
                    },
                  }
                }}
                columns={wardensOfGroupTableColumns}
                dataSource={teachersOfGroup}
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <ConfirmationModal
        acceptText={t("groups.preview.delete-confirmation-accept-button")}
        cancelText={t("groups.preview.delete-confirmation-cancel-button")}
        isOpen={deleteConfirmationModal}
        handleCancel={handleDeleteGroupCancel}
        handleAccept={handleDeleteGroupConfirmation}
        title={t("groups.preview.delete-confirmation-title")}
        content={t("groups.preview.delete-confirmation-content")}
      />
    </>
  )
}
