import { fetchBaseQuery } from "@reduxjs/toolkit/query"
import { RootState } from "../../config/toolkit/store"

export const baseJwtQuery = (baseUrl: string) =>
  fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).user.sessionToken

      if (headers.get("authorization") === "NaN") {
        headers.set("authorization", ``)
      } else if (token) {
        headers.set("authorization", `Bearer ${token}`)
      }

      return headers
    },
  })
