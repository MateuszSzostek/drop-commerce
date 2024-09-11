import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_API_URL, ValidationErrorsResponse } from "./const";

const BASE_AUTH_API_URL = `${BASE_API_URL}api/auth/`;

interface CustomerLoginRequest {
  email: string;
  password: string;
  shouldRemember: boolean;
}

interface CustomerLoginResponse {
  status: string;
  code: number;
  message: string;
  data: {
    email: string;
    password: string;
    name: string;
    surname: string;
    phoneNumber: string;
    privacyPolicy: boolean;
    roles: string;
  };
}

interface CustomerRegisterRequest {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  surname: string;
  privacyPolicy: boolean;
}

interface CustomerRegisterResponse {
  status: string;
  code: number;
  message: string;
  data: {
    email: string;
    password: string;
    name: string;
    surname: string;
    phoneNumber: string;
    privacyPolicy: boolean;
    roles: string;
  };
}

interface CustomerLogoutRequest {}
interface CustomerLogoutResponse {}

interface CustomerGetAccountDataRequest {}
interface CustomerGetAccountDataResponse {
  status: string;
  code: number;
  message: string;
  data: {
    name: string;
    surname: string;
    userName: string;
    phone: string;
    place: string;
    streetName: string;
    streetNumber: string;
    post: string;
    city: string;
    postCode: string;
    voivodeship?: string;
    commune?: string;
  };
}

interface CustomerUpdateAccountDataRequest {
  name: string;
  surname: string;
  userName: string;
  phone: string;
  place: string;
  streetName: string;
  streetNumber: string;
  post: string;
  city: string;
  postCode: string;
  voivodeship?: string;
  commune?: string;
}
interface CustomerUpdateAccountDataResponse {
  status: string;
  code: number;
  message: string;
  data: {
    name: string;
    surname: string;
    userName: string;
    phone: string;
    place: string;
    streetName: string;
    streetNumber: string;
    post: string;
    city: string;
    postCode: string;
    voivodeship?: string;
    commune?: string;
  };
}

export const customerAuthApi = createApi({
  reducerPath: "customerAuthApi",
  tagTypes: ["AccountData"],
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_AUTH_API_URL,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    customerLogin: builder.mutation<
      CustomerLoginResponse,
      CustomerLoginRequest
    >({
      query: (payload) => ({
        url: `/customer-sign-in`,
        method: "POST",
        body: payload,
      }),
      transformResponse: (response: CustomerLoginResponse) => response,
      transformErrorResponse: (response: ValidationErrorsResponse) => response,
    }),
    customerRegister: builder.mutation<
      CustomerRegisterResponse,
      CustomerRegisterRequest
    >({
      query: (payload) => ({
        url: `/customer-sign-up`,
        method: "POST",
        body: payload,
      }),
      transformResponse: (response: CustomerRegisterResponse) => response,
      transformErrorResponse: (response: ValidationErrorsResponse) => response,
    }),
    customerLogout: builder.mutation<
      CustomerLogoutResponse,
      CustomerLogoutRequest
    >({
      query: (payload) => ({
        url: `/customer-sign-out`,
        method: "POST",
        body: payload,
      }),
      transformResponse: (response: CustomerLogoutResponse) => response,
      transformErrorResponse: (response: ValidationErrorsResponse) => response,
    }),

    customerGetAccountData: builder.query<
      CustomerGetAccountDataResponse,
      CustomerGetAccountDataRequest
    >({
      query: () => ({
        url: `/customer-get-account-data`,
        method: "GET",
      }),
      providesTags: ["AccountData"],
      transformResponse: (response: CustomerGetAccountDataResponse) => response,
      transformErrorResponse: (response: ValidationErrorsResponse) => response,
    }),

    customerUpdateAccountData: builder.mutation<
      CustomerUpdateAccountDataResponse,
      CustomerUpdateAccountDataRequest
    >({
      query: (payload) => ({
        url: `/customer-update-account-data`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["AccountData"],
      transformResponse: (response: CustomerUpdateAccountDataResponse) =>
        response,
      transformErrorResponse: (response: ValidationErrorsResponse) => response,
    }),
  }),
});

export const {
  useCustomerLoginMutation,
  useCustomerLogoutMutation,
  useCustomerRegisterMutation,
  useCustomerGetAccountDataQuery,
  useCustomerUpdateAccountDataMutation,
  useLazyCustomerGetAccountDataQuery,
} = customerAuthApi;
