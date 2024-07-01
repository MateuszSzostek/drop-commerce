import { Col, Form, Row, Space } from "antd"
import { TextStyleType, Text, Button, ButtonStyleType, Table, Select, FormItem, FormItemStyleType, SelectStyleType } from "../../../../common/components"
import { useTranslation } from "react-i18next"
import useAttendanceDiary from "./useAttendanceDiary"
import { AgChartsReact } from "ag-charts-react"
import {
  ATTENDANCE_DIATY_FILTERS_INPUT_FIELDS,
  AttendanceDiaryFiltersFieldType,
  DATE_RANGE_SELECT_OPTIONS,
  SCOPE_SELECT_OPTIONS,
} from "../../domain/attendance-diary"
import { useState } from "react"
import { AgChartOptions } from "ag-charts-community"

function getWeekKindergartenSeries() {
  return [
    {
      type: "bar",
      xKey: "day",
      yKey: "KindergartenFirst",
      yName: "KindergartenFirst",
      stackGroup: "Devices",
      fill: "#2729a3",
    },
    {
      type: "bar",
      xKey: "day",
      yKey: "KindergartenSecond",
      yName: "KindergartenSecond",
      stackGroup: "Devices",
      fill: "#a32756",
    },
  ]
}

function getWeekKindergartensData() {
  return [
    {
      day: "1",
      KindergartenFirst: 140,
      KindergartenSecond: 16,
    },
    {
      day: "2",
      KindergartenFirst: 14,
      KindergartenSecond: 176,
    },
    {
      day: "3",
      KindergartenFirst: 49,
      KindergartenSecond: 11,
    },
    {
      day: "4",
      KindergartenFirst: 10,
      KindergartenSecond: 16,
    },
    {
      day: "5",
      KindergartenFirst: 14,
      KindergartenSecond: 16,
    },
    {
      day: "6",
      KindergartenFirst: 40,
      KindergartenSecond: 16,
    },
    {
      day: "7",
      KindergartenFirst: 14,
      KindergartenSecond: 16,
    },
  ]
}

function getWeekGroupSeries() {
  return [
    {
      type: "bar",
      xKey: "day",
      yKey: "Poziomki",
      yName: "Poziomki",
      stackGroup: "Devices",
      fill: "#a32784",
    },
    {
      type: "bar",
      xKey: "day",
      yKey: "Kroliczki",
      yName: "Kroliczki",
      stackGroup: "Devices",
      fill: "#27a369",
    },
    {
      type: "bar",
      xKey: "day",
      yKey: "Cukiereczki",
      yName: "Cukiereczki",
      stackGroup: "Devices",
      fill: "#3da9db",
    },
  ]
}

function getWeekGroupsData() {
  return [
    {
      day: "1",
      Poziomki: 140,
      Kroliczki: 16,
      Cukiereczki: 14,
    },
    {
      day: "2",
      Poziomki: 124,
      Kroliczki: 20,
      Cukiereczki: 14,
    },
    {
      day: "3",
      Poziomki: 112,
      Kroliczki: 20,
      Cukiereczki: 18,
    },
    {
      day: "4",
      Poziomki: 118,
      Kroliczki: 24,
      Cukiereczki: 14,
    },
    {
      day: "5",
      Poziomki: 124,
      Kroliczki: 18,
      Cukiereczki: 16,
    },
    {
      day: "6",
      Poziomki: 108,
      Kroliczki: 20,
      Cukiereczki: 16,
    },
    {
      day: "7",
      Poziomki: 26,
      Kroliczki: 22,
      Cukiereczki: 28,
    },
  ]
}

function getMonthGroupSeries() {
  return [
    {
      type: "bar",
      xKey: "day",
      yKey: "Poziomki",
      yName: "Poziomki",
      stackGroup: "Devices",
      fill: "#a32784",
    },
    {
      type: "bar",
      xKey: "day",
      yKey: "Kroliczki",
      yName: "Kroliczki",
      stackGroup: "Devices",
      fill: "#27a369",
    },
    {
      type: "bar",
      xKey: "day",
      yKey: "Cukiereczki",
      yName: "Cukiereczki",
      stackGroup: "Devices",
      fill: "#3da9db",
    },
  ]
}

