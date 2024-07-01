import { Row, Space, TableProps, type FormProps } from "antd"
//import { NewPasswordFieldType } from "../../domain/groups-context"
import { SignInResponse } from "../../../identify-and-access-context/domain/identify-and-access-context"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ParsedValidationErrors, Response, ValidationErrors } from "../../../../common/types"
import { getErrors } from "../../../../common/utils"
import { ROUTES } from "../../../routing-context/domain/router-context"
import { useParams } from "react-router-dom"
import { faker } from "@faker-js/faker"
import { useTranslation } from "react-i18next"
import { Button, ButtonStyleType, Link, LinkStyleType } from "../../../../common/components"
import { useGetAllGroupsByKindergartenQuery, useGetAllGroupsByUserQuery } from "../../services/groupsSlice"

export default function useGroupsList() {
  const [formErrors, setFormErrors] = useState<ParsedValidationErrors>({})
  const [groupsOfUser, setGroupsOfUser] = useState<GroupsDataType[]>([])
  const navigate = useNavigate()
  const params = useParams()

  const {
    data: groupsByUser,
    isFetching: isFetchingGroupsByUser,
    isLoading: isLoadingGroupsByUser,
  } = useGetAllGroupsByUserQuery(
    {},
    {
      refetchOnMountOrArgChange: true,
      skip: false,
    },
  )

  useEffect(() => {
    if (!isLoadingGroupsByUser && groupsByUser) {
      console.log(groupsByUser)

      const groups: GroupsDataType[] = groupsByUser.data.map((group, idx) => {
        return {
          key: group.id,
          lp: idx,
          name: group.name,
          teachers: group.teachers.map((teacher) => {
            return { id: teacher.id, "full-name": teacher.name }
          }),
          "kids-amount": group.children.length,
          id: group.id,
        }
      })

      setGroupsOfUser(groups)
    }
  }, [groupsByUser, isLoadingGroupsByUser])

  const handleOpenGroupPreview = (groupId: string) => {
    navigate(`/${ROUTES.app}/${ROUTES.groupPreview}/${groupId}`)
  }

  const onValidationErrors = (errors: ValidationErrors): void => {
    const formErrors = getErrors(errors)
    setFormErrors(formErrors)
  }

  const handleOpenAddNewGroupView = () => {
    navigate(`/${ROUTES.app}/${ROUTES.newGroup}`)
  }

  const { t } = useTranslation()

  interface GroupsDataType {
    key: string
    lp: number | string
    name: string
    teachers: { id: string; "full-name": string }[]
    "kids-amount": number
    id: string
  }

  const GROUPS = ["Poziomki", "Kruszynki", "Misiaczki", "Truskaweczki"]

  const GROUPS_TABLE_HEADERS = {
    lp: "lp",
    name: "name",
    actions: "actions",
    wardens: "wardens",
    kidsAmount: "kids-amount",
  }

  const groupsTableColumns: TableProps<GroupsDataType>["columns"] = [
    {
      title: t(`groups.groups-list.${GROUPS_TABLE_HEADERS.lp}-header`),
      dataIndex: GROUPS_TABLE_HEADERS.lp,
      key: GROUPS_TABLE_HEADERS.lp,
      render: (text) => <a>{text}</a>,
      responsive: ["xs", "sm", "md", "xl"],
    },
    {
      title: t(`groups.groups-list.${GROUPS_TABLE_HEADERS.name}-header`),
      dataIndex: GROUPS_TABLE_HEADERS.name,
      key: GROUPS_TABLE_HEADERS.name,
      render: (_, record) => (
        <Link styleType={LinkStyleType.TABLE_RECORD} to={`/${ROUTES.app}/${ROUTES.groupPreview}/${record.id}`}>
          {record.name}
        </Link>
      ),
      responsive: ["sm", "md", "xl"],
    },
    {
      title: t(`groups.groups-list.${GROUPS_TABLE_HEADERS.wardens}-header`),
      dataIndex: GROUPS_TABLE_HEADERS.wardens,
      key: GROUPS_TABLE_HEADERS.wardens,
      render: (_, record) => {
        return record.teachers?.map((teacher) => (
          <Space direction="horizontal">
            <Link styleType={LinkStyleType.TABLE_RECORD} to={`/${ROUTES.app}/${ROUTES.teacherPreview}/${teacher.id}`}>
              {teacher["full-name"]}
            </Link>{" "}
            <span> </span>
          </Space>
        ))
      },
      responsive: ["sm", "md", "xl"],
    },

    {
      title: t(`groups.groups-list.${GROUPS_TABLE_HEADERS.kidsAmount}-header`),
      dataIndex: GROUPS_TABLE_HEADERS.kidsAmount,
      key: GROUPS_TABLE_HEADERS.kidsAmount,
      render: (text) => <p>{text}</p>,
      responsive: ["sm", "md", "xl"],
    },
  ]

  const today = new Date()
  today.setDate(today.getDate() - 10)
  const future = new Date()
  future.setDate(future.getDate() + 10)

  return {
    //  onFinish,
    //  onFinishFailed,
    handleOpenGroupPreview,
    handleOpenAddNewGroupView,
    groupsTableColumns,
    groupsOfUser,
    formErrors,
  }
}
