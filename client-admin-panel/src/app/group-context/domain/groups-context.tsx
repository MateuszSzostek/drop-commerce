import { faker } from "@faker-js/faker"
import { BASE_API_URL } from "../../../common/consts/index"
import { Space, TableProps } from "antd"

/*
 *** Requests Types
 */

export type CreateGroupRequest = {
  name: string
  icon: string
  color: string
  kindergartenId: string
}
export type CreateGroupResponse = {
  status: "success" | "error"
  code: number
  message: string
  data: {}
}

export type GetGroupRequest = {
  groupId: string
}
export type GetGroupResponse = {
  status: "success" | "error"
  code: number
  message: string
  data: {
    name: string
    color: string
    teachers: {
      name: string
      id: string
    }[]
    children: {
      name: string
      id: string
    }[]
  }
}

export type GetAllGroupsByUserRequest = {}
export type GetAllGroupsByUserResponse = {
  status: "success" | "error"
  code: number
  message: string
  data: {
    children: []
    teachers: { id: string; name: string }[]
    ownerId: string
    kindergartenId: string
    name: string
    color: string
    kidsAmount: number
    id: string
  }[]
}

export type GetGroupByKindergartenRequest = {}
export type GetGroupByKindergartenResponse = {
  status: "success" | "error"
  code: number
  message: string
  data: {}
}

export type GetAllGroupsByKindergartenRequest = {
  kindergartenId: string
}
export type GetAllGroupsByKindergartenResponse = {
  status: "success" | "error"
  code: number
  message: string
  data: Group[]
}

export type GetAllGroupsRequest = {}
export type GetAllGroupsResponse = {
  status: "success" | "error"
  code: number
  message: string
  data: {}
}

export type DeleteGroupRequest = {
  id: string
}
export type DeleteGroupResponse = {
  status: "success" | "error"
  code: number
  message: string
  data: {}
}

export type UpdateGroupRequest = {
  id: string
}
export type UpdateGroupResponse = {
  status: "success" | "error"
  code: number
  message: string
  data: {}
}

/*
 *** Fields Types
 */

export type NewGroupFieldType = {
  name: string
  color: string
  icon: string
  kindergarten: string
}

/*
 *** Components Props Types
 */

/*
 *** Other Types & Interfaces
 */

export type Group = {
  id: string
  ownerId: string
  kindergartenId: string
  name: string
  children: string[]
  teachers: string[]
  color: string
  kidsAmount: number
}

/*
 *** Field Types Keys
 */

export enum NEW_GROUP_INPUT_FIELDS {
  name = "name",
  kindergarten = "kindergarten",
  icon = "icon",
  color = "color",
}

//////////////////////////////

export const BASE_GROUP_URL = `${BASE_API_URL}api/group/`
