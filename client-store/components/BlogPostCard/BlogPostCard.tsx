import React from "react";
import Link from "next/link";
import IBlogPostCard from "./BlogPostCard.types";

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
            <Link href={to}>
              <img src={image} alt="" />
            </Link>
          </div>
        </div>
        <div className="blog-post-info text-left">
          <h3 className="name">
            <Link href={to}>{title}</Link>
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
