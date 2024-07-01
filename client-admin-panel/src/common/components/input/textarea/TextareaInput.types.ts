import { TextAreaProps } from "antd/es/input"

export interface ITextareaInput extends TextAreaProps {
  /**
   * Is this the version displayed on the landing page or inside the app?
   */
  styleType?: TextareaInputStyleType
}
export enum TextareaInputStyleType {
  PRIMARY = "primary",
  LANDING = "landing",
}
