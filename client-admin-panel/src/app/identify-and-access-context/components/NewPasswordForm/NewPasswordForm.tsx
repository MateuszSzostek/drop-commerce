import { Form, Space, Col, Row } from "antd"
import { Text, Button, Link, FormItem, PasswordInput } from "../../../../common/components"
import { NewPasswordFieldType, NEW_PASSWORD_INPUT_FIELDS } from "../../domain/identify-and-access-context"
import useNewPasswordForm from "./useNewPasswordForm"
import { useTranslation } from "react-i18next"
import { TextStyleType } from "../../../../common/components/text/Text.types"
import { PasswordInputStyleType } from "../../../../common/components/input/password/PasswordInput.types"
import { FormItemStyleType } from "../../../../common/components/form-item/FormItem.types"
import { LinkStyleType } from "../../../../common/components/link/Link.types"
import Disposable from "../../../../common/components/disposable/Disposable"
import PasswordChangedConfirmationModal from "../PasswordChangedConfirmationModal/PasswordChangedConfirmationModal"
import { ROUTES } from "../../../routing-context/domain/router-context"

export default function ResetPasswordForm() {
  const { onFinish, onFinishFailed, onPasswordChangeConfirmationModalDispose, hasPasswordChanged, formErrors, result } = useNewPasswordForm()
  const [t] = useTranslation()

  return (
    <>
      <Row style={{ width: "100%" }}>
        <Col xs={{ span: 24, offset: 0 }} md={{ span: 12, offset: 6 }} xl={{ span: 8, offset: 8 }}>
          <Form
            style={{ width: "100%" }}
            name="reset-password-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical">
            <Space direction="horizontal" style={{ width: "100%", justifyContent: "center", marginBottom: "32px" }}>
              <Text styleType={TextStyleType.LANDING_PRIMARY_TITLE}>{t("new-password-form.title")}</Text>
            </Space>
            <FormItem<NewPasswordFieldType>
              styleType={FormItemStyleType.LANDING}
              label={t("new-password-form.password-label")}
              name={NEW_PASSWORD_INPUT_FIELDS.newPassword}
              rules={[{ required: true, message: t(`error-code.required`) }]}
              help={formErrors[NEW_PASSWORD_INPUT_FIELDS.newPassword]}>
              <PasswordInput styleType={PasswordInputStyleType.LANDING} />
            </FormItem>
            <FormItem<NewPasswordFieldType>
              styleType={FormItemStyleType.LANDING}
              label={t("new-password-form.confirm-password-label")}
              name={NEW_PASSWORD_INPUT_FIELDS.newPasswordConfirmation}
              rules={[{ required: true, message: t(`error-code.required`) }]}
              help={formErrors[NEW_PASSWORD_INPUT_FIELDS.newPasswordConfirmation]}>
              <PasswordInput styleType={PasswordInputStyleType.LANDING} />
            </FormItem>
            <FormItem>
              <Button type="primary" htmlType="submit" block loading={result.isLoading}>
                {t("new-password-form.change-password-button")}
              </Button>
            </FormItem>
            <Text styleType={TextStyleType.LANDING_SIMPLE}>
              {t("new-password-form.have-no-account-label")}
              <Link styleType={LinkStyleType.SIMPLE} to={ROUTES.register}>
                {t("new-password-form.register-link")}
              </Link>
            </Text>
          </Form>
        </Col>
      </Row>
      {hasPasswordChanged && (
        <Disposable timeToDispose={5000} onDispose={onPasswordChangeConfirmationModalDispose}>
          <PasswordChangedConfirmationModal isOpen={hasPasswordChanged} />
        </Disposable>
      )}
    </>
  )
}
