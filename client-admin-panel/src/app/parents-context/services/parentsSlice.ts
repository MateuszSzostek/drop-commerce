import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import {
  CreateParentRequest,
  CreateParentResponse,
  GetParentRequest,
  GetParentResponse,
  GetAllParentsByUserRequest,
  GetAllParentsByUserResponse,
  GetAllParentsByKindergartenRequest,
  GetAllParentsByKindergartenResponse,
  GetAllParentsRequest,
  GetAllParentsResponse,
  DeleteParentRequest,
  DeleteParentResponse,
  UpdateParentRequest,
  UpdateParentResponse,
} from "../domain/parents-context"
import { BASE_PARENT_URL } from "../domain/parents-context"
import { ValidationErrorsResponse } from "../../../common/types"
//import { baseJwtQuery } from "../../../common/services/auth"

export const parentApi = createApi({
  reducerPath: "parentApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_PARENT_URL, credentials: "include" }),
  tagTypes: ["Parent"],
  endpoints: (builder) => ({
    createParent: builder.mutation<CreateParentResponse, CreateParentRequest>({
      query: ({ name, icon, color, kindergartenId }) => ({
        url: `/new`,
        method: "POST",
        body: { name, icon, color, kindergartenId },
      }),
      invalidatesTags: ["Parent"],
      transformResponse: (response: CreateParentResponse) => response,
      transformErrorResponse: (response: ValidationErrorsResponse) => response,
    }),
    getParent: builder.query<GetParentResponse, GetParentRequest>({
      query: ({ parentId }) => ({
        url: `/get/${parentId}`,
        method: "GET",
      }),
      transformResponse: (response: GetParentResponse) => response,
      transformErrorResponse: (response: ValidationErrorsResponse) => response,
    }),
    deleteParent: builder.mutation<DeleteParentResponse, DeleteParentRequest>({
      query: ({ id }) => ({
        url: `/delete/${id}`,
        method: "DELETE",
      }),
      transformResponse: (response: DeleteParentResponse) => response,
      transformErrorResponse: (response: ValidationErrorsResponse) => response,
    }),
    updateParent: builder.mutation<UpdateParentResponse, UpdateParentRequest>({
      query: ({ id }) => ({
        url: `/${id}`,
        method: "PUT",
      }),
      transformResponse: (response: GetParentResponse) => response,
      transformErrorResponse: (response: ValidationErrorsResponse) => response,
    }),
    getAllParents: builder.query<GetAllParentsResponse, GetAllParentsRequest>({
      query: () => ({
        url: `/get-all`,
        method: "GET",
      }),
      transformResponse: (response: GetAllParentsResponse) => response,
      transformErrorResponse: (response: ValidationErrorsResponse) => response,
    }),
    getAllParentsByUser: builder.query<GetAllParentsByUserResponse, GetAllParentsByUserRequest>({
      query: () => ({
        url: `/all-by-user`,
        method: "GET",
      }),
      providesTags: ["Parent"],
      transformResponse: (response: GetAllParentsByUserResponse) => response,
      transformErrorResponse: (response: ValidationErrorsResponse) => response,
    }),
    getAllParentsByKindergarten: builder.query<GetAllParentsByKindergartenResponse, GetAllParentsByKindergartenRequest>({
      query: ({ kindergartenId }) => ({
        url: `/all-by-kindergarten/${kindergartenId}`,
        method: "GET",
      }),
      providesTags: ["Parent"],
      transformResponse: (response: GetAllParentsByKindergartenResponse) => response,
      transformErrorResponse: (response: ValidationErrorsResponse) => response,
    }),
  }),
})

export const { useGetAllParentsByKindergartenQuery, useGetAllParentsByUserQuery, useCreateParentMutation, useGetParentQuery } = parentApi
