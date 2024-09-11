import { FormProps } from "antd";
import {
  useGetProductQuery,
  useAddProductMutation,
} from "../../services/productsSlice";
import { IkonkaProduct, ProductFieldType } from "../../domain/products-context";
import { ROUTES } from "../../../routing-context/domain/router-context";
import { useNavigate, useParams } from "react-router-dom";
import { useForm, useWatch } from "antd/es/form/Form";
import { useSearchParams } from "react-router-dom";
import { useLazyGetIkonkProductQuery } from "../../services/ikonkaSlice";
import { useGetCategoriesQuery } from "../../../category-context/services/categorySlice";
import { useEffect, useState } from "react";
import { SelectOptions } from "../../../../common/types";
import { useGetAllTagsQuery } from "../../../category-context/services/categorySlice";
import { ITagNode } from "../../../category-context/domain/category-context";

export default function useProduct() {
  const [productForm] = useForm<ProductFieldType>();
  const navigate = useNavigate();
  const [addProductMutation] = useAddProductMutation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [initialProviderProductValues, setInitialProviderProductValues] =
    useState<{ name: string; value: string }[]>([]);
  const [providerResponse, setProviderResponse] = useState<IkonkaProduct>();
  const [triggerGetIkonkaProduct, getIkonkaProductResult] =
    useLazyGetIkonkProductQuery({});
  const [categoriesSelectOptions, setCategoriesSelectOptions] =
    useState<SelectOptions>([]);
  const [tagsSelectOptions, setTagsSelectOptions] = useState<SelectOptions>([]);
  const [selectedPictures, setSelectedPictures] = useState<string[]>([]);
  const selectedPicturesWatcher = useWatch("pictures", productForm);

  //console.warn(searchParams.get("providerProductId"));
  // console.warn(searchParams.get("selectedProviderId"));

  const {
    data: product,
    isFetching: isFetchingProduct,
    isLoading: isLoadingProduct,
  } = useGetProductQuery(
    {
      id: "",
    },
    {
      refetchOnMountOrArgChange: true,
      skip: false,
    }
  );

  const {
    data: categories,
    isFetching: isFetchingCategories,
    isLoading: isLoadingCategories,
  } = useGetCategoriesQuery(
    {},
    {
      refetchOnMountOrArgChange: true,
      skip: false,
    }
  );

  const { data: tags, isLoading: isLoadingTags } = useGetAllTagsQuery(
    {},
    {
      refetchOnMountOrArgChange: true,
      skip: false,
    }
  );

  useEffect(() => {
    if (!isLoadingTags && tags) {
      const newTagsList: SelectOptions = tags?.data?.map((tag) => ({
        value: tag?.name,
        label: tag?.name,
      }));

      setTagsSelectOptions(newTagsList);
    }
  }, [isLoadingTags, tags]);

  useEffect(() => {
    if (categories && !isLoadingCategories) {
      setCategoriesSelectOptions(
        categories?.data?.categoriesList.map((el) => ({
          value: el.name,
          label: el.name,
        }))
      );
    }
  }, [isLoadingCategories, categories]);

  useEffect(() => {
    if (
      searchParams.get("selectedProviderId") === "ikonka" &&
      searchParams.get("providerProductId") !== null
    ) {
      getIkonkaProductData(searchParams.get("providerProductId") as string);
    }
  }, []);

  useEffect(() => {
    //  console.warn(selectedPicturesWatcher);
    if (selectedPicturesWatcher) {
      let newPictures;

      if (!Array.isArray(selectedPicturesWatcher)) {
        newPictures = [...selectedPictures, selectedPicturesWatcher.toString()];
      } else {
        newPictures = [...selectedPictures, ...selectedPicturesWatcher];
      }

      //  console.warn(newPictures);

      const newPicturesSet = [...new Set(newPictures)];
      setSelectedPictures(newPicturesSet as string[]);
    }
  }, [selectedPicturesWatcher]);

  const getIkonkaProductData = async (id: string) => {
    const result = await triggerGetIkonkaProduct({ id });
    if (result.isSuccess) {
      setInitialProviderProductValues(
        Object.keys(result.data.data).map((key) => ({
          name: key,
          value: result?.data?.data[key] as keyof IkonkaProduct as string,
        }))
      );

      setProviderResponse(result?.data?.data);
    }
  };

  const handleRemovePicture = (picture: string) => {
    const newPictures = selectedPictures.filter((el) => el !== picture);
    setSelectedPictures(newPictures);
  };

  const onFinish: FormProps<ProductFieldType>["onFinish"] = async (values) => {
    const requestValues = values;
    requestValues.pictures = selectedPictures;

    requestValues.tooBigForParcelLocker =
      values?.tooBigForParcelLocker === "tak" ? true : false;

    console.log(requestValues);

    const result = await addProductMutation(values);

    if ("data" in result && result.data.status === "success") {
      navigate(`/${ROUTES.app}/${ROUTES.products}`);
    }
  };
  const onFinishFailed: FormProps<ProductFieldType>["onFinishFailed"] = (
    errorInfo
  ): void => {
    //console.log("Failed:", errorInfo);
  };

  const handleProductFieldsChange = () => {
    const margin = productForm.getFieldValue("margin");
    const providerNettoPrice = productForm.getFieldValue("providerNettoPrice");
    const vat = productForm.getFieldValue("vat");

    if (margin && providerNettoPrice) {
      const netProfit = (margin / 100) * providerNettoPrice;
      const netPrice = parseFloat(netProfit) + parseFloat(providerNettoPrice);

      productForm.setFieldValue("netPrice", netPrice.toFixed(2));
      productForm.setFieldValue("netProfit", netProfit.toFixed(2));

      if (vat) {
        const vatPrice = netPrice * (vat / 100);
        const grossPrice = vatPrice + netPrice;

        productForm.setFieldValue("grossPrice", grossPrice.toFixed(2));
      }
    }
  };

  return {
    productForm,
    product,
    initialProviderProductValues,
    categoriesSelectOptions,
    providerResponse,
    selectedPictures,
    tagsSelectOptions,
    onFinish,
    onFinishFailed,
    handleProductFieldsChange,
    handleRemovePicture,
  };
}
