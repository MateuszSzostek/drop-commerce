import { Col, Form, Row } from "antd"
import { useTranslation } from "react-i18next"
import { Button, FormItem, FormItemStyleType, Select, TextInput, TextInputStyleType, TextStyleType } from "../../../../common/components"
import useProduct from "./useProduct"
import { Text } from "../../../../common/components"
import { PRODUCT_INPUT_FIELDS, ProductFieldType } from "../../domain/products-context"
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons"
import Ikonka from "../ProvidersForms/Ikonka/Ikonka"
import TextareaInput from "../../../../common/components/input/textarea/TextareaInput"
import { TextareaInputStyleType } from "../../../../common/components/input/textarea/TextareaInput.types"

const GUTTER = 12

export default function Product() {
  const {
    productForm,
    initialProviderProductValues,
    categoriesSelectOptions,
    providerResponse,
    selectedPictures,
    onFinish,
    onFinishFailed,
    handleProductFieldsChange,
    handleRemovePicture,
  } = useProduct()
  const [t] = useTranslation()

  return (
    <>
      <Row style={{ width: "100%" }} className="bring-in-anim" gutter={GUTTER}>
        <Col span={12}>
          <Row style={{ width: "100%" }} gutter={GUTTER}>
            <Col>
              <Text styleType={TextStyleType.PRIMARY_TITLE}>{t("products.product.title")}</Text>
            </Col>
            <Col>
              <Text styleType={TextStyleType.PRIMARY_TITLE}>{t("products.product.status")}</Text>
            </Col>
            <Col>
              <Button>{t("products.product.activate-button")}</Button>
            </Col>
          </Row>
          <Form
            className="bring-in-anim"
            form={productForm}
            style={{ width: "100%" }}
            name="product-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            onChange={handleProductFieldsChange}
            layout="vertical">
            <Row gutter={GUTTER}>
              <Col span={8}>
                <FormItem<ProductFieldType>
                  styleType={FormItemStyleType.PRIMARY}
                  label={t("products.product.id-label")}
                  name={PRODUCT_INPUT_FIELDS.id}
                  hasFeedback>
                  <TextInput styleType={TextInputStyleType.PRIMARY} disabled />
                </FormItem>
              </Col>
              <Col span={8}>
                <FormItem<ProductFieldType>
                  styleType={FormItemStyleType.PRIMARY}
                  label={t("products.product.name-label")}
                  name={PRODUCT_INPUT_FIELDS.name}
                  hasFeedback>
                  <TextInput styleType={TextInputStyleType.PRIMARY} />
                </FormItem>
              </Col>
              <Col span={8}>
                <FormItem<ProductFieldType>
                  styleType={FormItemStyleType.PRIMARY}
                  label={t("products.product.provider-label")}
                  name={PRODUCT_INPUT_FIELDS.provider}
                  hasFeedback>
                  <TextInput styleType={TextInputStyleType.PRIMARY} disabled />
                </FormItem>
              </Col>
            </Row>
            <Row gutter={GUTTER}>
              <Col span={8}>
                <FormItem<ProductFieldType>
                  styleType={FormItemStyleType.PRIMARY}
                  label={t("products.product.net-price-label")}
                  name={PRODUCT_INPUT_FIELDS.netPrice}
                  hasFeedback>
                  <TextInput styleType={TextInputStyleType.PRIMARY} />
                </FormItem>
              </Col>
              <Col span={8}>
                <FormItem<ProductFieldType>
                  styleType={FormItemStyleType.PRIMARY}
                  label={t("products.product.provider-price-label")}
                  name={PRODUCT_INPUT_FIELDS.providerNettoPrice}
                  hasFeedback>
                  <TextInput styleType={TextInputStyleType.PRIMARY} />
                </FormItem>
              </Col>
              <Col span={8}>
                <FormItem<ProductFieldType>
                  styleType={FormItemStyleType.PRIMARY}
                  label={t("products.product.suggested-detail-price-label")}
                  name={PRODUCT_INPUT_FIELDS.suggestedDetailPrice}
                  hasFeedback>
                  <TextInput styleType={TextInputStyleType.PRIMARY} />
                </FormItem>
              </Col>
            </Row>
            <Row gutter={GUTTER}>
              <Col span={8}>
                <FormItem<ProductFieldType>
                  styleType={FormItemStyleType.PRIMARY}
                  label={t("products.product.vat-label")}
                  name={PRODUCT_INPUT_FIELDS.vat}
                  hasFeedback>
                  <TextInput styleType={TextInputStyleType.PRIMARY} />
                </FormItem>
              </Col>
              <Col span={8}>
                <FormItem<ProductFieldType>
                  styleType={FormItemStyleType.PRIMARY}
                  label={t("products.product.net-profit-label")}
                  name={PRODUCT_INPUT_FIELDS.netProfit}
                  hasFeedback>
                  <TextInput styleType={TextInputStyleType.PRIMARY} />
                </FormItem>
              </Col>
              <Col span={8}>
                <FormItem<ProductFieldType>
                  styleType={FormItemStyleType.PRIMARY}
                  label={t("products.product.gross-label")}
                  name={PRODUCT_INPUT_FIELDS.grossPrice}
                  hasFeedback>
                  <TextInput styleType={TextInputStyleType.PRIMARY} />
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span={8}>
                <FormItem<ProductFieldType>
                  styleType={FormItemStyleType.PRIMARY}
                  label={t("products.product.margin-label")}
                  name={PRODUCT_INPUT_FIELDS.margin}
                  hasFeedback>
                  <TextInput styleType={TextInputStyleType.PRIMARY} />
                </FormItem>
              </Col>
            </Row>
            <Row gutter={GUTTER}>
              <Col span={24}>
                <FormItem<ProductFieldType>
                  styleType={FormItemStyleType.PRIMARY}
                  label={t("products.product.provider-identifier-label")}
                  name={PRODUCT_INPUT_FIELDS.providerIdentifier}
                  hasFeedback>
                  <TextInput styleType={TextInputStyleType.PRIMARY} />
                </FormItem>
              </Col>
            </Row>
            <Row gutter={GUTTER}>
              <Col span={24}>
                <FormItem<ProductFieldType>
                  styleType={FormItemStyleType.PRIMARY}
                  label={t("products.product.short-description-label")}
                  name={PRODUCT_INPUT_FIELDS.shortDescription}
                  hasFeedback>
                  <TextInput styleType={TextInputStyleType.PRIMARY} />
                </FormItem>
              </Col>
            </Row>
            <Row gutter={GUTTER}>
              <Col span={24}>
                <FormItem<ProductFieldType>
                  styleType={FormItemStyleType.PRIMARY}
                  label={t("products.product.long-description-label")}
                  name={PRODUCT_INPUT_FIELDS.description}
                  hasFeedback>
                  <TextareaInput styleType={TextareaInputStyleType.PRIMARY} style={{ height: "500px" }} />
                </FormItem>
              </Col>
            </Row>

            <Row gutter={GUTTER}>
              <Col span={8}>
                <FormItem<ProductFieldType>
                  styleType={FormItemStyleType.PRIMARY}
                  label={t("products.product.too-big-for-a-parcel-locker-label")}
                  name={PRODUCT_INPUT_FIELDS.tooBigForParcelLocker}
                  hasFeedback>
                  <TextInput styleType={TextInputStyleType.PRIMARY} />
                </FormItem>
              </Col>
              <Col span={8}>
                <FormItem<ProductFieldType>
                  styleType={FormItemStyleType.PRIMARY}
                  label={t("products.product.delivery-time-label")}
                  name={PRODUCT_INPUT_FIELDS.deliveryTime}
                  hasFeedback>
                  <TextInput styleType={TextInputStyleType.PRIMARY} />
                </FormItem>
              </Col>
              <Col span={8}>
                <FormItem<ProductFieldType>
                  styleType={FormItemStyleType.PRIMARY}
                  label={t("products.product.next-delivery-label")}
                  name={PRODUCT_INPUT_FIELDS.nextDelivery}
                  hasFeedback>
                  <TextInput styleType={TextInputStyleType.PRIMARY} />
                </FormItem>
              </Col>
            </Row>
            <Row gutter={GUTTER}>
              <Col span={8}>
                <FormItem<ProductFieldType>
                  styleType={FormItemStyleType.PRIMARY}
                  label={t("products.product.length-label")}
                  name={PRODUCT_INPUT_FIELDS.length}
                  hasFeedback>
                  <TextInput styleType={TextInputStyleType.PRIMARY} />
                </FormItem>
              </Col>
              <Col span={8}>
                <FormItem<ProductFieldType>
                  styleType={FormItemStyleType.PRIMARY}
                  label={t("products.product.height-label")}
                  name={PRODUCT_INPUT_FIELDS.height}
                  hasFeedback>
                  <TextInput styleType={TextInputStyleType.PRIMARY} />
                </FormItem>
              </Col>
              <Col span={8}>
                <FormItem<ProductFieldType>
                  styleType={FormItemStyleType.PRIMARY}
                  label={t("products.product.weight-label")}
                  name={PRODUCT_INPUT_FIELDS.weight}
                  hasFeedback>
                  <TextInput styleType={TextInputStyleType.PRIMARY} />
                </FormItem>
              </Col>
            </Row>
            <Row gutter={GUTTER}>
              <Col span={8}>
                <FormItem<ProductFieldType>
                  styleType={FormItemStyleType.PRIMARY}
                  label={t("products.product.amount-in-box-label")}
                  name={PRODUCT_INPUT_FIELDS.amountInBox}
                  hasFeedback>
                  <TextInput styleType={TextInputStyleType.PRIMARY} />
                </FormItem>
              </Col>
              <Col span={8}>
                <FormItem<ProductFieldType>
                  styleType={FormItemStyleType.PRIMARY}
                  label={t("products.product.state-label")}
                  name={PRODUCT_INPUT_FIELDS.state}
                  hasFeedback>
                  <TextInput styleType={TextInputStyleType.PRIMARY} />
                </FormItem>
              </Col>
              <Col span={8}>
                <FormItem<ProductFieldType>
                  styleType={FormItemStyleType.PRIMARY}
                  label={t("products.product.link-to-instruction-label")}
                  name={PRODUCT_INPUT_FIELDS.linkToInstruction}
                  hasFeedback>
                  <TextInput styleType={TextInputStyleType.PRIMARY} />
                </FormItem>
              </Col>
            </Row>
            <Row gutter={GUTTER}>
              <Col span={12}>
                <FormItem<ProductFieldType>
                  styleType={FormItemStyleType.PRIMARY}
                  label={t("products.product.link-to-pictures-label")}
                  name={PRODUCT_INPUT_FIELDS.linkToPictures}
                  hasFeedback>
                  <TextInput styleType={TextInputStyleType.PRIMARY} />
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem<ProductFieldType>
                  styleType={FormItemStyleType.PRIMARY}
                  label={t("products.product.volume-label")}
                  name={PRODUCT_INPUT_FIELDS.volume}
                  hasFeedback>
                  <TextInput styleType={TextInputStyleType.PRIMARY} />
                </FormItem>
              </Col>
            </Row>
            <Row gutter={GUTTER}>
              <Col span={24}>
                <FormItem<ProductFieldType>
                  styleType={FormItemStyleType.PRIMARY}
                  label={t("products.product.categories-label")}
                  name={PRODUCT_INPUT_FIELDS.categories}
                  hasFeedback>
                  <Select options={categoriesSelectOptions} />
                </FormItem>
              </Col>
            </Row>
            <Row gutter={GUTTER}>
              <Col span={24}>
                <FormItem<ProductFieldType>
                  styleType={FormItemStyleType.PRIMARY}
                  label={t("products.product.tags-label")}
                  name={PRODUCT_INPUT_FIELDS.tags}
                  hasFeedback>
                  <Select options={[]} />
                </FormItem>
              </Col>
            </Row>

            <Row gutter={GUTTER}>
              <Col span={24}>
                {selectedPictures?.map((el) => {
                  return (
                    <Row style={{ width: "100%" }} justify="space-between" align="middle">
                      <Col span={6}>
                        <img src={el} style={{ width: "100px", height: "100px" }} />
                      </Col>
                      <Col span={16}>
                        <p style={{ color: "white" }}>{el}</p>
                      </Col>
                      <Col span={2}>
                        <Button onClick={() => handleRemovePicture(el)}>-</Button>
                      </Col>
                    </Row>
                  )
                })}
                <FormItem<ProductFieldType>
                  styleType={FormItemStyleType.PRIMARY}
                  label={t("products.product.pictures-label")}
                  name={PRODUCT_INPUT_FIELDS.pictures}
                  hidden
                  hasFeedback>
                  <TextInput styleType={TextInputStyleType.PRIMARY} />
                </FormItem>
              </Col>
            </Row>
            <Col span={12}>
              <Button htmlType="submit">{t("products.products-list.add-new-product-button")}</Button>
            </Col>
          </Form>
        </Col>

        <Col span={12}>
          <Ikonka productForm={productForm} initialValues={initialProviderProductValues} providerResponse={providerResponse} />
        </Col>
      </Row>
    </>
  )
}
