import React, { ReactNode, useEffect, useState } from "react"
import { CategoriesTree, ICategoryNode } from "../../domain/category-context"
import CategoryNode from "../CategoryNode/CategoryNode"
import { useGetCategoriesQuery, useApplyCategoriesMutation } from "../../services/categorySlice"

export default function useCategoriesTree() {
  const [categoriesTree, setCategoriesTree] = useState<CategoriesTree>({ nodes: [{ name: "root", id: "root" }] })
  const [categoriesTreeRender, setCategoriesTreeRender] = useState<CategoriesTree>({ nodes: [{ name: "root", id: "root" }] })
  const [mustApplyCategories, setMustApplyCategories] = useState<boolean>(false)
  const [selectedNodeId, setSelectedNodeId] = useState<string>("")
  const [isOpenAddCategoryModal, setIsOpenAddCategoryModal] = useState<boolean>(false)
  const [isOpenDeleteCategoryModal, setIsOpenDeleteCategoryModal] = useState<boolean>(false)
  const [triggerApplyCategories, applyCategoriesResult] = useApplyCategoriesMutation()

  const {
    data: categories,
    isFetching: isFetchingCategories,
    isLoading: isLoadingCategories,
  } = useGetCategoriesQuery(
    {},
    {
      refetchOnMountOrArgChange: true,
      skip: false,
    },
  )

  useEffect(() => {
    if (!applyCategoriesResult.isLoading && categories && !isLoadingCategories && categories?.data?.categoriesTreeObj) {
      setCategoriesTreeRender(JSON.parse(categories?.data?.categoriesTreeObj))
      setCategoriesTree(JSON.parse(categories?.data?.categoriesTreeObj))
    }
  }, [applyCategoriesResult.isLoading, isLoadingCategories, categories])

  useEffect(() => {
    console.warn(categoriesTree)
    if (mustApplyCategories === true) {
      const categoriesList = []

      function traverse(node: { name: string; id: string; nodes: [] }) {
        if (node.name && node.id) {
          categoriesList.push({ name: node.name, id: node.id })
        }

        if (node.nodes && Array.isArray(node.nodes)) {
          node.nodes.forEach((childNode: { name: string; id: string; nodes: [] }) => traverse(childNode))
        }
      }

      categoriesTree?.nodes?.forEach((rootNode) => traverse(rootNode))

      triggerApplyCategories({ categoriesTreeObj: JSON.stringify(categoriesTree), categoriesList })
      setMustApplyCategories(false)
    }
  }, [mustApplyCategories, categoriesTree])

  function appendCategoryNode(parentId: string, newNode: ICategoryNode) {
    setCategoriesTree((prevTree) => {
      const newTree = { ...prevTree }
      function traverseAndAppend(nodes: ICategoryNode[]): boolean {
        for (let node of nodes) {
          if (node.id === parentId) {
            if (node.nodes && node.nodes.some((child) => child.name === newNode.name)) {
              console.warn(`Node with name "${newNode.name}" already exists.`)
              return false // Stop further processing
            }

            node.nodes = node.nodes ? [...node.nodes, newNode] : [newNode]
            return true
          }
          if (node.nodes) {
            if (traverseAndAppend(node.nodes)) {
              return true
            }
          }
        }
        return false
      }
      traverseAndAppend(newTree?.nodes as ICategoryNode[])
      return newTree
    })
    setMustApplyCategories(true)
  }

  function deleteCategoryNode(parentId: string, nodeId: string) {
    setCategoriesTree((prevTree) => {
      const newTree = { ...prevTree };
  
      function traverseAndDelete(nodes: ICategoryNode[]): boolean {
        for (let node of nodes) {
          if (node.id === parentId) {
            const nodeIndex = node.nodes?.findIndex((child) => child.id === nodeId);
  
            if (nodeIndex !== undefined && nodeIndex > -1) {
              node.nodes?.splice(nodeIndex, 1);
              return true;
            }
          }
          if (node.nodes) {
            if (traverseAndDelete(node.nodes)) {
              return true;
            }
          }
        }
        return false;
      }
  
      traverseAndDelete(newTree?.nodes as ICategoryNode[]);
      return newTree;
    });
    setMustApplyCategories(true);
  }

  const handleAppendNode = (newCategoryName: string) => {
    const newNode = {
      name: newCategoryName,
      id: Math.random().toString(36).substr(2, 9), // Random ID for example
    }
    appendCategoryNode(selectedNodeId, newNode) // Appending to the "Puzzles" node for example
    handleCloseAddCategoryModal()
  }

  const handleDeleteNode = (categoryName:string) => {
    deleteCategoryNode(,selectedNodeId)
  }

  function renderTree(node: ICategoryNode): ReactNode {
    return (
      <CategoryNode key={node.id} name={node.name} id={node.id} handleAddCategory={() => handleOpenAddCategoryModal(node.id)}>
        {node.nodes && node.nodes.map(renderTree)}
      </CategoryNode>
    )
  }

  const handleOpenAddCategoryModal = (categoryId: string) => {
    setIsOpenAddCategoryModal(true)
    setSelectedNodeId(categoryId)
  }

  const handleOpenDeleteCategoryModal = (categoryId: string) => {
    setIsOpenDeleteCategoryModal(true)
    setSelectedNodeId(categoryId)
  }

  const handleCloseAddCategoryModal = () => {
    setIsOpenAddCategoryModal(false)
  }

  return {
    categoriesTree,
    categoriesTreeRender,
    isOpenAddCategoryModal,
    isOpenDeleteCategoryModal,
    renderTree,
    handleOpenAddCategoryModal,
    handleCloseAddCategoryModal,
    handleAppendNode,
  }
}
