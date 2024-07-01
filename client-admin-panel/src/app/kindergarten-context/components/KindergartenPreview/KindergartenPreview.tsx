import { Col, Row } from "antd"
import { TextStyleType, Text, Button, ButtonStyleType, Table } from "../../../../common/components"
import { useTranslation } from "react-i18next"
import useKindergartenPreview from "./useKindergartenPreview"
import ConfirmationModal from "../../../../common/modules/ConfirmationModal/ConfirmationModal"
import { Skeleton } from "antd"
import AssignGroupModal from "../AssignGroupModal/AssignGroupModal"

export default function KindergartenPreview() {
  const { t } = useTranslation()
  const {
    kindergartenData,
    isLoadingKindergarten,
    deleteConfirmationModal,
    kindergartenGroupsData,
    groupsTableColumns,
    isOpenAssignGroupnModal,
    handleEditKindergarten,
    handleDeleteKindergarten,
    handleDeleteKindergartenConfirmation,
    handleDeleteKindergartenCancel,
    handleOpenAssignGroupModal,
    handleCloseAssignGroupModal,
    handleAssignGroup,
    handleCreateGroup,
  } = useKindergartenPreview()

  return (
    <>
      <Row style={{ width: "100%" }} className="bring-in-anim">
        {isLoadingKindergarten ? (
          <Skeleton active />
        ) : (
          <Col span={24}>
            <Row>
              <Col span={12}>
                {" "}
                <Text styleType={TextStyleType.PRIMARY_TITLE}>
                  {t("kindergartens.preview.title")} {kindergartenData?.name}
                </Text>
              </Col>
              <Col span={12}>
                <Row justify="end">
                  <Button styleType={ButtonStyleType.PRIMARY} onClick={handleEditKindergarten} style={{ marginRight: "16px" }}>
                    {t("kindergartens.preview.edit-button")}
                  </Button>
                  <Button styleType={ButtonStyleType.PRIMARY_DANGER} onClick={handleDeleteKindergarten}>
                    {t("kindergartens.preview.delete-button")}
                  </Button>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col span={6}>
                <Text styleType={TextStyleType.APP_REGULAR_BOLD}>{t("kindergartens.preview.address")}</Text>
              </Col>
              <Col span={6}>
                <Text styleType={TextStyleType.APP_REGULAR}>{kindergartenData?.address}</Text>
              </Col>
            </Row>

            <Row>
              <Col span={6}>
                <Text styleType={TextStyleType.APP_REGULAR_BOLD}>{t("kindergartens.preview.groups")}</Text>
              </Col>
              <Col span={6}>
                <Text styleType={TextStyleType.APP_REGULAR}>{kindergartenData?.groups.join(", ")}</Text>
              </Col>
            </Row>
            <Row>
              <Col span={6}>
                <Text styleType={TextStyleType.APP_REGULAR_BOLD}>{t("kindergartens.preview.kids-amount")}</Text>
              </Col>
              <Col span={6}>
                <Text styleType={TextStyleType.APP_REGULAR}>{kindergartenData?.kidsAmount}</Text>
              </Col>
            </Row>
          </Col>
        )}
      </Row>
      <Row style={{ width: "100%" }}>
        <Col span={24}>
          <Row style={{ width: "100%" }}>
            <Col span={12}>
              <Text styleType={TextStyleType.APP_REGULAR_BOLD}>{t("kindergartens.preview.groups-list-title")}</Text>
            </Col>
            <Col span={12}>
              <Row justify="end">
                <Button styleType={ButtonStyleType.PRIMARY} onClick={handleCreateGroup}>
                  {t("kindergartens.preview.create-group-button")}
                </Button>
              </Row>
            </Col>
          </Row>
          <Table
            onRow={(record) => {
              return {
                onClick: () => {
                  //   handleOpenGroupPreview(record.id)
                },
              }
            }}
            columns={groupsTableColumns}
            dataSource={kindergartenGroupsData}
          />
        </Col>
      </Row>
      <ConfirmationModal
        acceptText={t("kindergartens.preview.delete-confirmation-accept-button")}
        cancelText={t("kindergartens.preview.delete-confirmation-cancel-button")}
        isOpen={deleteConfirmationModal}
        handleCancel={handleDeleteKindergartenCancel}
        handleAccept={handleDeleteKindergartenConfirmation}
        title={t("kindergartens.preview.delete-confirmation-title")}
        content={t("kindergartens.preview.delete-confirmation-content")}
      />
      <AssignGroupModal isOpen={isOpenAssignGroupnModal} handleOnCancel={handleCloseAssignGroupModal} />
    </>
  )
}
