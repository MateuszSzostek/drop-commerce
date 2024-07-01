import type { Meta, StoryObj } from "@storybook/react"
import { TooltipColorStyleType, TooltipStyleType } from "./Tooltip.types"

import { Tooltip } from ".."

const meta = {
  title: "Owlix/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tooltip>

export default meta
type Story = StoryObj<typeof meta>

export const PrimaryTooltip: Story = {
  args: {
    styleType: TooltipStyleType.PRIMARY,
    children: <div>Hover to see</div>,
    colorType: TooltipColorStyleType.PRIMARY,
  },
}
