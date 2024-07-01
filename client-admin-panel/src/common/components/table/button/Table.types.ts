import { TableProps } from "antd"

export interface ITable extends TableProps {
  /**
   * Is this the primary table?
   */
  styleType?: TableStyleType
}
export enum TableStyleType {
  PRIMARY = "primary",
}
