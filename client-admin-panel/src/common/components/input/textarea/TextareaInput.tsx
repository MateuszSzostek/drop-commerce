import { Input as AntInput } from "antd"
import { ITextareaInput, TextareaInputStyleType } from "./TextareaInput.types"
import "../input.styles.scss"

export default function TextareaInput({ styleType = TextareaInputStyleType.PRIMARY, ...props }: ITextareaInput) {
  return <AntInput.TextArea className={`input input--${styleType}`} {...props} />
}
