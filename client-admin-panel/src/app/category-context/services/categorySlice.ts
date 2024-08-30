import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  AddTagRequest,
  AddTagResponse,
  ApplyCategoriesRequest,
  ApplyCategoriesResponse,
  DeleteTagRequest,
  DeleteTagResponse,
  GetAllTagsRequest,
  GetAllTagsResponse,
  GetCategoriesRequest,
  GetCategoriesResponse,
} from "../domain/category-context";
import { BASE_CATEGORY_URL } from "../domain/category-context";
import { ValidationErrorsResponse } from "../../../common/types";

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_CATEGORY_URL,
    credentials: "include",
  }),
  tagTypes: ["Categories", "Tags"],
  endpoints: (builder) => ({
    applyCategories: builder.mutation<
      ApplyCategoriesResponse,
      ApplyCategoriesRequest
    >({
      query: (payload) => ({
        url: `/`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Categories"],
      transformResponse: (response: ApplyCategoriesResponse) => response,
      transformErrorResponse: (response: ValidationErrorsResponse) => response,
    }),
    getCategories: builder.query<GetCategoriesResponse, GetCategoriesRequest>({
      query: () => ({
        url: `/`,
        method: "GET",
      }),
      providesTags: ["Categories"],
      transformResponse: (response: GetCategoriesResponse) => response,
      transformErrorResponse: (response: ValidationErrorsResponse) => response,
    }),

    addTag: builder.mutation<AddTagResponse, AddTagRequest>({
      query: ({ name }) => {
        return {
          url: `/add-tag`,
          method: "POST",
          body: {
            name,
          },
        };
      },
      invalidatesTags: ["Tags"],
      transformResponse: (response: AddTagResponse) => response,
      transformErrorResponse: (response: ValidationErrorsResponse) => response,
    }),
    deleteTag: builder.mutation<DeleteTagResponse, DeleteTagRequest>({
      query: ({ id }) => ({
        url: `/tag/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Tags"],
      transformResponse: (response: DeleteTagResponse) => response,
      transformErrorResponse: (response: ValidationErrorsResponse) => response,
    }),
    getAllTags: builder.query<GetAllTagsResponse, GetAllTagsRequest>({
      query: () => ({
        url: `/tag/get-all`,
        method: "GET",
      }),
      providesTags: ["Tags"],
      transformResponse: (response: GetAllTagsResponse) => response,
      transformErrorResponse: (response: ValidationErrorsResponse) => response,
    }),
  }),
});

export const {
  useApplyCategoriesMutation,
  useGetCategoriesQuery,
  useLazyGetCategoriesQuery,
  useAddTagMutation,
  useDeleteTagMutation,
  useGetAllTagsQuery,
  useLazyGetAllTagsQuery,
} = categoryApi;
