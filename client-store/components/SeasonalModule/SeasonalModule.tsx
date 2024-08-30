"use client";

import React from "react";
import ProductsPane from "../ProductsPane";
import { featuredProducts } from "../IndexPageContent/IndexPageContent.temp";

export default function SeasonalModule() {
  return (
    <ProductsPane
      title="Awesome Category"
      id={featuredProducts.id}
      sliders={featuredProducts.sliders}
      extraSliderClass="season-category-owl-carousel"
    />
  );
}
