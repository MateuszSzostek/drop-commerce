import React from "react";
import Link from "next/link";
import IProductCardTiny from "./ProductCardTiny.types";

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
                <Link href={to}>
                  <img src={image} alt="" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col col-xs-7">
            <div className="product-info" style={{ position: "relative" }}>
              <h3 className="name" style={{ position: "relative" }}>
                <Link href={to}>{title}</Link>
              </h3>
              <div
                className="rating rateit-small"
                style={{ position: "relative" }}
              ></div>
              <div className="product-price" style={{ position: "relative" }}>
                <span className="price"> {price}zl </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
