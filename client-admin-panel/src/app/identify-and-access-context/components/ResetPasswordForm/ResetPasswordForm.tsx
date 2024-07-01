import { Form, Space, Col, Row } from "antd"
import { Text, Button, Link, FormItem, TextInput } from "../../../../common/components"
import { ResetPasswordFieldType, RESET_PASSWORD_INPUT_FIELDS } from "../../domain/identify-and-access-context"
import useResetPasswordForm from "./useResetPasswordForm"
import { useTranslation } from "react-i18next"
import { TextStyleType } from "../../../../common/components/text/Text.types"
import { FormItemStyleType } from "../../../../common/components/form-item/FormItem.types"
import ResetPasswordRequestSentConfirmationModal from "../ResetPasswordRequestSentConfirmationModal/ResetPasswordRequestSentConfirmationModal"
import Disposable from "../../../../common/components/disposable/Disposable"
import { ROUTES } from "../../../routing-context/domain/router-context"

export default function ResetPasswordForm() {
  const { onFinish, onFinishFailed, onResetPasswordRequestSentConfirmationModalDispose, hasResetPasswordRequested, result, formErrors } = useResetPasswordForm()
  const [t] = useTranslation()

  return (
    <>
      <Row style={{ width: "100%" }}>
        <Col span={8} offset={8}>
          <Form
            style={{ width: "100%" }}
            name="reset-password-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical">
            <Space direction="horizontal" style={{ width: "100%", justifyContent: "center", marginBottom: "32px" }}>
              <Text styleType={TextStyleType.LANDING_PRIMARY_TITLE}>{t("reset-password-form.title")}</Text>
            </Space>
            <FormItem<ResetPasswordFieldType>
              styleType={FormItemStyleType.LANDING}
              label={t("reset-password-form.email-label")}
              name={RESET_PASSWORD_INPUT_FIELDS.email}
              rules={[{ required: true, message: t(`error-code.required`) }]}
              help={formErrors[RESET_PASSWORD_INPUT_FIELDS.email]}>
              <TextInput />
            </FormItem>
            <FormItem>
              <Button type="primary" htmlType="submit" block loading={result.isLoading}>
                {t("reset-password-form.send-button")}
              </Button>
            </FormItem>
            <Text styleType={TextStyleType.LANDING_SIMPLE}>
              {t("reset-password-form.have-no-account-label")}
              <Link to={ROUTES.register}>{t("reset-password-form.register-link")}</Link>
            </Text>
          </Form>
        </Col>
      </Row>
      {hasResetPasswordRequested && (
        <Disposable timeToDispose={5000} onDispose={onResetPasswordRequestSentConfirmationModalDispose}>
          <ResetPasswordRequestSentConfirmationModal isOpen={hasResetPasswordRequested} />
        </Disposable>
      )}
    </>
  )
}
