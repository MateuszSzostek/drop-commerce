import { FormProps } from "antd"
import { ParsedValidationErrors, ValidationErrors, Response, SelectOptions } from "../../../../common/types"
import { useEffect, useState } from "react"
import { getErrors } from "../../../../common/utils"
import { useCreateGroupMutation } from "../../services/groupsSlice"
import { useNavigate, useParams } from "react-router-dom"
import { ROUTES } from "../../../routing-context/domain/router-context"
import { CreateGroupResponse, NewGroupFieldType } from "../../domain/groups-context"
import { useGetAllByUserKindergartensQuery } from "../../../kindergarten-context/services/kindergartenSlice"

export default function useNewGroupForm() {
  const [formErrors, setFormErrors] = useState<ParsedValidationErrors>({})
  const [kindergartensSelectOptions, setKindergartensSelectOptions] = useState<SelectOptions>()
  const navigate = useNavigate()
  const [newGroup] = useCreateGroupMutation()
  const params = useParams()

  const {
    data: kindergartens,
    isFetching: isFetchingKindergartens,
    isLoading: isLoadingKindergartens,
  } = useGetAllByUserKindergartensQuery({
    refetchOnMountOrArgChange: true,
    skip: false,
  })

  const onFinish: FormProps<NewGroupFieldType>["onFinish"] = (values) => {
    setFormErrors({})
    console.log(values)
    newGroup({
      name: values?.name,
      icon: values?.icon,
      color: "#111111",
      kindergartenId: values?.kindergarten,
    }).then((response: Response<CreateGroupResponse>) => {
      if ("data" in response) {
        console.log(response.data)
        if (response.data.status === "success") {
          navigate(`/${ROUTES.app}/${ROUTES.groups}`)
        }
      }

      if ("error" in response) {
        // onValidationErrors(response.error as Errors)
        // } else if (response.data.status === "200 OK") {
        //  setHasPasswordChanged(true)
        //  setTimeout(() => {
        //   setHasPasswordChanged(false)
        //   }, 4500)
      }
    })
  }

  useEffect(() => {
    if (kindergartens && !isFetchingKindergartens) {
      const kindergartensOptions: SelectOptions = kindergartens.data.map((el) => {
        return {
          value: el.id,
          label: el.name,
        }
      })
      setKindergartensSelectOptions(kindergartensOptions)
    }
  }, [])

  const onFinishFailed: FormProps<NewGroupFieldType>["onFinishFailed"] = (errorInfo): void => {
    console.log("Failed:", errorInfo)
  }

  const onValidationErrors = (errors: ValidationErrors): void => {
    const formErrors = getErrors(errors)
    setFormErrors(formErrors)
  }

  return { onFinish, onFinishFailed, formErrors, kindergartensSelectOptions }
}
