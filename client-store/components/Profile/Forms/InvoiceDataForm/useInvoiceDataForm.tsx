import {
  useAddInvoiceDataMutation,
  useEditInvoiceDataMutation,
  useLazyGetInvoiceDataQuery,
} from "@/store/invoiceDataSlice";
import { useEffect } from "react";

export default function useInvoiceDataForm({
  onSuccess,
  invoiceDataId,
  isEditing,
}: {
  onSuccess: () => void;
  invoiceDataId: string;
  isEditing: boolean;
}) {
  const [triggerAddInvoice, addAddInvoiceDataResult] =
    useAddInvoiceDataMutation();
  const [triggerEditInvoiceData, editInvoiceDataResult] =
    useEditInvoiceDataMutation();

  const [triggerGetInvoiceData, getInvoiceDataResult] =
    useLazyGetInvoiceDataQuery();

  useEffect(() => {
    console.warn(isEditing);
    if (isEditing === true) {
      getInvoiceData();
    }
  }, []);

  const getInvoiceData = async () => {
    const result = await triggerGetInvoiceData({ invoiceDataId });
    console.warn(result);

    if ("data" in result) {
      const nameInput = document.querySelector("#name");
      const surnameInput = document.querySelector("#surname");
      const placeInput = document.querySelector("#place");
      const streetNameInput = document.querySelector("#streetName");
      const streetNumberInput = document.querySelector("#streetNumber");
      const postInput = document.querySelector("#post");
      const postCodeInput = document.querySelector("#postCode");
      const taxIdentificationNumberInput = document.querySelector(
        "#taxIdentificationNumber"
      );

      nameInput.value = result?.data?.data?.name;
      surnameInput.value = result?.data?.data?.surname;
      phoneInput.value = result?.data?.data?.phone;
      placeInput.value = result?.data?.data?.place;
      streetNameInput.value = result?.data?.data?.streetName;
      streetNumberInput.value = result?.data?.data?.streetNumber;
      postInput.value = result?.data?.data?.post;
      postCodeInput.value = result?.data?.data?.postCode;
      taxIdentificationNumberInput.value =
        result?.data?.data?.taxIdentificationNumberInput;
    }
  };

  const handleSubmitAddInvoiceDataForm = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(Object.fromEntries(formData));

    const result = await triggerAddInvoice({
      name: formData.get("name") as string,
      surname: formData.get("surname") as string,
      place: formData.get("place") as string,
      streetName: formData.get("streetName") as string,
      streetNumber: formData.get("streetNumber") as string,
      post: formData.get("post") as string,
      postCode: formData.get("postCode") as string,
      taxIdentificationNumber: formData.get(
        "taxIdentificationNumber"
      ) as string,
    });

    if ("data" in result) {
      onSuccess();
    } else {
    }
  };

  const handleSubmitEditInvoiceDataForm = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(Object.fromEntries(formData));

    const result = await triggerEditInvoiceData({
      invoiceDataId: invoiceDataId,
      name: formData.get("name") as string,
      surname: formData.get("surname") as string,
      place: formData.get("place") as string,
      streetName: formData.get("streetName") as string,
      streetNumber: formData.get("streetNumber") as string,
      post: formData.get("post") as string,
      postCode: formData.get("postCode") as string,
      taxIdentificationNumber: formData.get(
        "taxIdentificationNumber"
      ) as string,
    });

    if ("data" in result) {
      onSuccess();
    } else {
    }
  };

  return {
    handleSubmitAddInvoiceDataForm,
    handleSubmitEditInvoiceDataForm,
  };
}
