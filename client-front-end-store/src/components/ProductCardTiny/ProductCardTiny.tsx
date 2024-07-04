import React from "react";
import type IProductCardTiny from "./ProductCardTiny.types";

export default function ProductCardTiny({
  title,
  image,
  price,
  to,
}: IProductCardTiny) {
  return (
    <div className="product">
      <div className="product-micro">
        <div className="row product-micro-row">
          <div className="col col-xs-5">
            <div className="product-image">
              <div className="image">
                <a href={to}>
                  <img src={image} alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="col col-xs-7">
            <div className="product-info">
              <h3 className="name">
                <a href={to}>{title}</a>
              </h3>
              <div className="rating rateit-small"></div>
              <div className="product-price">
                <span className="price"> {price}zl </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
