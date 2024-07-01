import { faker } from "@faker-js/faker"
import { BASE_API_URL } from "../../../common/consts/index"
import { Space, TableProps } from "antd"
import { SelectOptions } from "../../../common/types"

/*
 *** Requests Types
 */

export type CreateChildRequest = {
  ownerId: string
  name: string
  surname: string
  shortName: string
  pesel: string
  dateOfBirthday: string
  placeOfBirth: string
  groups: string[]
  sex: string
  parents: string[]
}
export type CreateChildResponse = {
  status: "success" | "error"
  code: number
  message: string
  data: {}
}

export type GetChildRequest = {
  id: string
}
export type GetChildResponse = {
  status: "success" | "error"
  code: number
  message: string
  data: Child
}

export type GetAllChildrenRequest = {}
export type GetAllChildrenResponse = {
  status: "success" | "error"
  code: number
  message: string
  data: Child[]
}

export type GetAllChildrenByUserRequest = {}
export type GetAllChildrenByUserResponse = {
  status: "success" | "error"
  code: number
  message: string
  data: Child[]
}

export type GetAllChildrenByKindergartenRequest = {
  kindergartenId: string
}
export type GetAllChildrenByKindergartenResponse = {
  status: "success" | "error"
  code: number
  message: string
  data: {}
}

export type GetAllChildrenByGroupRequest = {
  groupId: string
}
export type GetAllChildrenByGroupResponse = {
  status: "success" | "error"
  code: number
  message: string
  data: {}
}

export type DeleteChildRequest = {
  id: string
}
export type DeleteChildResponse = {
  status: "success" | "error"
  code: number
  message: string
  data: {}
}

export type UpdateChildRequest = {
  id: string
}
export type UpdateChildResponse = {
  status: "success" | "error"
  code: number
  message: string
  data: {}
}

/*
 *** Fields Types
 */
export type NewChildFieldType = {
  ownerId: string
  name: string
  surname: string
  shortName: string
  pesel: string
  dateOfBirthday: string
  placeOfBirth: string
  groups: string[]
  sex: string
  parents: string[]
}

/*
 *** Components Props Types
 */

/*
 *** Other Types & Interfaces
 */

export const sexSelectOptions: SelectOptions = [
  { value: "male", label: "Chlopiec" },
  { value: "female", label: "Dziewczynka" },
]

export interface Child {
  id: string
  ownerId: string
  name: string
  surname: string
  shortName: string
  pesel: string
  dateOfBirthday: string
  placeOfBirth: string
  groups: { name: string; id: string }[]
  sex: string
  parents: { name: string; surname: string; id: string }[]
}

/*
 *** Field Types Keys
 */
export enum NEW_CHILD_INPUT_FIELDS {
  name = "name",
  surname = "surname",
  shortName = "shortName",
  pesel = "pesel",
  dateOfBirthday = "dateOfBirthday",
  placeOfBirth = "placeOfBirth",
  groups = "groups",
  kindergarten = "kindergarten",
  sex = "sex",
  parents = "parents",
}

//////////////////////////////

export const BASE_CHILDREN_URL = `${BASE_API_URL}api/children/`
