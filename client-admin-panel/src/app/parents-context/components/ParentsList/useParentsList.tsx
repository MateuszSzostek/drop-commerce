import { Space, TableProps, type FormProps } from "antd"
import { NewPasswordFieldType } from "../../domain/parents-context"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ParsedValidationErrors, ValidationErrors } from "../../../../common/types"
import { getErrors } from "../../../../common/utils"
import { ROUTES } from "../../../routing-context/domain/router-context"
import { useParams } from "react-router-dom"
import { faker } from "@faker-js/faker"
import { useTranslation } from "react-i18next"
import { Link, LinkStyleType } from "../../../../common/components"

export default function useParentsList() {
  const [formErrors, setFormErrors] = useState<ParsedValidationErrors>({})
  const navigate = useNavigate()
  const [hasPasswordChanged, setHasPasswordChanged] = useState<boolean>()
  const params = useParams()

  const onFinish: FormProps<NewPasswordFieldType>["onFinish"] = (values) => {
    setFormErrors({})
  }
  const onFinishFailed: FormProps<NewPasswordFieldType>["onFinishFailed"] = (errorInfo): void => {
    console.log("Failed:", errorInfo)
  }

  const onPasswordChangeConfirmationModalDispose = (): void => {
    navigate(ROUTES.login)
  }

  const onValidationErrors = (errors: ValidationErrors): void => {
    const formErrors = getErrors(errors)
    setFormErrors(formErrors)
  }

  const { t } = useTranslation()

  interface ParentsDataType {
    key: string
    lp: number | string
    "full-name": string
    childrenn: { name: string; id: string }[]
    email: string
    "phone-number": string
    id: string
  }

  const PARENTS = [faker.person.fullName(), faker.person.fullName(), faker.person.fullName(), faker.person.fullName(), faker.person.fullName()]

  const PARENTS_TABLE_HEADERS = {
    lp: "lp",
    fullName: "full-name",
    childrenn: "childrenn",
    email: "email",
    phoneNumber: "phone-number",
    actions: "actions",
  }

  const parentsTableColumns: TableProps<ParentsDataType>["columns"] = [
    {
      title: t(`parents.parents-list.${PARENTS_TABLE_HEADERS.lp}-header`),
      dataIndex: PARENTS_TABLE_HEADERS.lp,
      key: PARENTS_TABLE_HEADERS.lp,
      render: (text) => <a>{text}</a>,
      responsive: ["xs", "sm", "md", "xl"],
    },
    {
      title: t(`parents.parents-list.${PARENTS_TABLE_HEADERS.fullName}-header`),
      dataIndex: PARENTS_TABLE_HEADERS.fullName,
      key: PARENTS_TABLE_HEADERS.fullName,
      render: (text, record) => (
        <Link styleType={LinkStyleType.TABLE_RECORD} to={`/${ROUTES.app}/${ROUTES.parentPreview}/${record.id}`}>
          {text}
        </Link>
      ),
      responsive: ["sm", "md", "xl"],
    },
    {
      title: t(`parents.parents-list.${PARENTS_TABLE_HEADERS.childrenn}-header`),
      dataIndex: PARENTS_TABLE_HEADERS.childrenn,
      key: PARENTS_TABLE_HEADERS.childrenn,
      render: (childrenn) => {
        return childrenn.map((child: { name: string; id: string }) => (
          <Space direction="horizontal">
            <Link styleType={LinkStyleType.TABLE_RECORD} to={`/${ROUTES.app}/${ROUTES.childPreview}/${child.id}`}>
              {child.name}
            </Link>{" "}
            <span> </span>
          </Space>
        ))
      },
      responsive: ["sm", "md", "xl"],
    },
    {
      title: t(`parents.parents-list.${PARENTS_TABLE_HEADERS.email}-header`),
      dataIndex: PARENTS_TABLE_HEADERS.email,
      key: PARENTS_TABLE_HEADERS.email,
      render: (text) => <a>{text}</a>,
      responsive: ["sm", "md", "xl"],
    },
    {
      title: t(`parents.parents-list.${PARENTS_TABLE_HEADERS.phoneNumber}-header`),
      dataIndex: PARENTS_TABLE_HEADERS.phoneNumber,
      key: PARENTS_TABLE_HEADERS.phoneNumber,
      render: (text) => <a>{text}</a>,
      responsive: ["sm", "md", "xl"],
    },
  ]

  const today = new Date()
  today.setDate(today.getDate() - 10)
  const future = new Date()
  future.setDate(future.getDate() + 10)

  const parentsTableFakeData: ParentsDataType[] = [
    {
      key: "1",
      lp: "1",
      "full-name": PARENTS[0],
      childrenn: [
        { name: "child 1", id: "iaduhaodng" },
        { name: "child 2", id: "iaduhaodng" },
      ],
      email: "parent@gmail.com",
      "phone-number": "0612345678",
      id: "sdsdsdggsd",
    },
  ]

  return {
    onFinish,
    onFinishFailed,
    onPasswordChangeConfirmationModalDispose,
    parentsTableColumns,
    parentsTableFakeData,
    hasPasswordChanged,
    formErrors,
  }
}
