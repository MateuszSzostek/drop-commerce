import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ROUTES } from "../../../routing-context/domain/router-context"
import { faker } from "@faker-js/faker"
import { Row, TableProps } from "antd"
import { useTranslation } from "react-i18next"
import { Button, ButtonStyleType } from "../../../../common/components"

export default function useAttendanceKiosk() {
  const [PIN, setPIN] = useState<string>("")
  const [showChildren, setShowChildren] = useState<boolean>(false)
  const [selectedDateRange, setSelectedDateRange] = useState<string>("week")
  const [selectedScope, setSelectedScope] = useState<string>("children")
  const params = useParams()
  const navigate = useNavigate()
  const { t } = useTranslation()

  function appandString(str: string) {
    setPIN((prev) => (prev.length < 4 ? (prev += str) : prev))
  }

  function removeString() {
    setPIN((prev) => prev.substring(0, prev?.length - 1))
  }

  function cleanPIN() {
    setPIN("")
  }

  function confirmPIN() {
    setShowChildren(true)
  }

  function confirmAttendance() {
    setShowChildren(false)
  }

  return {
    PIN,
    showChildren,
    appandString,
    removeString,
    cleanPIN,
    confirmPIN,
    confirmAttendance,
  }
}
