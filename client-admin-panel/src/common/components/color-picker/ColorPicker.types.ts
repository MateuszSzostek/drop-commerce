import { ColorPickerProps } from "antd"

export interface IColorPicker extends ColorPickerProps {
  /**
   * Is this the primary or secondary button?
   */
  styleType?: ColorPickerStyleType
}
export enum ColorPickerStyleType {
  PRIMARY = "primary",
}
