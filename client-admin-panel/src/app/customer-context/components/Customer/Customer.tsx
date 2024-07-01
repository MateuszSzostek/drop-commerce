import { Col, Form, Row } from "antd"
import { useTranslation } from "react-i18next"
import { Button, FormItem, FormItemStyleType, TextInput, TextInputStyleType, TextStyleType } from "../../../../common/components"
import useCustomer from "./useCustomer"
import { Text } from "../../../../common/components"
import { CUSTOMER_INPUT_FIELDS, CustomerFieldType } from "../../domain/customer-context"
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons"

const GUTTER = 12

export default function Customer() {
  const { customerForm, onFinish, onFinishFailed } = useCustomer()
  const [t] = useTranslation()

  return (
    <>
      <Row style={{ width: "100%" }} className="bring-in-anim" gutter={GUTTER}>
        <Col span={12}>
          <Row style={{ width: "100%" }} gutter={GUTTER}>
            <Col>
              <Text styleType={TextStyleType.PRIMARY_TITLE}>{t("customers.customer.title")}</Text>
            </Col>
            <Col>
              <Text styleType={TextStyleType.PRIMARY_TITLE}>{t("customers.customer.status")}</Text>
            </Col>
            <Col>
              <Button>{t("customers.customer.activate-button")}</Button>
            </Col>
          </Row>
          <Form
            className="bring-in-anim"
            form={customerForm}
            style={{ width: "100%" }}
            name="customer-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical">
            <Row gutter={GUTTER}>
              <Col span={8}>
                <FormItem<CustomerFieldType>
                  styleType={FormItemStyleType.PRIMARY}
                  label={t("customers.customer.id-label")}
                  name={CUSTOMER_INPUT_FIELDS.id}
                  hasFeedback>
                  <TextInput styleType={TextInputStyleType.PRIMARY} disabled />
                </FormItem>
              </Col>
              <Col span={8}>
                <FormItem<CustomerFieldType>
                  styleType={FormItemStyleType.PRIMARY}
                  label={t("customers.customer.name-label")}
                  name={CUSTOMER_INPUT_FIELDS.name}
                  hasFeedback>
                  <TextInput styleType={TextInputStyleType.PRIMARY} disabled />
                </FormItem>
              </Col>
              <Col span={8}>
                <FormItem<CustomerFieldType>
                  styleType={FormItemStyleType.PRIMARY}
                  label={t("customers.customer.surname-label")}
                  name={CUSTOMER_INPUT_FIELDS.surname}
                  hasFeedback>
                  <TextInput styleType={TextInputStyleType.PRIMARY} disabled />
                </FormItem>
              </Col>
            </Row>

            <Row gutter={GUTTER}>
              <Col span={24}>
                <Form.List
                  name="addresses"
                  rules={[
                    {
                      validator: async (_, names) => {
                        if (!names || names.length < 2) {
                          return Promise.reject(new Error("At least 2 passengers"))
                        }
                      },
                    },
                  ]}>
                  {(fields, { add, remove }, { errors }) => (
                    <>
                      {fields.map((field, index) => (
                        <FormItem label={index === 0 ? "Pictures" : ""} required={false} key={field.key}>
                          <FormItem
                            {...field}
                            validateTrigger={["onChange", "onBlur"]}
                            rules={[
                              {
                                required: true,
                                whitespace: true,
                                message: "Please input passenger's name or delete this field.",
                              },
                            ]}
                            noStyle>
                            <TextInput placeholder="Picture link" style={{ width: "60%" }} />
                          </FormItem>
                          {fields.length > 1 ? <MinusCircleOutlined className="dynamic-delete-button" onClick={() => remove(field.name)} /> : null}
                        </FormItem>
                      ))}
                    </>
                  )}
                </Form.List>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </>
  )
}
