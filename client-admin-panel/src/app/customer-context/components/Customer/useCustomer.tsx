import { FormProps, TableProps } from "antd"
import { useTranslation } from "react-i18next"
import { useGetCustomerQuery } from "../../services/customerSlice"
import { CustomersDataType, CUSTOMERS_TABLE_HEADERS, CustomerFieldType } from "../../domain/customer-context"
import { useForm } from "antd/es/form/Form"

export default function useCustomer() {
  const [customerForm] = useForm<CustomerFieldType>()

  const {
    data: customer,
    isFetching: isFetchingCustomer,
    isLoading: isLoadingCustomer,
  } = useGetCustomerQuery(
    {
      id: "",
    },
    {
      refetchOnMountOrArgChange: true,
      skip: false,
    },
  )

  const { t } = useTranslation()

  const onFinish: FormProps<CustomerFieldType>["onFinish"] = (values) => {
    console.log(values)
  }
  const onFinishFailed: FormProps<CustomerFieldType>["onFinishFailed"] = (errorInfo): void => {
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
    customerForm,
    customer,
    onFinish,
    onFinishFailed,
  }
}
