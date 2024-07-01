import type { Meta, StoryObj } from "@storybook/react"
import TextInput from "./TextInput"
import { TextInputStyleType } from "./TextInput.types"

const meta = {
  title: "Owlix/TextInput",
  component: TextInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TextInput>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    styleType: TextInputStyleType.PRIMARY,
  },
}

export const Secondary: Story = {
  args: {
    styleType: TextInputStyleType.LANDING,
  },
}
