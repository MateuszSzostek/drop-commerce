import { PropsWithChildren } from "react"
import { TooltipColorStyleType, ITooltip, TooltipStyleType } from "./Tooltip.types"
import "./Tooltip.styles.scss"
import { Tooltip as AntTooltip } from "antd"

export default function Tooltip({
  children = "",
  styleType = TooltipStyleType.PRIMARY,
  colorType = TooltipColorStyleType.PRIMARY,
  ...props
}: PropsWithChildren<ITooltip>) {
  return (
    <AntTooltip {...props} className={`tooltip tooltip--${styleType} tooltip-color--${colorType} ${props.className}`}>
      {children}
    </AntTooltip>
  )
}
