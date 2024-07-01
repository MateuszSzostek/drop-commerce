import { faker } from "@faker-js/faker"
import { BASE_API_URL } from "../../../common/consts/index"
import { Space, TableProps } from "antd"
import { SelectOptions } from "../../../common/types"

/*
 *** Requests Types
 */

export type CreateKindergartenRequest = {
  name: string
}
export type CreateKindergartenResponse = {
  status: "success" | "error"
  code: number
  message: string
  data: {}
}

export type GetKindergartenRequest = {}
export type GetKindergartenResponse = {
  status: "success" | "error"
  code: number
  message: string
  data: {}
}

export type GetKindergartenByUserRequest = {}
export type GetKindergartenByUserResponse = {
  status: "success" | "error"
  code: number
  message: string
  data: {}
}

export type GetAllKindergartenRequest = {}
export type GetAllKindergartenResponse = {
  status: "success" | "error"
  code: number
  message: string
  data: {}
}

export type DeleteKindergartenRequest = {}
export type DeleteKindergartenResponse = {
  status: "success" | "error"
  code: number
  message: string
  data: {}
}

export type UpdateKindergartenRequest = {}
export type UpdateKindergartenResponse = {
  status: "success" | "error"
  code: number
  message: string
  data: {}
}

/*
 *** Fields Types
 */

export type AttendanceDiaryFiltersFieldType = {
  timeRange: string
  scopeRange: string
  kindergartens: string
  groups: string
  children: string
  teachers: string
}

/*
 *** Components Props Types
 */

export interface IChildCard {
  picture: string
  name: string
  id: string
}

/*
 *** Other Types & Interfaces
 */
export type MockUserType = {
  userId: string
  email: string
  password: string
  companyId: string
}

export interface IUserState {
  userId: string
  name: string
  surname: string
  sessionToken: string
}

export type EditChildFieldType = {
  name: string
  icon: string
}

/*
 *** Field Types Keys
 */
export enum ATTENDANCE_DIATY_FILTERS_INPUT_FIELDS {
  timeRange = "timeRange",
  scopeRange = "password",
  kindergartens = "kindergartens",
  groups = "groups",
  children = "children",
  teachers = "teachers",
  years = "years",
  months = "months",
  weeks = "weeks",
  days = "days",
}

export interface IUserActionByKey {
  key: "name" | "surname" | "userId" | "sessionToken"
  value: string
}

//////////////////////////////

export const BASE_KINDERGARTEN_URL = `${BASE_API_URL}api/kindergarten/`

export const DATE_RANGE_SELECT_OPTIONS: SelectOptions = [
  { value: "year", label: "year" },
  { value: "month", label: "month" },
  { value: "week", label: "week" },
  { value: "day", label: "day" },
]

export const SCOPE_SELECT_OPTIONS: SelectOptions = [
  { value: "kindergartens", label: "kindergartens" },
  { value: "groups", label: "groups" },
  { value: "children", label: "children" },
  { value: "teachers", label: "teachers" },
]
