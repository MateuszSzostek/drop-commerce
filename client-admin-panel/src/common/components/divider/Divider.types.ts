import { DividerProps } from "antd"

export interface IDivider extends DividerProps {
  /**
   * Is this the primary version of divider?
   */
  styleType?: DividerStyleType
}
export enum DividerStyleType {
  PRIMARY = "primary",
}
