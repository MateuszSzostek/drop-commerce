import { FormItemProps } from "antd"

export interface IFormItem extends FormItemProps {
  /**
   * Is this the version displayed on the landing page or inside the app?
   */
  styleType?: FormItemStyleType
}
export enum FormItemStyleType {
  PRIMARY = "primary",
  LANDING = "landing",
}
