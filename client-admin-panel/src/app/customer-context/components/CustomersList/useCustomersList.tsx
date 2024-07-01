import { FormProps, TableProps } from "antd"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { useGetCustomersQuery } from "../../services/customerSlice"
import { CustomersDataType, CUSTOMERS_TABLE_HEADERS, FilterCustomersFieldType } from "../../domain/customer-context"

export default function useCustomersList() {
  const [customersList, setCustomersList] = useState<CustomersDataType[]>([])

  const {
    data: customers,
    isFetching: isFetchingCustomers,
    isLoading: isLoadingCustomers,
  } = useGetCustomersQuery({
    refetchOnMountOrArgChange: true,
    skip: false,
  })

  useEffect(() => {
    if (!isLoadingCustomers && customers) {
      const customersData: CustomersDataType[] = customers.data.map(() => {
        return {
          key: "",
          lp: "",
          id: "",
          name: "",
          surname: "",
          addresses: [],
        }
      })

      setCustomersList(customersData)
    }
  }, [isLoadingCustomers, customers])

  const { t } = useTranslation()

  const onFinish: FormProps<FilterCustomersFieldType>["onFinish"] = (values) => {
    console.log(values)
  }
  const onFinishFailed: FormProps<FilterCustomersFieldType>["onFinishFailed"] = (errorInfo): void => {
    console.log("Failed:", errorInfo)
  }

  const customersTableColumns: TableProps<CustomersDataType>["columns"] = [
    {
      title: t(`customers.customers-list.${CUSTOMERS_TABLE_HEADERS.lp}-header`),
      dataIndex: CUSTOMERS_TABLE_HEADERS.lp,
      key: CUSTOMERS_TABLE_HEADERS.lp,
      render: (text) => <a>{text}</a>,
      responsive: ["xs", "sm", "md", "xl"],
    },
    {
      title: t(`customers.customers-list.${CUSTOMERS_TABLE_HEADERS.id}-header`),
      dataIndex: CUSTOMERS_TABLE_HEADERS.id,
      key: CUSTOMERS_TABLE_HEADERS.id,
      render: (text) => <a>{text}</a>,
      responsive: ["xs", "sm", "md", "xl"],
    },
    {
      title: t(`customers.customers-list.${CUSTOMERS_TABLE_HEADERS.name}-header`),
      dataIndex: CUSTOMERS_TABLE_HEADERS.name,
      key: CUSTOMERS_TABLE_HEADERS.name,
      render: (text) => <a>{text}</a>,
      responsive: ["xs", "sm", "md", "xl"],
    },
    {
      title: t(`customers.customers-list.${CUSTOMERS_TABLE_HEADERS.surname}-header`),
      dataIndex: CUSTOMERS_TABLE_HEADERS.surname,
      key: CUSTOMERS_TABLE_HEADERS.surname,
      render: (text) => <a>{text}</a>,
      responsive: ["xs", "sm", "md", "xl"],
    },
  ]

  return {
    customersTableColumns,
    customersList,
    onFinish,
    onFinishFailed,
  }
}
