import React from "react";
import ISingleProductGallery from "./SingleProductGallery.types";

export default function SingleProductGallery({
  images,
}: ISingleProductGallery) {
  return (
    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 gallery-holder">
      <div className="product-item-holder size-big single-product-gallery small-gallery">
        <div id="owl-single-product">
          {images?.map((el, idx) => (
            <div className="single-product-gallery-item" id={`slide${idx}`}>
              <a
                data-lightbox={`image-${idx}`}
                data-title="Gallery"
                href={el?.image}
              >
                <img
                  className="img-responsive"
                  alt={el?.altImg}
                  src="assets/images/blank.gif"
                  data-echo={el?.image}
                />
              </a>
            </div>
          ))}
        </div>
        <div className="single-product-gallery-thumbs gallery-thumbs">
          <div id="owl-single-product-thumbnails">
            {images?.map((el, idx) => (
              <div className="item">
                <a
                  className="horizontal-thumb active"
                  data-target="#owl-single-product"
                  data-slide={idx}
                  href={`#slide${idx}`}
                >
                  <img
                    className="img-responsive"
                    alt={el?.altImg}
                    src="assets/images/blank.gif"
                    data-echo={el?.image}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
