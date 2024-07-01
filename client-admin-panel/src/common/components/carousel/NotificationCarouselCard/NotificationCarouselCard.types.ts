import { CardProps } from "antd"

export interface INotificationCarouselCard extends CardProps {
  /**
   * Is this the version displayed on the landing page or inside the app?
   */
  styleType?: NotificationCarouselCardStyleType
}
export enum NotificationCarouselCardStyleType {
  PRIMARY = "primary",
}
