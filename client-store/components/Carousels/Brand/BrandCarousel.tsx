"use client";
import AdvertiseBanner from "@/components/AdvertiseBanner";
import Carousel from "@/components/Carousel/Carousel";

export default function BrandCarousel() {
  return (
    <Carousel className="owl-inner-nav owl-ui-sm">
      <AdvertiseBanner
        topTitle="Wiosna za rogiem!"
        title="Wiosenne Promocje Ogrodowe"
        description="Zacznij sezon ogrodowy z nową energią! Skorzystaj z promocji na narzędzia, nasiona i dekoracje. Wszystko, czego potrzebujesz, by twój ogród rozkwitł, znajdziesz w obniżonych cenach. Sprawdź ofertę i przygotuj się na wiosnę!"
        buttonText="Shop Now"
        buttonLink="/details-sigsidf"
        backgroundImage="url(assets/images/sliders/spring.jpg)"
      />
      <AdvertiseBanner
        topTitle="Spring 2018"
        title="Women Fashion"
        description=" Nemo enim ipsam voluptatem quia voluptas sit
    aspernatur aut odit aut fugit"
        buttonText="Shop Now"
        buttonLink="/details-sigsidf"
        backgroundImage="url(assets/images/sliders/02.jpg)"
      />
    </Carousel>
  );
}
