import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ROUTES } from "../../../routing-context/domain/router-context"
import { faker } from "@faker-js/faker"
import { Row, TableProps } from "antd"
import { useTranslation } from "react-i18next"
import { Button, ButtonStyleType, Link, LinkStyleType } from "../../../../common/components"
import { useGetGroupQuery } from "../../services/groupsSlice"

interface GroupData {
  name: string
  childrenAmount: number
}

export default function useGroupPreview() {
  const [deleteConfirmationModal, setDeleteConfirmationModal] = useState<boolean>(false)
  const [childrenOfGroup, setChildrenOfGroup] = useState<KidsInGroupDataType[]>([])
  const [teachersOfGroup, setTeachersOfGroup] = useState<TeacherOfGroupDataType[]>([])
  const [groupData, setGroupData] = useState<GroupData | null>(null)
  const params = useParams()
  const navigate = useNavigate()
  const { t } = useTranslation()

  const {
    data: group,
    isFetching: isFetchingGroup,
    isLoading: isLoadingGroup,
  } = useGetGroupQuery(
    { groupId: params?.groupId ? params.groupId : "" },
    {
      refetchOnMountOrArgChange: true,
      skip: false,
    },
  )

  useEffect(() => {
    if (!isLoadingGroup && group) {
      const kids: KidsInGroupDataType[] = group.data.children.map((child, idx) => {
        return {
          key: child.id,
          id: child.id,
          lp: idx,
          "full-name": child.name,
          parents: [
            {
              name: "",
              id: "",
            },
          ],
          "attendance-status": "obecny",
        }
      })

      setChildrenOfGroup(kids)

      const teachers: TeacherOfGroupDataType[] = group.data.teachers.map((teacher, idx) => {
        return {
          key: teacher.id,
          id: teacher.id,
          lp: idx,
          "full-name": teacher.name,
          "attendance-status": "obecny",
        }
      })

      setTeachersOfGroup(teachers)

      const groupData: GroupData = {
        name: group.data.name,
        childrenAmount: group.data.children.length,
      }

      setGroupData(groupData)
    }
  }, [isLoadingGroup, group])

  const handleEditGroup = () => {
    navigate(`/${ROUTES.app}/${ROUTES.editKindergarten}/${params?.kindergartenId}`)
  }

  const handleDeleteGroup = () => {
    setDeleteConfirmationModal(true)
  }

  const handleDeleteGroupConfirmation = () => {}

  const handleDeleteGroupCancel = () => {
    setDeleteConfirmationModal(false)
  }

  const handleOpenKidPreview = (kidId: string) => {
    navigate(`/${ROUTES.app}/${ROUTES.childPreview}/${kidId}`)
  }

  const handleAsignChild = () => {}

  interface KidsInGroupDataType {
    key: string
    id: string
    lp: number | string
    "full-name": string
    parents: {
      name: string
      id: String
    }[]
    "attendance-status": string
  }

  interface TeacherOfGroupDataType {
    key: string
    id: string
    lp: number | string
    "full-name": string
    "attendance-status": string
  }

  const KIDS_IN_GROUP_TABLE_HEADERS = {
    lp: "lp",
    fullName: "full-name",
    parents: "parents",
    attendanceStatus: "attendance-status",
    actions: "actions",
  }

  const WARDEN_OF_GROUP_TABLE_HEADERS = {
    lp: "lp",
    fullName: "full-name",
    attendanceStatus: "attendance-status",
    actions: "actions",
  }

  const kidsInGroupTableColumns: TableProps<KidsInGroupDataType>["columns"] = [
    {
      title: t(`groups.preview.kids-table.${KIDS_IN_GROUP_TABLE_HEADERS.lp}-header`),
      dataIndex: KIDS_IN_GROUP_TABLE_HEADERS.lp,
      key: KIDS_IN_GROUP_TABLE_HEADERS.lp,
      render: (text) => <a>{text}</a>,
      responsive: ["xs", "sm", "md", "xl"],
      width: "16px",
    },
    {
      title: t(`groups.preview.kids-table.${KIDS_IN_GROUP_TABLE_HEADERS.fullName}-header`),
      dataIndex: KIDS_IN_GROUP_TABLE_HEADERS.fullName,
      key: KIDS_IN_GROUP_TABLE_HEADERS.fullName,
      render: (text, record) => (
        <Link styleType={LinkStyleType.TABLE_RECORD} to={`/${ROUTES.app}/${ROUTES.childPreview}/${record.id}`}>
          {text}
        </Link>
      ),
      responsive: ["sm", "md", "xl"],
    },
    {
      title: t(`groups.preview.kids-table.${KIDS_IN_GROUP_TABLE_HEADERS.parents}-header`),
      dataIndex: KIDS_IN_GROUP_TABLE_HEADERS.parents,
      key: KIDS_IN_GROUP_TABLE_HEADERS.parents,
      render: (
        text: {
          name: string
          id: String
        }[],
        record,
      ) => (
        <Row>
          {text.map((parent) => {
            return (
              <Link styleType={LinkStyleType.TABLE_RECORD} to={`/${ROUTES.app}/${ROUTES.parentPreview}/${parent.id}`}>
                {parent.name}
              </Link>
            )
          })}
        </Row>
      ),
      responsive: ["sm", "md", "xl"],
    },
    {
      title: t(`groups.preview.kids-table.${KIDS_IN_GROUP_TABLE_HEADERS.attendanceStatus}-header`),
      dataIndex: KIDS_IN_GROUP_TABLE_HEADERS.attendanceStatus,
      key: KIDS_IN_GROUP_TABLE_HEADERS.attendanceStatus,
      render: (text) => <a>{text}</a>,
      responsive: ["sm", "md", "xl"],
    },
    {
      title: t(`groups.preview.kids-table.${KIDS_IN_GROUP_TABLE_HEADERS.actions}-header`),
      dataIndex: KIDS_IN_GROUP_TABLE_HEADERS.actions,
      key: KIDS_IN_GROUP_TABLE_HEADERS.actions,
      render: (text) => (
        <Row justify="end">
          <Button styleType={ButtonStyleType.PRIMARY_DANGER} size="small">
            Zakoncz Obecnosc
          </Button>
        </Row>
      ),
      responsive: ["sm", "md", "xl"],
      width: "190px",
    },
  ]

  const wardensOfGroupTableColumns: TableProps<TeacherOfGroupDataType>["columns"] = [
    {
      title: t(`groups.preview.wardens-table.${WARDEN_OF_GROUP_TABLE_HEADERS.lp}-header`),
      dataIndex: WARDEN_OF_GROUP_TABLE_HEADERS.lp,
      key: WARDEN_OF_GROUP_TABLE_HEADERS.lp,
      render: (text) => <a>{text}</a>,
      responsive: ["xs", "sm", "md", "xl"],
      width: "16px",
    },
    {
      title: t(`groups.preview.wardens-table.${WARDEN_OF_GROUP_TABLE_HEADERS.fullName}-header`),
      dataIndex: WARDEN_OF_GROUP_TABLE_HEADERS.fullName,
      key: WARDEN_OF_GROUP_TABLE_HEADERS.fullName,
      render: (text) => <a>{text}</a>,
      responsive: ["sm", "md", "xl"],
    },
    {
      title: t(`groups.preview.wardens-table.${WARDEN_OF_GROUP_TABLE_HEADERS.attendanceStatus}-header`),
      dataIndex: WARDEN_OF_GROUP_TABLE_HEADERS.attendanceStatus,
      key: WARDEN_OF_GROUP_TABLE_HEADERS.attendanceStatus,
      render: (text) => <a>{text}</a>,
      responsive: ["sm", "md", "xl"],
    },
    {
      title: t(`groups.preview.wardens-table.${WARDEN_OF_GROUP_TABLE_HEADERS.actions}-header`),
      dataIndex: WARDEN_OF_GROUP_TABLE_HEADERS.actions,
      key: WARDEN_OF_GROUP_TABLE_HEADERS.actions,
      render: (text) => (
        <>
          <Row justify="end">
            <Button styleType={ButtonStyleType.PRIMARY_DANGER} size="small">
              Zakoncz Obecnosc
            </Button>
          </Row>
        </>
      ),
      responsive: ["sm", "md", "xl"],
      width: "190px",
    },
  ]

  const today = new Date()
  today.setDate(today.getDate() - 10)
  const future = new Date()
  future.setDate(future.getDate() + 10)

  return {
    childrenOfGroup,
    kidsInGroupTableColumns,
    teachersOfGroup,
    wardensOfGroupTableColumns,
    groupData,
    handleEditGroup,
    handleDeleteGroup,
    handleDeleteGroupConfirmation,
    handleDeleteGroupCancel,
    handleOpenKidPreview,
    handleAsignChild,
    deleteConfirmationModal,
  }
}
