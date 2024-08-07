import React, { PropsWithChildren } from "react";
import { ITagNode } from "../../domain/category-context";
import "./TagNode.styles.scss";

export default function TagNode({
  name,
  id,
  children,
  handleDeleteTag,
}: PropsWithChildren<ITagNode>) {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  console.log(randomColor);
  return (
    <div className="tag-node">
      <div className="tag-node__marginer">
        <div className="tag-node__name">
          {name}
          <button onClick={handleDeleteTag}>-</button>
        </div>
        {children}
      </div>
    </div>
  );
}
