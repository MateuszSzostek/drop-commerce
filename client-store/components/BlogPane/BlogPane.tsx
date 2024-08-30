import React from "react";
import Link from "next/link";
import IProductsPane from "./BlogPane.types";
import PaneSlider from "./PaneSlider";
import ProductCard from "../ProductCard";
import BlogPostCard from "../BlogPostCard/BlogPostCard";
import Carousel from "../Carousel/Carousel";

export default function BlogPane({
  title,
  posts,
  id,
  extraSliderClass,
}: IProductsPane) {
  return (
    <section className="section latest-blog outer-bottom-vs">
      <h3 className="section-title">{title}</h3>
      <div className="blog-slider-container outer-top-xs">
        <Carousel className=" blog-slider custom-carousel">
          {posts?.map((el) => (
            <BlogPostCard
              title={el?.title}
              image={el?.image}
              author={el?.author}
              timestamp={el?.timestamp}
              description={el?.description}
              to={el?.to}
            />
          ))}
        </Carousel>
      </div>
    </section>
  );
}
