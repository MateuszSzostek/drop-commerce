import { Card as AntCard } from "antd"
import { INavigationCard, NavigationCardStyleType } from "./NavigationCard.types"
import { PropsWithChildren } from "react"
import "./NavigationCard.styles.scss"

export default function NavigationCard({
  children = "NavigationCard Content",
  styleType = NavigationCardStyleType.PRIMARY,
  ...props
}: PropsWithChildren<INavigationCard>) {
  return (
    <AntCard {...props} className={`navigation-card navigation-card--${styleType} ${props?.className}`}>
      {children}
    </AntCard>
  )
}
