import React from "react";
import type IPromotionBanner from "./PromotionBanner.types";

export default function PromotionBanner({ image, to, wide }: IPromotionBanner) {
  return (
    <div
      className={`${wide === true ? `col-md-8 col-sm-8` : `col-md-4 col-sm-4`}`}
    >
      <div className="wide-banner cnt-strip">
        <div className="image">
          <img className="img-responsive" src={image} alt="" />
        </div>
      </div>
    </div>
  );
}
