import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_API_URL, ValidationErrorsResponse } from "./const";

const BASE_AUTH_API_URL = `${BASE_API_URL}api/auth/`;

interface CustomerLoginRequest {
  email: string;
  password: string;
  shouldRemember: boolean;
}

interface CustomerLoginResponse {}

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

export const customerAuthApi = createApi({
  reducerPath: "customerAuthApi",
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
  }),
});

export const {
  useCustomerLoginMutation,
  useCustomerLogoutMutation,
  useCustomerRegisterMutation,
} = customerAuthApi;
