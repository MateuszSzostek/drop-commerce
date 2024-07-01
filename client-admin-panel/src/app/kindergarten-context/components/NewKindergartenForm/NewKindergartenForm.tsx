import { Form } from "antd"
import useEditKindergartenForm from "./useNewKindergartenForm"
import { Button, ButtonStyleType, FormItem } from "../../../../common/components"
import { SignInFieldType } from "../../../identify-and-access-context/domain/identify-and-access-context"
import { NEW_KINDERGARTEN_INPUT_FIELDS, EditKindergartenFieldType, NewKindergartenFieldType } from "../../domain/kindergarten-context"
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

export default function NewKindergartenForm() {
  const { onFinish, onFinishFailed, formErrors } = useEditKindergartenForm()
  const { t } = useTranslation()

  return (
    <Form
      className="bring-in-anim"
      style={{ width: "100%" }}
      name="new-kindergarten-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="vertical">
      <FormItem<NewKindergartenFieldType>
        styleType={FormItemStyleType.PRIMARY}
        label={t("kindergartens.edit-form.name-label")}
        name={NEW_KINDERGARTEN_INPUT_FIELDS.name}
        rules={[{ required: true, message: t(`error-code.required`) }]}
        help={formErrors[NEW_KINDERGARTEN_INPUT_FIELDS.name]}>
        <TextInput styleType={TextInputStyleType.PRIMARY} />
      </FormItem>
      <FormItem<NewKindergartenFieldType>
        styleType={FormItemStyleType.PRIMARY}
        label={t("kindergartens.edit-form.address-label")}
        name={NEW_KINDERGARTEN_INPUT_FIELDS.address}
        rules={[{ required: false, message: t(`error-code.required`) }]}
        help={formErrors[NEW_KINDERGARTEN_INPUT_FIELDS.address]}>
        <TextInput styleType={TextInputStyleType.PRIMARY} />
      </FormItem>

      <FormItem<NewKindergartenFieldType>
        valuePropName="fileList"
        getValueFromEvent={normFile}
        styleType={FormItemStyleType.PRIMARY}
        label={t("kindergartens.edit-form.icon-label")}
        name={NEW_KINDERGARTEN_INPUT_FIELDS.icon}
        rules={[{ required: false, message: t(`error-code.required`) }]}
        help={formErrors[NEW_KINDERGARTEN_INPUT_FIELDS.icon]}>
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