function getMonthGroupsData() {
  return [
    {
      day: "1",
      Poziomki: 140,
      Kroliczki: 16,
      Cukiereczki: 14,
    },
    {
      day: "2",
      Poziomki: 124,
      Kroliczki: 20,
      Cukiereczki: 14,
    },
    {
      day: "3",
      Poziomki: 112,
      Kroliczki: 20,
      Cukiereczki: 18,
    },
    {
      day: "4",
      Poziomki: 118,
      Kroliczki: 24,
      Cukiereczki: 14,
    },
    {
      day: "5",
      Poziomki: 124,
      Kroliczki: 18,
      Cukiereczki: 16,
    },
    {
      day: "6",
      Poziomki: 108,
      Kroliczki: 20,
      Cukiereczki: 16,
    },
    {
      day: "7",
      Poziomki: 26,
      Kroliczki: 22,
      Cukiereczki: 28,
    },
    {
      day: "8",
      Poziomki: 26,
      Kroliczki: 22,
      Cukiereczki: 28,
    },
    {
      day: "9",
      Poziomki: 26,
      Kroliczki: 22,
      Cukiereczki: 28,
    },
    {
      day: "10",
      Poziomki: 26,
      Kroliczki: 22,
      Cukiereczki: 28,
    },
    {
      day: "11",
      Poziomki: 26,
      Kroliczki: 22,
      Cukiereczki: 28,
    },
    {
      day: "12",
      Poziomki: 26,
      Kroliczki: 22,
      Cukiereczki: 28,
    },
    {
      day: "13",
      Poziomki: 26,
      Kroliczki: 22,
      Cukiereczki: 28,
    },
    {
      day: "14",
      Poziomki: 26,
      Kroliczki: 22,
      Cukiereczki: 28,
    },
    {
      day: "15",
      Poziomki: 26,
      Kroliczki: 22,
      Cukiereczki: 28,
    },
    {
      day: "16",
      Poziomki: 26,
      Kroliczki: 22,
      Cukiereczki: 28,
    },
    {
      day: "17",
      Poziomki: 26,
      Kroliczki: 22,
      Cukiereczki: 28,
    },
    {
      day: "18",
      Poziomki: 26,
      Kroliczki: 22,
      Cukiereczki: 28,
    },
    {
      day: "19",
      Poziomki: 26,
      Kroliczki: 22,
      Cukiereczki: 28,
    },
    {
      day: "20",
      Poziomki: 26,
      Kroliczki: 22,
      Cukiereczki: 28,
    },
    {
      day: "21",
      Poziomki: 26,
      Kroliczki: 22,
      Cukiereczki: 28,
    },
    {
      day: "22",
      Poziomki: 26,
      Kroliczki: 22,
      Cukiereczki: 28,
    },
    {
      day: "23",
      Poziomki: 26,
      Kroliczki: 22,
      Cukiereczki: 28,
    },
    {
      day: "24",
      Poziomki: 26,
      Kroliczki: 22,
      Cukiereczki: 28,
    },
    {
      day: "25",
      Poziomki: 26,
      Kroliczki: 22,
      Cukiereczki: 28,
    },
    {
      day: "26",
      Poziomki: 26,
      Kroliczki: 22,
      Cukiereczki: 28,
    },
    {
      day: "27",
      Poziomki: 26,
      Kroliczki: 22,
      Cukiereczki: 28,
    },
    {
      day: "28",
      Poziomki: 26,
      Kroliczki: 22,
      Cukiereczki: 28,
    },
    {
      day: "29",
      Poziomki: 26,
      Kroliczki: 22,
      Cukiereczki: 28,
    },
    {
      day: "30",
      Poziomki: 26,
      Kroliczki: 22,
      Cukiereczki: 28,
    },
  ]
}

function getYearGroupSeries() {
  return [
    {
      type: "bar",
      xKey: "day",
      yKey: "Poziomki",
      yName: "Poziomki",
      stackGroup: "Devices",
      fill: "#a32784",
    },
    {
      type: "bar",
      xKey: "day",
      yKey: "Kroliczki",
      yName: "Kroliczki",
      stackGroup: "Devices",
      fill: "#27a369",
    },
    {
      type: "bar",
      xKey: "day",
      yKey: "Cukiereczki",
      yName: "Cukiereczki",
      stackGroup: "Devices",
      fill: "#3da9db",
    },
  ]
}

