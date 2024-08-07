import { FormProps, TableProps } from "antd";
import { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";
import { useGetProductsQuery } from "../../services/productsSlice";
import {
  ProductsDataType,
  PRODUCTS_TABLE_HEADERS,
  FilterProductsFieldType,
  PROVIDER_PRODUCTS_TABLE_HEADERS,
  ProviderProductsDataType,
} from "../../domain/products-context";
import { ROUTES } from "../../../routing-context/domain/router-context";
import { useNavigate } from "react-router-dom";
import { useLazyGetIkonkaProductsQuery } from "../../services/ikonkaSlice";
import { useForm } from "antd/es/form/Form";
import { Button } from "../../../../common/components";

export default function useProductsList() {
  const [existInProviderStore, setExistInProviderStore] =
    useState<boolean>(false);
  const [selectedProviderId, setSelectedProviderId] =
    useState<string>("ikonka");
  const [productsList, setProductsList] = useState<ProductsDataType[]>([]);
  const [providerProductsList, setProviderProductsList] = useState<
    ProviderProductsDataType[]
  >([]);
  const [triggerGetIkonkaProducts, getIkonkaProductsResult] =
    useLazyGetIkonkaProductsQuery();
  const [providerProductsForm] = useForm();
  const navigate = useNavigate();

  const {
    data: products,
    isFetching: isFetchingProducts,
    isLoading: isLoadingProducts,
  } = useGetProductsQuery({
    refetchOnMountOrArgChange: true,
    skip: false,
  });

  useEffect(() => {
    handleGetIkonkaProducts();
  }, []);

  useEffect(() => {
    if (!isLoadingProducts && products) {
      console.warn(products);
      const productsOfUserData: ProductsDataType[] = products.data?.items?.map(
        (el, idx) => {
          return {
            key: el?.id,
            lp: idx,
            id: el?.id,
            provider: el?.provider,
            name: el?.name,
            updates: el?.pendingUpdates?.length > 0,
            priceChanged: el?.priceChanged,
            categoryMissing: el?.categoryMissing,
          };
        }
      );

      setProductsList(productsOfUserData);
    }
  }, [isLoadingProducts, products]);

  const { t } = useTranslation();

  const navigateToAddProduct = () => {
    navigate(`/${ROUTES.app}/${ROUTES.product}`);
  };

  const handleOnChangeExistInProviderStore = (exist: boolean) => {
    setExistInProviderStore(exist);
  };

  const onFinish: FormProps<FilterProductsFieldType>["onFinish"] = (values) => {
    console.log(values);
  };
  const onFinishFailed: FormProps<FilterProductsFieldType>["onFinishFailed"] = (
    errorInfo
  ): void => {
    console.log("Failed:", errorInfo);
  };

  const handleGetIkonkaProducts = async () => {
    console.log(providerProductsForm.getFieldsValue());
    console.log(existInProviderStore);

    const result = await triggerGetIkonkaProducts({
      page: "1",
      name: providerProductsForm.getFieldValue("name"),
      limit: "10",
      providerProductId:
        providerProductsForm.getFieldValue("providerProductId"),
      existsInProviderStore: providerProductsForm.getFieldValue(
        "existInProviderStore"
      ),
    });

    //existInProviderStore

    if (result.isSuccess) {
      const providerProducts: ProviderProductsDataType[] =
        result?.data?.data?.items?.map((ikonkaProduct) => ({
          key: ikonkaProduct?._id,
          id: ikonkaProduct?._id,
          providerId: ikonkaProduct?.kod,
          name: ikonkaProduct?.nazwa,
          alreadyInShop: ikonkaProduct?.alreadyInShop,
        }));

      setProviderProductsList(providerProducts);
    }
  };

  const handleNavigateToAddProviderProductToProducts = (
    providerProductId: string
  ) => {
    navigate(
      `/${ROUTES.app}/${ROUTES.product}?providerProductId=${providerProductId}&selectedProviderId=${selectedProviderId}`
    );
  };

  const productsTableColumns: TableProps<ProductsDataType>["columns"] = [
    {
      title: t(`products.products-list.${PRODUCTS_TABLE_HEADERS.lp}-header`),
      dataIndex: PRODUCTS_TABLE_HEADERS.lp,
      key: PRODUCTS_TABLE_HEADERS.lp,
      render: (text) => <a>{text}</a>,
      responsive: ["xs", "sm", "md", "xl"],
    },
    {
      title: t(`products.products-list.${PRODUCTS_TABLE_HEADERS.name}-header`),
      dataIndex: PRODUCTS_TABLE_HEADERS.name,
      key: PRODUCTS_TABLE_HEADERS.name,
      render: (text) => <a>{text}</a>,
      responsive: ["xs", "sm", "md", "xl"],
    },
    {
      title: t(`products.products-list.${PRODUCTS_TABLE_HEADERS.id}-header`),
      dataIndex: PRODUCTS_TABLE_HEADERS.id,
      key: PRODUCTS_TABLE_HEADERS.id,
      render: (text) => <a>{text}</a>,
      responsive: ["xs", "sm", "md", "xl"],
    },
    {
      title: t(
        `products.products-list.${PRODUCTS_TABLE_HEADERS.provider}-header`
      ),
      dataIndex: PRODUCTS_TABLE_HEADERS.provider,
      key: PRODUCTS_TABLE_HEADERS.provider,
      render: (text) => <a>{text}</a>,
      responsive: ["xs", "sm", "md", "xl"],
    },
    {
      title: t(
        `products.products-list.${PRODUCTS_TABLE_HEADERS.priceChanged}-header`
      ),
      dataIndex: PRODUCTS_TABLE_HEADERS.priceChanged,
      key: PRODUCTS_TABLE_HEADERS.priceChanged,
      render: (text) => <a>{text}</a>,
      responsive: ["xs", "sm", "md", "xl"],
    },
    {
      title: t(
        `products.products-list.${PRODUCTS_TABLE_HEADERS.updates}-header`
      ),
      dataIndex: PRODUCTS_TABLE_HEADERS.updates,
      key: PRODUCTS_TABLE_HEADERS.updates,
      render: (text) => <a>{text}</a>,
      responsive: ["xs", "sm", "md", "xl"],
    },
    {
      title: t(
        `products.products-list.${PRODUCTS_TABLE_HEADERS.categoryMissing}-header`
      ),
      dataIndex: PRODUCTS_TABLE_HEADERS.categoryMissing,
      key: PRODUCTS_TABLE_HEADERS.categoryMissing,
      render: (text) => <a>{text}</a>,
      responsive: ["xs", "sm", "md", "xl"],
    },
  ];

  const providerProductsTableColumns: TableProps<ProviderProductsDataType>["columns"] =
    [
      {
        title: t(
          `products.products-list.${PROVIDER_PRODUCTS_TABLE_HEADERS.id}-header`
        ),
        dataIndex: PROVIDER_PRODUCTS_TABLE_HEADERS.id,
        key: PROVIDER_PRODUCTS_TABLE_HEADERS.id,
        render: (text) => <a>{text}</a>,
        responsive: ["xs", "sm", "md", "xl"],
      },
      {
        title: t(
          `products.products-list.${PROVIDER_PRODUCTS_TABLE_HEADERS.name}-header`
        ),
        dataIndex: PROVIDER_PRODUCTS_TABLE_HEADERS.name,
        key: PROVIDER_PRODUCTS_TABLE_HEADERS.name,
        render: (text) => <a>{text}</a>,
        responsive: ["xs", "sm", "md", "xl"],
      },
      {
        title: t(
          `products.products-list.${PROVIDER_PRODUCTS_TABLE_HEADERS.providerId}-header`
        ),
        dataIndex: PROVIDER_PRODUCTS_TABLE_HEADERS.providerId,
        key: PROVIDER_PRODUCTS_TABLE_HEADERS.providerId,
        render: (text) => <a>{text}</a>,
        responsive: ["xs", "sm", "md", "xl"],
      },
      {
        title: t(
          `products.products-list.${PROVIDER_PRODUCTS_TABLE_HEADERS.actions}-header`
        ),
        dataIndex: PROVIDER_PRODUCTS_TABLE_HEADERS.actions,
        key: PROVIDER_PRODUCTS_TABLE_HEADERS.actions,
        //to change after reset database
        render: (text, record) => (
          <span>
            {record?.alreadyInShop === false && (
              <Button
                onClick={() =>
                  handleNavigateToAddProviderProductToProducts(record?.id)
                }
              >
                Add Product
              </Button>
            )}
          </span>
        ),
        responsive: ["xs", "sm", "md", "xl"],
      },
    ];

  return {
    productsTableColumns,
    providerProductsTableColumns,
    productsList,
    providerProductsList,
    providerProductsForm,
    onFinish,
    onFinishFailed,
    navigateToAddProduct,
    handleGetIkonkaProducts,
    handleOnChangeExistInProviderStore,
    getIkonkaProductsResult,
  };
}
