import { FormProps } from "antd"
import { ParsedValidationErrors, ValidationErrors, Response, SelectOptions } from "../../../../common/types"
import { useEffect, useState } from "react"
import { getErrors } from "../../../../common/utils"
import { useNavigate, useParams } from "react-router-dom"
import { ROUTES } from "../../../routing-context/domain/router-context"
import { useGetAllByUserKindergartensQuery } from "../../../kindergarten-context/services/kindergartenSlice"
import { useLazyGetAllGroupsByKindergartenQuery } from "../../../group-context/services/groupsSlice"
import { useCreateChildMutation } from "../../services/childrenSlice"
import { CreateChildResponse, NewChildFieldType } from "../../domain/children-context"

export default function useNewGroupForm() {
  const [formErrors, setFormErrors] = useState<ParsedValidationErrors>({})
  const [kindergartensSelectOptions, setKindergartensSelectOptions] = useState<SelectOptions>([])
  const [groupsByKindergartenSelectOptions, setGroupsByKindergartenSelectOptions] = useState<SelectOptions>([])
  const [selectedKindergarten, setSelectedKindergarten] = useState<string>("")
  const navigate = useNavigate()
  const params = useParams()
  const [triggerGroupsByKindergarten, groupsByKindergartensResult] = useLazyGetAllGroupsByKindergartenQuery()
  const [newChild] = useCreateChildMutation()

  const {
    data: kindergartens,
    isFetching: isFetchingKindergartens,
    isLoading: isLoadingKindergartens,
  } = useGetAllByUserKindergartensQuery({
    refetchOnMountOrArgChange: true,
    skip: false,
  })

  const onFinish: FormProps<NewChildFieldType>["onFinish"] = (values) => {
    setFormErrors({})
    console.log(values)
    newChild({
      ownerId: values.name,
      name: values.name,
      surname: values.surname,
      shortName: values.shortName,
      pesel: values.pesel,
      dateOfBirthday: values.dateOfBirthday,
      placeOfBirth: values.placeOfBirth,
      groups: values.groups,
      sex: values.sex,
      parents: [],
    }).then((response: Response<CreateChildResponse>) => {
      if ("data" in response) {
        console.log(response.data)
        if (response.data.status === "success") {
          navigate(`/${ROUTES.app}/${ROUTES.children}`)
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
  }, [kindergartens, isFetchingKindergartens])

  useEffect(() => {
    //triggerGroupsByKindergarten
  }, [selectedKindergarten])

  useEffect(() => {
    console.log(groupsByKindergartensResult)
    if (groupsByKindergartensResult && !groupsByKindergartensResult.isLoading) {
      /*
      const kindergartensOptions: SelectOptions = groupsByKindergartensResult?.data.map((el) => {
        return {
          value: el.id,
          label: el.name,
        }
      })
      */
      //setGroupsByKindergartenSelectOptions(kindergartensOptions)
    }
  }, [])

  const handleSelectKindergarten = async (value: string) => {
    setSelectedKindergarten(value)
    const response = await triggerGroupsByKindergarten({ kindergartenId: value })

    if (response.isSuccess && response.data) {
      const groupsByKindergarten: SelectOptions = response.data.data.map((el) => {
        return {
          value: el.id,
          label: el.name,
        }
      })

      setGroupsByKindergartenSelectOptions(groupsByKindergarten)
    }
  }

  const handleSelectGroup = () => {}

  const onFinishFailed: FormProps<NewChildFieldType>["onFinishFailed"] = (errorInfo): void => {
    console.log("Failed:", errorInfo)
  }

  const onValidationErrors = (errors: ValidationErrors): void => {
    const formErrors = getErrors(errors)
    setFormErrors(formErrors)
  }

  return {
    onFinish,
    onFinishFailed,
    handleSelectKindergarten,
    handleSelectGroup,
    formErrors,
    kindergartensSelectOptions,
    groupsByKindergartenSelectOptions,
    groupsByKindergartensResult,
  }
}
