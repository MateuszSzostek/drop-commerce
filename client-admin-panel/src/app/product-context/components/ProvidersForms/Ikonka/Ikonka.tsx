import { Col, Form, FormInstance, Row } from "antd";
import { useTranslation } from "react-i18next";
import {
  Button,
  ButtonStyleType,
  Checkbox,
  FormItem,
  FormItemStyleType,
  Select,
  Table,
  TextInput,
  TextInputStyleType,
  TextStyleType,
} from "../../../../../common/components";
import useIkonka from "./useIkonka";
import { Text } from "../../../../../common/components";
import {
  FILTER_PRODUCTS_INPUT_FIELDS,
  FilterProductsFieldType,
  IKONKA_INPUT_FIELDS,
  IkonkaProduct,
  PRODUCT_INPUT_FIELDS,
  ProductFieldType,
} from "../../../domain/products-context";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import Tooltip from "../../../../../common/components/tooltip/Tooltip";
import TextareaInput from "../../../../../common/components/input/textarea/TextareaInput";
import { TextareaInputStyleType } from "../../../../../common/components/input/textarea/TextareaInput.types";

const GUTTER = 12;

export default function Ikonka({
  productForm,
  initialValues,
  providerResponse,
  selectedPictures,
}: {
  productForm: FormInstance<ProductFieldType>;
  initialValues: { name: string; value: string }[];
  providerResponse: IkonkaProduct;
  selectedPictures: string[];
}) {
  const {
    productsTableColumns,
    productsList,
    ikonkaForm,
    navigateToAddProduct,
    onFinish,
    onFinishFailed,
    transferValue,
  } = useIkonka(productForm, initialValues);
  const [t] = useTranslation();

  return (
    <Col span={24}>
      <Row style={{ width: "100%" }} className="bring-in-anim" gutter={GUTTER}>
        <Col span={24}>
          <Row style={{ width: "100%" }} gutter={GUTTER}>
            <Col>
              <Text styleType={TextStyleType.PRIMARY_TITLE}>
                {t("products.ikonka.title")}
              </Text>
            </Col>
          </Row>
          <Form
            className="bring-in-anim"
            style={{ width: "100%" }}
            name="filter-products-form"
            form={ikonkaForm}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical"
          >
            <Row gutter={GUTTER}>
              <Col span={8}>
                <Row wrap={false} align="middle">
                  <FormItem<ProductFieldType>
                    styleType={FormItemStyleType.PRIMARY}
                    label={t("products.ikonka.kod-kreskowy-label")}
                    name={IKONKA_INPUT_FIELDS.kod_kreskowy}
                    hasFeedback
                  >
                    <TextInput
                      styleType={TextInputStyleType.PRIMARY}
                      disabled
                    />
                  </FormItem>
                  <Tooltip
                    title={`${t("products.ikonka.transfer-to-text")}${PRODUCT_INPUT_FIELDS.providerIdentifier}`}
                  >
                    <Button
                      styleType={ButtonStyleType.PRIMITIVE}
                      onClick={() =>
                        transferValue(
                          IKONKA_INPUT_FIELDS.kod_kreskowy,
                          PRODUCT_INPUT_FIELDS.providerIdentifier
                        )
                      }
                    >
                      C
                    </Button>
                  </Tooltip>
                </Row>
              </Col>
              <Col span={8}>
                <Row wrap={false} align="middle">
                  <FormItem<ProductFieldType>
                    styleType={FormItemStyleType.PRIMARY}
                    label={t("products.ikonka.kod-label")}
                    name={IKONKA_INPUT_FIELDS.kod}
                    hasFeedback
                  >
                    <TextInput
                      styleType={TextInputStyleType.PRIMARY}
                      disabled
                    />
                  </FormItem>
                  <Tooltip
                    title={`${t("products.ikonka.transfer-to-text")}${PRODUCT_INPUT_FIELDS.providerIdentifier}`}
                  >
                    <Button
                      styleType={ButtonStyleType.PRIMITIVE}
                      onClick={() =>
                        transferValue(
                          IKONKA_INPUT_FIELDS.kod,
                          PRODUCT_INPUT_FIELDS.providerIdentifier
                        )
                      }
                    >
                      C
                    </Button>
                  </Tooltip>
                </Row>
              </Col>
              <Col span={8}>
                <FormItem<ProductFieldType>
                  styleType={FormItemStyleType.PRIMARY}
                  label={t("products.ikonka.dostawca-label")}
                  name={IKONKA_INPUT_FIELDS.dostawca}
                  hasFeedback
                >
                  <TextInput styleType={TextInputStyleType.PRIMARY} disabled />
                </FormItem>
              </Col>
            </Row>
            <Row gutter={GUTTER}></Row>

            <Row gutter={GUTTER}>
              <Col span={8}>
                <Row wrap={false} align="middle">
                  <FormItem<ProductFieldType>
                    styleType={FormItemStyleType.PRIMARY}
                    label={t("products.ikonka.nazwa-label")}
                    name={IKONKA_INPUT_FIELDS.nazwa}
                    hasFeedback
                  >
                    <TextInput
                      styleType={TextInputStyleType.PRIMARY}
                      disabled
                    />
                  </FormItem>
                  <Tooltip
                    title={`${t("products.ikonka.transfer-to-text")}${PRODUCT_INPUT_FIELDS.name}`}
                  >
                    <Button
                      styleType={ButtonStyleType.PRIMITIVE}
                      onClick={() =>
                        transferValue(
                          IKONKA_INPUT_FIELDS.nazwa,
                          PRODUCT_INPUT_FIELDS.name
                        )
                      }
                    >
                      C
                    </Button>
                  </Tooltip>
                </Row>
              </Col>
              <Col span={8}>
                <Row wrap={false} align="middle">
                  <FormItem<ProductFieldType>
                    styleType={FormItemStyleType.PRIMARY}
                    label={t("products.ikonka.vat-label")}
                    name={IKONKA_INPUT_FIELDS.vat}
                    hasFeedback
                  >
                    <TextInput
                      styleType={TextInputStyleType.PRIMARY}
                      disabled
                    />
                  </FormItem>
                  <Tooltip
                    title={`${t("products.ikonka.transfer-to-text")}${PRODUCT_INPUT_FIELDS.vat}`}
                  >
                    <Button
                      styleType={ButtonStyleType.PRIMITIVE}
                      onClick={() =>
                        transferValue(
                          IKONKA_INPUT_FIELDS.vat,
                          PRODUCT_INPUT_FIELDS.vat
                        )
                      }
                    >
                      C
                    </Button>
                  </Tooltip>
                </Row>
              </Col>
              <Col span={8}>
                <Row wrap={false} align="middle">
                  <FormItem<ProductFieldType>
                    styleType={FormItemStyleType.PRIMARY}
                    label={t("products.ikonka.cena-label")}
                    name={IKONKA_INPUT_FIELDS.cena}
                    hasFeedback
                  >
                    <TextInput
                      styleType={TextInputStyleType.PRIMARY}
                      disabled
                    />
                  </FormItem>
                  <Tooltip
                    title={`${t("products.ikonka.transfer-to-text")}${PRODUCT_INPUT_FIELDS.netPrice}`}
                  >
                    <Button
                      styleType={ButtonStyleType.PRIMITIVE}
                      onClick={() =>
                        transferValue(
                          IKONKA_INPUT_FIELDS.cena,
                          PRODUCT_INPUT_FIELDS.suggestedDetailPrice
                        )
                      }
                    >
                      C
                    </Button>
                  </Tooltip>
                </Row>
              </Col>
              <Col>
                <Row wrap={false} align="middle">
                  <FormItem<ProductFieldType>
                    styleType={FormItemStyleType.PRIMARY}
                    label={t("products.ikonka.grupa_rabatowa-label")}
                    name={IKONKA_INPUT_FIELDS.grupa_rabatowa}
                    hasFeedback
                  >
                    <TextInput
                      styleType={TextInputStyleType.PRIMARY}
                      disabled
                    />
                  </FormItem>
                </Row>
              </Col>
            </Row>
            <Row gutter={GUTTER} style={{ width: "100%" }}>
              <Col span={24}>
                <Row wrap={false} align="middle" style={{ width: "100%" }}>
                  <FormItem<ProductFieldType>
                    style={{ width: "100%" }}
                    styleType={FormItemStyleType.PRIMARY}
                    label={t("products.ikonka.opis_krotki-label")}
                    name={IKONKA_INPUT_FIELDS.opis_krotki}
                    hasFeedback
                  >
                    <TextInput
                      styleType={TextInputStyleType.PRIMARY}
                      disabled
                    />
                  </FormItem>
                  <Tooltip
                    title={`${t("products.ikonka.transfer-to-text")}${PRODUCT_INPUT_FIELDS.shortDescription}`}
                  >
                    <Button
                      styleType={ButtonStyleType.PRIMITIVE}
                      onClick={() =>
                        transferValue(
                          IKONKA_INPUT_FIELDS.opis_krotki,
                          PRODUCT_INPUT_FIELDS.shortDescription
                        )
                      }
                    >
                      C
                    </Button>
                  </Tooltip>
                </Row>
              </Col>
            </Row>
            <Row gutter={GUTTER}>
              <Col span={24}>
                <Row wrap={false} align="middle" style={{ width: "100%" }}>
                  <FormItem<ProductFieldType>
                    style={{ width: "100%" }}
                    styleType={FormItemStyleType.PRIMARY}
                    label={t("products.ikonka.opis-label")}
                    name={IKONKA_INPUT_FIELDS.opis}
                    hasFeedback
                  >
                    <TextareaInput
                      styleType={TextareaInputStyleType.PRIMARY}
                      disabled
                      style={{ height: "500px", width: "100%" }}
                    />
                  </FormItem>
                  <Tooltip
                    title={`${t("products.ikonka.transfer-to-text")}${PRODUCT_INPUT_FIELDS.description}`}
                  >
                    <Button
                      styleType={ButtonStyleType.PRIMITIVE}
                      onClick={() =>
                        transferValue(
                          IKONKA_INPUT_FIELDS.opis,
                          PRODUCT_INPUT_FIELDS.description
                        )
                      }
                    >
                      C
                    </Button>
                  </Tooltip>
                </Row>
              </Col>
            </Row>

            <Row gutter={GUTTER}>
              <Col span={8}>
                <Row wrap={false} align="middle">
                  <FormItem<ProductFieldType>
                    styleType={FormItemStyleType.PRIMARY}
                    label={t("products.ikonka.zdp-label")}
                    name={IKONKA_INPUT_FIELDS.zdp}
                    hasFeedback
                  >
                    <TextInput
                      styleType={TextInputStyleType.PRIMARY}
                      disabled
                    />
                  </FormItem>
                  <Tooltip
                    title={`${t("products.ikonka.transfer-to-text")}${PRODUCT_INPUT_FIELDS.tooBigForParcelLocker}`}
                  >
                    <Button
                      styleType={ButtonStyleType.PRIMITIVE}
                      onClick={() =>
                        transferValue(
                          IKONKA_INPUT_FIELDS.zdp,
                          PRODUCT_INPUT_FIELDS.tooBigForParcelLocker
                        )
                      }
                    >
                      C
                    </Button>
                  </Tooltip>
                </Row>
              </Col>
              <Col span={8}>
                <Row wrap={false} align="middle">
                  <FormItem<ProductFieldType>
                    styleType={FormItemStyleType.PRIMARY}
                    label={t("products.ikonka.czas_dostawy-label")}
                    name={IKONKA_INPUT_FIELDS.czas_dostawy}
                    hasFeedback
                  >
                    <TextInput
                      styleType={TextInputStyleType.PRIMARY}
                      disabled
                    />
                  </FormItem>
                  <Tooltip
                    title={`${t("products.ikonka.transfer-to-text")}${PRODUCT_INPUT_FIELDS.deliveryTime}`}
                  >
                    <Button
                      styleType={ButtonStyleType.PRIMITIVE}
                      onClick={() =>
                        transferValue(
                          IKONKA_INPUT_FIELDS.czas_dostawy,
                          PRODUCT_INPUT_FIELDS.deliveryTime
                        )
                      }
                    >
                      C
                    </Button>
                  </Tooltip>
                </Row>
              </Col>
              <Col span={8}>
                <Row wrap={false} align="middle">
                  <FormItem<ProductFieldType>
                    styleType={FormItemStyleType.PRIMARY}
                    label={t("products.ikonka.najblizsza_dostawa-label")}
                    name={IKONKA_INPUT_FIELDS.najblizsza_dostawa}
                    hasFeedback
                  >
                    <TextInput
                      styleType={TextInputStyleType.PRIMARY}
                      disabled
                    />
                  </FormItem>
                  <Tooltip
                    title={`${t("products.ikonka.transfer-to-text")}${PRODUCT_INPUT_FIELDS.nextDelivery}`}
                  >
                    <Button
                      styleType={ButtonStyleType.PRIMITIVE}
                      onClick={() =>
                        transferValue(
                          IKONKA_INPUT_FIELDS.najblizsza_dostawa,
                          PRODUCT_INPUT_FIELDS.nextDelivery
                        )
                      }
                    >
                      C
                    </Button>
                  </Tooltip>
                </Row>
              </Col>
            </Row>

            <Row gutter={GUTTER}>
              <Col span={8}>
                <Row wrap={false} align="middle">
                  <FormItem<ProductFieldType>
                    styleType={FormItemStyleType.PRIMARY}
                    label={t("products.ikonka.dlugosc-label")}
                    name={IKONKA_INPUT_FIELDS.dlugosc}
                    hasFeedback
                  >
                    <TextInput
                      styleType={TextInputStyleType.PRIMARY}
                      disabled
                    />
                  </FormItem>
                  <Tooltip
                    title={`${t("products.ikonka.transfer-to-text")}${PRODUCT_INPUT_FIELDS.length}`}
                  >
                    <Button
                      styleType={ButtonStyleType.PRIMITIVE}
                      onClick={() =>
                        transferValue(
                          IKONKA_INPUT_FIELDS.dlugosc,
                          PRODUCT_INPUT_FIELDS.length
                        )
                      }
                    >
                      C
                    </Button>
                  </Tooltip>
                </Row>
              </Col>
              <Col span={8}>
                <Row wrap={false} align="middle">
                  <FormItem<ProductFieldType>
                    styleType={FormItemStyleType.PRIMARY}
                    label={t("products.ikonka.wysokosc-label")}
                    name={IKONKA_INPUT_FIELDS.wysokosc}
                    hasFeedback
                  >
                    <TextInput
                      styleType={TextInputStyleType.PRIMARY}
                      disabled
                    />
                  </FormItem>
                  <Tooltip
                    title={`${t("products.ikonka.transfer-to-text")}${PRODUCT_INPUT_FIELDS.height}`}
                  >
                    <Button
                      styleType={ButtonStyleType.PRIMITIVE}
                      onClick={() =>
                        transferValue(
                          IKONKA_INPUT_FIELDS.wysokosc,
                          PRODUCT_INPUT_FIELDS.height
                        )
                      }
                    >
                      C
                    </Button>
                  </Tooltip>
                </Row>
              </Col>
              <Col span={8}>
                <Row wrap={false} align="middle">
                  <FormItem<ProductFieldType>
                    styleType={FormItemStyleType.PRIMARY}
                    label={t("products.ikonka.waga-label")}
                    name={IKONKA_INPUT_FIELDS.waga}
                    hasFeedback
                  >
                    <TextInput
                      styleType={TextInputStyleType.PRIMARY}
                      disabled
                    />
                  </FormItem>
                  <Tooltip
                    title={`${t("products.ikonka.transfer-to-text")}${PRODUCT_INPUT_FIELDS.weight}`}
                  >
                    <Button
                      styleType={ButtonStyleType.PRIMITIVE}
                      onClick={() =>
                        transferValue(
                          IKONKA_INPUT_FIELDS.waga,
                          PRODUCT_INPUT_FIELDS.weight
                        )
                      }
                    >
                      C
                    </Button>
                  </Tooltip>
                </Row>
              </Col>
            </Row>

            <Row gutter={GUTTER}>
              <Col span={8}>
                <Row wrap={false} align="middle">
                  <FormItem<ProductFieldType>
                    styleType={FormItemStyleType.PRIMARY}
                    label={t("products.ikonka.sztuk_w_kartonie-label")}
                    name={IKONKA_INPUT_FIELDS.sztuk_w_kartonie}
                    hasFeedback
                  >
                    <TextInput
                      styleType={TextInputStyleType.PRIMARY}
                      disabled
                    />
                  </FormItem>
                  <Tooltip
                    title={`${t("products.ikonka.transfer-to-text")}${PRODUCT_INPUT_FIELDS.amountInBox}`}
                  >
                    <Button
                      styleType={ButtonStyleType.PRIMITIVE}
                      onClick={() =>
                        transferValue(
                          IKONKA_INPUT_FIELDS.sztuk_w_kartonie,
                          PRODUCT_INPUT_FIELDS.amountInBox
                        )
                      }
                    >
                      C
                    </Button>
                  </Tooltip>
                </Row>
              </Col>
              <Col span={8}>
                <Row wrap={false} align="middle">
                  <FormItem<ProductFieldType>
                    styleType={FormItemStyleType.PRIMARY}
                    label={t("products.ikonka.stan-label")}
                    name={IKONKA_INPUT_FIELDS.stan}
                    hasFeedback
                  >
                    <TextInput
                      styleType={TextInputStyleType.PRIMARY}
                      disabled
                    />
                  </FormItem>
                  <Tooltip
                    title={`${t("products.ikonka.transfer-to-text")}${PRODUCT_INPUT_FIELDS.state}`}
                  >
                    <Button
                      styleType={ButtonStyleType.PRIMITIVE}
                      onClick={() =>
                        transferValue(
                          IKONKA_INPUT_FIELDS.stan,
                          PRODUCT_INPUT_FIELDS.state
                        )
                      }
                    >
                      C
                    </Button>
                  </Tooltip>
                </Row>
              </Col>
            </Row>

            <Row gutter={GUTTER}>
              <Col span={8}>
                <Row wrap={false} align="middle">
                  <FormItem<ProductFieldType>
                    styleType={FormItemStyleType.PRIMARY}
                    label={t("products.ikonka.link_do_instrukcji-label")}
                    name={IKONKA_INPUT_FIELDS.link_do_instrukcji}
                    hasFeedback
                  >
                    <TextInput
                      styleType={TextInputStyleType.PRIMARY}
                      disabled
                    />
                  </FormItem>
                  <Tooltip
                    title={`${t("products.ikonka.transfer-to-text")}${PRODUCT_INPUT_FIELDS.linkToInstruction}`}
                  >
                    <Button
                      styleType={ButtonStyleType.PRIMITIVE}
                      onClick={() =>
                        transferValue(
                          IKONKA_INPUT_FIELDS.link_do_instrukcji,
                          PRODUCT_INPUT_FIELDS.linkToInstruction
                        )
                      }
                    >
                      C
                    </Button>
                  </Tooltip>
                </Row>
              </Col>
              <Col span={8}>
                <Row wrap={false} align="middle">
                  <FormItem<ProductFieldType>
                    styleType={FormItemStyleType.PRIMARY}
                    label={t("products.ikonka.kategoria-label")}
                    name={IKONKA_INPUT_FIELDS.kategoria}
                    hasFeedback
                  >
                    <TextInput
                      styleType={TextInputStyleType.PRIMARY}
                      disabled
                    />
                  </FormItem>
                </Row>
              </Col>
            </Row>

            <Row gutter={GUTTER}>
              <Col span={8}>
                <Row wrap={false} align="middle">
                  <FormItem<ProductFieldType>
                    styleType={FormItemStyleType.PRIMARY}
                    label={t("products.ikonka.objetosc-label")}
                    name={IKONKA_INPUT_FIELDS.objetosc}
                    hasFeedback
                  >
                    <TextInput
                      styleType={TextInputStyleType.PRIMARY}
                      disabled
                    />
                  </FormItem>
                  <Tooltip
                    title={`${t("products.ikonka.transfer-to-text")}${PRODUCT_INPUT_FIELDS.volume}`}
                  >
                    <Button
                      styleType={ButtonStyleType.PRIMITIVE}
                      onClick={() =>
                        transferValue(
                          IKONKA_INPUT_FIELDS.objetosc,
                          PRODUCT_INPUT_FIELDS.volume
                        )
                      }
                    >
                      C
                    </Button>
                  </Tooltip>
                </Row>
              </Col>
            </Row>

            <Row gutter={GUTTER}>
              <Col span={24}>
                <Row style={{ width: "100%" }}>
                  <Button
                    style={{ marginBottom: "12px" }}
                    onClick={() => {
                      productForm.setFieldValue(
                        "pictures",
                        providerResponse?.zdjecia
                      );
                    }}
                  >
                    Add all pictures
                  </Button>
                  <Col span={24}>
                    {providerResponse?.zdjecia
                      ?.filter((item) => !selectedPictures.includes(item))
                      .map((el) => {
                        return (
                          <Row
                            style={{ width: "100%" }}
                            justify="space-between"
                            align="middle"
                          >
                            <Col span={6}>
                              <img
                                src={el}
                                style={{ width: "100px", height: "100px" }}
                              />
                            </Col>
                            <Col span={16}>
                              <p style={{ color: "white" }}>{el}</p>
                            </Col>
                            <Col span={2}>
                              <Button
                                onClick={() => {
                                  productForm.setFieldValue("pictures", el);
                                }}
                              >
                                +
                              </Button>
                            </Col>
                          </Row>
                        );
                      })}
                  </Col>
                  <FormItem<ProductFieldType>
                    hidden
                    styleType={FormItemStyleType.PRIMARY}
                    label={t("products.ikonka.zdjecia-label")}
                    name={IKONKA_INPUT_FIELDS.zdjecia}
                    hasFeedback
                  >
                    <TextareaInput
                      styleType={TextareaInputStyleType.PRIMARY}
                      disabled
                      style={{ width: "100%", height: "300px" }}
                    />
                  </FormItem>
                </Row>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Col>
  );
}
