import React from "react";
import { PropsWithChildren } from "react";
import HotDealCard from "../HotDealCard";
import ProductCardTiny from "../ProductCardTiny";
import { productTags } from "./Navigation.temp";
import Link from "next/link";

export default function Navigation({ children }: PropsWithChildren<{}>) {
  return (
    <>
      <div className="sidebar-widget hot-deals outer-bottom-xs">
        <h3 className="section-title">Hot deals</h3>
        <div className="owl-carousel sidebar-carousel custom-carousel owl-theme outer-top-ss">
          <HotDealCard
            name="Floral Print Buttoned"
            price={60}
            priceBefore={80}
            timeInSeconds={40000}
            discountPrecentages={30}
            image={"/assets/images/hot-deals/p13.jpg"}
            imageHover={"/assets/images/hot-deals/p13_hover.jpg"}
          />
          <HotDealCard
            name="Test product"
            price={600}
            priceBefore={1000}
            timeInSeconds={90000}
            discountPrecentages={40}
            image={"/assets/images/hot-deals/p14.jpg"}
            imageHover={"/assets/images/hot-deals/p14_hover.jpg"}
          />
          <HotDealCard
            name="FXxxxx "
            price={604}
            priceBefore={808}
            timeInSeconds={4000}
            discountPrecentages={60}
            image={"/assets/images/hot-deals/p15.jpg"}
            imageHover={"/assets/images/hot-deals/p15_hover.jpg"}
          />
        </div>
      </div>

      <div className="sidebar-widget outer-bottom-small">
        <h3 className="section-title">Special Offer</h3>
        <div className="sidebar-widget-body outer-top-xs">
          <div className="owl-carousel sidebar-carousel special-offer custom-carousel owl-theme outer-top-xs">
            <div className="item">
              <div className="products special-product">
                <ProductCardTiny
                  title="Floral Print Shirt"
                  image="/assets/images/products/p1.jpg"
                  price={99}
                  to="/kkaas"
                />
                <ProductCardTiny
                  title="Floral Print Shirt"
                  image="/assets/images/products/p2.jpg"
                  price={126}
                  to="/kkaas"
                />
                <ProductCardTiny
                  title="Floral Print Shirt"
                  image="/assets/images/products/p3.jpg"
                  price={59}
                  to="/kkaas"
                />
              </div>
            </div>
            <div className="item">
              <div className="products special-product">
                <ProductCardTiny
                  title="Floral Print Shirt"
                  image="/assets/images/products/p4.jpg"
                  price={99}
                  to="/kkaas"
                />
                <ProductCardTiny
                  title="Floral Print Shirt"
                  image="/assets/images/products/p5.jpg"
                  price={126}
                  to="/kkaas"
                />
                <ProductCardTiny
                  title="Floral Print Shirt"
                  image="/assets/images/products/p6.jpg"
                  price={59}
                  to="/kkaas"
                />
              </div>
            </div>
            <div className="item">
              <div className="products special-product">
                <ProductCardTiny
                  title="Floral Print Shirt"
                  image="/assets/images/products/p7.jpg"
                  price={99}
                  to="/kkaas"
                />
                <ProductCardTiny
                  title="Floral Print Shirt"
                  image="/assets/images/products/p8.jpg"
                  price={126}
                  to="/kkaas"
                />
                <ProductCardTiny
                  title="Floral Print Shirt"
                  image="/assets/images/products/p9.jpg"
                  price={59}
                  to="/kkaas"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar-widget product-tag">
        <h3 className="section-title">Szukaj wedlug tagu</h3>
        <div className="sidebar-widget-body outer-top-xs">
          <div className="tag-list">
            {productTags?.map((el) => (
              <Link className="item" title={el?.name} href={el?.to}>
                {el?.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="sidebar-widget outer-bottom-small">
        <h3 className="section-title">Special Deals</h3>
        <div className="sidebar-widget-body outer-top-xs">
          <div className="owl-carousel sidebar-carousel special-offer custom-carousel owl-theme outer-top-xs">
            <div className="item">
              <div className="products special-product">
                <ProductCardTiny
                  title="Floral Print Shirt"
                  image="/assets/images/products/p7.jpg"
                  price={99}
                  to="/kkaas"
                />
                <ProductCardTiny
                  title="Floral Print Shirt"
                  image="/assets/images/products/p8.jpg"
                  price={126}
                  to="/kkaas"
                />
                <ProductCardTiny
                  title="Floral Print Shirt"
                  image="/assets/images/products/p9.jpg"
                  price={59}
                  to="/kkaas"
                />
              </div>
            </div>
            <div className="item">
              <div className="products special-product">
                <ProductCardTiny
                  title="Floral Print Shirt"
                  image="/assets/images/products/p7.jpg"
                  price={99}
                  to="/kkaas"
                />
                <ProductCardTiny
                  title="Floral Print Shirt"
                  image="/assets/images/products/p8.jpg"
                  price={126}
                  to="/kkaas"
                />
                <ProductCardTiny
                  title="Floral Print Shirt"
                  image="/assets/images/products/p9.jpg"
                  price={59}
                  to="/kkaas"
                />
              </div>
            </div>
            <div className="item">
              <div className="products special-product">
                <ProductCardTiny
                  title="Floral Print Shirt"
                  image="/assets/images/products/p7.jpg"
                  price={99}
                  to="/kkaas"
                />
                <ProductCardTiny
                  title="Floral Print Shirt"
                  image="/assets/images/products/p8.jpg"
                  price={126}
                  to="/kkaas"
                />
                <ProductCardTiny
                  title="Floral Print Shirt"
                  image="/assets/images/products/p9.jpg"
                  price={59}
                  to="/kkaas"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar-widget newsletter outer-bottom-small">
        <h3 className="section-title">Newsletters</h3>
        <div className="sidebar-widget-body outer-top-xs">
          <p>Sign Up for Our Newsletter!</p>
          <form>
            <div className="form-group">
              <label className="sr-only" htmlFor="exampleInputEmail1">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Subscribe to our newsletter"
              />
            </div>
            <button className="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="sidebar-widget outer-top-vs">
        <div id="advertisement" className="advertisement">
          <div className="item">
            <div className="avatar">
              <img src="assets/images/testimonials/member1.png" alt="Image" />
            </div>
            <div className="testimonials">
              <em>"</em> Vtae sodales aliq uam morbi non sem lacus port mollis.
              Nunc condime tum metus eud molest sed consectetuer. Sed quia non
              numquam eius modi tempora incidunt ut labore et dolore magnam
              aliquam quaerat.<em>"</em>
            </div>
            <div className="clients_author">
              John Doe <span>Abc Company</span>
            </div>
          </div>
          <div className="item">
            <div className="avatar">
              <img src="assets/images/testimonials/member3.png" alt="Image" />
            </div>
            <div className="testimonials">
              <em>"</em>Vtae sodales aliq uam morbi non sem lacus port mollis.
              Nunc condime tum metus eud molest sed consectetuer. Sed quia non
              numquam eius modi tempora incidunt ut labore et dolore magnam
              aliquam quaerat.<em>"</em>
            </div>
            <div className="clients_author">
              Stephen Doe <span>Xperia Designs</span>
            </div>
          </div>
          <div className="item">
            <div className="avatar">
              <img src="assets/images/testimonials/member2.png" alt="Image" />
            </div>
            <div className="testimonials">
              <em>"</em>Vtae sodales aliq uam morbi non sem lacus port mollis.
              Nunc condime tum metus eud molest sed consectetuer. Sed quia non
              numquam eius modi tempora incidunt ut labore et dolore magnam
              aliquam quaerat.<em>"</em>
            </div>
            <div className="clients_author">
              Saraha Smith <span>Datsun &amp; Co</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
