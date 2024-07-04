import React from "react";
import type IAdvertiseBanner from "./AdvertiseBanner.types";

export default function AdvertiseBanner({
  topTitle,
  title,
  description,
  buttonText,
  buttonLink,
  backgroundImage,
}: IAdvertiseBanner) {
  return (
    <div
      className="item"
      style={{
        backgroundImage: backgroundImage,
      }}
    >
      <div className="container-fluid">
        <div className="caption bg-color vertical-center text-left">
          <div className="slider-header fadeInDown-1">{topTitle}</div>
          <div className="big-text fadeInDown-1">{title}</div>
          <div className="excerpt fadeInDown-2 hidden-xs">
            <span>{description}</span>
          </div>
          <div className="button-holder fadeInDown-3">
            <a
              href={buttonLink}
              className="btn-lg btn btn-uppercase btn-primary shop-now-button"
            >
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
