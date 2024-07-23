import React from "react";
import Link from "next/link";
import IProductCard from "./ProductCard.types";

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
              <Link href="details">
                <img src={image} alt={`${title} picture`} />
                <img
                  src={hoverImage}
                  alt={`${title} on hover picture`}
                  className="hover-image"
                />
              </Link>
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
              <Link href={to}>{title}</Link>
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
                    Add href cart
                  </button>
                </li>
                <li className="lnk wishlist">
                  <Link
                    href="details"
                    data-toggle="tooltip"
                    className="add-href-cart"
                    title="Wishlist"
                  >
                    <i className="icon fa fa-heart"></i>
                  </Link>
                </li>
                <li className="lnk">
                  <Link
                    href="details"
                    data-toggle="tooltip"
                    className="add-href-cart"
                    title="Compare"
                  >
                    <i className="fa fa-signal" aria-hidden="true"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
