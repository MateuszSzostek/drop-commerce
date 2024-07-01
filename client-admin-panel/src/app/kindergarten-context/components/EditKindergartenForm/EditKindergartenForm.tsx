import { Form } from "antd"
import useEditKindergartenForm from "./useEditKindergartenForm"
import { Button, ButtonStyleType, FormItem } from "../../../../common/components"
import { SignInFieldType } from "../../../identify-and-access-context/domain/identify-and-access-context"
import { EDIT_KINDERGARTEN_INPUT_FIELDS, EditKindergartenFieldType } from "../../domain/kindergarten-context"
import { FormItemStyleType, TextInput, TextInputStyleType } from "../../../../common/components"
import { useTranslation } from "react-i18next"
import ImageUpload from "../../../../common/components/image-upload/ImageUpload"
import { PlusOutlined } from "@ant-design/icons"

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e
  }
  return e?.fileList
}

export default function EditKindergartenForm() {
  const { onFinish, onFinishFailed, formErrors, editKindergartenForm } = useEditKindergartenForm()
  const { t } = useTranslation()

  return (
    <Form
      className="bring-in-anim"
      style={{ width: "100%" }}
      name="edit-kindergarten-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      form={editKindergartenForm}
      layout="vertical">
      <FormItem<EditKindergartenFieldType>
        styleType={FormItemStyleType.PRIMARY}
        label={t("kindergartens.edit-form.name-label")}
        name={EDIT_KINDERGARTEN_INPUT_FIELDS.name}
        rules={[{ required: true, message: t(`error-code.required`) }]}
        help={formErrors[EDIT_KINDERGARTEN_INPUT_FIELDS.name]}>
        <TextInput styleType={TextInputStyleType.PRIMARY} />
      </FormItem>
      <FormItem<EditKindergartenFieldType>
        styleType={FormItemStyleType.PRIMARY}
        label={t("kindergartens.edit-form.address-label")}
        name={EDIT_KINDERGARTEN_INPUT_FIELDS.address}
        rules={[{ required: true, message: t(`error-code.required`) }]}
        help={formErrors[EDIT_KINDERGARTEN_INPUT_FIELDS.address]}>
        <TextInput styleType={TextInputStyleType.PRIMARY} />
      </FormItem>

      <FormItem
        valuePropName="fileList"
        getValueFromEvent={normFile}
        styleType={FormItemStyleType.PRIMARY}
        label={t("kindergartens.edit-form.icon-label")}
        name={EDIT_KINDERGARTEN_INPUT_FIELDS.icon}
        help={formErrors[EDIT_KINDERGARTEN_INPUT_FIELDS.icon]}>
        <ImageUpload action="/upload.do" listType="picture-card" maxCount={1}>
          <button style={{ border: 0, background: "none" }} type="button">
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
          </button>
        </ImageUpload>
      </FormItem>
      <Button styleType={ButtonStyleType.PRIMARY} htmlType="submit">
        {t(`kindergartens.edit-form.save-button`)}
      </Button>
    </Form>
  )
}
