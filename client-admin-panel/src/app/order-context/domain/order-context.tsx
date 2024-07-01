import { BASE_API_URL } from "../../../common/consts/index"

/*
 *** Requests Types
 */

export type AddOrderRequest = {}
export type AddOrderResponse = {
  status: "success" | "error"
  code: number
  message: string
  data: {}
}

export type GetOrderRequest = {
  id: string
}
export type GetOrderResponse = {
  status: "success" | "error"
  code: number
  message: string
  data: {}
}

export type DeleteOrderRequest = {
  id: string
}
export type DeleteOrderResponse = {
  status: "success" | "error"
  code: number
  message: string
  data: {}
}

export type UpdateOrderRequest = {
  id: string
}
export type UpdateOrderResponse = {
  status: "success" | "error"
  code: number
  message: string
  data: {}
}

export type GetOrdersRequest = {}
export type GetOrdersResponse = {
  status: "success" | "error"
  code: number
  message: string
  data: Order[]
}

/*
 *** Fields Types
 */

export interface OrdersDataType {
  key: string
  lp: number | string
  id: string
  ownerName: string
  ownerSurname: string
  basket: {
    providerId: string
    products: {
      id: string
      name: string
      amount: string
      shortDescription: string
      price: string
      totalNettoPrice: string
      totalBruttoPrice: string
      thubnail: string
    }[]
  }[]
}

export interface FilterOrdersFieldType {
  ownerName: string
  ownerSurname: string
}

export interface OrderFieldType {
  lp: number | string
  id: string
  ownerName: string
  ownerSurname: string
  basket: {
    providerId: string
    products: {
      id: string
      name: string
      amount: string
      shortDescription: string
      price: string
      totalNettoPrice: string
      totalBruttoPrice: string
      thubnail: string
    }[]
  }[]
}

/*
 *** Components Props Types
 */

/*
 *** Other Types & Interfaces
 */

export interface Order {
  lp: number | string
  id: string
  ownerName: string
  ownerSurname: string
  basket: {
    providerId: string
    products: {
      id: string
      name: string
      amount: string
      shortDescription: string
      price: string
      totalNettoPrice: string
      totalBruttoPrice: string
      thubnail: string
    }[]
  }[]
}

/*
 *** Field Types Keys
 */

export enum FILTER_ORDERS_INPUT_FIELDS {
  ownerName = "ownerName",
  ownerSurname = "ownerSurname",
}

export const ORDERS_TABLE_HEADERS = {
  lp: "lp",
  ownerId: "ownerId",
  ownerName: "ownerName",
  ownerSurname: "pwnerSurname",
  price: "price",
  status: "status",
}

//////////////////////////////

export const BASE_ORDER_URL = `${BASE_API_URL}api/order/`
