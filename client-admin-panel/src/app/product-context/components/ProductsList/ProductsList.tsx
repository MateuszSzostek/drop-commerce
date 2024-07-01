import { Col, Form, Row } from "antd"
import { useTranslation } from "react-i18next"
import { Button, Checkbox, FormItem, FormItemStyleType, Table, TextInput, TextInputStyleType, TextStyleType } from "../../../../common/components"
import useProductsList from "./useProductsList"
import { Text } from "../../../../common/components"
import { FILTER_PRODUCTS_INPUT_FIELDS, FILTER_PROVIDER_PRODUCTS_INPUT_FIELDS, FilterProductsFieldType } from "../../domain/products-context"

export default function ProductsList() {
  const {
    productsTableColumns,
    providerProductsTableColumns,
    productsList,
    providerProductsList,
    providerProductsForm,
    navigateToAddProduct,
    onFinish,
    onFinishFailed,
    handleGetIkonkaProducts,
  } = useProductsList()
  const [t] = useTranslation()

  return (
    <>
      <Row style={{ width: "100%" }} className="bring-in-anim">
        <Col span={24}>
          <Text styleType={TextStyleType.PRIMARY_TITLE}>{t("products.products-list.title")}</Text>
          <Button onClick={navigateToAddProduct}>{t("products.products-list.add-new-product-button")}</Button>

          <Form
            className="bring-in-anim"
            style={{ width: "100%" }}
            name="filter-products-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical">
            <Row style={{ width: "100%" }} align="bottom" gutter={12}>
              <Col>
                <FormItem<FilterProductsFieldType>
                  styleType={FormItemStyleType.PRIMARY}
                  label={t("products.products-list.name-label")}
                  name={FILTER_PRODUCTS_INPUT_FIELDS.name}
                  hasFeedback>
                  <TextInput styleType={TextInputStyleType.PRIMARY} />
                </FormItem>
              </Col>

              <Col>
                <FormItem<FilterProductsFieldType> styleType={FormItemStyleType.PRIMARY} name={FILTER_PRODUCTS_INPUT_FIELDS.priceChanged} hasFeedback>
                  <Checkbox onChange={() => {}}>{t("products.products-list.price-changed-label")}</Checkbox>
                </FormItem>
              </Col>
              <Col>
                <FormItem<FilterProductsFieldType> styleType={FormItemStyleType.PRIMARY} name={FILTER_PRODUCTS_INPUT_FIELDS.updates} hasFeedback>
                  <Checkbox onChange={() => {}}>{t("products.products-list.updates-label")}</Checkbox>
                </FormItem>
              </Col>
              <Col>
                <FormItem<FilterProductsFieldType> styleType={FormItemStyleType.PRIMARY} name={FILTER_PRODUCTS_INPUT_FIELDS.categoryMissing} hasFeedback>
                  <Checkbox onChange={() => {}}>{t("products.products-list.category-missing-label")}</Checkbox>
                </FormItem>
              </Col>
            </Row>
          </Form>

          <Row style={{ width: "100%" }}>
            <Table style={{ width: "100%" }} columns={productsTableColumns} dataSource={productsList} />
          </Row>

          <Row style={{ marginTop: "32px" }}>
            <Text styleType={TextStyleType.PRIMARY_TITLE}>{t("products.products-list.providers-title")}</Text>
          </Row>
          <Row>
            <Form
              className="bring-in-anim"
              style={{ width: "100%" }}
              name="filter-provider-products-form"
              initialValues={{ remember: true }}
              onChange={handleGetIkonkaProducts}
              form={providerProductsForm}
              autoComplete="off"
              layout="vertical">
              <Row style={{ width: "100%" }} align="bottom" gutter={12}>
                <Col>
                  <FormItem<FilterProductsFieldType>
                    styleType={FormItemStyleType.PRIMARY}
                    label={t("products.products-list.provider-product-name-label")}
                    name={FILTER_PROVIDER_PRODUCTS_INPUT_FIELDS.name}
                    hasFeedback>
                    <TextInput styleType={TextInputStyleType.PRIMARY} />
                  </FormItem>
                </Col>
                <Col>
                  <FormItem<FilterProductsFieldType>
                    styleType={FormItemStyleType.PRIMARY}
                    label={t("products.products-list.provider-product-id-label")}
                    name={FILTER_PROVIDER_PRODUCTS_INPUT_FIELDS.providerProductId}
                    hasFeedback>
                    <TextInput styleType={TextInputStyleType.PRIMARY} />
                  </FormItem>
                </Col>
              </Row>
            </Form>
          </Row>
          <Row style={{ width: "100%" }}>
            <Table style={{ width: "100%" }} columns={providerProductsTableColumns} dataSource={providerProductsList} />
          </Row>
        </Col>
      </Row>
    </>
  )
}
