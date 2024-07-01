import { faker } from "@faker-js/faker"
import { BASE_API_URL } from "../../../common/consts/index"
import { Space, TableProps } from "antd"

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
export type SignUpFieldType = {
  email: string
  password: string
  privacyPolicy: boolean
}

export type SignInFieldType = {
  email: string
  password: string
}

export type ResetPasswordFieldType = {
  email: string
}

export type NewPasswordFieldType = {
  newPassword: string
  newPasswordConfirmation: string
}

/*
 *** Components Props Types
 */
export type RegisterLinkConfirmationModalProps = {
  isOpen: boolean
}

export type PasswordChangedConfirmationModalProps = {
  isOpen: boolean
}

export type ResetPasswordRequestSentConfirmationModalProps = {
  isOpen: boolean
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

/*
 *** Field Types Keys
 */
export enum SIGN_UP_INPUT_FIELDS {
  email = "email",
  password = "password",
  privacyPolicy = "privacyPolicy",
}

export enum SIGN_IN_INPUT_FIELDS {
  email = "email",
  password = "password",
}

export enum RESET_PASSWORD_INPUT_FIELDS {
  email = "email",
}

export enum NEW_PASSWORD_INPUT_FIELDS {
  newPassword = "newPassword",
  newPasswordConfirmation = "newPasswordConfirmation",
}

export interface IUserActionByKey {
  key: "name" | "surname" | "userId" | "sessionToken"
  value: string
}

//////////////////////////////

export const BASE_KINDERGARTEN_URL = `${BASE_API_URL}api/kindergarten/`
