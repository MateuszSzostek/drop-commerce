import React from "react";
import Link from "next/link";
import IAdvertiseBanner from "./AdvertiseBanner.types";
import "./AdvertiseBanner.styles.css";

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
        height: "500px",
      }}
    >
      <div className="container-fluid">
        <div className="advertise-banner_text-container caption bg-color vertical-center text-left">
          <div className="advertise-banner__title">{topTitle}</div>
          <div className="advertise-banner__subtitle">{title}</div>
          <div
            className="advertise-banner__text excerpt fadeInDown-2 hidden-xs"
            style={{ maxWidth: "60%" }}
          >
            <span className="">{description}</span>
          </div>
          <div className="button-holder fadeInDown-3">
            <Link
              href={buttonLink}
              className="btn-lg btn btn-uppercase btn-primary shop-now-button"
            >
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
