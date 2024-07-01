import { FormProps, TableProps } from "antd"
import { useTranslation } from "react-i18next"
import { useGetOrderQuery } from "../../services/orderSlice"
import { OrdersDataType, ORDERS_TABLE_HEADERS, OrderFieldType } from "../../domain/order-context"
import { useForm } from "antd/es/form/Form"

export default function useOrder() {
  const [orderForm] = useForm<OrderFieldType>()

  const {
    data: order,
    isFetching: isFetchingOrder,
    isLoading: isLoadingOrder,
  } = useGetOrderQuery(
    {
      id: "",
    },
    {
      refetchOnMountOrArgChange: true,
      skip: false,
    },
  )

  const { t } = useTranslation()

  const onFinish: FormProps<OrderFieldType>["onFinish"] = (values) => {
    console.log(values)
  }
  const onFinishFailed: FormProps<OrderFieldType>["onFinishFailed"] = (errorInfo): void => {
    console.log("Failed:", errorInfo)
  }

  return {
    orderForm,
    order,
    onFinish,
    onFinishFailed,
  }
}
