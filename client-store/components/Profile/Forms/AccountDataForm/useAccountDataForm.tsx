import { useCustomerGetAccountDataQuery } from "@/store/authSlice";
import {
  useAddDeliveryAddressMutation,
  useEditDeliveryAddressMutation,
  useGetDeliveryAddressQuery,
  useLazyGetDeliveryAddressQuery,
} from "@/store/deliveryAddressSlice";
import { useEffect } from "react";
import { useCustomerUpdateAccountDataMutation } from "@/store/authSlice";

export default function useAccountDataForm({
  onSuccess,
}: {
  onSuccess: () => void;
}) {
  const [triggerUpdateAccountData, updateAccountDataResultResult] =
    useCustomerUpdateAccountDataMutation();

  const {
    data: accountData,
    isFetching: isFetchingAccountData,
    isLoading: isLoadingAccountData,
  } = useCustomerGetAccountDataQuery(
    {},
    {
      refetchOnMountOrArgChange: true,
      skip: false,
    }
  );

  useEffect(() => {
    if (!isFetchingAccountData && accountData) {
      if ("data" in accountData) {
        const nameInput = document.querySelector("#name");
        const surnameInput = document.querySelector("#surname");
        const userNameInput = document.querySelector("#userName");
        const phoneInput = document.querySelector("#phone");
        const placeInput = document.querySelector("#place");

        const streetNameInput = document.querySelector("#streetName");
        const streetNumberInput = document.querySelector("#streetNumber");
        const postInput = document.querySelector("#post");
        const postCodeInput = document.querySelector("#postCode");
        const voivodeshipInput = document.querySelector("#voivodeship");
        const communeInput = document.querySelector("#commune");

        console.warn(accountData);

        nameInput.value = getIfExist(accountData?.data?.name);
        surnameInput.value = getIfExist(accountData?.data?.surname);
        userNameInput.value = getIfExist(accountData?.data?.userName);
        phoneInput.value = getIfExist(accountData?.data?.phone);
        placeInput.value = getIfExist(accountData?.data?.place);
        streetNameInput.value = getIfExist(accountData?.data?.streetName);
        streetNumberInput.value = getIfExist(accountData?.data?.streetNumber);
        postInput.value = getIfExist(accountData?.data?.post);
        postCodeInput.value = getIfExist(accountData?.data?.postCode);
        voivodeshipInput.value = getIfExist(
          accountData?.data?.voivodeship as string
        );
        communeInput.value = getIfExist(accountData?.data?.commune as string);
      }
    }
  }, [isFetchingAccountData]);

  const handleSubmitUpdateAccountDataForm = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(Object.fromEntries(formData));

    const result = await triggerUpdateAccountData({
      name: getIfExistFromFormData(formData, "name"),
      surname: getIfExistFromFormData(formData, "surname"),
      userName: getIfExistFromFormData(formData, "userName"),
      phone: getIfExistFromFormData(formData, "phone"),
      place: getIfExistFromFormData(formData, "place"),
      streetName: getIfExistFromFormData(formData, "streetName"),
      streetNumber: getIfExistFromFormData(formData, "streetNumber"),
      post: getIfExistFromFormData(formData, "post"),
      postCode: getIfExistFromFormData(formData, "postCode"),
      voivodeship: getIfExistFromFormData(formData, "voivodeship"),
      commune: getIfExistFromFormData(formData, "commune"),
    });

    if ("data" in result) {
      onSuccess();
    } else {
    }
  };

  const getIfExistFromFormData = (form: FormData, name: string) => {
    console.warn(typeof form.get(name));
    return typeof form.get(name) !== "undefined"
      ? (form.get(name) as string)
      : "";
  };

  const getIfExist = (variable: string) => {
    return typeof variable !== "undefined" ? variable : "";
  };

  return {
    handleSubmitUpdateAccountDataForm,
  };
}
