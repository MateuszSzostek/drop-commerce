import { InputProps } from "antd"

export interface IPasswordInput extends InputProps {
  /**
   * Is this the version displayed on the landing page or inside the app?
   */
  styleType?: PasswordInputStyleType
}
export enum PasswordInputStyleType {
  PRIMARY = "primary",
  LANDING = "landing",
}
