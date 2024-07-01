import { ColorPicker as AntColorPicker } from "antd"
import { PropsWithChildren } from "react"
import { IColorPicker, ColorPickerStyleType } from "./ColorPicker.types"
import "./ColorPicker.style.scss"

export default function ColorPicker({ styleType = ColorPickerStyleType.PRIMARY, ...props }: PropsWithChildren<IColorPicker>) {
  return <AntColorPicker className={`color-picker color-picker--${styleType}`} {...props} data-cy />
}
