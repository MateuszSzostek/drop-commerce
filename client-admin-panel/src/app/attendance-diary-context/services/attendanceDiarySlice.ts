import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { CreateKindergartenResponse, CreateKindergartenRequest } from "../domain/attendance-diary"
import { BASE_KINDERGARTEN_URL } from "../domain/attendance-diary"
import { setUserFieldByKey } from "./userSlice"
import { ValidationErrorsResponse } from "../../../common/types"
//import { baseJwtQuery } from "../../../common/services/auth"

export const authApi = createApi({
  reducerPath: "authApi",
  // baseQuery: baseJwtQuery(BASE_AUTH_URL),
  baseQuery: fetchBaseQuery({ baseUrl: BASE_KINDERGARTEN_URL }),
  endpoints: (builder) => ({
    createKindergarten: builder.mutation<CreateKindergartenResponse, CreateKindergartenRequest>({
      query: ({ name }) => ({
        url: `/`,
        method: "POST",
        body: { name },
      }),
      transformResponse: (response: CreateKindergartenResponse) => response,
      transformErrorResponse: (response: ValidationErrorsResponse) => response,
    }),
    signUpConfirmation: builder.mutation<SignUpConfirmationResponse, SignUpConfirmationRequest>({
      query: ({ userId, token }) => ({
        url: `sign-up-confirmation`,
        method: "POST",
        body: { userId },
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      transformResponse: (response: SignUpConfirmationResponse) => response,
      transformErrorResponse: (response: ValidationErrorsResponse) => response.data,
    }),

    login: builder.mutation<SignInResponse, SignInRequest>({
      query: ({ email, password }) => ({
        url: `sign-in`,
        method: "POST",
        body: { email, password },
      }),

      transformResponse: (response: SignInResponse) => response,
      transformErrorResponse: (response: ValidationErrorsResponse) => response.data,
    }),

    resetPassword: builder.mutation<ResetPasswordResponse, ResetPasswordRequest>({
      query: ({ email }) => ({
        url: `reset-password`,
        method: "POST",
        body: { email },
      }),

      transformResponse: (response: ResetPasswordResponse) => response,
      transformErrorResponse: (response: ValidationErrorsResponse) => response.data,
    }),

    newPassword: builder.mutation<NewPasswordResponse, NewPasswordRequest>({
      query: ({ jwtToken, newPassword, newPasswordConfirmation }) => ({
        url: `new-password`,
        method: "POST",
        body: { jwtToken, newPassword, newPasswordConfirmation },
      }),

      transformResponse: (response: NewPasswordResponse) => response,
      transformErrorResponse: (response: ValidationErrorsResponse) => response.data,
    }),
  }),
})

export const { useSignUpConfirmationMutation, useLoginMutation, useResetPasswordMutation, useNewPasswordMutation } = authApi
