import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import {
  AddOrderRequest,
  AddOrderResponse,
  DeleteOrderRequest,
  DeleteOrderResponse,
  GetOrderRequest,
  GetOrderResponse,
  GetOrdersRequest,
  GetOrdersResponse,
  UpdateOrderRequest,
  UpdateOrderResponse,
} from "../domain/order-context"
import { BASE_ORDER_URL } from "../domain/order-context"
import { ValidationErrorsResponse } from "../../../common/types"

export const ordersApi = createApi({
  reducerPath: "ordersApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_ORDER_URL, credentials: "include" }),
  tagTypes: ["Orders"],
  endpoints: (builder) => ({
    registerOrder: builder.mutation<AddOrderResponse, AddOrderRequest>({
      query: (payload) => ({
        url: `/`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Orders"],
      transformResponse: (response: AddOrderResponse) => response,
      transformErrorResponse: (response: ValidationErrorsResponse) => response,
    }),

    deleteCostumer: builder.mutation<DeleteOrderResponse, DeleteOrderRequest>({
      query: ({ id }) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      transformResponse: (response: DeleteOrderResponse) => response,
      transformErrorResponse: (response: ValidationErrorsResponse) => response,
    }),
    getOrders: builder.query<GetOrdersResponse, GetOrdersRequest>({
      query: () => ({
        url: `/get-all`,
        method: "GET",
      }),
      transformResponse: (response: GetOrdersResponse) => response,
      transformErrorResponse: (response: ValidationErrorsResponse) => response,
    }),
    getOrder: builder.query<GetOrderResponse, GetOrderRequest>({
      query: ({ id }) => ({
        url: `/${id}`,
        method: "GET",
      }),
      transformResponse: (response: GetOrderResponse) => response,
      transformErrorResponse: (response: ValidationErrorsResponse) => response,
    }),
    updateOrder: builder.mutation<UpdateOrderResponse, UpdateOrderRequest>({
      query: ({ id }) => ({
        url: `/${id}`,
        method: "PUT",
      }),
      transformResponse: (response: UpdateOrderResponse) => response,
      transformErrorResponse: (response: ValidationErrorsResponse) => response,
    }),
  }),
})

export const {
  useRegisterOrderMutation,
  useDeleteCostumerMutation,
  useGetOrdersQuery,
  useGetOrderQuery,
  useLazyGetOrdersQuery,
  useLazyGetOrderQuery,
  useUpdateOrderMutation,
} = ordersApi
