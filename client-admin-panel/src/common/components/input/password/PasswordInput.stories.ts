import type { Meta, StoryObj } from "@storybook/react"
import PasswordInput from "./PasswordInput"
import { PasswordInputStyleType } from "./PasswordInput.types"

const meta = {
  title: "Owlix/PasswordInput",
  component: PasswordInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PasswordInput>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    styleType: PasswordInputStyleType.PRIMARY,
  },
}

export const Secondary: Story = {
  args: {
    styleType: PasswordInputStyleType.LANDING,
  },
}
