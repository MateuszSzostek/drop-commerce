import { FormProps, TableProps } from "antd"
import { useEffect, useState } from "react"
import React from "react"
import { useTranslation } from "react-i18next"
import { useGetOrdersQuery } from "../../services/orderSlice"
import { OrdersDataType, ORDERS_TABLE_HEADERS, FilterOrdersFieldType } from "../../domain/order-context"

export default function useOrdersList() {
  const [ordersList, setOrdersList] = useState<OrdersDataType[]>([])

  const {
    data: orders,
    isFetching: isFetchingOrders,
    isLoading: isLoadingOrders,
  } = useGetOrdersQuery({
    refetchOnMountOrArgChange: true,
    skip: false,
  })

  useEffect(() => {
    if (!isLoadingOrders && orders) {
      const ordersData: OrdersDataType[] = orders.data.map(() => {
        return {
          key: "",
          lp: "",
          id: "",
          ownerName: "",
          ownerSurname: "",
          basket: [
            {
              providerId: "",
              products: [
                {
                  id: "",
                  name: "",
                  amount: "",
                  shortDescription: "",
                  price: "",
                  totalNettoPrice: "",
                  totalBruttoPrice: "",
                  thubnail: "",
                },
              ],
            },
          ],
        }
      })

      setOrdersList(ordersData)
    }
  }, [isLoadingOrders, orders])

  const { t } = useTranslation()

  const onFinish: FormProps<FilterOrdersFieldType>["onFinish"] = (values) => {
    console.log(values)
  }
  const onFinishFailed: FormProps<FilterOrdersFieldType>["onFinishFailed"] = (errorInfo): void => {
    console.log("Failed:", errorInfo)
  }

  const ordersTableColumns: TableProps<OrdersDataType>["columns"] = [
    {
      title: t(`orders.orders-list.${ORDERS_TABLE_HEADERS.lp}-header`),
      dataIndex: ORDERS_TABLE_HEADERS.lp,
      key: ORDERS_TABLE_HEADERS.lp,
      render: (text) => <a>{text}</a>,
      responsive: ["xs", "sm", "md", "xl"],
    },
    {
      title: t(`orders.orders-list.${ORDERS_TABLE_HEADERS.ownerId}-header`),
      dataIndex: ORDERS_TABLE_HEADERS.ownerId,
      key: ORDERS_TABLE_HEADERS.ownerId,
      render: (text) => <a>{text}</a>,
      responsive: ["xs", "sm", "md", "xl"],
    },
    {
      title: t(`orders.orders-list.${ORDERS_TABLE_HEADERS.ownerName}-header`),
      dataIndex: ORDERS_TABLE_HEADERS.ownerName,
      key: ORDERS_TABLE_HEADERS.ownerName,
      render: (text) => <a>{text}</a>,
      responsive: ["xs", "sm", "md", "xl"],
    },
    {
      title: t(`orders.orders-list.${ORDERS_TABLE_HEADERS.ownerSurname}-header`),
      dataIndex: ORDERS_TABLE_HEADERS.ownerSurname,
      key: ORDERS_TABLE_HEADERS.ownerSurname,
      render: (text) => <a>{text}</a>,
      responsive: ["xs", "sm", "md", "xl"],
    },
    {
      title: t(`orders.orders-list.${ORDERS_TABLE_HEADERS.price}-header`),
      dataIndex: ORDERS_TABLE_HEADERS.price,
      key: ORDERS_TABLE_HEADERS.price,
      render: (text) => <a>{text}</a>,
      responsive: ["xs", "sm", "md", "xl"],
    },
    {
      title: t(`orders.orders-list.${ORDERS_TABLE_HEADERS.status}-header`),
      dataIndex: ORDERS_TABLE_HEADERS.status,
      key: ORDERS_TABLE_HEADERS.status,
      render: (text) => <a>{text}</a>,
      responsive: ["xs", "sm", "md", "xl"],
    },
  ]

  return {
    ordersTableColumns,
    ordersList,
    onFinish,
    onFinishFailed,
  }
}
