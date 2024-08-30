"use client";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import React, { PropsWithChildren } from "react";
var $ = require("jquery");

declare global {
  interface Window {
    $: any;
    jQuery: any;
  }
}

if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const options = {
  animateOut: "slideOutDown",
  animateIn: "slideInLeft",

  margin: 30,
  //stagePadding: 30,
  smartSpeed: 450,

  items: 1,
  autoplay: true,
  loop: true,
};

export default function Carousel({
  children,
  className = "",
}: PropsWithChildren<{ className?: string }>) {
  return (
    <OwlCarousel {...options} className={className}>
      {children}
    </OwlCarousel>
  );
}
