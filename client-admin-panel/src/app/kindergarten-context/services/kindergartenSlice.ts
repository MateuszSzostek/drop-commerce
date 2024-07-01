import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import {
  CreateKindergartenResponse,
  CreateKindergartenRequest,
  DeleteKindergartenResponse,
  DeleteKindergartenRequest,
  GetAllKindergartenRequest,
  GetAllKindergartenResponse,
  GetKindergartenResponse,
  GetKindergartenRequest,
  UpdateKindergartenResponse,
  UpdateKindergartenRequest,
  GetAllByUserKindergartenResponse,
  GetAllByUserKindergartenRequest,
} from "../domain/kindergarten-context"
import { BASE_KINDERGARTEN_URL } from "../domain/kindergarten-context"
import { ValidationErrorsResponse } from "../../../common/types"
//import { baseJwtQuery } from "../../../common/services/auth"

export const kindergartenApi = createApi({
  reducerPath: "kindergartenApi",
  // baseQuery: baseJwtQuery(BASE_AUTH_URL),
  baseQuery: fetchBaseQuery({ baseUrl: BASE_KINDERGARTEN_URL, credentials: "include" }),
  tagTypes: ["Kindergarten"],
  endpoints: (builder) => ({
    createKindergarten: builder.mutation<CreateKindergartenResponse, CreateKindergartenRequest>({
      query: (payload) => ({
        url: `/new`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Kindergarten"],
      transformResponse: (response: CreateKindergartenResponse) => response,
      transformErrorResponse: (response: ValidationErrorsResponse) => response,
    }),
    deleteKindergarten: builder.mutation<DeleteKindergartenResponse, DeleteKindergartenRequest>({
      query: ({ id }) => ({
        url: `/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Kindergarten"],
      transformResponse: (response: DeleteKindergartenResponse) => response,
      transformErrorResponse: (response: ValidationErrorsResponse) => response,
    }),
    getAllKindergartens: builder.query<GetAllKindergartenResponse, GetAllKindergartenRequest>({
      query: () => ({
        url: `/get-all`,
        method: "GET",
      }),
      providesTags: ["Kindergarten"],
      transformResponse: (response: GetAllKindergartenResponse) => response,
      transformErrorResponse: (response: ValidationErrorsResponse) => response,
    }),
    getAllByUserKindergartens: builder.query<GetAllByUserKindergartenResponse, GetAllByUserKindergartenRequest>({
      query: () => ({
        url: `/all-by-user`,
        method: "GET",
      }),
      providesTags: ["Kindergarten"],
      transformResponse: (response: GetAllByUserKindergartenResponse) => response,
      transformErrorResponse: (response: ValidationErrorsResponse) => response,
    }),
    getKindergarten: builder.query<GetKindergartenResponse, GetKindergartenRequest>({
      query: ({ id }) => ({
        url: `/get/${id}`,
        method: "GET",
      }),
      transformResponse: (response: GetKindergartenResponse) => response,
      transformErrorResponse: (response: ValidationErrorsResponse) => response,
    }),
    updateKindergarten: builder.mutation<UpdateKindergartenResponse, UpdateKindergartenRequest>({
      query: (payload) => ({
        url: `/update/${payload.id}`,
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: ["Kindergarten"],
      transformResponse: (response: GetKindergartenResponse) => response,
      transformErrorResponse: (response: ValidationErrorsResponse) => response,
    }),
  }),
})

export const {
  useCreateKindergartenMutation,
  useUpdateKindergartenMutation,
  useLazyGetKindergartenQuery,
  useDeleteKindergartenMutation,
  useGetAllByUserKindergartensQuery,
  useGetKindergartenQuery,
} = kindergartenApi
