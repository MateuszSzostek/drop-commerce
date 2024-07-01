import { faker } from "@faker-js/faker"
import { BASE_API_URL } from "../../../common/consts/index"
import { Space, TableProps } from "antd"

/*
 *** Requests Types
 */

export type CreateKindergartenRequest = {
  name: string
  address: string
  color: string
}
export type CreateKindergartenResponse = {
  status: "success" | "error"
  code: number
  message: string
  data: {}
}

export type GetKindergartenRequest = {
  id: string
}
export type GetKindergartenResponse = {
  status: "success" | "error"
  code: number
  message: string
  data: {
    name: string
    groups: string[]
    kidsAmount: number
    address: string
  }
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

export type GetAllByUserKindergartenRequest = {
  //kindergartenId: string
}
export type GetAllByUserKindergartenResponse = {
  status: "success" | "error"
  code: number
  message: string
  data: { groups: []; id: string; name: string; ownerId: string }[]
}

export type DeleteKindergartenRequest = {
  id: string
}
export type DeleteKindergartenResponse = {
  status: "success" | "error"
  code: number
  message: string
  data: {}
}

export type UpdateKindergartenRequest = {
  id: string
  name: string
  address: string
  color: string
}
export type UpdateKindergartenResponse = {
  status: "success" | "error"
  code: number
  message: string
  data: {}
}

/*
 *** Fields Types
 */
export type EditKindergartenFieldType = {
  name: string
  icon: string
  address: string
}

export type NewKindergartenFieldType = {
  name: string
  address: string
}

export type AssignGroupFieldType = {
  groupId: string
  kindergartenId: string
}

/*
 *** Components Props Types
 */

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

/*
 *** Field Types Keys
 */
export enum NEW_KINDERGARTEN_INPUT_FIELDS {
  name = "name",
  address = "address",
  icon = "icon",
}

export enum EDIT_KINDERGARTEN_INPUT_FIELDS {
  name = "name",
  address = "address",
  icon = "icon",
}

export enum ASSIGN_GROUP_INPUT_FIELDS {
  groupId = "groupId",
}

export interface IUserActionByKey {
  key: "name" | "surname" | "userId" | "sessionToken"
  value: string
}

//////////////////////////////

export const BASE_KINDERGARTEN_URL = `${BASE_API_URL}api/kindergarten/`
