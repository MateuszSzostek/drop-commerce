import { Form, Col, Row } from "antd"

import { useTranslation } from "react-i18next"
import { Button, Table, TextStyleType } from "../../../../common/components"
import useKindergartensList from "./useChildrenList"
import { Text } from "../../../../common/components"

export default function ChildrenList() {
  const { childrenTableColumns, childrenOfUser, handleOpenAddNewChildView } = useKindergartensList()
  const [t] = useTranslation()

  return (
    <>
      <Row style={{ width: "100%" }} className="bring-in-anim">
        <Col span={24}>
          <Text styleType={TextStyleType.PRIMARY_TITLE}>{t("children.children-list.title")}</Text>
          <Button onClick={handleOpenAddNewChildView}>{t("children.children-list.add-new-child-button")}</Button>
          <Table columns={childrenTableColumns} dataSource={childrenOfUser} />
        </Col>
      </Row>
    </>
  )
}
