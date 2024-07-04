import React from "react";
import type IProductCard from "./ProductCard.types";

export default function ProductCard({
  title,
  image,
  hoverImage,
  price,
  priceBefore,
  status,
  to,
}: IProductCard) {
  return (
    <div className="item item-carousel">
      <div className="products">
        <div className="product">
          <div className="product-image">
            <div className="image">
              <a href="details">
                <img src={image} alt={`${title} picture`} />
                <img
                  src={hoverImage}
                  alt={`${title} on hover picture`}
                  className="hover-image"
                />
              </a>
            </div>
            {status === "HOT" && (
              <div className="tag hot">
                <span>HOT</span>
              </div>
            )}
            {status === "NEW" && (
              <div className="tag new">
                <span>NEW</span>
              </div>
            )}
            {status === "SALE" && (
              <div className="tag sale">
                <span>SALE</span>
              </div>
            )}
          </div>
          <div className="product-info-card text-left">
            <h3 className="name">
              <a href={to}>{title}</a>
            </h3>
            <div className="rating rateit-small"></div>
            <div className="description"></div>
            <div className="product-price">
              <span className="price"> {price}zl </span>
              <span className="price-before-discount">{priceBefore}zl</span>
            </div>
          </div>
          <div className="cart clearfix animate-effect">
            <div className="action">
              <ul className="list-unstyled">
                <li className="add-cart-button btn-group">
                  <button
                    data-toggle="tooltip"
                    className="btn btn-primary icon"
                    type="button"
                    title="Add Cart"
                  >
                    <i className="fa fa-shopping-cart"></i>
                  </button>
                  <button className="btn btn-primary cart-btn" type="button">
                    Add to cart
                  </button>
                </li>
                <li className="lnk wishlist">
                  <a
                    href="details"
                    data-toggle="tooltip"
                    className="add-to-cart"
                    title="Wishlist"
                  >
                    <i className="icon fa fa-heart"></i>
                  </a>
                </li>
                <li className="lnk">
                  <a
                    href="details"
                    data-toggle="tooltip"
                    className="add-to-cart"
                    title="Compare"
                  >
                    <i className="fa fa-signal" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
