import { TextProps } from "antd/es/typography/Text"

export interface IText extends TextProps {
  /**
   * Which version of typography is it?
   */
  styleType?: TextStyleType
}
export enum TextStyleType {
  //Landing Styles
  LANDING_PRIMARY_TITLE = "landing-primary-title",
  LANDING_SIMPLE = "landing-simple",
  //App styles
  PRIMARY_TITLE = "primary-title",
  SIMPLE = "simple",
  APP_REGULAR = "app-regular",
  APP_REGULAR_BOLD = "app-regular-bold",
}
