import type { Meta, StoryObj } from "@storybook/react"
import { DatePickerStyleType } from "./DatePicker.types"

import DatePicker from "./DatePicker"

const meta = {
  title: "Owlix/DatePicker",
  component: DatePicker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DatePicker>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    styleType: DatePickerStyleType.PRIMARY,
  },
}
