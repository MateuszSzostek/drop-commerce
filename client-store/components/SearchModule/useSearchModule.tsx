import { useEffect, useState } from "react";

export default function useSearchModule() {
  const [isCategoryDropdownOpened, setIsCategoryDropdwonOpened] =
    useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleOpenCategoryDropdown = () => {
    setIsCategoryDropdwonOpened(true);
  };

  const handleSelectCategory = (category: string) => {
    console.warn(category);
    setSelectedCategory(category);
    handleCloseCategoryDropdown();
  };

  const handleCloseCategoryDropdown = () => {
    setIsCategoryDropdwonOpened(false);
  };

  useEffect(() => {
    console.warn(isCategoryDropdownOpened);
  }, [isCategoryDropdownOpened]);

  const handleSubmitSearchRequest = () => {
    
  }

  return {
    isCategoryDropdownOpened,
    handleOpenCategoryDropdown,
    handleCloseCategoryDropdown,
    selectedCategory,
    handleSelectCategory,
  };
}
