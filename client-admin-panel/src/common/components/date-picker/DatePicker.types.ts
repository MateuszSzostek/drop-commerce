import { DatePickerProps } from "antd"

export interface IDatePicker extends DatePickerProps {
  /**
   * Is this the primary date picker ?
   */
  styleType?: DatePickerStyleType
}
export enum DatePickerStyleType {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}
