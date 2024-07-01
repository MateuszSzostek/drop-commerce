import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { ApplyCategoriesRequest, ApplyCategoriesResponse, GetCategoriesRequest, GetCategoriesResponse } from "../domain/category-context"
import { BASE_CATEGORY_URL } from "../domain/category-context"
import { ValidationErrorsResponse } from "../../../common/types"

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_CATEGORY_URL, credentials: "include" }),
  tagTypes: ["Categories"],
  endpoints: (builder) => ({
    applyCategories: builder.mutation<ApplyCategoriesResponse, ApplyCategoriesRequest>({
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
  }),
})

export const { useApplyCategoriesMutation, useGetCategoriesQuery, useLazyGetCategoriesQuery } = categoryApi
