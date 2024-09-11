import { FormProps } from "antd";
import {
  ParsedValidationErrors,
  ValidationErrors,
} from "../../../../common/types";
import { useState } from "react";
import { EditKindergartenFieldType } from "../../domain/kindergarten-context";
import { getErrors } from "../../../../common/utils";

export default function useEditKindergartenForm() {
  const [formErrors, setFormErrors] = useState<ParsedValidationErrors>({});

  const onFinish: FormProps<EditKindergartenFieldType>["onFinish"] = (
    values
  ) => {
    setFormErrors({});
    //  console.log(values)
  };
  const onFinishFailed: FormProps<EditKindergartenFieldType>["onFinishFailed"] =
    (errorInfo): void => {
      /// console.log("Failed:", errorInfo)
    };

  const onValidationErrors = (errors: ValidationErrors): void => {
    const formErrors = getErrors(errors);
    setFormErrors(formErrors);
  };

  return { onFinish, onFinishFailed, formErrors };
}
