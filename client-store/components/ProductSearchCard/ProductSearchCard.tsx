import React from "react";
import Link from "next/link";
import IProductCard from "./ProductSearchCard.types";

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
    <div className="col-sm-6 col-md-4 col-lg-3">
      <div className="item">
        <div className="products">
          <div className="product">
            <div className="product-image">
              <div className="image">
                <a href="detail.html">
                  <img src={image} alt="" />
                  <img src={hoverImage} alt="" className="hover-image" />
                </a>
              </div>
              {/*<!-- /.image -->*/}

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
            {/*<!-- /.product-image -->*/}

            <div className="product-info text-left">
              <h3 className="name">
                <a href="detail.html">{title}</a>
              </h3>
              <div className="rating rateit-small"></div>
              <div className="description"></div>
              <div className="product-price">
                <span className="price"> {price} </span>
                <span className="price-before-discount">{priceBefore}</span>
              </div>
              {/*<!-- /.product-price -->*/}
            </div>
            {/*<!-- /.product-info -->*/}
            <div className="cart clearfix animate-effect">
              <div className="action">
                <ul className="list-unstyled">
                  <li className="add-cart-button btn-group">
                    <button
                      className="btn btn-primary icon"
                      data-toggle="dropdown"
                      type="button"
                    >
                      <i className="fa fa-shopping-cart"></i>
                    </button>
                    <button className="btn btn-primary cart-btn" type="button">
                      Add to cart
                    </button>
                  </li>
                  <li className="lnk wishlist">
                    <a
                      className="add-to-cart"
                      href="detail.html"
                      title="Wishlist"
                    >
                      <i className="icon fa fa-heart"></i>
                    </a>
                  </li>
                  <li className="lnk">
                    <a
                      className="add-to-cart"
                      href="detail.html"
                      title="Compare"
                    >
                      <i className="fa fa-signal"></i>
                    </a>
                  </li>
                </ul>
              </div>
              {/*<!-- /.action -->*/}
            </div>
            {/*<!-- /.cart -->*/}
          </div>
          {/*<!-- /.product -->*/}
        </div>
        {/*<!-- /.products -->*/}
      </div>
    </div>
  );
}
