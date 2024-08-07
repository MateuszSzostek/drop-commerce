import { Row } from "antd";
import { useTranslation } from "react-i18next";
import useCategoriesTree from "./useCategoriesTree";
import AddCategoryNodeModal from "../Modals/AddCategoryNodeModal/AddCategoryNodeModal";
import ConfirmationModal from "../../../../common/modules/ConfirmationModal/ConfirmationModal";
import TagNode from "../TagNode/TagNode";
import { Button } from "../../../../common/components";
import AddTagNodeModal from "../Modals/AddTagNodeModal/AddTagNodeModal";

export default function CategoriesTree() {
  const {
    categoriesTreeRender,
    isOpenAddCategoryModal,
    isOpenDeleteCategoryModal,
    isOpenDeleteTagModal,
    tagsList,
    isOpenAddTagModal,
    renderTree,
    handleAppendNode,
    handleCloseDeleteCategoryModal,
    handleOpenDeleteTagModal,
    handleCloseDeleteTagModal,
    handleDeleteTagNode,
    handleDeleteNode,
    handleOpenAddTagModal,
    handleCloseAddTagModal,
  } = useCategoriesTree();
  const [t] = useTranslation();

  return (
    <>
      <Row style={{ width: "100%" }} className="bring-in-anim">
        {categoriesTreeRender.nodes && (
          <div>{categoriesTreeRender?.nodes.map(renderTree)}</div>
        )}
      </Row>
      <Row style={{ width: "100%" }} className="bring-in-anim">
        <Button onClick={handleOpenAddTagModal}>
          {t("categories.add-tag-button")}
        </Button>
      </Row>
      <Row style={{ width: "100%" }} className="bring-in-anim">
        {tagsList.map((el) => (
          <TagNode
            name={el?.name}
            id={el?.id}
            handleDeleteTag={() => handleOpenDeleteTagModal(el?.id)}
          />
        ))}
      </Row>
      <AddCategoryNodeModal
        isOpen={isOpenAddCategoryModal}
        handleAppendNode={handleAppendNode}
      />
      <AddTagNodeModal
        isOpen={isOpenAddTagModal}
        onSuccess={handleCloseAddTagModal}
      />
      <ConfirmationModal
        acceptText={t("categories.delete-category-modal.accept-button")}
        cancelText={t("categories.delete-category-modal.cancel-button")}
        isOpen={isOpenDeleteCategoryModal}
        handleCancel={handleCloseDeleteCategoryModal}
        handleAccept={handleDeleteNode}
        title={t("categories.delete-category-modal.title")}
        content={t("categories.delete-category-modal.content")}
      />
      <ConfirmationModal
        acceptText={t("categories.delete-tag-modal.accept-button")}
        cancelText={t("categories.delete-tag-modal.cancel-button")}
        isOpen={isOpenDeleteTagModal}
        handleCancel={handleCloseDeleteTagModal}
        handleAccept={handleDeleteTagNode}
        title={t("categories.delete-tag-modal.title")}
        content={t("categories.delete-tag-modal.content")}
      />
    </>
  );
}
