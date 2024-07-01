import { FormProps } from "antd"
import { useGetProductQuery, useAddProductMutation } from "../../services/productsSlice"
import { IkonkaProduct, ProductFieldType } from "../../domain/products-context"
import { ROUTES } from "../../../routing-context/domain/router-context"
import { useNavigate, useParams } from "react-router-dom"
import { useForm } from "antd/es/form/Form"
import { useSearchParams } from "react-router-dom"
import { useLazyGetIkonkProductQuery } from "../../services/ikonkaSlice"
import { useEffect, useState } from "react"

export default function useProduct() {
  const [productForm] = useForm<ProductFieldType>()
  const navigate = useNavigate()
  const [addProductMutation] = useAddProductMutation()
  const [searchParams, setSearchParams] = useSearchParams()
  const [initialProviderProductValues, setInitialProviderProductValues] = useState<{ name: string; value: string }[]>([])
  const [triggerGetIkonkaProduct, getIkonkaProductResult] = useLazyGetIkonkProductQuery({})

  console.warn(searchParams.get("providerProductId"))
  console.warn(searchParams.get("selectedProviderId"))

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
    },
  )

  useEffect(() => {
    if (searchParams.get("selectedProviderId") === "ikonka" && searchParams.get("providerProductId") !== null) {
      getIkonkaProductData(searchParams.get("providerProductId") as string)
    }
  }, [])

  const getIkonkaProductData = async (id: string) => {
    const result = await triggerGetIkonkaProduct({ id })
    if (result.isSuccess) {
      setInitialProviderProductValues(
        Object.keys(result.data.data).map((key) => ({
          name: key,
          value: result.data.data[key] as keyof IkonkaProduct as string,
        })),
      )

      console.warn(
        Object.keys(result.data.data).map((key) => ({
          name: key,
          value: result.data.data[key] as keyof IkonkaProduct as string,
        })),
      )
    }
  }
  const onFinish: FormProps<ProductFieldType>["onFinish"] = async (values) => {
    console.log(values)

    const result = await addProductMutation(values)

    if ("data" in result && result.data.status === "success") {
      navigate(`/${ROUTES.app}/${ROUTES.products}`)
    }
  }
  const onFinishFailed: FormProps<ProductFieldType>["onFinishFailed"] = (errorInfo): void => {
    console.log("Failed:", errorInfo)
  }

  const handleProductFieldsChange = () => {
    const margin = productForm.getFieldValue("margin")
    const providerNettoPrice = productForm.getFieldValue("providerNettoPrice")
    const vat = productForm.getFieldValue("vat")

    if (margin && providerNettoPrice) {
      const netProfit = (margin / 100) * providerNettoPrice
      const netPrice = parseFloat(netProfit) + parseFloat(providerNettoPrice)

      productForm.setFieldValue("netPrice", netPrice.toFixed(2))
      productForm.setFieldValue("netProfit", netProfit.toFixed(2))

      if (vat) {
        const vatPrice = netPrice * (vat / 100)
        const grossPrice = vatPrice + netPrice

        productForm.setFieldValue("grossPrice", grossPrice.toFixed(2))
      }
    }
  }

  return {
    productForm,
    product,
    initialProviderProductValues,
    onFinish,
    onFinishFailed,
    handleProductFieldsChange,
  }
}
