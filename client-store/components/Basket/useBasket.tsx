import { useGetBasketQuery } from "@/store/basketSlice";
import { prepareStringPrice } from "@/utils";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/lib/store";
import { useRouter } from "next/navigation";

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

export default function useBasket() {
  const [basketData, setBasketData] = useState<IBasketData>({ providers: [] });
  const { totalGrossPrice } = useAppSelector((store) => store.basketStoreApi);
  const [currentStep, setCurrentStep] = useState<
    "your-basket" | "delivery-and-payment" | "end"
  >("your-basket");
  const router = useRouter();

  const {
    data: basket,
    isFetching: isFetchingBasket,
    isLoading: isLoadingBasket,
  } = useGetBasketQuery({
    refetchOnMountOrArgChange: true,
    skip: false,
  });

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

  const handleContinueToDeliveryAndPayment = () => {
    setCurrentStep("delivery-and-payment");
  };

  const handleGoBackToYourBasket = () => {
    setCurrentStep("your-basket");
  };

  const handleContinueShoping = () => {
    router.push("/", { scroll: false });
  };

  return {
    basketData,
    totalGrossPrice,
    currentStep,
    handleContinueToDeliveryAndPayment,
    handleContinueShoping,
    handleGoBackToYourBasket,
  };
}
