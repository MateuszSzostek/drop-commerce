import { Col, Row } from "antd"
import { useTranslation } from "react-i18next"
import { Button, Table, TextStyleType } from "../../../../common/components"
import useKindergartensList from "./useGroupsList"
import { Text } from "../../../../common/components"

export default function GroupsList() {
  const { groupsTableColumns, groupsOfUser, handleOpenGroupPreview, handleOpenAddNewGroupView } = useKindergartensList()
  const [t] = useTranslation()

  return (
    <>
      <Row style={{ width: "100%" }} className="bring-in-anim">
        <Col span={24}>
          <Row>
            <Text styleType={TextStyleType.PRIMARY_TITLE}>{t("groups.groups-list.title")}</Text>
            <Button onClick={handleOpenAddNewGroupView}>{t("kindergartens.kindergartens-list.add-kindergarten-button")}</Button>
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
            dataSource={groupsOfUser}
          />
        </Col>
      </Row>
    </>
  )
}
