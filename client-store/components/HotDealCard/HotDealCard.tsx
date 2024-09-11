import React from "react";
import IHotDealCard from "./HotDealCard.types";
import DealTimer from "../DealTimer/DealTimer";
import Link from "next/link";
import translations from "@/translations/translations.pl";
import useBasket from "@/hooks/useBasket";

export default function HotDealCard({
  id,
  discountPrecentages,
  name,
  price,
  priceBefore,
  timeInSeconds,
  rating,
  image,
  imageHover,
}: IHotDealCard) {
  const { handleAddToBasket, addToBasketResult } = useBasket();

  console.warn(id);

  return (
    <div className="item">
      <div className="products">
        <div className="hot-deal-wrapper">
          <div className="image">
            <Link href={"/"}>
              <img src={image} alt="" />
              <img src={imageHover} alt="" className="hover-image" />
            </Link>
          </div>
          <div className="sale-offer-tag">
            <span>
              {discountPrecentages}%
              <br />
              off
            </span>
          </div>
          <DealTimer timeInSeconds={timeInSeconds} />
        </div>
        <div className="product-info text-left m-t-20">
          <h3 className="name">
            <Link href="detail.html">{name}</Link>
          </h3>
          {rating && <div className="rating rateit-small"></div>}
          <div className="product-price hot-deal-price">
            <span className="price"> {price}zl </span>
            <span className="price-before-discount">{priceBefore}zl</span>
          </div>
        </div>

        <div className="cart clearfix animate-effect">
          <div className="action">
            <div className="add-cart-button btn-group">
              <button
                className="btn btn-primary icon"
                data-toggle="dropdown"
                type="button"
              >
                <i className="fa fa-shopping-cart"></i>
              </button>
              <button
                className="btn btn-primary cart-btn"
                type="button"
                onClick={() => handleAddToBasket(id, name)}
              >
                {translations.basket["add-to-basket"]}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
