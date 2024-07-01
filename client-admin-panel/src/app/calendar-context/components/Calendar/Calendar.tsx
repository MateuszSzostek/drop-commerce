import { Calendar as AntCalendar } from "antd"
import type { CalendarProps } from "antd"
import type { Dayjs } from "dayjs"

export default function Calendar() {
  const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>["mode"]) => {
    console.log(value.format("YYYY-MM-DD"), mode)
  }

  const onSelectDate = (date: Dayjs, info: { source: "year" | "month" | "date" | "customize" }) => {
    console.log(date)
    console.log(info)
  }

  return <AntCalendar onPanelChange={onPanelChange} onSelect={onSelectDate} />
}