function getYearGroupsData() {
  return [
    {
      day: "1",
      Poziomki: 140,
      Kroliczki: 16,
      Cukiereczki: 14,
    },
    {
      day: "2",
      Poziomki: 124,
      Kroliczki: 20,
      Cukiereczki: 14,
    },
    {
      day: "3",
      Poziomki: 112,
      Kroliczki: 20,
      Cukiereczki: 18,
    },
    {
      day: "4",
      Poziomki: 118,
      Kroliczki: 24,
      Cukiereczki: 14,
    },
    {
      day: "5",
      Poziomki: 124,
      Kroliczki: 18,
      Cukiereczki: 16,
    },
    {
      day: "6",
      Poziomki: 108,
      Kroliczki: 20,
      Cukiereczki: 16,
    },
    {
      day: "7",
      Poziomki: 26,
      Kroliczki: 22,
      Cukiereczki: 28,
    },
    {
      day: "8",
      Poziomki: 26,
      Kroliczki: 22,
      Cukiereczki: 28,
    },
    {
      day: "9",
      Poziomki: 26,
      Kroliczki: 22,
      Cukiereczki: 28,
    },
    {
      day: "10",
      Poziomki: 26,
      Kroliczki: 22,
      Cukiereczki: 28,
    },
    {
      day: "11",
      Poziomki: 26,
      Kroliczki: 22,
      Cukiereczki: 28,
    },
    {
      day: "12",
      Poziomki: 26,
      Kroliczki: 22,
      Cukiereczki: 28,
    },
  ]
}

