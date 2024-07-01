import { Form, Row } from "antd"
import Modal from "../../../../common/components/modal/Modal"
import { Button, ButtonStyleType, FormItem, FormItemStyleType, SelectStyleType } from "../../../../common/components"
import useAssignGroupModal from "./useAssignGroupModal"
import { Select } from "../../../../common/components"
import { useTranslation } from "react-i18next"
import { ASSIGN_GROUP_INPUT_FIELDS, AssignGroupFieldType, EDIT_KINDERGARTEN_INPUT_FIELDS } from "../../domain/kindergarten-context"

interface IAssignGroupModal {
  isOpen: boolean
  handleOnCancel: () => void
}

export default function AssignGroupModal({ isOpen, handleOnCancel }: IAssignGroupModal) {
  const { formErrors, assignGroupForm, avaliableKindergartenGroupsSelectOptions, onFinish, onFinishFailed } = useAssignGroupModal()

  const { t } = useTranslation()

  return (
    <Modal centered open={isOpen} title={t("kindergartens.preview.assign-group-button")} footer={() => <></>} onCancel={handleOnCancel}>
      <Form
        className="bring-in-anim"
        style={{ width: "100%" }}
        name="assign-group-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        form={assignGroupForm}
        layout="vertical">
        <FormItem<AssignGroupFieldType>
          styleType={FormItemStyleType.PRIMARY}
          label={t("kindergartens.edit-form.name-label")}
          name={ASSIGN_GROUP_INPUT_FIELDS.groupId}
          rules={[{ required: true, message: t(`error-code.required`) }]}
          help={formErrors[EDIT_KINDERGARTEN_INPUT_FIELDS.name]}>
          <Select styleType={SelectStyleType.PRIMARY} options={avaliableKindergartenGroupsSelectOptions} />
        </FormItem>
        <Button styleType={ButtonStyleType.PRIMARY} htmlType="submit">
          {t(`kindergartens.edit-form.save-button`)}
        </Button>
      </Form>
    </Modal>
  )
}
