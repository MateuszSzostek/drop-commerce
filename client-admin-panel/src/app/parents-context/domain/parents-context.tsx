import { faker } from "@faker-js/faker"
import { BASE_API_URL } from "../../../common/consts/index"
import { Space, TableProps } from "antd"

/*
 *** Requests Types
 */

export type CreateParentRequest = {
  name: string
  icon: string
  color: string
  kindergartenId: string
}
export type CreateParentResponse = {
  status: "success" | "error"
  code: number
  message: string
  data: {}
}

export type GetParentRequest = {
  parentId: string
}
export type GetParentResponse = {
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

export type GetAllParentsByUserRequest = {}
export type GetAllParentsByUserResponse = {
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

export type GetParentByKindergartenRequest = {}
export type GetParentByKindergartenResponse = {
  status: "success" | "error"
  code: number
  message: string
  data: {}
}

export type GetAllParentsByKindergartenRequest = {
  kindergartenId: string
}
export type GetAllParentsByKindergartenResponse = {
  status: "success" | "error"
  code: number
  message: string
  data: Parent[]
}

export type GetAllParentsRequest = {}
export type GetAllParentsResponse = {
  status: "success" | "error"
  code: number
  message: string
  data: {}
}

export type DeleteParentRequest = {
  id: string
}
export type DeleteParentResponse = {
  status: "success" | "error"
  code: number
  message: string
  data: {}
}

export type UpdateParentRequest = {
  id: string
}
export type UpdateParentResponse = {
  status: "success" | "error"
  code: number
  message: string
  data: {}
}

/*
 *** Fields Types
 */

/*
 *** Components Props Types
 */

/*
 *** Other Types & Interfaces
 */

/*
 *** Field Types Keys
 */

//////////////////////////////

export const BASE_PARENT_URL = `${BASE_API_URL}api/parent/`
