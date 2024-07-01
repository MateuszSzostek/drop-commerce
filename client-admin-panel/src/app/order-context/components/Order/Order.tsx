import { Col, Form, Row } from "antd"
import React from "react"
import { useTranslation } from "react-i18next"
import { Button, TextStyleType } from "../../../../common/components"
import useOrder from "./useOrder"
import { Text } from "../../../../common/components"

const GUTTER = 12

export default function Order() {
  const {} = useOrder()
  const [t] = useTranslation()

  return (
    <>
      <Row style={{ width: "100%" }} className="bring-in-anim" gutter={GUTTER}>
        <Col span={12}>
          <Row style={{ width: "100%" }} gutter={GUTTER}>
            <Col>
              <Text styleType={TextStyleType.PRIMARY_TITLE}>{t("orders.order.title")}</Text>
            </Col>
            <Col>
              <Text styleType={TextStyleType.PRIMARY_TITLE}>{t("orders.order.status")}</Text>
            </Col>
            <Col>
              <Button>{t("orders.order.activate-button")}</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}
