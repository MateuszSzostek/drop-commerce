import { InputProps } from "antd"

export interface ITextInput extends InputProps {
  /**
   * Is this the version displayed on the landing page or inside the app?
   */
  styleType?: TextInputStyleType
}
export enum TextInputStyleType {
  PRIMARY = "primary",
  LANDING = "landing",
}
