import { CardProps } from "antd"

export interface INavigationCard extends CardProps {
  /**
   * Is this the version displayed on the landing page or inside the app?
   */
  styleType?: NavigationCardStyleType
}
export enum NavigationCardStyleType {
  PRIMARY = "primary",
}