export default function AttendanceDiary() {
  const { t } = useTranslation()
  const { selectedDateRange, selectedScope, handleSelectScope, handleSelectDateRange } = useAttendanceDiary()

  const [options, setOptions] = useState<AgChartOptions>({
    title: {
      text: "Attendance Diary",
    },
    subtitle: {
      text: "Obecnosc dzienna dzieci w grupach przedszkolnych w okresie tygodniowym",
    },
    data: getYearGroupsData(),
    series: getYearGroupSeries(),
  })

  return (
    <>
      <Row style={{ width: "100%" }} className="bring-in-anim">
        <Col span={24}>
          <Row>
            <Text styleType={TextStyleType.PRIMARY_TITLE}>{t("attendance-diary.title")}</Text>
          </Row>
          <Form style={{ width: "100%" }} name="attendance-diary-filters" initialValues={{ remember: true }} autoComplete="off" layout="vertical">
            <Row>
              <Col span={6}>
                <FormItem<AttendanceDiaryFiltersFieldType>
                  styleType={FormItemStyleType.PRIMARY}
                  label={t("attendance-diary-filters.time-range-label")}
                  name={ATTENDANCE_DIATY_FILTERS_INPUT_FIELDS.timeRange}
                  rules={[{ required: true, message: t(`error-code.required`) }]}>
                  <Select styleType={SelectStyleType.PRIMARY} placeholder="" allowClear options={DATE_RANGE_SELECT_OPTIONS} onChange={handleSelectDateRange} />
                </FormItem>
              </Col>
              <Col span={6}>
                <FormItem<AttendanceDiaryFiltersFieldType>
                  styleType={FormItemStyleType.PRIMARY}
                  label={t("attendance-diary-filters.scope-label")}
                  name={ATTENDANCE_DIATY_FILTERS_INPUT_FIELDS.scopeRange}
                  rules={[{ required: true, message: t(`error-code.required`) }]}>
                  <Select styleType={SelectStyleType.PRIMARY} placeholder="" allowClear options={SCOPE_SELECT_OPTIONS} onChange={handleSelectScope} />
                </FormItem>
              </Col>
              <Col span={6}>
                {selectedScope === "kindergartens" && (
                  <FormItem<AttendanceDiaryFiltersFieldType>
                    styleType={FormItemStyleType.PRIMARY}
                    label={t("attendance-diary-filters.kindergardens-label")}
                    name={ATTENDANCE_DIATY_FILTERS_INPUT_FIELDS.kindergartens}
                    rules={[{ required: true, message: t(`error-code.required`) }]}>
                    <Select styleType={SelectStyleType.PRIMARY} placeholder="" allowClear options={[]} />
                  </FormItem>
                )}
                {selectedScope === "groups" && (
                  <FormItem<AttendanceDiaryFiltersFieldType>
                    styleType={FormItemStyleType.PRIMARY}
                    label={t("attendance-diary-filters.groups-label")}
                    name={ATTENDANCE_DIATY_FILTERS_INPUT_FIELDS.groups}
                    rules={[{ required: true, message: t(`error-code.required`) }]}>
                    <Select styleType={SelectStyleType.PRIMARY} placeholder="" allowClear options={[]} />
                  </FormItem>
                )}
                {selectedScope === "children" && (
                  <FormItem<AttendanceDiaryFiltersFieldType>
                    styleType={FormItemStyleType.PRIMARY}
                    label={t("attendance-diary-filters.children-label")}
                    name={ATTENDANCE_DIATY_FILTERS_INPUT_FIELDS.children}
                    rules={[{ required: true, message: t(`error-code.required`) }]}>
                    <Select styleType={SelectStyleType.PRIMARY} placeholder="" allowClear options={[]} />
                  </FormItem>
                )}
                {selectedScope === "teachers" && (
                  <FormItem<AttendanceDiaryFiltersFieldType>
                    styleType={FormItemStyleType.PRIMARY}
                    label={t("attendance-diary-filters.teachers-label")}
                    name={ATTENDANCE_DIATY_FILTERS_INPUT_FIELDS.teachers}
                    rules={[{ required: true, message: t(`error-code.required`) }]}>
                    <Select styleType={SelectStyleType.PRIMARY} placeholder="" allowClear options={[]} />
                  </FormItem>
                )}
              </Col>
              <Col span={6}>
                {selectedDateRange === "year" && (
                  <FormItem<AttendanceDiaryFiltersFieldType>
                    styleType={FormItemStyleType.PRIMARY}
                    label={t("attendance-diary-filters.year-label")}
                    name={ATTENDANCE_DIATY_FILTERS_INPUT_FIELDS.years}
                    rules={[{ required: true, message: t(`error-code.required`) }]}>
                    <Select styleType={SelectStyleType.PRIMARY} placeholder="" allowClear options={[]} />
                  </FormItem>
                )}
                {selectedDateRange === "month" && (
                  <FormItem<AttendanceDiaryFiltersFieldType>
                    styleType={FormItemStyleType.PRIMARY}
                    label={t("attendance-diary-filters.month-label")}
                    name={ATTENDANCE_DIATY_FILTERS_INPUT_FIELDS.months}
                    rules={[{ required: true, message: t(`error-code.required`) }]}>
                    <Select styleType={SelectStyleType.PRIMARY} placeholder="" allowClear options={[]} />
                  </FormItem>
                )}
                {selectedDateRange === "week" && (
                  <FormItem<AttendanceDiaryFiltersFieldType>
                    styleType={FormItemStyleType.PRIMARY}
                    label={t("attendance-diary-filters.week-label")}
                    name={ATTENDANCE_DIATY_FILTERS_INPUT_FIELDS.weeks}
                    rules={[{ required: true, message: t(`error-code.required`) }]}>
                    <Select styleType={SelectStyleType.PRIMARY} placeholder="" allowClear options={[]} />
                  </FormItem>
                )}
                {selectedDateRange === "day" && (
                  <FormItem<AttendanceDiaryFiltersFieldType>
                    styleType={FormItemStyleType.PRIMARY}
                    label={t("attendance-diary-filters.day-label")}
                    name={ATTENDANCE_DIATY_FILTERS_INPUT_FIELDS.days}
                    rules={[{ required: true, message: t(`error-code.required`) }]}>
                    <Select styleType={SelectStyleType.PRIMARY} placeholder="" allowClear options={[]} />
                  </FormItem>
                )}
              </Col>
            </Row>
            <Row>
              <AgChartsReact options={options} />
            </Row>
          </Form>
        </Col>
      </Row>
    </>
  )
}
