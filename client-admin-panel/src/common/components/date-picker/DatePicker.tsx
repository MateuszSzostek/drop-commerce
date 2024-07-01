import { DatePicker as AntDatePicker } from "antd"
import { IDatePicker, DatePickerStyleType } from "./DatePicker.types"
import "./DatePicker.style.scss"

export default function DatePicker({ styleType = DatePickerStyleType.PRIMARY, ...props }: IDatePicker) {
  return <AntDatePicker className={`date-picker date-picker--${styleType}`} {...props} data-cy />
}
