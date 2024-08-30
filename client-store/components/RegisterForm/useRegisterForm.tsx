"use client";

import { useCustomerRegisterMutation } from "@/store/authSlice";
import { getErrors, ParsedValidationErrors } from "@/store/const";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setUserData } from "@/store/userStoreSlice";

export default function useRegisterForm() {
  const [triggerCustomerRegister, customerRegisterMutationResult] =
    useCustomerRegisterMutation();

  const [formErrors, setFormErrors] = useState<ParsedValidationErrors>({});

  const router = useRouter();

  const dispatch = useDispatch();

  const handleSubmitCustomerRegister = async (e) => {
    e.preventDefault();

    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(Object.fromEntries(formData));

    const customerRegisterResult = await triggerCustomerRegister({
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      confirmPassword: formData.get("confirmPassword") as string,
      privacyPolicy: formData.get("privacyPolicy") === "on" ? true : false,
      name: formData.get("name") as string,
      surname: formData.get("surname") as string,
    });

    console.warn(customerRegisterResult);

    if ("data" in customerRegisterResult) {
      console.warn(customerRegisterResult?.data?.data?.name);
      dispatch(
        setUserData({
          name: customerRegisterResult?.data?.data?.name as string,
          surname: customerRegisterResult?.data?.data?.surname as string,
          email: customerRegisterResult?.data?.data?.email as string,
          isLoggedIn: true,
        })
      );
      router.push("/", { scroll: false });
    } else {
      //validation errors
      onValidationErrors(customerRegisterResult.error);
    }
  };

  const onValidationErrors = (errors: Error): void => {
    const formErrors = getErrors(errors);
    console.warn(formErrors);
    setFormErrors(formErrors);
  };

  useEffect(() => {
    console.warn(formErrors);
  }, [formErrors]);

  return { handleSubmitCustomerRegister, formErrors };
}
