import { SelectProps } from "antd"

export interface ISelect extends SelectProps {
  /**
   * Is this the version displayed on the landing page or inside the app?
   */
  styleType?: SelectStyleType
}
export enum SelectStyleType {
  PRIMARY = "primary",
  LANDING = "landing",
}
