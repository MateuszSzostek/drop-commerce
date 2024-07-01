import { Col, Form, Row } from "antd"
import React from "react"
import { useTranslation } from "react-i18next"
import { Button, Checkbox, FormItem, FormItemStyleType, Table, TextInput, TextInputStyleType, TextStyleType } from "../../../../common/components"
import useCategoriesTree from "./useCategoriesTree"
import { Text } from "../../../../common/components"

import CategoryNode from "../CategoryNode/CategoryNode"
import AddCategoryNodeModal from "../Modals/AddCategoryNodeModal/AddCategoryNodeModal"

export default function CategoriesTree() {
  const { categoriesTree, isOpenAddCategoryModal, categoriesTreeRender, renderTree, handleAppendNode, handleOpenAddCategoryModal } = useCategoriesTree()
  const [t] = useTranslation()

  return (
    <>
      <Row style={{ width: "100%" }} className="bring-in-anim">
        {categoriesTreeRender.nodes && <div>{categoriesTreeRender?.nodes.map(renderTree)}</div>}
      </Row>
      <AddCategoryNodeModal isOpen={isOpenAddCategoryModal} handleAppendNode={handleAppendNode} />
    </>
  )
}
