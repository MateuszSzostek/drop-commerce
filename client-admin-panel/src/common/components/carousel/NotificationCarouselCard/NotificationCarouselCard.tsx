import { Card as AntCard } from "antd"
import { INotificationCarouselCard, NotificationCarouselCardStyleType } from "./NotificationCarouselCard.types"
import { PropsWithChildren } from "react"
import "./NotificationCarouselCard.styles.scss"

export default function NotificationCarouselCard({
  children = "NotificationCarouselCard Content",
  styleType = NotificationCarouselCardStyleType.PRIMARY,
  ...props
}: PropsWithChildren<INotificationCarouselCard>) {
  return (
    <AntCard {...props} className={`notification-carousel-card notification-carousel-card--${styleType} ${props?.className}`}>
      {children}
    </AntCard>
  )
}
