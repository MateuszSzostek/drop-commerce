import { Row, Space, TableProps, type FormProps } from "antd"
import { NewPasswordFieldType } from "../../domain/groups-context"
import { SignInResponse } from "../../../identify-and-access-context/domain/identify-and-access-context"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ParsedValidationErrors, Response, ValidationErrors } from "../../../../common/types"
import { getErrors } from "../../../../common/utils"
import { ROUTES } from "../../../routing-context/domain/router-context"
import { useParams } from "react-router-dom"
import { faker } from "@faker-js/faker"
import { useTranslation } from "react-i18next"
import { Link, LinkStyleType } from "../../../../common/components"

export default function useTeachersList() {
  const [formErrors, setFormErrors] = useState<ParsedValidationErrors>({})
  const navigate = useNavigate()

  const handleOpenTeacherPreview = (teacherId: string) => {
    navigate(`/${ROUTES.app}/${ROUTES.teacherPreview}/${teacherId}`)
  }

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

  interface TeachersDataType {
    key: string
    lp: number | string
    name: string
    groups: { id: string; name: string }[]
    "phone-number": string
    email: string
    id: string
  }

  const TEACHERS = [faker.person.fullName(), faker.person.fullName(), faker.person.fullName(), faker.person.fullName(), faker.person.fullName()]

  const TEACHERS_TABLE_HEADERS = {
    lp: "lp",
    name: "name",
    groups: "groups",
    phoneNumber: "phone-number",
    email: "email",
  }

  const teachersTableColumns: TableProps<TeachersDataType>["columns"] = [
    {
      title: t(`teachers.teachers-list.${TEACHERS_TABLE_HEADERS.lp}-header`),
      dataIndex: TEACHERS_TABLE_HEADERS.lp,
      key: TEACHERS_TABLE_HEADERS.lp,
      render: (text) => <a>{text}</a>,
      responsive: ["xs", "sm", "md", "xl"],
    },
    {
      title: t(`teachers.teachers-list.${TEACHERS_TABLE_HEADERS.name}-header`),
      dataIndex: TEACHERS_TABLE_HEADERS.name,
      key: TEACHERS_TABLE_HEADERS.name,
      render: (_, record) => (
        <Link styleType={LinkStyleType.TABLE_RECORD} to={`/${ROUTES.app}/${ROUTES.teacherPreview}/${record.id}`}>
          {record.name}
        </Link>
      ),
      responsive: ["sm", "md", "xl"],
    },
    {
      title: t(`teachers.teachers-list.${TEACHERS_TABLE_HEADERS.groups}-header`),
      dataIndex: TEACHERS_TABLE_HEADERS.groups,
      key: TEACHERS_TABLE_HEADERS.groups,
      render: (_, record) => {
        return record.groups?.map((group) => (
          <Space direction="horizontal">
            <Link styleType={LinkStyleType.TABLE_RECORD} to={`/${ROUTES.app}/${ROUTES.groupPreview}/${group.id}`}>
              {group.name}
            </Link>{" "}
            <span> </span>
          </Space>
        ))
      },
      responsive: ["sm", "md", "xl"],
    },

    {
      title: t(`teachers.teachers-list.${TEACHERS_TABLE_HEADERS.email}-header`),
      dataIndex: TEACHERS_TABLE_HEADERS.email,
      key: TEACHERS_TABLE_HEADERS.email,
      render: (text) => <p>{text}</p>,
      responsive: ["sm", "md", "xl"],
    },
    {
      title: t(`teachers.teachers-list.${TEACHERS_TABLE_HEADERS.phoneNumber}-header`),
      dataIndex: TEACHERS_TABLE_HEADERS.phoneNumber,
      key: TEACHERS_TABLE_HEADERS.phoneNumber,
      render: (text) => <p>{text}</p>,
      responsive: ["sm", "md", "xl"],
    },
  ]

  const today = new Date()
  today.setDate(today.getDate() - 10)
  const future = new Date()
  future.setDate(future.getDate() + 10)

  const teachersTableFakeData: TeachersDataType[] = [
    {
      key: "1",
      lp: "1",
      name: TEACHERS[0],
      groups: [
        { name: faker.person.fullName(), id: "agsdagfhadfh" },
        { name: faker.person.fullName(), id: "agsdagfhadfh" },
      ],
      email: "serhs@gmail.com",
      "phone-number": "8497243609",
      id: "saldhmfaslidngfhavsdo",
    },
    {
      key: "2",
      lp: "2",
      name: TEACHERS[1],
      groups: [
        { name: faker.person.fullName(), id: "agsdagfhadfh" },
        { name: faker.person.fullName(), id: "agsdagfhadfh" },
      ],
      email: "serhs@gmail.com",
      "phone-number": "8497243609",
      id: "saldhmfaslidngfhavsdo",
    },
    {
      key: "3",
      lp: "3",
      name: TEACHERS[2],
      groups: [
        { name: faker.person.fullName(), id: "agsdagfhadfh" },
        { name: faker.person.fullName(), id: "agsdagfhadfh" },
      ],
      email: "serhs@gmail.com",
      "phone-number": "8497243609",
      id: "saldhmfaslidngfhavsdo",
    },
    {
      key: "4",
      lp: "4",
      name: TEACHERS[3],
      groups: [
        { name: faker.person.fullName(), id: "agsdagfhadfh" },
        { name: faker.person.fullName(), id: "agsdagfhadfh" },
      ],
      email: "serhs@gmail.com",
      "phone-number": "8497243609",
      id: "saldhmfaslidngfhavsdo",
    },
  ]

  return {
    onFinish,
    onFinishFailed,
    handleOpenTeacherPreview,
    teachersTableColumns,
    teachersTableFakeData,
    formErrors,
  }
}
