import { Row, Col, Space } from "antd"
import { Text, TextStyleType } from "../../../../common/components"
import useSignUpConfirmation from "./useSignUpConfirmation"
import { useTranslation } from "react-i18next"

export default function SignUpConfirmation() {
  const { t } = useTranslation()
  const { confirmationMessage } = useSignUpConfirmation()
  return (
    <>
      <Row style={{ width: "100%" }}>
        <Col xs={{ span: 24, offset: 0 }} md={{ span: 12, offset: 6 }} xl={{ span: 8, offset: 8 }}>
          <Space direction="horizontal" style={{ width: "100%", marginTop: "100px", justifyContent: "center", textAlign: "center", marginBottom: "32px" }}>
            <Text styleType={TextStyleType.LANDING_PRIMARY_TITLE}>{t(confirmationMessage)}</Text>
          </Space>
        </Col>
      </Row>
    </>
  )
}
