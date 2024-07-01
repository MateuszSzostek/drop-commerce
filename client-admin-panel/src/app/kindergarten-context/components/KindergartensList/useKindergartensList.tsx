import { Space, TableProps } from "antd"

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ParsedValidationErrors } from "../../../../common/types"

import { faker } from "@faker-js/faker"
import { useTranslation } from "react-i18next"
import { ROUTES } from "../../../routing-context/domain/router-context"
import { Link, LinkStyleType } from "../../../../common/components"
import { useGetAllByUserKindergartensQuery } from "../../services/kindergartenSlice"

export default function useKindergartensList() {
  const [formErrors, setFormErrors] = useState<ParsedValidationErrors>({})
  const [kindergartensList, setKindergartensList] = useState<KindergartensDataType[]>([])
  const navigate = useNavigate()
  const { t } = useTranslation()
  const {
    data: kindergartens,
    isFetching: isFetchingKindergartens,
    isLoading: isLoadingKindergartens,
  } = useGetAllByUserKindergartensQuery({
    refetchOnMountOrArgChange: true,
    skip: false,
  })

  useEffect(() => {
    if (!isLoadingKindergartens) {
      const list: KindergartensDataType[] = kindergartens?.data.map((el: { groups: []; id: string; name: string; ownerId: string }, idx) => {
        return {
          key: el.ownerId,
          lp: idx,
          name: el.name,
          id: el.id,
        }
      })

      setKindergartensList(list)
    }
  }, [kindergartens])

  const handleOpenKindergartenPreview = (kindergartenId: string) => {
    navigate(`/${ROUTES.app}/${ROUTES.kindergartenPreview}/${kindergartenId}`)
  }

  const handleOpenAddNewKindergardenView = () => {
    navigate(`/${ROUTES.app}/${ROUTES.newKindergarten}`)
  }

  interface KindergartensDataType {
    key: string
    lp: number | string
    name: string
    id: string
  }

  const KINDERGARTENS_TABLE_HEADERS = {
    lp: "lp",
    name: "name",
  }

  const kindergardensTableColumns: TableProps<KindergartensDataType>["columns"] = [
    {
      title: t(`kindergartens.kindergartens-list.${KINDERGARTENS_TABLE_HEADERS.lp}-header`),
      dataIndex: KINDERGARTENS_TABLE_HEADERS.lp,
      key: KINDERGARTENS_TABLE_HEADERS.lp,
      render: (text) => <a>{text}</a>,
      responsive: ["xs", "sm", "md", "xl"],
    },
    {
      title: t(`kindergartens.kindergartens-list.${KINDERGARTENS_TABLE_HEADERS.name}-header`),
      dataIndex: KINDERGARTENS_TABLE_HEADERS.name,
      key: KINDERGARTENS_TABLE_HEADERS.name,
      render: (_, record) => (
        <Link styleType={LinkStyleType.TABLE_RECORD} to={`/${ROUTES.app}/${ROUTES.kindergartenPreview}/${record.id}`}>
          {record.name}
        </Link>
      ),
      responsive: ["sm", "md", "xl"],
    },
  ]

  const today = new Date()
  today.setDate(today.getDate() - 10)
  const future = new Date()
  future.setDate(future.getDate() + 10)

  return {
    kindergardensTableColumns,
    kindergartensList,
    formErrors,
    isLoadingKindergartens,
    handleOpenKindergartenPreview,
    handleOpenAddNewKindergardenView,
  }
}
