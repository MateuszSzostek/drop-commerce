import { Form, Space, Col, Row } from "antd"
import {
  Divider,
  Text,
  Button,
  Link,
  FormItem,
  TextInput,
  PasswordInput,
  TextStyleType,
  FormItemStyleType,
  LinkStyleType,
  TextInputStyleType,
  PasswordInputStyleType,
} from "../../../../common/components"
import { SignInFieldType, SIGN_IN_INPUT_FIELDS } from "../../domain/identify-and-access-context"
import useLoginForm from "./useSignInForm"
import { useTranslation } from "react-i18next"
import { ROUTES } from "../../../routing-context/domain/router-context"
import { GoogleLogin } from "@react-oauth/google"

export default function SignInForm() {
  const { onFinish, onFinishFailed, result, formErrors } = useLoginForm()
  const [t] = useTranslation()

  return (
    <Row style={{ width: "100%" }}>
      <Col xs={{ span: 24, offset: 0 }} md={{ span: 12, offset: 6 }} xl={{ span: 8, offset: 8 }}>
        <Form
          style={{ width: "100%" }}
          name="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical">
          <Space direction="horizontal" style={{ width: "100%", justifyContent: "center", paddingBottom: "32px" }}>
            <Text styleType={TextStyleType.LANDING_PRIMARY_TITLE}>{t("login-form.title")}</Text>
          </Space>
          <FormItem>
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                console.log(credentialResponse)
              }}
              onError={() => {
                console.log("Login Failed")
              }}
            />
          </FormItem>
          <Divider />
          <FormItem<SignInFieldType>
            styleType={FormItemStyleType.LANDING}
            label={t("login-form.email-label")}
            name={SIGN_IN_INPUT_FIELDS.email}
            rules={[{ required: true, message: t(`error-code.required`) }]}
            help={formErrors[SIGN_IN_INPUT_FIELDS.email]}>
            <TextInput styleType={TextInputStyleType.LANDING} />
          </FormItem>
          <FormItem<SignInFieldType>
            styleType={FormItemStyleType.LANDING}
            label={t("login-form.password-label")}
            name={SIGN_IN_INPUT_FIELDS.password}
            rules={[{ required: true, message: t(`error-code.required`) }]}
            help={formErrors[SIGN_IN_INPUT_FIELDS.password]}>
            <PasswordInput styleType={PasswordInputStyleType.LANDING} />
          </FormItem>
          <Text>
            <Link to={ROUTES.resetPassword}>{t("login-form.forgot-password-link")}</Link>
          </Text>
          <FormItem>
            <Button type="primary" htmlType="submit" block loading={result.isLoading}>
              {t("login-form.login-button")}
            </Button>
          </FormItem>
          <Text styleType={TextStyleType.LANDING_SIMPLE}>
            {t("login-form.have-no-account-label")}
            <Link styleType={LinkStyleType.SIMPLE} to={`/${ROUTES.landing}/${ROUTES.register}/`}>
              {t("login-form.register-link")}
            </Link>
          </Text>
        </Form>
      </Col>
    </Row>
  )
}
