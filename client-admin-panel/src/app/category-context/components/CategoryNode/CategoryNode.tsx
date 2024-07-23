import React, { PropsWithChildren } from "react";
import { ICategoryNode } from "../../domain/category-context";
import "./CategoryNode.styles.scss";

export default function CategoryNode({
  name,
  id,
  children,
  handleAddCategory,
  handleDeleteCategory,
}: PropsWithChildren<ICategoryNode>) {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  console.log(randomColor);
  return (
    <div className="category-node">
      <div className="category-node__marginer">
        <div className="category-node__name">
          {name} <button onClick={handleAddCategory}>+</button>
          <button onClick={handleDeleteCategory}>-</button>
        </div>
        {children}
      </div>
    </div>
  );
}
