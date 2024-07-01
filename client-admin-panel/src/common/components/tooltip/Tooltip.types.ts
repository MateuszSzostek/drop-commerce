import { TooltipPropsWithOverlay } from "antd/es/tooltip"

export interface ITooltip extends TooltipPropsWithOverlay {
  /**
   * Which version of Tooltip is it?
   */
  styleType?: TooltipStyleType
  colorType?: TooltipColorStyleType
}
export enum TooltipStyleType {
  PRIMARY = "primary",
}

export enum TooltipColorStyleType {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}
