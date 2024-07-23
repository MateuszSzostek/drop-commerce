import Link from "next/link";
import React from "react";
import Navigation from "../Navigation";
import SideNav from "../SideNav/SideNav";
import AdvertiseBanner from "../AdvertiseBanner";
import ProductsPane from "../ProductsPane";
import PromotionBanner from "../PromotionBanner";
import BlogPane from "../BlogPane";
import {
  featuredProducts,
  newProducts,
  blogPane,
  seasonCategories,
} from "./IndexPageContent.temp";

export default function IndexPageConent() {
  return (
    <div className="body-content outer-top-vs" id="top-banner-and-menu">
      <div className="container content__container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-3 sidebar">
            <SideNav />
            <Navigation></Navigation>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-9 homebanner-holder">
            <div id="hero">
              <div
                id="owl-main"
                className="owl-carousel owl-inner-nav owl-ui-sm"
              >
                <AdvertiseBanner
                  topTitle="Top Brands"
                  title="New Collections"
                  description="Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit."
                  buttonText="Shop Now"
                  buttonLink="/details-sigsidf"
                  backgroundImage="url(assets/images/sliders/01.jpg)"
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
              </div>
            </div>

            <ProductsPane
              title={newProducts.title}
              id={newProducts.id}
              sliders={newProducts.sliders}
              extraSliderClass="home-owl-carousel"
            />

            <div className="wide-banners outer-bottom-xs">
              <div className="row">
                <PromotionBanner
                  image="assets/images/banners/home-banner1.jpg"
                  to="/asod3f"
                />
                <PromotionBanner
                  image="assets/images/banners/home-banner3.jpg"
                  to="/asodrdsgf"
                />
                <PromotionBanner
                  image="assets/images/banners/home-banner2.jpg"
                  to="/asoertdf"
                />
              </div>
            </div>
            <section className="section featured-product">
              <div className="row">
                <div className="col-lg-3">
                  <h3 className="section-title season-cat-title">
                    Season category
                  </h3>
                  <ul className="sub-cat">
                    {seasonCategories.map((el) => (
                      <li>
                        <Link href={el?.to}>{el.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-lg-9">
                  <ProductsPane
                    title="Awesome Category"
                    id={featuredProducts.id}
                    sliders={featuredProducts.sliders}
                    extraSliderClass="season-category-owl-carousel"
                  />
                </div>
              </div>
            </section>
            <div className="wide-banners outer-bottom-xs">
              <div className="row">
                <PromotionBanner
                  image="assets/images/banners/home-banner.jpg"
                  to="/asod3f"
                  wide
                />
                <PromotionBanner
                  image="assets/images/banners/home-banner4.jpg"
                  to="/asod3f"
                />
              </div>
            </div>
            <BlogPane
              title={blogPane?.title}
              id={blogPane?.id}
              posts={blogPane?.posts}
            />
            <section className="section new-arriavls">
              <ProductsPane
                title={featuredProducts.title}
                id={featuredProducts.id}
                sliders={featuredProducts.sliders}
                extraSliderClass="home-owl-carousel"
              />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
