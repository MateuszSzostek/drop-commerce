"use client";
import React, { PropsWithChildren } from "react";
import IPaneSlider from "./PaneSlider.types";
import Carousel from "../../Carousel/Carousel";

export default function PaneSlider({
  id,
  children,
  idx,
  extraSliderClass,
}: PropsWithChildren<IPaneSlider>) {
  return (
    <div className={`tab-pane ${idx === 0 ? `in active` : ``}`} id={id}>
      <div className="product-slider">
        <Carousel
          className={` custom-carousel owl-theme ${
            typeof extraSliderClass !== "undefined" ? extraSliderClass : ""
          }`}
        >
          {children}
        </Carousel>
      </div>
    </div>
  );
}
