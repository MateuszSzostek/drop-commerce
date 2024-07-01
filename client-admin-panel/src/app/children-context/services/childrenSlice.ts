import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import {
  CreateChildRequest,
  CreateChildResponse,
  GetChildRequest,
  GetChildResponse,
  GetAllChildrenRequest,
  GetAllChildrenResponse,
  DeleteChildRequest,
  DeleteChildResponse,
  UpdateChildRequest,
  UpdateChildResponse,
  GetAllChildrenByUserResponse,
  GetAllChildrenByUserRequest,
  GetAllChildrenByKindergartenResponse,
  GetAllChildrenByKindergartenRequest,
  GetAllChildrenByGroupResponse,
  GetAllChildrenByGroupRequest,
} from "../domain/children-context"
import { BASE_CHILDREN_URL } from "../domain/children-context"
import { ValidationErrorsResponse } from "../../../common/types"

export const childrenApi = createApi({
  reducerPath: "childrenApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_CHILDREN_URL, credentials: "include" }),
  tagTypes: ["Children"],
  endpoints: (builder) => ({
    createChild: builder.mutation<CreateChildResponse, CreateChildRequest>({
      query: (payload) => ({
        url: `/new`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Children"],
      transformResponse: (response: CreateChildResponse) => response,
      transformErrorResponse: (response: ValidationErrorsResponse) => response,
    }),
    getChild: builder.query<GetChildResponse, GetChildRequest>({
      query: ({ id }) => ({
        url: `/get/${id}`,
        method: "GET",
      }),
      transformResponse: (response: GetChildResponse) => response,
      transformErrorResponse: (response: ValidationErrorsResponse) => response,
    }),
    deleteChild: builder.mutation<DeleteChildResponse, DeleteChildRequest>({
      query: ({ id }) => ({
        url: `/delete/${id}`,
        method: "DELETE",
      }),
      transformResponse: (response: DeleteChildResponse) => response,
      transformErrorResponse: (response: ValidationErrorsResponse) => response,
    }),
    updateChild: builder.mutation<UpdateChildResponse, UpdateChildRequest>({
      query: ({ id }) => ({
        url: `/${id}`,
        method: "PUT",
      }),
      transformResponse: (response: GetChildResponse) => response,
      transformErrorResponse: (response: ValidationErrorsResponse) => response,
    }),
    getAllChildren: builder.query<GetAllChildrenResponse, GetAllChildrenRequest>({
      query: () => ({
        url: `/get-all`,
        method: "GET",
      }),
      transformResponse: (response: GetAllChildrenResponse) => response,
      transformErrorResponse: (response: ValidationErrorsResponse) => response,
    }),
    getAllChildrenByUser: builder.query<GetAllChildrenByUserResponse, GetAllChildrenByUserRequest>({
      query: () => ({
        url: `/all-by-user`,
        method: "GET",
      }),
      providesTags: ["Children"],
      transformResponse: (response: GetAllChildrenByUserResponse) => response,
      transformErrorResponse: (response: ValidationErrorsResponse) => response,
    }),
    getAllChildrenByKindergarten: builder.query<GetAllChildrenByKindergartenResponse, GetAllChildrenByKindergartenRequest>({
      query: ({ kindergartenId }) => ({
        url: `/all-by-kindergarten/${kindergartenId}`,
        method: "GET",
      }),
      providesTags: ["Children"],
      transformResponse: (response: GetAllChildrenByKindergartenResponse) => response,
      transformErrorResponse: (response: ValidationErrorsResponse) => response,
    }),
    getAllChildrenByGroup: builder.query<GetAllChildrenByGroupResponse, GetAllChildrenByGroupRequest>({
      query: ({ groupId }) => ({
        url: `/all-by-group/${groupId}`,
        method: "GET",
      }),
      providesTags: ["Children"],
      transformResponse: (response: GetAllChildrenByGroupResponse) => response,
      transformErrorResponse: (response: ValidationErrorsResponse) => response,
    }),
  }),
})

export const { useCreateChildMutation, useGetAllChildrenByUserQuery } = childrenApi
