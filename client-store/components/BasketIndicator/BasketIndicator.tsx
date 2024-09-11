"use client";

import translations from "@/translations/translations.pl";
import useBasketIndicator from "./useBasketIndicator";

export default function BasketIndicator() {
  const { totalGrossPrice, totalItems } = useBasketIndicator();

  return (
    <div className="items-cart-inner">
      <div className="basket">
        <div className="basket-item-count">
          <span className="count">{totalItems | 0}</span>
        </div>
        <div className="total-price-basket">
          {" "}
          <span className="lbl">{translations.navigation["basket"]}</span>{" "}
          <span className="value">{`${totalGrossPrice.toFixed(2)}zl`}</span>{" "}
        </div>
      </div>
    </div>
  );
}
