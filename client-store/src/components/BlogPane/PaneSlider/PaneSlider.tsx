import React, { PropsWithChildren } from "react";
import IPaneSlider from "./PaneSlider.types";

export default function PaneSlider({
  id,
  children,
  idx,
  extraSliderClass,
}: PropsWithChildren<IPaneSlider>) {
  return (
    <div className={`tab-pane ${idx === 0 ? `in active` : ``}`} id={id}>
      <div className="product-slider">
        <div
          className={`owl-carousel custom-carousel owl-theme ${
            typeof extraSliderClass !== "undefined" ? extraSliderClass : ""
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
