import type { Meta, StoryObj } from "@storybook/react"
import { TableStyleType } from "./Table.types"

import Table from "./Table"

const meta = {
  title: "Owlix/Table",
  component: Table,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    styleType: TableStyleType.PRIMARY,
  },
}
