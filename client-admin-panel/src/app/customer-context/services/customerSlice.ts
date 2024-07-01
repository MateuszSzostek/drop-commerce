import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import {
  RegisterCustomerRequest,
  RegisterCustomerResponse,
  DeleteCustomerRequest,
  DeleteCustomerResponse,
  GetCustomerRequest,
  GetCustomerResponse,
  GetCustomersRequest,
  GetCustomersResponse,
  UpdateCustomerRequest,
  UpdateCustomerResponse,
} from "../domain/customer-context"
import { BASE_CUSTOMER_URL } from "../domain/customer-context"
import { ValidationErrorsResponse } from "../../../common/types"

export const customersApi = createApi({
  reducerPath: "customersApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_CUSTOMER_URL, credentials: "include" }),
  tagTypes: ["Customers"],
  endpoints: (builder) => ({
    registerCustomer: builder.mutation<RegisterCustomerResponse, RegisterCustomerRequest>({
      query: (payload) => ({
        url: `/`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Customers"],
      transformResponse: (response: RegisterCustomerResponse) => response,
      transformErrorResponse: (response: ValidationErrorsResponse) => response,
    }),

    deleteCostumer: builder.mutation<DeleteCustomerResponse, DeleteCustomerRequest>({
      query: ({ id }) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      transformResponse: (response: DeleteCustomerResponse) => response,
      transformErrorResponse: (response: ValidationErrorsResponse) => response,
    }),
    getCustomers: builder.query<GetCustomersResponse, GetCustomersRequest>({
      query: () => ({
        url: `/get-all`,
        method: "GET",
      }),
      transformResponse: (response: GetCustomersResponse) => response,
      transformErrorResponse: (response: ValidationErrorsResponse) => response,
    }),
    getCustomer: builder.query<GetCustomerResponse, GetCustomerRequest>({
      query: ({ id }) => ({
        url: `/${id}`,
        method: "GET",
      }),
      transformResponse: (response: GetCustomerResponse) => response,
      transformErrorResponse: (response: ValidationErrorsResponse) => response,
    }),
    updateCustomer: builder.mutation<UpdateCustomerResponse, UpdateCustomerRequest>({
      query: ({ id }) => ({
        url: `/${id}`,
        method: "PUT",
      }),
      transformResponse: (response: UpdateCustomerResponse) => response,
      transformErrorResponse: (response: ValidationErrorsResponse) => response,
    }),
  }),
})

export const {
  useRegisterCustomerMutation,
  useDeleteCostumerMutation,
  useGetCustomersQuery,
  useGetCustomerQuery,
  useLazyGetCustomersQuery,
  useLazyGetCustomerQuery,
  useUpdateCustomerMutation,
} = customersApi
