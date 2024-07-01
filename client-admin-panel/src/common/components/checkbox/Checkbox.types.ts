import { CheckboxProps } from "antd"

export interface ICheckbox extends CheckboxProps {
  /**
   * Is this the version displayed on the landing page or inside the app?
   */
  styleType?: CheckboxStyleType
}
export enum CheckboxStyleType {
  PRIMARY = "primary",
  LANDING = "landing",
}
