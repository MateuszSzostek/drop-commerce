import { useGetBasketQuery } from "@/store/basketSlice";
import { prepareStringPrice } from "@/utils";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/lib/store";
import { useRouter } from "next/navigation";
import {
  useGetAllDeliveryAddressQuery,
  useRemoveDeliveryAddressMutation,
} from "@/store/deliveryAddressSlice";
import {
  useGetAllInvoiceDataQuery,
  useRemoveInvoiceDataMutation,
} from "@/store/invoiceDataSlice";
import { useCustomerGetAccountDataQuery } from "@/store/authSlice";
import useNotifications from "../Notifications/useNotifications";

type IBasketData = {
  providers: {
    provider: string;
    deliveryCost: number;
    items: {
      providerProductIdentifier: string;
      quantity: number;
      unitPriceInt: number;
      unitPriceDecimal: number;
      totalPriceInt: number;
      totalPriceDecimal: number;
      productName: string;
      picture: string;
    }[];
  }[];
};

type ProfileOptionType =
  | "account-info"
  | "adressess"
  | "invoices-data"
  | "security"
  | "orders-history";

export default function useProfile() {
  const [currentOption, setCurrentOption] =
    useState<ProfileOptionType>("account-info");

  const [currentDeliveryAddressId, setCurrentDeliveryAddressId] = useState<
    string | null
  >(null);
  const [currentInvoiceDataId, setCurrentInvoiceDataId] = useState<
    string | null
  >(null);

  const [isOpenEditAccountData, setIsOpenEditAccountData] =
    useState<boolean>(false);
  const [isOpenAddNewAddressModal, setIsOpenAddNewAddressModal] =
    useState<boolean>(false);
  const [isOpenAddNewInvoiceDataModal, setIsOpenAddNewInvoiceDataModal] =
    useState<boolean>(false);
  const [isOpenChangePasswordModal, setIsOpenChangePasswordModal] =
    useState<boolean>(false);

  const [
    isOpenRemoveDeliveryAddressModal,
    setIsOpenRemoveDeliveryAddressModal,
  ] = useState<boolean>(false);
  const [isOpenRemoveInvoiceDataModal, setIsOpenRemoveInvoiceDataModal] =
    useState<boolean>(false);

  const [triggerRemoveDeliveryAddress, removeDeliveryAddressResult] =
    useRemoveDeliveryAddressMutation();
  const [triggerRemoveInvoiceData, removeInvoiceDataResult] =
    useRemoveInvoiceDataMutation();

  const {
    data: allDeliveryAdresses,
    isFetching: isFetchingAllDeliveryAdresses,
    isLoading: isLoadingAllDeliveryAdresses,
  } = useGetAllDeliveryAddressQuery(
    {},
    {
      refetchOnMountOrArgChange: true,
      skip: false,
    }
  );

  const {
    data: allInvoiceData,
    isFetching: isFetchingAllInvoiceData,
    isLoading: isLoadingAllInvoiceData,
  } = useGetAllInvoiceDataQuery(
    {},
    {
      refetchOnMountOrArgChange: true,
      skip: false,
    }
  );

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

  const [isEditing, setIsEditing] = useState<boolean>(false);

  const [basketData, setBasketData] = useState<IBasketData>({ providers: [] });
  const { totalGrossPrice } = useAppSelector((store) => store.basketStoreApi);
  const [currentStep, setCurrentStep] = useState<
    "your-basket" | "delivery-and-payment" | "end"
  >("your-basket");
  const router = useRouter();

  const { showNotification } = useNotifications();

  const {
    data: basket,
    isFetching: isFetchingBasket,
    isLoading: isLoadingBasket,
  } = useGetBasketQuery({
    refetchOnMountOrArgChange: true,
    skip: false,
  });

  useEffect(() => {
    if (!isFetchingAllInvoiceData && allInvoiceData) {
      console.warn(allInvoiceData);
    }
  }, [isFetchingAllInvoiceData]);

  useEffect(() => {
    if (!isFetchingAllDeliveryAdresses && allDeliveryAdresses) {
      console.warn(allDeliveryAdresses);
    }
  }, [isFetchingAllDeliveryAdresses]);

  useEffect(() => {
    if (!isFetchingBasket && basket && "data" in basket) {
      console.warn(basket);

      const newSplitedProvidersData = basket?.data?.reduce((acc, obj) => {
        const key = obj.provider;
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
      }, {});

      console.warn(newSplitedProvidersData);

      const newBasketData: IBasketData = {
        providers: Object.keys(newSplitedProvidersData).map((key) => {
          newSplitedProvidersData[key].map((item) =>
            console.warn(parseFloat(item?.deliveryCost))
          );

          console.warn(
            Math.max(
              newSplitedProvidersData[key].map((item) =>
                parseFloat(item?.deliveryCost)
              )
            )
          );

          return {
            provider: key,
            deliveryCost: Math.max(
              ...newSplitedProvidersData[key].map((item) =>
                parseFloat(item?.deliveryCost)
              )
            ),
            items: newSplitedProvidersData[key].map((item) => {
              const splitedUnitPrice = prepareStringPrice(item?.unitPrice);
              const splitedTotalPrice = prepareStringPrice(item?.totalPrice);

              return {
                providerProductIdentifier: item.providerProductIdentifier,
                quantity: item.quantity,
                unitPriceInt: splitedUnitPrice?.int,
                unitPriceDecimal: splitedUnitPrice?.decimal,
                totalPriceInt: splitedTotalPrice?.int,
                totalPriceDecimal: splitedTotalPrice?.decimal,
                productName: item?.productName,
                picture: item?.picture,
              };
            }),
          };
        }),
      };

      console.warn(newBasketData);

      setBasketData(newBasketData);
    }
  }, [isFetchingBasket]);

  const handleRemoveDeliveryAddress = async () => {
    const result = await triggerRemoveDeliveryAddress({
      deliveryAddressId: currentDeliveryAddressId as string,
    });

    console.warn(result?.data);
    if ("data" in result && result?.data?.status === "success") {
      handleCloseRemoveDeliverAddressModal();
    } else {
      showNotification({
        title: `Cos poszlo nie tak!`,
        body: `Sproboj jeszcze raz`,
        type: "error",
      });
    }
  };

  const handleRemoveInvoiceData = async () => {
    const result = await triggerRemoveInvoiceData({
      invoiceDataId: currentInvoiceDataId as string,
    });
  };

  const handleContinueToDeliveryAndPayment = () => {
    setCurrentStep("delivery-and-payment");
  };

  const handleGoBackToYourBasket = () => {
    setCurrentStep("your-basket");
  };

  const handleContinueShoping = () => {
    router.push("/", { scroll: false });
  };

  const handleChangeOption = (option: ProfileOptionType) => {
    setCurrentOption(option);
  };

  const handleOpenEditAccountDataModal = () => {
    setIsOpenEditAccountData(true);
  };

  const handleOpeAddNewDeliveryAddressModal = (
    isEditing: boolean,
    deliveryAddressId: string
  ) => {
    console.warn(isEditing);
    console.warn(deliveryAddressId);
    setIsOpenAddNewAddressModal(true);
    setIsEditing(isEditing);
    setCurrentDeliveryAddressId(deliveryAddressId);
  };

  const handleOpenAddNewInvoiceDataModal = (
    isEditing: boolean,
    invoiceDataId: string
  ) => {
    setIsOpenAddNewInvoiceDataModal(true);
    setIsEditing(isEditing);
    setCurrentInvoiceDataId(invoiceDataId);
  };

  const handleOpenChangePassswordModal = () => {
    setIsOpenChangePasswordModal(true);
  };

  const handleOpenRemoveDeliverAddressModal = (deliveryAddressId: string) => {
    setIsOpenRemoveDeliveryAddressModal(true);
    setCurrentDeliveryAddressId(deliveryAddressId);
  };

  const handleOpenRemoveInvoiceDataModal = (invoiceDataId: string) => {
    setIsOpenRemoveInvoiceDataModal(true);
    setCurrentInvoiceDataId(invoiceDataId);
  };

  const handleCloseEditAccountDataModal = () => {
    setIsOpenEditAccountData(false);
  };

  const handleCloseAddNewDeliveryAddressModal = () => {
    setIsOpenAddNewAddressModal(false);
    setIsEditing(false);
    setCurrentDeliveryAddressId(null);
  };

  const handleCloseAddNewInvoiceDataModal = () => {
    setIsOpenAddNewInvoiceDataModal(false);
    setIsEditing(false);
    setCurrentInvoiceDataId(null);
  };

  const handleCloseChangePassswordModal = () => {
    setIsOpenChangePasswordModal(false);
  };

  const handleCloseRemoveDeliverAddressModal = () => {
    setIsOpenRemoveDeliveryAddressModal(false);
    setCurrentDeliveryAddressId(null);
  };

  const handleCloseRemoveInvoiceDataModal = () => {
    setIsOpenRemoveInvoiceDataModal(false);
    setCurrentInvoiceDataId(null);
  };

  return {
    currentOption,
    handleChangeOption,
    handleOpenEditAccountDataModal,
    handleOpeAddNewDeliveryAddressModal,
    handleOpenAddNewInvoiceDataModal,
    handleOpenChangePassswordModal,
    handleCloseEditAccountDataModal,
    handleCloseAddNewDeliveryAddressModal,
    handleCloseAddNewInvoiceDataModal,
    handleCloseChangePassswordModal,
    isOpenEditAccountData,
    isOpenAddNewAddressModal,
    isOpenAddNewInvoiceDataModal,
    isOpenChangePasswordModal,
    isEditing,
    currentDeliveryAddressId,
    currentInvoiceDataId,
    isOpenRemoveDeliveryAddressModal,
    isOpenRemoveInvoiceDataModal,
    handleOpenRemoveDeliverAddressModal,
    handleOpenRemoveInvoiceDataModal,
    handleCloseRemoveDeliverAddressModal,
    handleCloseRemoveInvoiceDataModal,
    handleRemoveDeliveryAddress,
    handleRemoveInvoiceData,
    allDeliveryAdresses,
    isFetchingAllDeliveryAdresses,
    accountData,
    isFetchingAccountData,
  };
}
