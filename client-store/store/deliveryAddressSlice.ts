import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_API_URL, ValidationErrorsResponse } from "./const";

const BASE_USER_ADDRESS_API_URL = `${BASE_API_URL}api/delivery-address/`;

type DeliveryAddress = {
  name: string;
  surname: string;
  phone: string;
  place: string;
  streetName: string;
  streetNumber: string;
  post: string;
  postCode: string;
  voivodeship: string;
  commune: string;
  id?: string;
};

interface AddDeliveryAddressRequest extends DeliveryAddress {}
interface AddDeliveryAddressResponse {
  status: "success" | "error";
  code: number;
  message: string;
  data: DeliveryAddress;
}

interface RemoveDeliveryAddressRequest {
  deliveryAddressId: string;
}
interface RemoveDeliveryAddressResponse {
  status: "success" | "error";
  code: number;
  message: string;
  data: {};
}

interface EditDeliveryAddressRequest extends DeliveryAddress {
  deliveryAddressId: string;
}
interface EditDeliveryAddressResponse {
  status: "success" | "error";
  code: number;
  message: string;
  data: {};
}

interface GetDeliveryAddressRequest {
  deliveryAddressId: string;
}
interface GetDeliveryAddressResponse {
  status: "success" | "error";
  code: number;
  message: string;
  data: {};
}

interface GetAllDeliveryAddressRequest {}
interface GetAllDeliveryAddressResponse {
  status: "success" | "error";
  code: number;
  message: string;
  data: DeliveryAddress[];
}

export const deliveryAddressApi = createApi({
  reducerPath: "deliveryAddressApi",
  tagTypes: ["DeliveryAddress"],
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_USER_ADDRESS_API_URL,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    addDeliveryAddress: builder.mutation<
      AddDeliveryAddressResponse,
      AddDeliveryAddressRequest
    >({
      query: (payload) => ({
        url: `/customer-add-delivery-address`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["DeliveryAddress"],
      transformResponse: (response: AddDeliveryAddressResponse) => response,
      transformErrorResponse: (response: ValidationErrorsResponse) => response,
    }),
    removeDeliveryAddress: builder.mutation<
      RemoveDeliveryAddressResponse,
      RemoveDeliveryAddressRequest
    >({
      query: (payload) => ({
        url: `/customer-delete-delivery-address`,
        method: "DELETE",
        body: payload,
      }),
      invalidatesTags: ["DeliveryAddress"],
      transformResponse: (response: RemoveDeliveryAddressResponse) => response,
      transformErrorResponse: (response: ValidationErrorsResponse) => response,
    }),
    editDeliveryAddress: builder.mutation<
      EditDeliveryAddressResponse,
      EditDeliveryAddressRequest
    >({
      query: (payload) => ({
        url: `/customer-edit-delivery-address`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["DeliveryAddress"],
      transformResponse: (response: EditDeliveryAddressResponse) => response,
      transformErrorResponse: (response: ValidationErrorsResponse) => response,
    }),

    getDeliveryAddress: builder.query<
      GetDeliveryAddressResponse,
      GetDeliveryAddressRequest
    >({
      query: ({ deliveryAddressId }) => ({
        url: `/customer-get-delivery-address/${deliveryAddressId}`,
        method: "GET",
      }),
      //providesTags: ["DeliveryAddress"],
      transformResponse: (response: GetDeliveryAddressResponse) => response,
      transformErrorResponse: (response: ValidationErrorsResponse) => response,
    }),

    getAllDeliveryAddress: builder.query<
      GetAllDeliveryAddressResponse,
      GetAllDeliveryAddressRequest
    >({
      query: () => ({
        url: `/customer-get-all-delivery-address`,
        method: "GET",
      }),
      providesTags: ["DeliveryAddress"],
      transformResponse: (response: GetAllDeliveryAddressResponse) => response,
      transformErrorResponse: (response: ValidationErrorsResponse) => response,
    }),
  }),
});

export const {
  useAddDeliveryAddressMutation,
  useEditDeliveryAddressMutation,
  useGetAllDeliveryAddressQuery,
  useGetDeliveryAddressQuery,
  useLazyGetAllDeliveryAddressQuery,
  useLazyGetDeliveryAddressQuery,
  useRemoveDeliveryAddressMutation,
} = deliveryAddressApi;
