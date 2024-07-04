import React, { type PropsWithChildren } from "react";
import Navigation from "../Navigation";
import IndexPageConent from "../IndexPageContent";

import SideNav from "../SideNav/SideNav";
import InfoBoxes from "../InfoBoxes";

/*
<a href="https://fonts.googleapis.com/css?family=Barlow:200,300,300i,400,400i,500,500i,600,700,800" rel="stylesheet">
<a href='http://fonts.googleapis.com/css?family=Roboto:300,400,500,700' rel='stylesheet' type='text/css'>
<a href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,400italic,600,600italic,700,700italic,800' rel='stylesheet' type='text/css'>
<a href='https://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'></a>
*/

interface ILayout {
  hasSideNav?: boolean;
}

export default function Layout({
  children,
  hasSideNav = false,
}: PropsWithChildren<ILayout>) {
  return (
    <main>
      <header className="header-style-1">
        <div className="top-bar animate-dropdown">
          <div className="container">
            <div className="header-top-inner">
              <div className="cnt-account">
                <ul className="list-unstyled">
                  <li className="myaccount">
                    <a href="/account">Moje konto</a>
                  </li>
                  <li className="wishlist">
                    <a href="/wishlist">Lista życzeń</a>
                  </li>
                  <li className="header_cart hidden-xs">
                    <a href="/cart">Moj koszyk</a>
                  </li>
                  <li className="check">
                    <a href="/cart">Idz do kasy</a>
                  </li>
                  <li className="login">
                    <a href="/login">Zaloguj sie</a>
                  </li>
                </ul>
              </div>

              <div className="cnt-block">
                {/*
                  <ul className="list-unstyled list-inline">
                    <li className="dropdown dropdown-small">
                      {" "}
                      <a
                        href="#"
                        className="dropdown-toggle"
                        data-hover="dropdown"
                        data-toggle="dropdown"
                      >
                        <span className="value">USD </span>
                        <b className="caret"></b>
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="#">USD</a>
                        </li>
                        <li>
                          <a href="#">INR</a>
                        </li>
                        <li>
                          <a href="#">GBP</a>
                        </li>
  </ul>
                    </li>
                    <li className="dropdown dropdown-small lang">
                      {" "}
                      <a
                        href="#"
                        className="dropdown-toggle"
                        data-hover="dropdown"
                        data-toggle="dropdown"
                      >
                        <span className="value">English </span>
                        <b className="caret"></b>
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="#">English</a>
                        </li>
                        <li>
                          <a href="#">French</a>
                        </li>
                        <li>
                          <a href="#">German</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  */}
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
        </div>

        <div className="main-header">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-3 logo-holder">
                <div className="logo">
                  {" "}
                  <a href="home.html">
                    {" "}
                    <img src="assets/images/logo.png" alt="logo" />{" "}
                  </a>{" "}
                </div>
              </div>

              <div className="col-lg-7 col-md-6 col-sm-8 col-xs-12 top-search-holder">
                <div className="search-area">
                  <form>
                    <div className="control-group">
                      <ul className="categories-filter animate-dropdown">
                        <li className="dropdown">
                          {" "}
                          <a
                            className="dropdown-toggle"
                            data-toggle="dropdown"
                            href="category.html"
                          >
                            Kategorie <b className="caret"></b>
                          </a>
                          <ul className="dropdown-menu" role="menu">
                            {/* <li className="menu-header">Computer</li>
                             */}
                            <li role="presentation">
                              <a href="/zabawki">Zabawki</a>
                            </li>
                            <li role="presentation">
                              <a href="/motoryzacja">Motoryzacja</a>
                            </li>
                            <li role="presentation">
                              <a href="Ubrania">Ubrania</a>
                            </li>
                            <li role="presentation">
                              <a href="narzedzia">Narzedzia</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                      <input
                        className="search-field"
                        placeholder="Wpisz fraze..."
                      />
                      <a className="search-button" href="#"></a>{" "}
                    </div>
                  </form>
                </div>
              </div>

              <div className="col-lg-2 col-md-3 col-sm-4 col-xs-12 animate-dropdown top-cart-row">
                <div className="dropdown dropdown-cart">
                  {" "}
                  <a
                    href="#"
                    className="dropdown-toggle lnk-cart"
                    data-toggle="dropdown"
                  >
                    <div className="items-cart-inner">
                      <div className="basket">
                        <div className="basket-item-count">
                          <span className="count">{"0"}</span>
                        </div>
                        <div className="total-price-basket">
                          {" "}
                          <span className="lbl">Koszyk</span>{" "}
                          <span className="value">{"0000zl"}</span>{" "}
                        </div>
                      </div>
                    </div>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <div className="cart-item product-summary">
                        <div className="row">
                          <div className="col-xs-4">
                            <div className="image">
                              {" "}
                              <a href="detail.html">
                                <img
                                  src="assets/images/products/p4.jpg"
                                  alt=""
                                />
                              </a>{" "}
                            </div>
                          </div>
                          <div className="col-xs-7">
                            <h3 className="name">
                              <a href="index8a95.html?page-detail">
                                Simple Product
                              </a>
                            </h3>
                            <div className="price">$600.00</div>
                          </div>
                          <div className="col-xs-1 action">
                            {" "}
                            <a href="#">
                              <i className="fa fa-trash"></i>
                            </a>{" "}
                          </div>
                        </div>
                      </div>
                      <div className="clearfix"></div>
                      <hr />
                      <div className="clearfix cart-total">
                        <div className="pull-right">
                          {" "}
                          <span className="text">Sub Total :</span>
                          <span className="price">$600.00</span>{" "}
                        </div>
                        <div className="clearfix"></div>
                        <a
                          href="checkout.html"
                          className="btn btn-upper btn-primary btn-block m-t-20"
                        >
                          Checkout
                        </a>{" "}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-nav animate-dropdown">
          <div className="container">
            <div className="yamm navbar navbar-default" role="navigation">
              <div className="navbar-header">
                <button
                  data-target="#mc-horizontal-menu-collapse"
                  data-toggle="collapse"
                  className="navbar-toggle collapsed"
                  type="button"
                >
                  <span className="sr-only">Toggle navigation</span>{" "}
                  <span className="icon-bar"></span>{" "}
                  <span className="icon-bar"></span>{" "}
                  <span className="icon-bar"></span>{" "}
                </button>
              </div>
              <div className="nav-bg-className">
                <div
                  className="navbar-collapse collapse"
                  id="mc-horizontal-menu-collapse"
                >
                  <div className="nav-outer">
                    <ul className="nav navbar-nav">
                      <li className="active dropdown">
                        {" "}
                        <a>Strona glowna</a>{" "}
                      </li>
                      <li className="dropdown yamm mega-menu">
                        {" "}
                        <a
                          data-hover="dropdown"
                          className="dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          Zabawki
                        </a>
                        <ul className="dropdown-menu container">
                          <li>
                            <div className="yamm-content ">
                              <div className="row">
                                <div className="col-xs-12 col-sm-6 col-md-2 col-menu">
                                  <h2 className="title">Men</h2>
                                  <ul className="links">
                                    <li>
                                      <a href="#">Dresses</a>
                                    </li>
                                    <li>
                                      <a href="#">Shoes </a>
                                    </li>
                                    <li>
                                      <a href="#">Jackets</a>
                                    </li>
                                    <li>
                                      <a href="#">Sunglasses</a>
                                    </li>
                                    <li>
                                      <a href="#">Sport Wear</a>
                                    </li>
                                    <li>
                                      <a href="#">Blazers</a>
                                    </li>
                                    <li>
                                      <a href="#">Shirts</a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-2 col-menu">
                                  <h2 className="title">Women</h2>
                                  <ul className="links">
                                    <li>
                                      <a href="#">Handbags</a>
                                    </li>
                                    <li>
                                      <a href="#">Jwellery</a>
                                    </li>
                                    <li>
                                      <a href="#">Swimwear </a>
                                    </li>
                                    <li>
                                      <a href="#">Tops</a>
                                    </li>
                                    <li>
                                      <a href="#">Flats</a>
                                    </li>
                                    <li>
                                      <a href="#">Shoes</a>
                                    </li>
                                    <li>
                                      <a href="#">Winter Wear</a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-2 col-menu">
                                  <h2 className="title">Boys</h2>
                                  <ul className="links">
                                    <li>
                                      <a href="#">Toys & Games</a>
                                    </li>
                                    <li>
                                      <a href="#">Jeans</a>
                                    </li>
                                    <li>
                                      <a href="#">Shirts</a>
                                    </li>
                                    <li>
                                      <a href="#">Shoes</a>
                                    </li>
                                    <li>
                                      <a href="#">School Bags</a>
                                    </li>
                                    <li>
                                      <a href="#">Lunch Box</a>
                                    </li>
                                    <li>
                                      <a href="#">Footwear</a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-2 col-menu">
                                  <h2 className="title">Girls</h2>
                                  <ul className="links">
                                    <li>
                                      <a href="#">Sandals </a>
                                    </li>
                                    <li>
                                      <a href="#">Shorts</a>
                                    </li>
                                    <li>
                                      <a href="#">Dresses</a>
                                    </li>
                                    <li>
                                      <a href="#">Jwellery</a>
                                    </li>
                                    <li>
                                      <a href="#">Bags</a>
                                    </li>
                                    <li>
                                      <a href="#">Night Dress</a>
                                    </li>
                                    <li>
                                      <a href="#">Swim Wear</a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-4 col-menu banner-image">
                                  {" "}
                                  <img
                                    className="img-responsive"
                                    src="assets/images/banners/top-menu-banner.jpg"
                                    alt=""
                                  />{" "}
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown mega-menu">
                        <a
                          data-hover="dropdown"
                          className="dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          Motoryzacja{" "}
                          <span className="menu-label hot-menu hidden-xs">
                            hot
                          </span>{" "}
                        </a>
                        <ul className="dropdown-menu container">
                          <li>
                            <div className="yamm-content">
                              <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-2 col-menu">
                                  <h2 className="title">Laptops</h2>
                                  <ul className="links">
                                    <li>
                                      <a href="#">Gaming</a>
                                    </li>
                                    <li>
                                      <a href="#">Laptop Skins</a>
                                    </li>
                                    <li>
                                      <a href="#">Apple</a>
                                    </li>
                                    <li>
                                      <a href="#">Dell</a>
                                    </li>
                                    <li>
                                      <a href="#">Lenovo</a>
                                    </li>
                                    <li>
                                      <a href="#">Microsoft</a>
                                    </li>
                                    <li>
                                      <a href="#">Asus</a>
                                    </li>
                                    <li>
                                      <a href="#">Adapters</a>
                                    </li>
                                    <li>
                                      <a href="#">Batteries</a>
                                    </li>
                                    <li>
                                      <a href="#">Cooling Pads</a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-2 col-menu">
                                  <h2 className="title">Desktops</h2>
                                  <ul className="links">
                                    <li>
                                      <a href="#">Routers & Modems</a>
                                    </li>
                                    <li>
                                      <a href="#">CPUs, Processors</a>
                                    </li>
                                    <li>
                                      <a href="#">PC Gaming Store</a>
                                    </li>
                                    <li>
                                      <a href="#">Graphics Cards</a>
                                    </li>
                                    <li>
                                      <a href="#">Components</a>
                                    </li>
                                    <li>
                                      <a href="#">Webcam</a>
                                    </li>
                                    <li>
                                      <a href="#">Memory (RAM)</a>
                                    </li>
                                    <li>
                                      <a href="#">Motherboards</a>
                                    </li>
                                    <li>
                                      <a href="#">Keyboards</a>
                                    </li>
                                    <li>
                                      <a href="#">Headphones</a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-2 col-menu">
                                  <h2 className="title">Cameras</h2>
                                  <ul className="links">
                                    <li>
                                      <a href="#">Accessories</a>
                                    </li>
                                    <li>
                                      <a href="#">Binoculars</a>
                                    </li>
                                    <li>
                                      <a href="#">Telescopes</a>
                                    </li>
                                    <li>
                                      <a href="#">Camcorders</a>
                                    </li>
                                    <li>
                                      <a href="#">Digital</a>
                                    </li>
                                    <li>
                                      <a href="#">Film Cameras</a>
                                    </li>
                                    <li>
                                      <a href="#">Flashes</a>
                                    </li>
                                    <li>
                                      <a href="#">Lenses</a>
                                    </li>
                                    <li>
                                      <a href="#">Surveillance</a>
                                    </li>
                                    <li>
                                      <a href="#">Tripods</a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-2 col-menu">
                                  <h2 className="title">Mobile Phones</h2>
                                  <ul className="links">
                                    <li>
                                      <a href="#">Apple</a>
                                    </li>
                                    <li>
                                      <a href="#">Samsung</a>
                                    </li>
                                    <li>
                                      <a href="#">Lenovo</a>
                                    </li>
                                    <li>
                                      <a href="#">Motorola</a>
                                    </li>
                                    <li>
                                      <a href="#">LeEco</a>
                                    </li>
                                    <li>
                                      <a href="#">Asus</a>
                                    </li>
                                    <li>
                                      <a href="#">Acer</a>
                                    </li>
                                    <li>
                                      <a href="#">Accessories</a>
                                    </li>
                                    <li>
                                      <a href="#">Headphones</a>
                                    </li>
                                    <li>
                                      <a href="#">Memory Cards</a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-4 col-menu custom-banner">
                                  {" "}
                                  <a href="#">
                                    <img
                                      alt=""
                                      src="assets/images/banners/top-menu-banner1.jpg"
                                    />
                                  </a>{" "}
                                </div>
                              </div>
                            </div>{" "}
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown hidden-sm">
                        {" "}
                        <a>
                          Ubrania
                          <span className="menu-label new-menu hidden-xs">
                            new
                          </span>{" "}
                        </a>{" "}
                      </li>
                      <li className="dropdown hidden-sm">
                        {" "}
                        <a>Narzedzia</a>{" "}
                      </li>
                      {/*
                        <li className="dropdown">
                          {" "}
                          <a href="contact.html">Jewellery</a>{" "}
                        </li>
                        <li className="dropdown">
                          {" "}
                          <a href="contact.html">Shoes</a>{" "}
                        </li>
                        <li className="dropdown">
                          {" "}
                          <a href="contact.html">Kids & Girls</a>{" "}
                        </li>
                        */}
                      <li className="dropdown">
                        {" "}
                        <a
                          href="#"
                          className="dropdown-toggle"
                          data-hover="dropdown"
                          data-toggle="dropdown"
                        >
                          Strony
                        </a>
                        <ul className="dropdown-menu pages">
                          <li>
                            <div className="yamm-content">
                              <div className="row">
                                <div className="col-xs-12 col-menu">
                                  <ul className="links">
                                    <li>
                                      <a href="home.html">Home</a>
                                    </li>
                                    <li>
                                      <a href="category.html">Category</a>
                                    </li>
                                    <li>
                                      <a href="detail.html">Detail</a>
                                    </li>
                                    <li>
                                      <a href="shopping-cart.html">
                                        Shopping Cart Summary
                                      </a>
                                    </li>
                                    <li>
                                      <a href="checkout.html">Checkout</a>
                                    </li>
                                    <li>
                                      <a href="blog.html">Blog</a>
                                    </li>
                                    <li>
                                      <a href="blog-details.html">
                                        Blog Detail
                                      </a>
                                    </li>
                                    <li>
                                      <a href="contact.html">Contact</a>
                                    </li>
                                    <li>
                                      <a href="sign-in.html">Sign In</a>
                                    </li>
                                    <li>
                                      <a href="my-wishlist.html">Wishlist</a>
                                    </li>
                                    <li>
                                      <a href="terms-conditions.html">
                                        Terms and Condition
                                      </a>
                                    </li>
                                    <li>
                                      <a href="track-orders.html">
                                        Track Orders
                                      </a>
                                    </li>
                                    <li>
                                      <a href="product-comparison.html">
                                        Product-Comparison
                                      </a>
                                    </li>
                                    <li>
                                      <a href="faq.html">FAQ</a>
                                    </li>
                                    <li>
                                      <a href="404.html">404</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown  navbar-right special-menu">
                        {" "}
                        <a href="#">Get 30% off on selected items</a>{" "}
                      </li>
                    </ul>
                    <div className="clearfix"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {children}
      <div id="brands-carousel" className="logo-slider">
        <div className="logo-slider-inner">
          <div
            id="brand-slider"
            className="owl-carousel brand-slider custom-carousel owl-theme"
          >
            <div className="item m-t-15">
              <a href="#" className="image">
                <img
                  data-echo="assets/images/brands/brand1.png"
                  src="assets/images/blank.gif"
                  alt=""
                />
              </a>
            </div>
            <div className="item m-t-10">
              <a href="#" className="image">
                <img
                  data-echo="assets/images/brands/brand2.png"
                  src="assets/images/blank.gif"
                  alt=""
                />
              </a>
            </div>
            <div className="item">
              <a href="#" className="image">
                <img
                  data-echo="assets/images/brands/brand3.png"
                  src="assets/images/blank.gif"
                  alt=""
                />
              </a>
            </div>
            <div className="item">
              <a href="#" className="image">
                <img
                  data-echo="assets/images/brands/brand4.png"
                  src="assets/images/blank.gif"
                  alt=""
                />
              </a>
            </div>
            <div className="item">
              <a href="#" className="image">
                <img
                  data-echo="assets/images/brands/brand5.png"
                  src="assets/images/blank.gif"
                  alt=""
                />
              </a>
            </div>
            <div className="item">
              <a href="#" className="image">
                <img
                  data-echo="assets/images/brands/brand6.png"
                  src="assets/images/blank.gif"
                  alt=""
                />
              </a>
            </div>
            <div className="item">
              <a href="#" className="image">
                <img
                  data-echo="assets/images/brands/brand2.png"
                  src="assets/images/blank.gif"
                  alt=""
                />
              </a>
            </div>
            <div className="item">
              <a href="#" className="image">
                <img
                  data-echo="assets/images/brands/brand4.png"
                  src="assets/images/blank.gif"
                  alt=""
                />
              </a>
            </div>
            <div className="item">
              <a href="#" className="image">
                <img
                  data-echo="assets/images/brands/brand1.png"
                  src="assets/images/blank.gif"
                  alt=""
                />
              </a>
            </div>
            <div className="item">
              <a href="#" className="image">
                <img
                  data-echo="assets/images/brands/brand5.png"
                  src="assets/images/blank.gif"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <InfoBoxes />

      <footer id="footer" className="footer color-bg">
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="address-block">
                  <div className="module-body">
                    <ul className="toggle-footer">
                      <li className="media">
                        <div className="pull-left">
                          {" "}
                          <span className="icon fa-stack fa-lg">
                            {" "}
                            <i className="fa fa-map-marker fa-stack-1x fa-inverse"></i>{" "}
                          </span>{" "}
                        </div>
                        <div className="media-body">
                          <p>
                            ThemesGround, 789 Main rd, Anytown, CA 12345 USA
                          </p>
                        </div>
                      </li>
                      <li className="media">
                        <div className="pull-left">
                          {" "}
                          <span className="icon fa-stack fa-lg">
                            {" "}
                            <i className="fa fa-mobile fa-stack-1x fa-inverse"></i>{" "}
                          </span>{" "}
                        </div>
                        <div className="media-body">
                          <p> + (888) 123-4567 / + (888) 456-7890</p>
                        </div>
                      </li>
                      <li className="media">
                        <div className="pull-left">
                          {" "}
                          <span className="icon fa-stack fa-lg">
                            {" "}
                            <i className="fa fa-envelope fa-stack-1x fa-inverse"></i>{" "}
                          </span>{" "}
                        </div>
                        <div className="media-body">
                          {" "}
                          <span>
                            <a href="#">marazzo@themesground.com</a>
                          </span>{" "}
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="module-heading">
                  <h4 className="module-title">Customer Service</h4>
                </div>
                <div className="module-body">
                  <ul className="list-unstyled">
                    <li className="first">
                      <a href="#" title="Contact us">
                        My Account
                      </a>
                    </li>
                    <li>
                      <a href="#" title="About us">
                        Order History
                      </a>
                    </li>
                    <li>
                      <a href="#" title="faq">
                        FAQ
                      </a>
                    </li>
                    <li>
                      <a href="#" title="Popular Searches">
                        Specials
                      </a>
                    </li>
                    <li className="last">
                      <a href="#" title="Where is my order?">
                        Help Center
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="module-heading">
                  <h4 className="module-title">Corporation</h4>
                </div>
                <div className="module-body">
                  <ul className="list-unstyled">
                    <li className="first">
                      <a title="Your Account" href="#">
                        About us
                      </a>
                    </li>
                    <li>
                      <a title="Information" href="#">
                        Customer Service
                      </a>
                    </li>
                    <li>
                      <a title="Addresses" href="#">
                        Company
                      </a>
                    </li>
                    <li>
                      <a title="Addresses" href="#">
                        Investor Relations
                      </a>
                    </li>
                    <li className="last">
                      <a title="Orders History" href="#">
                        Advanced Search
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="module-heading">
                  <h4 className="module-title">Why Choose Us</h4>
                </div>
                <div className="module-body">
                  <ul className="list-unstyled">
                    <li className="first">
                      <a href="#" title="About us">
                        Shopping Guide
                      </a>
                    </li>
                    <li>
                      <a href="#" title="Blog">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a href="#" title="Company">
                        Company
                      </a>
                    </li>
                    <li>
                      <a href="#" title="Investor Relations">
                        Investor Relations
                      </a>
                    </li>
                    <li className=" last">
                      <a href="contact-us.html" title="Suppliers">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-bar">
          <div className="container">
            <div className="col-xs-12 col-sm-4 no-padding social">
              <ul className="link">
                <li className="fb pull-left">
                  <a
                    target="_blank"
                    rel="nofollow"
                    href="#"
                    title="Facebook"
                  ></a>
                </li>
                <li className="tw pull-left">
                  <a
                    target="_blank"
                    rel="nofollow"
                    href="#"
                    title="Twitter"
                  ></a>
                </li>
                <li className="googleplus pull-left">
                  <a
                    target="_blank"
                    rel="nofollow"
                    href="#"
                    title="GooglePlus"
                  ></a>
                </li>
                <li className="rss pull-left">
                  <a target="_blank" rel="nofollow" href="#" title="RSS"></a>
                </li>
                <li className="pintrest pull-left">
                  <a
                    target="_blank"
                    rel="nofollow"
                    href="#"
                    title="PInterest"
                  ></a>
                </li>
                <li className="linkedin pull-left">
                  <a
                    target="_blank"
                    rel="nofollow"
                    href="#"
                    title="Linkedin"
                  ></a>
                </li>
                <li className="youtube pull-left">
                  <a
                    target="_blank"
                    rel="nofollow"
                    href="#"
                    title="Youtube"
                  ></a>
                </li>
              </ul>
            </div>
            <div className="col-xs-12 col-sm-4 no-padding copyright">
              <a target="_blank" href="https://www.templateshub.net">
                Templates Hub
              </a>{" "}
            </div>
            <div className="col-xs-12 col-sm-4 no-padding">
              <div className="clearfix payment-methods">
                <ul>
                  <li>
                    <img src="assets/images/payments/1.png" alt="" />
                  </li>
                  <li>
                    <img src="assets/images/payments/2.png" alt="" />
                  </li>
                  <li>
                    <img src="assets/images/payments/3.png" alt="" />
                  </li>
                  <li>
                    <img src="assets/images/payments/4.png" alt="" />
                  </li>
                  <li>
                    <img src="assets/images/payments/5.png" alt="" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
