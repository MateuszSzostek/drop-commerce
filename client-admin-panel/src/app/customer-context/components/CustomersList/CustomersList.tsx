import { Col, Form, Row } from "antd"
import { useTranslation } from "react-i18next"
import { FormItem, FormItemStyleType, Table, TextInput, TextInputStyleType, TextStyleType } from "../../../../common/components"
import useCustomersList from "./useCustomersList"
import { Text } from "../../../../common/components"
import { FILTER_CUSTOMERS_INPUT_FIELDS, FilterCustomersFieldType } from "../../domain/customer-context"

export default function CustomersList() {
  const { customersTableColumns, customersList, onFinish, onFinishFailed } = useCustomersList()
  const [t] = useTranslation()

  return (
    <>
      <Row style={{ width: "100%" }} className="bring-in-anim">
        <Col span={24}>
          <Text styleType={TextStyleType.PRIMARY_TITLE}>{t("customers.customers-list.title")}</Text>
          <Form
            className="bring-in-anim"
            style={{ width: "100%" }}
            name="filter-customers-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical">
            <Row style={{ width: "100%" }} align="bottom" gutter={12}>
              <Col>
                <FormItem<FilterCustomersFieldType>
                  styleType={FormItemStyleType.PRIMARY}
                  label={t("customers.customers-list.name-label")}
                  name={FILTER_CUSTOMERS_INPUT_FIELDS.name}
                  hasFeedback>
                  <TextInput styleType={TextInputStyleType.PRIMARY} />
                </FormItem>
              </Col>
              <Col>
                <FormItem<FilterCustomersFieldType>
                  styleType={FormItemStyleType.PRIMARY}
                  label={t("customers.customers-list.surname-label")}
                  name={FILTER_CUSTOMERS_INPUT_FIELDS.surname}
                  hasFeedback>
                  <TextInput styleType={TextInputStyleType.PRIMARY} />
                </FormItem>
              </Col>
            </Row>
          </Form>
          <Row style={{ width: "100%" }}>
            <Table style={{ width: "100%" }} columns={customersTableColumns} dataSource={customersList} />
          </Row>
        </Col>
      </Row>
    </>
  )
}
