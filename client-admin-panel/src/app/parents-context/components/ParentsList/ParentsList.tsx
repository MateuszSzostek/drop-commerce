import { Form, Col, Row } from "antd"
import { useTranslation } from "react-i18next"
import { Table, Text, TextStyleType } from "../../../../common/components"
import useParentsList from "./useParentsList"
import "./style.scss"

export default function ParentsList() {
  const { onFinish, onFinishFailed, parentsTableColumns, parentsTableFakeData } = useParentsList()
  const [t] = useTranslation()

  return (
    <>
      <Row style={{ width: "100%" }} className="bring-in-anim">
        <Col span={24}>
          <Form
            style={{ width: "100%" }}
            name="parents-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical"></Form>
          <Text styleType={TextStyleType.PRIMARY_TITLE}>{t("parents.parents-list.title")}</Text>
          <Table columns={parentsTableColumns} dataSource={parentsTableFakeData} />
        </Col>
      </Row>
    </>
  )
}
