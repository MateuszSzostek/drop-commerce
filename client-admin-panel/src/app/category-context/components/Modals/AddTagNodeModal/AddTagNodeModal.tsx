import Modal from "../../../../../common/components/modal/Modal";
import { useTranslation } from "react-i18next";
import Text from "../../../../../common/components/text/Text";
import {
  AddTagFormFieldType,
  AddTagNodeModalProps,
  TAG_INPUT_FIELDS,
} from "../../../domain/category-context";
import { Col, Form, Row } from "antd";
import {
  Button,
  ButtonStyleType,
  FormItem,
  FormItemStyleType,
  TextInput,
  TextInputStyleType,
} from "../../../../../common/components";
import useAddTagNodeModal from "./useAddTagNodeModal";

export default function AddTagNodeModal({
  isOpen,
  onSuccess,
}: AddTagNodeModalProps) {
  const { newTagForm, onFinish, onFinishFailed } = useAddTagNodeModal(
    isOpen,
    onSuccess
  );

  const [t] = useTranslation();

  return (
    <Modal open={isOpen} centered={true} footer={null} closable={false}>
      <Text>{t("categories.add-tag-modal.title")}</Text>
      <Form
        className="bring-in-anim"
        form={newTagForm}
        style={{ width: "100%" }}
        name="product-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
      >
        <Row gutter={12}>
          <Col span={8}>
            <FormItem<AddTagFormFieldType>
              styleType={FormItemStyleType.PRIMARY}
              label={t("categories.add-tag-modal.tag-name-label")}
              name={TAG_INPUT_FIELDS.tagName}
              hasFeedback
            >
              <TextInput styleType={TextInputStyleType.PRIMARY} />
            </FormItem>
          </Col>
        </Row>
        <Button styleType={ButtonStyleType.SECONDARY}>
          {t("categories.add-tag-modal.cancel-button")}
        </Button>
        <Button htmlType="submit">
          {t("categories.add-tag-modal.save-button")}
        </Button>
      </Form>
    </Modal>
  );
}
