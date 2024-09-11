import {
  useAddDeliveryAddressMutation,
  useEditDeliveryAddressMutation,
  useGetDeliveryAddressQuery,
  useLazyGetDeliveryAddressQuery,
} from "@/store/deliveryAddressSlice";
import { useEffect } from "react";

export default function useDeliveryAddressForm({
  onSuccess,
  deliveryAddressId,
  isEditing,
}: {
  onSuccess: () => void;
  deliveryAddressId: string;
  isEditing: boolean;
}) {
  const [triggerAddDeliveryAddress, addDeliveryAddressResult] =
    useAddDeliveryAddressMutation();
  const [triggerEditDeliveryAddress, editDeliveryAddressResult] =
    useEditDeliveryAddressMutation();

  /*
  const {
    data: deliveryAddress,
    isFetching: isFetchigDeliveryAddress,
    isLoading: isLoadingDeliveryAddress,
  } = useGetDeliveryAddressQuery(
    { deliveryAddressId },
    {
      refetchOnMountOrArgChange: true,
      skip: false,
    }
  )*/

  const [triggerGetDeliveryAddress, getDeliveryAddressResult] =
    useLazyGetDeliveryAddressQuery();

  useEffect(() => {
    console.warn(isEditing);
    if (isEditing === true) {
      getDeliveryAddres();
    }
  }, []);

  const getDeliveryAddres = async () => {
    const result = await triggerGetDeliveryAddress({ deliveryAddressId });
    console.warn(result);

    if ("data" in result) {
      const nameInput = document.querySelector("#name");
      const surnameInput = document.querySelector("#surname");
      const phoneInput = document.querySelector("#phone");
      const placeInput = document.querySelector("#place");

      const streetNameInput = document.querySelector("#streetName");
      const streetNumberInput = document.querySelector("#streetNumber");
      const postInput = document.querySelector("#post");
      const postCodeInput = document.querySelector("#postCode");
      const voivodeshipInput = document.querySelector("#voivodeship");
      const communeInput = document.querySelector("#commune");

      console.warn(communeInput);
      console.warn(result?.data?.data?.commune);

      nameInput.value = result?.data?.data?.name;
      surnameInput.value = result?.data?.data?.surname;
      phoneInput.value = result?.data?.data?.phone;
      placeInput.value = result?.data?.data?.place;
      streetNameInput.value = result?.data?.data?.streetName;
      streetNumberInput.value = result?.data?.data?.streetNumber;
      postInput.value = result?.data?.data?.post;
      postCodeInput.value = result?.data?.data?.postCode;
      voivodeshipInput.value = result?.data?.data?.voivodeship;
      communeInput.value = result?.data?.data?.commune;
    }
  };

  const handleSubmitAddDeliveryAddressForm = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(Object.fromEntries(formData));

    const result = await triggerAddDeliveryAddress({
      name: formData.get("name") as string,
      surname: formData.get("surname") as string,
      phone: formData.get("phone") as string,
      place: formData.get("place") as string,
      streetName: formData.get("streetName") as string,
      streetNumber: formData.get("streetNumber") as string,
      post: formData.get("post") as string,
      postCode: formData.get("postCode") as string,
      voivodeship: formData.get("voivodeship") as string,
      commune: formData.get("commune") as string,
    });

    if ("data" in result) {
      onSuccess();
    } else {
    }
  };

  const handleSubmitEditDeliveryAddressForm = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(Object.fromEntries(formData));

    const result = await triggerEditDeliveryAddress({
      deliveryAddressId: deliveryAddressId,
      name: formData.get("name") as string,
      surname: formData.get("surname") as string,
      phone: formData.get("phone") as string,
      place: formData.get("place") as string,
      streetName: formData.get("streetName") as string,
      streetNumber: formData.get("streetNumber") as string,
      post: formData.get("post") as string,
      postCode: formData.get("postCode") as string,
      voivodeship: formData.get("voivodeship") as string,
      commune: formData.get("commune") as string,
    });

    if ("data" in result) {
      onSuccess();
    } else {
    }
  };

  return {
    handleSubmitAddDeliveryAddressForm,
    handleSubmitEditDeliveryAddressForm,
  };
}
