import { BASE_API_URL } from "../../../common/consts/index"
import { SelectOptions } from "../../../common/types"

/*
 *** Requests Types
 */

export type RegisterCustomerRequest = {}
export type RegisterCustomerResponse = {
  status: "success" | "error"
  code: number
  message: string
  data: {}
}

export type GetCustomerRequest = {
  id: string
}
export type GetCustomerResponse = {
  status: "success" | "error"
  code: number
  message: string
  data: {}
}

export type DeleteCustomerRequest = {
  id: string
}
export type DeleteCustomerResponse = {
  status: "success" | "error"
  code: number
  message: string
  data: {}
}

export type UpdateCustomerRequest = {
  id: string
}
export type UpdateCustomerResponse = {
  status: "success" | "error"
  code: number
  message: string
  data: {}
}

export type GetCustomersRequest = {}
export type GetCustomersResponse = {
  status: "success" | "error"
  code: number
  message: string
  data: Customer[]
}

/*
 *** Fields Types
 */

export interface CustomersDataType {
  key: string
  lp: number | string
  id: string
  name: string
  surname: string
  addresses: {
    houseNumber: string
    street: string
    city: string
    postCode: string
  }[]
}

export interface FilterCustomersFieldType {
  name: string
  surname: string
}

export interface CustomerFieldType {
  id: string
  name: string
  surname: string
  addresses: {
    houseNumber: string
    street: string
    city: string
    postCode: string
  }[]
}

/*
 *** Components Props Types
 */

/*
 *** Other Types & Interfaces
 */

export interface Customer {
  id: string
  name: string
  surname: string
  addresses: {
    houseNumber: string
    street: string
    city: string
    postCode: string
  }[]
}

/*
 *** Field Types Keys
 */

export enum CUSTOMER_INPUT_FIELDS {
  id = "id",
  name = "name",
  surname = "surname",
  addresses = "adresses",
}

export enum FILTER_CUSTOMERS_INPUT_FIELDS {
  name = "name",
  surname = "surname",
}

export const CUSTOMERS_TABLE_HEADERS = {
  lp: "lp",
  id: "id",
  name: "name",
  surname: "surname",
}

//////////////////////////////

export const BASE_CUSTOMER_URL = `${BASE_API_URL}api/customer/`
