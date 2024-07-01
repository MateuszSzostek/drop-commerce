import { Space, TableProps } from "antd"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ParsedValidationErrors, Response, ValidationErrors } from "../../../../common/types"
import { getErrors } from "../../../../common/utils"
import { ROUTES } from "../../../routing-context/domain/router-context"
import { useParams } from "react-router-dom"
import { faker } from "@faker-js/faker"
import { useTranslation } from "react-i18next"
import { Link, LinkStyleType } from "../../../../common/components"
import { useGetAllChildrenByUserQuery } from "../../services/childrenSlice"

export default function useChildrenList() {
  const [formErrors, setFormErrors] = useState<ParsedValidationErrors>({})
  const [childrenOfUser, setChildrenOfUser] = useState<ChildrenDataType[]>([])
  const navigate = useNavigate()
  const [hasPasswordChanged, setHasPasswordChanged] = useState<boolean>()
  const params = useParams()

  const {
    data: children,
    isFetching: isFetchingChildren,
    isLoading: isLoadingChildren,
  } = useGetAllChildrenByUserQuery({
    refetchOnMountOrArgChange: true,
    skip: false,
  })

  useEffect(() => {
    if (!isLoadingChildren && children) {
      console.warn(children)
      const childrenOfUserData: ChildrenDataType[] = children.data.map((el) => {
        return {
          key: el.name + el.surname,
          lp: "",
          "full-name": `${el?.name} ${el?.surname}`,
          parents: el.parents.map((par) => par),
          groups: el.groups.map((par) => par),
          id: el.id,
        }
      })

      setChildrenOfUser(childrenOfUserData)
    }
  }, [isLoadingChildren, children])

  const handleOpenAddNewChildView = () => {
    navigate(`/${ROUTES.app}/${ROUTES.newChild}`)
  }

  const { t } = useTranslation()

  interface ChildrenDataType {
    key: string
    lp: number | string
    "full-name": string
    parents: { name: string; id: string }[]
    groups: { name: string; id: string }[]
    id: string
  }

  const CHILDREN_TABLE_HEADERS = {
    lp: "lp",
    fullName: "full-name",
    parents: "parents",
    actions: "actions",
    groups: "groups",
  }

  const childrenTableColumns: TableProps<ChildrenDataType>["columns"] = [
    {
      title: t(`children.children-list.${CHILDREN_TABLE_HEADERS.lp}-header`),
      dataIndex: CHILDREN_TABLE_HEADERS.lp,
      key: CHILDREN_TABLE_HEADERS.lp,
      render: (text) => <a>{text}</a>,
      responsive: ["xs", "sm", "md", "xl"],
    },
    {
      title: t(`children.children-list.${CHILDREN_TABLE_HEADERS.fullName}-header`),
      dataIndex: CHILDREN_TABLE_HEADERS.fullName,
      key: CHILDREN_TABLE_HEADERS.fullName,
      render: (text, record) => (
        <Space direction="horizontal">
          <Link styleType={LinkStyleType.TABLE_RECORD} to={`/${ROUTES.app}/${ROUTES.childPreview}/${record.id}`}>
            {text}
          </Link>{" "}
          <span> </span>
        </Space>
      ),
      responsive: ["sm", "md", "xl"],
    },
    {
      title: t(`children.children-list.${CHILDREN_TABLE_HEADERS.parents}-header`),
      dataIndex: CHILDREN_TABLE_HEADERS.parents,
      key: CHILDREN_TABLE_HEADERS.parents,
      render: (parents, record) => {
        return parents.map((parent: { name: string; id: string }) => (
          <Space direction="horizontal">
            <Link styleType={LinkStyleType.TABLE_RECORD} to={`/${ROUTES.app}/${ROUTES.parentPreview}/${parent.id}`}>
              {parent.name}
            </Link>{" "}
            <span> </span>
          </Space>
        ))
      },
      responsive: ["sm", "md", "xl"],
    },
    {
      title: t(`children.children-list.${CHILDREN_TABLE_HEADERS.groups}-header`),
      dataIndex: CHILDREN_TABLE_HEADERS.groups,
      key: CHILDREN_TABLE_HEADERS.groups,
      render: (groups, record) => {
        return groups.map((group: { name: string; id: string }) => (
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
  ]

  const today = new Date()
  today.setDate(today.getDate() - 10)
  const future = new Date()
  future.setDate(future.getDate() + 10)

  return {
    handleOpenAddNewChildView,
    childrenTableColumns,
    childrenOfUser,
    hasPasswordChanged,
    formErrors,
  }
}
