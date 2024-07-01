import { LinkProps } from "antd/es/typography/Link"

export interface ILink extends LinkProps {
  /**
   * Which version of link it is?
   */
  styleType?: LinkStyleType
  to: string
}
export enum LinkStyleType {
  SIMPLE = "simple",
  NAV = "nav",
  TABLE_RECORD = "table-record",
}
