import React from "react";
import type IBlogPostCard from "./BlogPostCard.types";

export default function BlogPostCard({
  title,
  image,
  author,
  timestamp,
  description,
  to,
}: IBlogPostCard) {
  return (
    <div className="item">
      <div className="blog-post">
        <div className="blog-post-image">
          <div className="image">
            <a href={to}>
              <img src={image} alt="" />
            </a>
          </div>
        </div>
        <div className="blog-post-info text-left">
          <h3 className="name">
            <a href={to}>{title}</a>
          </h3>
          <span className="info">
            By {author} &nbsp;|&nbsp; {timestamp}
          </span>
          <p className="text">{description}</p>
        </div>
      </div>
    </div>
  );
}
