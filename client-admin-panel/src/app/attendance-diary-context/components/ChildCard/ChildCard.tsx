import { Col, Form, Row, Space } from "antd"
import { TextStyleType, Text, Button, ButtonStyleType, Table, Select, FormItem, FormItemStyleType, SelectStyleType } from "../../../../common/components"
import { useTranslation } from "react-i18next"
import useAttendanceKiosk from "./useAttendanceKiosk"
import { useState } from "react"
import { AgChartOptions } from "ag-charts-community"
import { IChildCard } from "../../domain/attendance-diary"
import personImage from "../../../../common/assets/image/raster/example.jpg"

export default function ChildCard({ name, id, picture }: IChildCard) {
  const { t } = useTranslation()

  return (
    <Row>
      <Col align="center" span={24}>
        <img src={personImage} />
        <div>{name}</div>
        <Button>Rozpocznij / Zakoncz Obecnosc</Button>
      </Col>
    </Row>
  )
}
