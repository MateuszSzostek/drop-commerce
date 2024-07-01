import { Form } from "antd"
import useNewGroupForm from "./useNewChildForm"
import { Button, ButtonStyleType, ColorPicker, ColorPickerStyleType, FormItem, Select, SelectStyleType } from "../../../../common/components"
import { NEW_CHILD_INPUT_FIELDS, NewChildFieldType, sexSelectOptions } from "../../domain/children-context"
import { FormItemStyleType, TextInput, TextInputStyleType } from "../../../../common/components"
import { useTranslation } from "react-i18next"
import ImageUpload from "../../../../common/components/image-upload/ImageUpload"
import { PlusOutlined } from "@ant-design/icons"
import DatePicker from "../../../../common/components/date-picker/DatePicker"

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e
  }
  return e?.fileList
}

export default function NewChildForm() {
  const {
    onFinish,
    onFinishFailed,
    handleSelectKindergarten,
    handleSelectGroup,
    formErrors,
    kindergartensSelectOptions,
    groupsByKindergartenSelectOptions,
    groupsByKindergartensResult,
  } = useNewGroupForm()
  const { t } = useTranslation()

  return (
    <Form
      className="bring-in-anim"
      style={{ width: "100%" }}
      name="new-child-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="vertical">
      <FormItem<NewChildFieldType>
        styleType={FormItemStyleType.PRIMARY}
        label={t("children.new-form.name-label")}
        name={NEW_CHILD_INPUT_FIELDS.name}
        rules={[{ required: true, message: t(`error-code.required`) }]}
        help={formErrors[NEW_CHILD_INPUT_FIELDS.name]}>
        <TextInput styleType={TextInputStyleType.PRIMARY} />
      </FormItem>
      <FormItem<NewChildFieldType>
        styleType={FormItemStyleType.PRIMARY}
        label={t("children.new-form.surname-label")}
        name={NEW_CHILD_INPUT_FIELDS.surname}
        rules={[{ required: true, message: t(`error-code.required`) }]}
        help={formErrors[NEW_CHILD_INPUT_FIELDS.surname]}>
        <TextInput styleType={TextInputStyleType.PRIMARY} />
      </FormItem>
      <FormItem<NewChildFieldType>
        styleType={FormItemStyleType.PRIMARY}
        label={t("children.new-form.short-name-label")}
        name={NEW_CHILD_INPUT_FIELDS.shortName}
        //rules={[{ required: true, message: t(`error-code.required`) }]}
        help={formErrors[NEW_CHILD_INPUT_FIELDS.shortName]}>
        <TextInput styleType={TextInputStyleType.PRIMARY} />
      </FormItem>
      <FormItem<NewChildFieldType>
        styleType={FormItemStyleType.PRIMARY}
        label={t("children.new-form.pesel-label")}
        name={NEW_CHILD_INPUT_FIELDS.pesel}
        //rules={[{ required: true, message: t(`error-code.required`) }]}
        help={formErrors[NEW_CHILD_INPUT_FIELDS.pesel]}>
        <TextInput styleType={TextInputStyleType.PRIMARY} />
      </FormItem>
      <FormItem<NewChildFieldType>
        styleType={FormItemStyleType.PRIMARY}
        label={t("children.new-form.date-of-birth-label")}
        name={NEW_CHILD_INPUT_FIELDS.dateOfBirthday}
        //rules={[{ required: true, message: t(`error-code.required`) }]}
        help={formErrors[NEW_CHILD_INPUT_FIELDS.dateOfBirthday]}>
        <DatePicker />
      </FormItem>
      <FormItem<NewChildFieldType>
        styleType={FormItemStyleType.PRIMARY}
        label={t("children.new-form.place-of-birth-label")}
        name={NEW_CHILD_INPUT_FIELDS.placeOfBirth}
        //rules={[{ required: true, message: t(`error-code.required`) }]}
        help={formErrors[NEW_CHILD_INPUT_FIELDS.placeOfBirth]}>
        <TextInput styleType={TextInputStyleType.PRIMARY} />
      </FormItem>
      <FormItem<NewChildFieldType>
        styleType={FormItemStyleType.PRIMARY}
        label={t("children.new-form.kindergarten-label")}
        name={NEW_CHILD_INPUT_FIELDS.kindergarten}
        //rules={[{ required: true, message: t(`error-code.required`) }]}
        help={formErrors[NEW_CHILD_INPUT_FIELDS.kindergarten]}>
        <Select options={kindergartensSelectOptions} onChange={handleSelectKindergarten} />
      </FormItem>
      <FormItem<NewChildFieldType>
        styleType={FormItemStyleType.PRIMARY}
        label={t("children.new-form.group-label")}
        name={NEW_CHILD_INPUT_FIELDS.groups}
        //rules={[{ required: true, message: t(`error-code.required`) }]}
        help={formErrors[NEW_CHILD_INPUT_FIELDS.groups]}>
        <Select options={groupsByKindergartenSelectOptions} mode="multiple" onChange={handleSelectGroup} loading={groupsByKindergartensResult.isLoading} />
      </FormItem>
      <FormItem<NewChildFieldType>
        styleType={FormItemStyleType.PRIMARY}
        label={t("children.new-form.sex-label")}
        name={NEW_CHILD_INPUT_FIELDS.sex}
        //rules={[{ required: true, message: t(`error-code.required`) }]}
        help={formErrors[NEW_CHILD_INPUT_FIELDS.sex]}>
        <Select options={sexSelectOptions} />
      </FormItem>

      <Button styleType={ButtonStyleType.PRIMARY} htmlType="submit">
        {t(`children.new-form.save-button`)}
      </Button>
    </Form>
  )
}
