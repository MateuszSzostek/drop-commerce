import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import {
  CreateGroupRequest,
  CreateGroupResponse,
  GetGroupRequest,
  GetGroupResponse,
  GetAllGroupsByUserRequest,
  GetAllGroupsByUserResponse,
  GetAllGroupsByKindergartenRequest,
  GetAllGroupsByKindergartenResponse,
  GetAllGroupsRequest,
  GetAllGroupsResponse,
  DeleteGroupRequest,
  DeleteGroupResponse,
  UpdateGroupRequest,
  UpdateGroupResponse,
} from "../domain/groups-context"
import { BASE_GROUP_URL } from "../domain/groups-context"
import { ValidationErrorsResponse } from "../../../common/types"
//import { baseJwtQuery } from "../../../common/services/auth"

export const groupApi = createApi({
  reducerPath: "groupApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_GROUP_URL, credentials: "include" }),
  tagTypes: ["Group"],
  endpoints: (builder) => ({
    createGroup: builder.mutation<CreateGroupResponse, CreateGroupRequest>({
      query: ({ name, icon, color, kindergartenId }) => ({
        url: `/new`,
        method: "POST",
        body: { name, icon, color, kindergartenId },
      }),
      invalidatesTags: ["Group"],
      transformResponse: (response: CreateGroupResponse) => response,
      transformErrorResponse: (response: ValidationErrorsResponse) => response,
    }),
    getGroup: builder.query<GetGroupResponse, GetGroupRequest>({
      query: ({ groupId }) => ({
        url: `/get/${groupId}`,
        method: "GET",
      }),
      transformResponse: (response: GetGroupResponse) => response,
      transformErrorResponse: (response: ValidationErrorsResponse) => response,
    }),
    deleteGroup: builder.mutation<DeleteGroupResponse, DeleteGroupRequest>({
      query: ({ id }) => ({
        url: `/delete/${id}`,
        method: "DELETE",
      }),
      transformResponse: (response: DeleteGroupResponse) => response,
      transformErrorResponse: (response: ValidationErrorsResponse) => response,
    }),
    updateGroup: builder.mutation<UpdateGroupResponse, UpdateGroupRequest>({
      query: ({ id }) => ({
        url: `/${id}`,
        method: "PUT",
      }),
      transformResponse: (response: GetGroupResponse) => response,
      transformErrorResponse: (response: ValidationErrorsResponse) => response,
    }),
    getAllGroups: builder.query<GetAllGroupsResponse, GetAllGroupsRequest>({
      query: () => ({
        url: `/get-all`,
        method: "GET",
      }),
      transformResponse: (response: GetAllGroupsResponse) => response,
      transformErrorResponse: (response: ValidationErrorsResponse) => response,
    }),
    getAllGroupsByUser: builder.query<GetAllGroupsByUserResponse, GetAllGroupsByUserRequest>({
      query: () => ({
        url: `/all-by-user`,
        method: "GET",
      }),
      providesTags: ["Group"],
      transformResponse: (response: GetAllGroupsByUserResponse) => response,
      transformErrorResponse: (response: ValidationErrorsResponse) => response,
    }),
    getAllGroupsByKindergarten: builder.query<GetAllGroupsByKindergartenResponse, GetAllGroupsByKindergartenRequest>({
      query: ({ kindergartenId }) => ({
        url: `/all-by-kindergarten/${kindergartenId}`,
        method: "GET",
      }),
      providesTags: ["Group"],
      transformResponse: (response: GetAllGroupsByKindergartenResponse) => response,
      transformErrorResponse: (response: ValidationErrorsResponse) => response,
    }),
  }),
})

export const {
  useGetAllGroupsByKindergartenQuery,
  useLazyGetAllGroupsByKindergartenQuery,
  useGetAllGroupsByUserQuery,
  useCreateGroupMutation,
  useGetGroupQuery,
} = groupApi
