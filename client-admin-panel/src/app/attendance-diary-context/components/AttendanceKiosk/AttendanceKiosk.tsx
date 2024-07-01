import { Col, Form, Row, Space } from "antd"
import { TextStyleType, Text, Button, ButtonStyleType, Table, Select, FormItem, FormItemStyleType, SelectStyleType } from "../../../../common/components"
import { useTranslation } from "react-i18next"
import useAttendanceKiosk from "./useAttendanceKiosk"
import { useState } from "react"
import { AgChartOptions } from "ag-charts-community"
import ChildCard from "../ChildCard/ChildCard"

export default function AttendanceKiosk() {
  const { t } = useTranslation()
  const { PIN, showChildren, appandString, removeString, cleanPIN, confirmPIN, confirmAttendance } = useAttendanceKiosk()

  return (
    <>
      {showChildren === false && (
        <Col offset={6} span={12}>
          <Row gutter={[24, 24]}>
            <Text styleType={TextStyleType.PRIMARY_TITLE}>{t("attendance-kiosk.title")}</Text>
          </Row>

          <Row gutter={[24, 24]}>
            <Col span={2}>
              <Row>
                <Button onClick={() => appandString("1")} style={{ marginBottom: "6px" }}>
                  1
                </Button>
              </Row>
              <Row>
                <Button onClick={() => appandString("4")} style={{ marginBottom: "6px" }}>
                  4
                </Button>
              </Row>
              <Row>
                <Button onClick={() => appandString("7")} style={{ marginBottom: "6px" }}>
                  7
                </Button>
              </Row>
              <Row>
                <Button onClick={() => removeString()} style={{ marginBottom: "6px" }}>
                  {"<"}
                </Button>
              </Row>
            </Col>
            <Col span={2}>
              <Row>
                <Button onClick={() => appandString("2")} style={{ marginBottom: "6px" }}>
                  2
                </Button>
              </Row>
              <Row>
                <Button onClick={() => appandString("5")} style={{ marginBottom: "6px" }}>
                  5
                </Button>
              </Row>
              <Row>
                <Button onClick={() => appandString("8")} style={{ marginBottom: "6px" }}>
                  8
                </Button>
              </Row>
              <Row>
                <Button onClick={() => cleanPIN()} style={{ marginBottom: "6px" }}>
                  {"x"}
                </Button>
              </Row>
            </Col>
            <Col span={2}>
              <Row>
                <Button onClick={() => appandString("3")} style={{ marginBottom: "6px" }}>
                  3
                </Button>
              </Row>
              <Row>
                <Button onClick={() => appandString("6")} style={{ marginBottom: "6px" }}>
                  6
                </Button>
              </Row>
              <Row>
                <Button onClick={() => appandString("9")} style={{ marginBottom: "6px" }}>
                  9
                </Button>
              </Row>
              <Row>
                <Button onClick={() => confirmPIN()} style={{ marginBottom: "6px" }}>
                  {"v"}
                </Button>
              </Row>
            </Col>
          </Row>
          <Form style={{ width: "100%" }} name="attendance-diary-filters" initialValues={{ remember: true }} autoComplete="off" layout="vertical">
            <Row>{PIN}</Row>
          </Form>
        </Col>
      )}
      {showChildren === true && (
        <Col span={12}>
          <Row gutter={[24, 24]} style={{ width: "100%" }}>
            <Col span={12}>
              <ChildCard name="Patryk Nowak" picture="ssd" id="sa" />
            </Col>
            <Col span={12}>
              {" "}
              <ChildCard name="Patryk Nowak" picture="ssd" id="sa" />
            </Col>
          </Row>
          <Row gutter={[24, 24]}>
            <Col span={12}>
              <ChildCard name="Patryk Nowak" picture="ssd" id="sa" />
            </Col>
            <Col span={12}>
              {" "}
              <ChildCard name="Patryk Nowak" picture="ssd" id="sa" />
            </Col>
          </Row>
          <Row style={{ marginTop: "12px" }}>
            <Button onClick={confirmAttendance}>Potwierdz</Button>
          </Row>
        </Col>
      )}
    </>
  )
}
