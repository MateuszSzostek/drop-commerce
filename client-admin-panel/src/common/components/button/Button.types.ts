import { ButtonProps } from "antd/lib/button"

export interface IButton extends ButtonProps {
  /**
   * Is this the primary or secondary button?
   */
  styleType?: ButtonStyleType
  /**
   * How large should the button be?
   */
  size?: "small" | "middle" | "large" | undefined
}
export enum ButtonStyleType {
  LANDING = "landing",
  PRIMARY = "primary",
  SECONDARY = "secondary",
  PRIMARY_DANGER = "primary-danger",
  PRIMITIVE = "primitive",
}
