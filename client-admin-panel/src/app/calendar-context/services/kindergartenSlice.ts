import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { CreateKindergartenResponse, CreateKindergartenRequest } from "../domain/kindergarten-context"
import { BASE_KINDERGARTEN_URL } from "../domain/kindergarten-context"
import { ValidationErrorsResponse } from "../../../common/types"
//import { baseJwtQuery } from "../../../common/services/auth"

export const kindergartenApi = createApi({
  reducerPath: "kindergartenApi",
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
  }),
})

export const {} = kindergartenApi
