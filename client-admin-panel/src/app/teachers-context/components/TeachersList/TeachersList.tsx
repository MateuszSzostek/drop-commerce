import { Col, Row } from "antd"
import { useTranslation } from "react-i18next"
import { Table, TextStyleType } from "../../../../common/components"
import useKindergartensList from "./useTeachersList"
import { Text } from "../../../../common/components"

export default function TeachersList() {
  const { teachersTableColumns, teachersTableFakeData, handleOpenTeacherPreview } = useKindergartensList()
  const [t] = useTranslation()

  return (
    <>
      <Row style={{ width: "100%" }} className="bring-in-anim">
        <Col span={24}>
          <Text styleType={TextStyleType.PRIMARY_TITLE}>{t("teachers.teachers-list.title")}</Text>
          <Table
            onRow={(record) => {
              return {
                onClick: () => {
                  //   handleOpenGroupPreview(record.id)
                },
              }
            }}
            columns={teachersTableColumns}
            dataSource={teachersTableFakeData}
          />
        </Col>
      </Row>
    </>
  )
}
