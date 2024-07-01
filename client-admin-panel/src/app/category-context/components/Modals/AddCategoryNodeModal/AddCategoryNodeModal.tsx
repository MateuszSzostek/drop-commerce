import Modal from "../../../../../common/components/modal/Modal"
import React from "react"
import { useTranslation } from "react-i18next"
import Text from "../../../../../common/components/text/Text"
import { AddCategoryFormFieldType, AddCategoryNodeModalProps, CATEGORY_INPUT_FIELDS } from "../../../domain/category-context"
import { Col, Form, Row } from "antd"
import { Button, FormItem, FormItemStyleType, TextInput, TextInputStyleType } from "../../../../../common/components"
import { ProductFieldType } from "../../../../product-context/domain/products-context"
import useAddCategoryNodeModal from "./useAddCategoryNodeModal"

export default function AddCategoryNodeModal({ isOpen, handleAppendNode }: AddCategoryNodeModalProps) {
  const { newCategoryForm, onFinish, onFinishFailed } = useAddCategoryNodeModal(handleAppendNode, isOpen)

  const [t] = useTranslation()

  return (
    <Modal open={isOpen} centered={true} footer={null} closable={false}>
      <Text>{t("categories.add-category-modal.title")}</Text>
      <Form
        className="bring-in-anim"
        form={newCategoryForm}
        style={{ width: "100%" }}
        name="product-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical">
        <Row gutter={12}>
          <Col span={8}>
            <FormItem<AddCategoryFormFieldType>
              styleType={FormItemStyleType.PRIMARY}
              label={t("products.product.id-label")}
              name={CATEGORY_INPUT_FIELDS.categoryName}
              hasFeedback>
              <TextInput styleType={TextInputStyleType.PRIMARY} />
            </FormItem>
          </Col>
        </Row>
        <Button htmlType="submit">{t("categories.add-category-modal.save-button")}</Button>
      </Form>
    </Modal>
  )
}
