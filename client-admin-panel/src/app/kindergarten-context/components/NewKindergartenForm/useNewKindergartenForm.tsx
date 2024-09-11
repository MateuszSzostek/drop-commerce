import { FormProps } from "antd";
import {
  ParsedValidationErrors,
  ValidationErrors,
  Response,
} from "../../../../common/types";
import { useState } from "react";
import { NewKindergartenFieldType } from "../../domain/kindergarten-context";
import { getErrors } from "../../../../common/utils";
import { useCreateKindergartenMutation } from "../../services/kindergartenSlice";
import { NewPasswordResponse } from "../../../identify-and-access-context/domain/identify-and-access-context";
import { CreateKindergartenResponse } from "../../domain/kindergarten-context";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../routing-context/domain/router-context";

export default function useNewKindergartenForm() {
  const [formErrors, setFormErrors] = useState<ParsedValidationErrors>({});
  const navigate = useNavigate();
  const [newKindergarten, result] = useCreateKindergartenMutation();

  const onFinish: FormProps<NewKindergartenFieldType>["onFinish"] = (
    values
  ) => {
    setFormErrors({});
    // console.log(values)
    newKindergarten({
      name: values?.name,
      address: values?.address,
      color: "#111111",
    }).then((response: Response<CreateKindergartenResponse>) => {
      if ("data" in response) {
        //  console.log(response.data);
        if (response.data.status === "success") {
          navigate(`/${ROUTES.app}/${ROUTES.kindergartens}`);
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
    });
  };
  const onFinishFailed: FormProps<NewKindergartenFieldType>["onFinishFailed"] =
    (errorInfo): void => {
      //  console.log("Failed:", errorInfo)
    };

  const onValidationErrors = (errors: ValidationErrors): void => {
    const formErrors = getErrors(errors);
    setFormErrors(formErrors);
  };

  return { onFinish, onFinishFailed, formErrors };
}
