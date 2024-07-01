import { Form } from "antd"
import useNewGroupForm from "./useNewGroupForm"
import { Button, ButtonStyleType, ColorPicker, ColorPickerStyleType, FormItem, Select } from "../../../../common/components"
import { NEW_GROUP_INPUT_FIELDS, NewGroupFieldType } from "../../domain/groups-context"
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

export default function NewGroupForm() {
  const { onFinish, onFinishFailed, formErrors, kindergartensSelectOptions } = useNewGroupForm()
  const { t } = useTranslation()

  return (
    <Form
      className="bring-in-anim"
      style={{ width: "100%" }}
      name="new-group-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="vertical">
      <FormItem<NewGroupFieldType>
        styleType={FormItemStyleType.PRIMARY}
        label={t("groups.new-form.name-label")}
        name={NEW_GROUP_INPUT_FIELDS.name}
        rules={[{ required: true, message: t(`error-code.required`) }]}
        help={formErrors[NEW_GROUP_INPUT_FIELDS.name]}>
        <TextInput styleType={TextInputStyleType.PRIMARY} />
      </FormItem>
      <FormItem<NewGroupFieldType>
        styleType={FormItemStyleType.PRIMARY}
        label={t("groups.new-form.color-label")}
        name={NEW_GROUP_INPUT_FIELDS.color}
        //rules={[{ required: true, message: t(`error-code.required`) }]}
        help={formErrors[NEW_GROUP_INPUT_FIELDS.color]}>
        <ColorPicker styleType={ColorPickerStyleType.PRIMARY} />
      </FormItem>
      <FormItem<NewGroupFieldType>
        styleType={FormItemStyleType.PRIMARY}
        label={t("groups.new-form.kindergarten-label")}
        name={NEW_GROUP_INPUT_FIELDS.kindergarten}
        //rules={[{ required: true, message: t(`error-code.required`) }]}
        help={formErrors[NEW_GROUP_INPUT_FIELDS.kindergarten]}>
        <Select options={kindergartensSelectOptions} allowClear={false} />
      </FormItem>
      <FormItem<NewGroupFieldType>
        valuePropName="fileList"
        getValueFromEvent={normFile}
        styleType={FormItemStyleType.PRIMARY}
        label={t("groups.new-form.icon-label")}
        name={NEW_GROUP_INPUT_FIELDS.icon}
        rules={[{ required: false, message: t(`error-code.required`) }]}
        help={formErrors[NEW_GROUP_INPUT_FIELDS.icon]}>
        <ImageUpload action="/upload.do" listType="picture-card" maxCount={1}>
          <button style={{ border: 0, background: "none" }} type="button">
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
          </button>
        </ImageUpload>
      </FormItem>
      <Button styleType={ButtonStyleType.PRIMARY} htmlType="submit">
        {t(`groups.new-form.save-button`)}
      </Button>
    </Form>
  )
}
