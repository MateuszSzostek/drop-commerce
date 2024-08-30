"use client";

import useSearchModule from "./useSearchModule";
import translations from "@/translations/translations.pl";

export default function SearchModule() {
  const {
    isCategoryDropdownOpened,
    handleOpenCategoryDropdown,
    handleCloseCategoryDropdown,
    handleSelectCategory,
    selectedCategory,
  } = useSearchModule();

  return (
    <form style={{ width: "100%" }}>
      <div className="search-control">
        <div
          className="search-control__categories-dropdown"
          contentEditable="true"
        >
          <span
            className="search-control__categories-dropdown-placeholder"
            onClick={handleOpenCategoryDropdown}
          >
            {selectedCategory
              ? selectedCategory
              : translations.navigation["select-category"]}
          </span>

          {isCategoryDropdownOpened && (
            <span className="search-control__categories-dropdown-options">
              <span
                className="search-control__categories-dropdown-option"
                onClick={(e) => {
                  console.warn(e);
                  handleSelectCategory(e?.target?.textContent);
                }}
              >
                Option 1
              </span>
              <span
                className="search-control__categories-dropdown-option"
                onClick={(e) => {
                  console.warn(e);
                  handleSelectCategory(e?.target?.textContent);
                }}
              >
                Option 2
              </span>
              <span
                className="search-control__categories-dropdown-option"
                onClick={(e) => {
                  console.warn(e);
                  handleSelectCategory(e?.target?.textContent);
                }}
              >
                Option 3
              </span>
              <span
                className="search-control__categories-dropdown-option"
                onClick={(e) => {
                  console.warn(e);
                  handleSelectCategory(e?.target?.textContent);
                }}
              >
                Option 4
              </span>
              <span
                className="search-control__categories-dropdown-option"
                onClick={(e) => {
                  console.warn(e);
                  handleSelectCategory(e?.target?.textContent);
                }}
              >
                Option 5
              </span>
            </span>
          )}
        </div>
        <input
          className="search-control__search-input"
          placeholder={translations.navigation["enter-phrase"]}
        />
        <button className="search-control__search-button">
          {translations.navigation["search"]}
        </button>
      </div>
    </form>
  );
}
