import { Form, Col, Row } from "antd"
import { useTranslation } from "react-i18next"
import { Button, Table, Text, TextStyleType } from "../../../../common/components"
import useKindergartensList from "./useKindergartensList"
import "./style.scss"

export default function KindergartensList() {
  const { kindergardensTableColumns, kindergartensList, isLoadingKindergartens, handleOpenKindergartenPreview, handleOpenAddNewKindergardenView } =
    useKindergartensList()
  const [t] = useTranslation()

  return (
    <>
      <Row style={{ width: "100%" }} className="bring-in-anim">
        <Col xs={{ span: 24, offset: 0 }} md={{ span: 24, offset: 0 }} xl={{ span: 24, offset: 0 }}>
          <Row>
            <Text styleType={TextStyleType.PRIMARY_TITLE}>{t("kindergartens.kindergartens-list.title")}</Text>
            <Button onClick={handleOpenAddNewKindergardenView}>{t("kindergartens.kindergartens-list.add-kindergarten-button")}</Button>
          </Row>

          <Table
            onRow={(record) => {
              return {
                onClick: () => {
                  //  handleOpenKindergartenPreview(record.id)
                },
              }
            }}
            columns={kindergardensTableColumns}
            dataSource={kindergartensList}
            loading={isLoadingKindergartens}
          />
        </Col>
      </Row>
    </>
  )
}
