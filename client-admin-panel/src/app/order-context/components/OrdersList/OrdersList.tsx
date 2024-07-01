import { Col, Form, Row } from "antd"
import React from "react"
import { useTranslation } from "react-i18next"
import { FormItem, FormItemStyleType, Table, TextInput, TextInputStyleType, TextStyleType } from "../../../../common/components"
import useOrdersList from "./useOrdersList"
import { Text } from "../../../../common/components"
import { FILTER_ORDERS_INPUT_FIELDS, FilterOrdersFieldType } from "../../domain/order-context"

export default function OrdersList() {
  const { ordersTableColumns, ordersList, onFinish, onFinishFailed } = useOrdersList()
  const [t] = useTranslation()

  return (
    <>
      <Row style={{ width: "100%" }} className="bring-in-anim">
        <Col span={24}>
          <Text styleType={TextStyleType.PRIMARY_TITLE}>{t("orders.orders-list.title")}</Text>
          <Form
            className="bring-in-anim"
            style={{ width: "100%" }}
            name="filter-orders-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical">
            <Row style={{ width: "100%" }} align="bottom" gutter={12}>
              <Col>
                <FormItem<FilterOrdersFieldType>
                  styleType={FormItemStyleType.PRIMARY}
                  label={t("orders.orders-list.name-label")}
                  name={FILTER_ORDERS_INPUT_FIELDS.ownerName}
                  hasFeedback>
                  <TextInput styleType={TextInputStyleType.PRIMARY} />
                </FormItem>
              </Col>
              <Col>
                <FormItem<FilterOrdersFieldType>
                  styleType={FormItemStyleType.PRIMARY}
                  label={t("orders.orders-list.surname-label")}
                  name={FILTER_ORDERS_INPUT_FIELDS.ownerSurname}
                  hasFeedback>
                  <TextInput styleType={TextInputStyleType.PRIMARY} />
                </FormItem>
              </Col>
            </Row>
          </Form>
          <Row style={{ width: "100%" }}>
            <Table style={{ width: "100%" }} columns={ordersTableColumns} dataSource={ordersList} />
          </Row>
        </Col>
      </Row>
    </>
  )
}
