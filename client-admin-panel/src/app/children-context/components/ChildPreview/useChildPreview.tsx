import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ROUTES } from "../../../routing-context/domain/router-context"
import { faker } from "@faker-js/faker"
import { Row, TableProps } from "antd"
import { useTranslation } from "react-i18next"
import { Button, ButtonStyleType } from "../../../../common/components"

export default function useChildPreview() {
  const [deleteConfirmationModal, setDeleteConfirmationModal] = useState<boolean>(false)
  const params = useParams()
  const navigate = useNavigate()
  const { t } = useTranslation()

  const handleEditChild = () => {
    navigate(`/${ROUTES.app}/${ROUTES.editKindergarten}/${params?.kindergartenId}`)
  }

  const handleDeleteChild = () => {
    setDeleteConfirmationModal(true)
  }

  const handleDeleteChildConfirmation = () => {}

  const handleDeleteChildCancel = () => {
    setDeleteConfirmationModal(false)
  }

  const handleOpenChildPreview = (kidId: string) => {
    navigate(`/${ROUTES.app}/${ROUTES.childPreview}/${kidId}`)
  }

  interface ChildrenInChildDataType {
    key: string
    id: string
    lp: number | string
    "full-name": string
    parents: string
    "attendance-status": string
  }

  interface WardenOfGroupDataType {
    key: string
    id: string
    lp: number | string
    "full-name": string
    "attendance-status": string
  }

  const KIDS_IN_GROUP = [faker.person.fullName(), faker.person.fullName(), faker.person.fullName(), faker.person.fullName(), faker.person.fullName()]

  const WARDEN_OF_GROUP = [faker.person.fullName(), faker.person.fullName(), faker.person.fullName(), faker.person.fullName(), faker.person.fullName()]

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

  const today = new Date()
  today.setDate(today.getDate() - 10)
  const future = new Date()
  future.setDate(future.getDate() + 10)

  const wardensOfGroupTableFakeData: WardenOfGroupDataType[] = [
    {
      key: "1",
      lp: "1",
      "full-name": WARDEN_OF_GROUP[0],
      "attendance-status": "V",
      id: "saldhmfaslidngf24avsdo",
    },
    {
      key: "2",
      lp: "2",
      "full-name": WARDEN_OF_GROUP[1],
      "attendance-status": "V",
      id: "sald2345hmfaslidngfhavsdo",
    },
  ]

  return {
    handleEditChild,
    handleDeleteChild,
    handleDeleteChildConfirmation,
    handleDeleteChildCancel,
    handleOpenChildPreview,
    deleteConfirmationModal,
  }
}
