import React from "react";
import Link from "next/link";
import IProductsPane from "./ProductsPane.types";
import TabLink from "./TabLink";
import PaneSlider from "./PaneSlider";
import ProductCard from "../ProductCard";

export default function ProductsPane({
  title,
  sliders,
  id,
  extraSliderClass,
}: IProductsPane) {
  return (
    <div id="product-tabs-slider" className="scroll-tabs outer-top-vs">
      <div className="more-info-tab clearfix">
        {title && <h3 className="new-product-title pull-left">{title}</h3>}
        <ul className="nav nav-tabs nav-tab-line pull-right" id={id}>
          {sliders?.length > 1 &&
            sliders?.map((el, idx) => (
              <TabLink
                key={el.name}
                name={el.name}
                target={el.target}
                idx={idx}
              />
            ))}
        </ul>
      </div>
      <div className="tab-content outer-top-xs">
        {sliders?.map((el, idx) => (
          <PaneSlider
            key={el.name}
            id={el.target}
            idx={idx}
            extraSliderClass={extraSliderClass}
          >
            {el?.products?.map((el) => (
              <ProductCard key={el.title} {...el} />
            ))}
          </PaneSlider>
        ))}
      </div>
    </div>
  );
}
