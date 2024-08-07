import { FormProps, TableProps } from "antd";
import { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";
import { useGetProductsQuery } from "../../../services/productsSlice";
import {
  ProductsDataType,
  PRODUCTS_TABLE_HEADERS,
  FilterProductsFieldType,
} from "../../../domain/products-context";
import { ROUTES } from "../../../../routing-context/domain/router-context";
import { useNavigate } from "react-router-dom";
import { FormInstance, useForm } from "antd/es/form/Form";
import { ProductFieldType } from "../../../domain/products-context";

export default function useIkonka(
  productForm: FormInstance<ProductFieldType>,
  initialValues: { name: string; value: string }[]
) {
  const [productsList, setProductsList] = useState<ProductsDataType[]>([]);
  const [ikonkaForm] = useForm();
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
    if (!isLoadingProducts && products) {
      console.warn(products);
      const productsOfUserData: ProductsDataType[] = products?.data?.items?.map(
        () => {
          return {
            key: "",
            lp: "",
            id: "",
            provider: "",
            name: "",
            updates: false,
            priceChanged: false,
            categoryMissing: false,
          };
        }
      );

      setProductsList(productsOfUserData);
    }
  }, [isLoadingProducts, products]);

  useEffect(() => {
    if (initialValues.length > 0) {
      console.log(initialValues);
      productForm.setFieldValue("provider", "ikonka");
      ikonkaForm.setFieldValue("dostawca", "ikonka");
      initialValues.forEach((el) => {
        ikonkaForm.setFieldValue(el.name, el.value);
      });
    }
  }, [initialValues]);

  const { t } = useTranslation();

  const navigateToAddProduct = () => {
    navigate(`/${ROUTES.app}/${ROUTES.product}`);
  };

  const transferValue = (from: string, to: string) => {
    console.log(from);
    console.log(to);
    console.log(ikonkaForm.getFieldValue(from));
    console.log(productForm.getFieldsValue());

    productForm.setFieldValue(to, ikonkaForm.getFieldValue(from));
  };

  const onFinish: FormProps<FilterProductsFieldType>["onFinish"] = (values) => {
    console.log(values);
  };
  const onFinishFailed: FormProps<FilterProductsFieldType>["onFinishFailed"] = (
    errorInfo
  ): void => {
    console.log("Failed:", errorInfo);
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

  return {
    productsTableColumns,
    productsList,
    ikonkaForm,
    initialValues,
    onFinish,
    onFinishFailed,
    navigateToAddProduct,
    transferValue,
  };
}
