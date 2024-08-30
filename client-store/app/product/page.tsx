import React from "react";
import Layout from "../../components/Layout/Layout";
import Navigation from "../../components/Navigation";
import Carousel from "@/components/Carousel/Carousel";

export default function Details() {
  return (
    <Layout>
      <div className="breadcrumb">
        <div className="container">
          <div className="breadcrumb-inner">
            <ul className="list-inline list-unstyled">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Clothing</a>
              </li>
              <li className="active">Floral Print Buttoned</li>
            </ul>
          </div>
          {/* <!-- /.breadcrumb-inner --> */}
        </div>
        {/* <!-- /.container --> */}
      </div>
      {/* <!-- /.breadcrumb --> */}

      <div className="body-content outer-top-xs">
        <div className="container">
          <div className="row single-product">
            <div className="col-xs-12 col-sm-12 col-md-3 sidebar">
              <Navigation></Navigation>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-9 rht-col">
              <div className="detail-block">
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 gallery-holder">
                    <div className="product-item-holder size-big single-product-gallery small-gallery">
                      <div id="owl-single-product">
                        <div
                          className="single-product-gallery-item"
                          id="slide1"
                        >
                          <a
                            data-lightbox="image-1"
                            data-title="Gallery"
                            href="assets/images/products/p1.jpg"
                          >
                            <img
                              className="img-responsive"
                              alt=""
                              src="../assets/images/blank.gif"
                              data-echo="assets/images/products/p1.jpg"
                            />
                          </a>
                        </div>
                        {/* <!-- /.single-product-gallery-item --> */}

                        <div
                          className="single-product-gallery-item"
                          id="slide2"
                        >
                          <a
                            data-lightbox="image-1"
                            data-title="Gallery"
                            href="assets/images/products/p2.jpg"
                          >
                            <img
                              className="img-responsive"
                              alt=""
                              src="../assets/images/blank.gif"
                              data-echo="assets/images/products/p2.jpg"
                            />
                          </a>
                        </div>
                        {/* <!-- /.single-product-gallery-item --> */}

                        <div
                          className="single-product-gallery-item"
                          id="slide3"
                        >
                          <a
                            data-lightbox="image-1"
                            data-title="Gallery"
                            href="assets/images/products/p3.jpg"
                          >
                            <img
                              className="img-responsive"
                              alt=""
                              src="../assets/images/blank.gif"
                              data-echo="assets/images/products/p3.jpg"
                            />
                          </a>
                        </div>
                        {/* <!-- /.single-product-gallery-item --> */}

                        <div
                          className="single-product-gallery-item"
                          id="slide4"
                        >
                          <a
                            data-lightbox="image-1"
                            data-title="Gallery"
                            href="assets/images/products/p4.jpg"
                          >
                            <img
                              className="img-responsive"
                              alt=""
                              src="../assets/images/blank.gif"
                              data-echo="assets/images/products/p4.jpg"
                            />
                          </a>
                        </div>
                        {/* <!-- /.single-product-gallery-item --> */}

                        <div
                          className="single-product-gallery-item"
                          id="slide5"
                        >
                          <a
                            data-lightbox="image-1"
                            data-title="Gallery"
                            href="assets/images/products/p5.jpg"
                          >
                            <img
                              className="img-responsive"
                              alt=""
                              src="../assets/images/blank.gif"
                              data-echo="assets/images/products/p5.jpg"
                            />
                          </a>
                        </div>
                        {/* <!-- /.single-product-gallery-item --> */}

                        <div
                          className="single-product-gallery-item"
                          id="slide6"
                        >
                          <a
                            data-lightbox="image-1"
                            data-title="Gallery"
                            href="assets/images/products/p6.jpg"
                          >
                            <img
                              className="img-responsive"
                              alt=""
                              src="../assets/images/blank.gif"
                              data-echo="assets/images/products/p6.jpg"
                            />
                          </a>
                        </div>
                        {/* <!-- /.single-product-gallery-item --> */}

                        <div
                          className="single-product-gallery-item"
                          id="slide7"
                        >
                          <a
                            data-lightbox="image-1"
                            data-title="Gallery"
                            href="assets/images/products/p7.jpg"
                          >
                            <img
                              className="img-responsive"
                              alt=""
                              src="../assets/images/blank.gif"
                              data-echo="assets/images/products/p7.jpg"
                            />
                          </a>
                        </div>
                        {/* <!-- /.single-product-gallery-item --> */}

                        <div
                          className="single-product-gallery-item"
                          id="slide8"
                        >
                          <a
                            data-lightbox="image-1"
                            data-title="Gallery"
                            href="assets/images/products/p8.jpg"
                          >
                            <img
                              className="img-responsive"
                              alt=""
                              src="../assets/images/blank.gif"
                              data-echo="assets/images/products/p8.jpg"
                            />
                          </a>
                        </div>
                        {/* <!-- /.single-product-gallery-item --> */}

                        <div
                          className="single-product-gallery-item"
                          id="slide9"
                        >
                          <a
                            data-lightbox="image-1"
                            data-title="Gallery"
                            href="assets/images/products/p9.jpg"
                          >
                            <img
                              className="img-responsive"
                              alt=""
                              src="../assets/images/blank.gif"
                              data-echo="assets/images/products/p9.jpg"
                            />
                          </a>
                        </div>
                        {/* <!-- /.single-product-gallery-item --> */}
                      </div>
                      {/* <!-- /.single-product-slider --> */}

                      <div className="single-product-gallery-thumbs gallery-thumbs">
                        <div id="owl-single-product-thumbnails">
                          <div className="item">
                            <a
                              className="horizontal-thumb active"
                              data-target="#owl-single-product"
                              data-slide="1"
                              href="#slide1"
                            >
                              <img
                                className="img-responsive"
                                alt=""
                                src="../assets/images/blank.gif"
                                data-echo="assets/images/products/p1.jpg"
                              />
                            </a>
                          </div>

                          <div className="item">
                            <a
                              className="horizontal-thumb"
                              data-target="#owl-single-product"
                              data-slide="2"
                              href="#slide2"
                            >
                              <img
                                className="img-responsive"
                                alt=""
                                src="../assets/images/blank.gif"
                                data-echo="assets/images/products/p2.jpg"
                              />
                            </a>
                          </div>
                          <div className="item">
                            <a
                              className="horizontal-thumb"
                              data-target="#owl-single-product"
                              data-slide="3"
                              href="#slide3"
                            >
                              <img
                                className="img-responsive"
                                alt=""
                                src="../assets/images/blank.gif"
                                data-echo="assets/images/products/p3.jpg"
                              />
                            </a>
                          </div>
                          <div className="item">
                            <a
                              className="horizontal-thumb"
                              data-target="#owl-single-product"
                              data-slide="4"
                              href="#slide4"
                            >
                              <img
                                className="img-responsive"
                                alt=""
                                src="../assets/images/blank.gif"
                                data-echo="assets/images/products/p4.jpg"
                              />
                            </a>
                          </div>
                          <div className="item">
                            <a
                              className="horizontal-thumb"
                              data-target="#owl-single-product"
                              data-slide="5"
                              href="#slide5"
                            >
                              <img
                                className="img-responsive"
                                alt=""
                                src="../assets/images/blank.gif"
                                data-echo="assets/images/products/p5.jpg"
                              />
                            </a>
                          </div>
                          <div className="item">
                            <a
                              className="horizontal-thumb"
                              data-target="#owl-single-product"
                              data-slide="6"
                              href="#slide6"
                            >
                              <img
                                className="img-responsive"
                                alt=""
                                src="../assets/images/blank.gif"
                                data-echo="assets/images/products/p6.jpg"
                              />
                            </a>
                          </div>
                          <div className="item">
                            <a
                              className="horizontal-thumb"
                              data-target="#owl-single-product"
                              data-slide="7"
                              href="#slide7"
                            >
                              <img
                                className="img-responsive"
                                alt=""
                                src="../assets/images/blank.gif"
                                data-echo="assets/images/products/p7.jpg"
                              />
                            </a>
                          </div>
                          <div className="item">
                            <a
                              className="horizontal-thumb"
                              data-target="#owl-single-product"
                              data-slide="8"
                              href="#slide8"
                            >
                              <img
                                className="img-responsive"
                                alt=""
                                src="../assets/images/blank.gif"
                                data-echo="assets/images/products/p8.jpg"
                              />
                            </a>
                          </div>
                          <div className="item">
                            <a
                              className="horizontal-thumb"
                              data-target="#owl-single-product"
                              data-slide="9"
                              href="#slide9"
                            >
                              <img
                                className="img-responsive"
                                alt=""
                                src="../assets/images/blank.gif"
                                data-echo="assets/images/products/p9.jpg"
                              />
                            </a>
                          </div>
                        </div>
                        {/* <!-- /#owl-single-product-thumbnails --> */}
                      </div>
                      {/* <!-- /.gallery-thumbs --> */}
                    </div>
                    {/* <!-- /.single-product-gallery --> */}
                  </div>
                  {/* <!-- /.gallery-holder --> */}
                  <div className="col-sm-12 col-md-8 col-lg-8 product-info-block">
                    <div className="product-info">
                      <h1 className="name">Floral Print Buttoned</h1>

                      <div className="rating-reviews m-t-20">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="pull-left">
                              <div className="rating rateit-small"></div>
                            </div>
                            <div className="pull-left">
                              <div className="reviews">
                                <a href="#" className="lnk">
                                  (13 Reviews)
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <!-- /.row --> */}
                      </div>
                      {/* <!-- /.rating-reviews --> */}

                      <div className="stock-container info-container m-t-10">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="pull-left">
                              <div className="stock-box">
                                <span className="label">Availability :</span>
                              </div>
                            </div>
                            <div className="pull-left">
                              <div className="stock-box">
                                <span className="value">In Stock</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <!-- /.row --> */}
                      </div>
                      {/* <!-- /.stock-container --> */}

                      <div className="description-container m-t-20">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.{" "}
                        </p>
                        <p>
                          Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur.
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt mollit anim id est
                          laborum.
                        </p>
                      </div>
                      {/* <!-- /.description-container --> */}

                      <div className="price-container info-container m-t-30">
                        <div className="row">
                          <div className="col-sm-6 col-xs-6">
                            <div className="price-box">
                              <span className="price">$800.00</span>
                              <span className="price-strike">$900.00</span>
                            </div>
                          </div>

                          <div className="col-sm-6 col-xs-6">
                            <div className="favorite-button m-t-5">
                              <a
                                className="btn btn-primary"
                                data-toggle="tooltip"
                                data-placement="right"
                                title="Wishlist"
                                href="#"
                              >
                                <i className="fa fa-heart"></i>
                              </a>
                              <a
                                className="btn btn-primary"
                                data-toggle="tooltip"
                                data-placement="right"
                                title="Add to Compare"
                                href="#"
                              >
                                <i className="fa fa-signal"></i>
                              </a>
                              <a
                                className="btn btn-primary"
                                data-toggle="tooltip"
                                data-placement="right"
                                title="E-mail"
                                href="#"
                              >
                                <i className="fa fa-envelope"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                        {/* <!-- /.row --> */}
                      </div>
                      {/* <!-- /.price-container --> */}

                      <div className="quantity-container info-container">
                        <div className="row">
                          <div className="qty">
                            <span className="label">Qty :</span>
                          </div>

                          <div className="qty-count">
                            <div className="cart-quantity">
                              <div className="quant-input">
                                <div className="arrows">
                                  <div className="arrow plus gradient">
                                    <span className="ir">
                                      <i className="icon fa fa-sort-asc"></i>
                                    </span>
                                  </div>
                                  <div className="arrow minus gradient">
                                    <span className="ir">
                                      <i className="icon fa fa-sort-desc"></i>
                                    </span>
                                  </div>
                                </div>
                                <input type="text" defaultValue="1" />
                              </div>
                            </div>
                          </div>

                          <div className="add-btn">
                            <a href="#" className="btn btn-primary">
                              <i className="fa fa-shopping-cart inner-right-vs"></i>{" "}
                              {translations.basket["add-to-basket"]}
                            </a>
                          </div>
                        </div>
                        {/* <!-- /.row --> */}
                      </div>
                      {/* <!-- /.quantity-container --> */}
                    </div>
                    {/* <!-- /.product-info --> */}
                  </div>
                  {/* <!-- /.col-sm-7 --> */}
                </div>
                {/* <!-- /.row --> */}
              </div>

              <div className="product-tabs inner-bottom-xs">
                <div className="row">
                  <div className="col-sm-12 col-md-3 col-lg-3">
                    <ul id="product-tabs" className="nav nav-tabs nav-tab-cell">
                      <li className="active">
                        <a data-toggle="tab" href="#description">
                          DESCRIPTION
                        </a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#review">
                          REVIEW
                        </a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#tags">
                          TAGS
                        </a>
                      </li>
                    </ul>
                    {/* <!-- /.nav-tabs #product-tabs --> */}
                  </div>
                  <div className="col-sm-12 col-md-9 col-lg-9">
                    <div className="tab-content">
                      <div id="description" className="tab-pane in active">
                        <div className="product-tab">
                          <p className="text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum. Lorem ipsum
                            dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                            <br />
                            <br /> Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit
                            anim id est laborum.
                          </p>
                        </div>
                      </div>
                      {/* <!-- /.tab-pane --> */}

                      <div id="review" className="tab-pane">
                        <div className="product-tab">
                          <div className="product-reviews">
                            <h4 className="title">Customer Reviews</h4>

                            <div className="reviews">
                              <div className="review">
                                <div className="review-title">
                                  <span className="summary">
                                    We love this product
                                  </span>
                                  <span className="date">
                                    <i className="fa fa-calendar"></i>
                                    <span>1 days ago</span>
                                  </span>
                                </div>
                                <div className="text">
                                  "Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit.Aliquam suscipit."
                                </div>
                              </div>
                            </div>
                            {/* <!-- /.reviews --> */}
                          </div>
                          {/* <!-- /.product-reviews --> */}

                          <div className="product-add-review">
                            <h4 className="title">Write your own review</h4>
                            <div className="review-table">
                              <div className="table-responsive">
                                <table className="table">
                                  <thead>
                                    <tr>
                                      <th className="cell-label">&nbsp;</th>
                                      <th>1 star</th>
                                      <th>2 stars</th>
                                      <th>3 stars</th>
                                      <th>4 stars</th>
                                      <th>5 stars</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td className="cell-label">Quality</td>
                                      <td>
                                        <input
                                          type="radio"
                                          name="quality"
                                          className="radio"
                                          defaultValue="1"
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="radio"
                                          name="quality"
                                          className="radio"
                                          defaultValue="2"
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="radio"
                                          name="quality"
                                          className="radio"
                                          defaultValue="3"
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="radio"
                                          name="quality"
                                          className="radio"
                                          defaultValue="4"
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="radio"
                                          name="quality"
                                          className="radio"
                                          defaultValue="5"
                                        />
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="cell-label">Price</td>
                                      <td>
                                        <input
                                          type="radio"
                                          name="quality"
                                          className="radio"
                                          defaultValue="1"
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="radio"
                                          name="quality"
                                          className="radio"
                                          defaultValue="2"
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="radio"
                                          name="quality"
                                          className="radio"
                                          defaultValue="3"
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="radio"
                                          name="quality"
                                          className="radio"
                                          defaultValue="4"
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="radio"
                                          name="quality"
                                          className="radio"
                                          defaultValue="5"
                                        />
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="cell-label">
                                        defaultValue
                                      </td>
                                      <td>
                                        <input
                                          type="radio"
                                          name="quality"
                                          className="radio"
                                          defaultValue="1"
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="radio"
                                          name="quality"
                                          className="radio"
                                          defaultValue="2"
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="radio"
                                          name="quality"
                                          className="radio"
                                          defaultValue="3"
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="radio"
                                          name="quality"
                                          className="radio"
                                          defaultValue="4"
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="radio"
                                          name="quality"
                                          className="radio"
                                          defaultValue="5"
                                        />
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                {/* <!-- /.table .table-bordered --> */}
                              </div>
                              {/* <!-- /.table-responsive --> */}
                            </div>
                            {/* <!-- /.review-table --> */}

                            <div className="review-form">
                              <div className="form-container">
                                <form className="cnt-form">
                                  <div className="row">
                                    <div className="col-sm-6">
                                      <div className="form-group">
                                        <label htmlFor="exampleInputName">
                                          Your Name{" "}
                                          <span className="astk">*</span>
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control txt"
                                          id="exampleInputName"
                                          placeholder=""
                                        />
                                      </div>
                                      {/* <!-- /.form-group --> */}
                                      <div className="form-group">
                                        <label htmlFor="exampleInputSummary">
                                          Summary{" "}
                                          <span className="astk">*</span>
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control txt"
                                          id="exampleInputSummary"
                                          placeholder=""
                                        />
                                      </div>
                                      {/* <!-- /.form-group --> */}
                                    </div>

                                    <div className="col-md-6">
                                      <div className="form-group">
                                        <label htmlFor="exampleInputReview">
                                          Review <span className="astk">*</span>
                                        </label>
                                        <textarea
                                          className="form-control txt txt-review"
                                          id="exampleInputReview"
                                          rows={4}
                                          placeholder=""
                                        ></textarea>
                                      </div>
                                      {/* <!-- /.form-group --> */}
                                    </div>
                                  </div>
                                  {/* <!-- /.row --> */}

                                  <div className="action text-right">
                                    <button className="btn btn-primary btn-upper">
                                      SUBMIT REVIEW
                                    </button>
                                  </div>
                                  {/* <!-- /.action --> */}
                                </form>
                                {/* <!-- /.cnt-form --> */}
                              </div>
                              {/* <!-- /.form-container --> */}
                            </div>
                            {/* <!-- /.review-form --> */}
                          </div>
                          {/* <!-- /.product-add-review --> */}
                        </div>
                        {/* <!-- /.product-tab --> */}
                      </div>
                      {/* <!-- /.tab-pane --> */}

                      <div id="tags" className="tab-pane">
                        <div className="product-tag">
                          <h4 className="title">Product Tags</h4>
                          <form className="form-inline form-cnt">
                            <div className="form-container">
                              <div className="form-group">
                                <label htmlFor="exampleInputTag">
                                  Add Your Tags:{" "}
                                </label>
                                <input
                                  type="email"
                                  id="exampleInputTag"
                                  className="form-control txt"
                                />
                              </div>

                              <button
                                className="btn btn-upper btn-primary"
                                type="submit"
                              >
                                ADD TAGS
                              </button>
                            </div>
                            {/* <!-- /.form-container --> */}
                          </form>
                          {/* <!-- /.form-cnt --> */}

                          <form className="form-inline form-cnt">
                            <div className="form-group">
                              <label>&nbsp;</label>
                              <span className="text col-md-offset-3">
                                Use spaces to separate tags. Use single quotes
                                (') for phrases.
                              </span>
                            </div>
                          </form>
                          {/* <!-- /.form-cnt --> */}
                        </div>
                        {/* <!-- /.product-tab --> */}
                      </div>
                      {/* <!-- /.tab-pane --> */}
                    </div>
                    {/* <!-- /.tab-content --> */}
                  </div>
                  {/* <!-- /.col --> */}
                </div>
                {/* <!-- /.row --> */}
              </div>
              {/* <!-- /.product-tabs --> */}

              {/* <!-- ============================================== UPSELL PRODUCTS ============================================== --> */}
              <section className="section featured-product">
                <div className="row">
                  <div className="col-lg-3">
                    <h3 className="section-title">Upsell Products</h3>
                    <div className="ad-imgs">
                      <img
                        className="img-responsive"
                        src="../assets/images/banners/home-banner1.jpg"
                        alt=""
                      />
                      <img
                        className="img-responsive"
                        src="../assets/images/banners/home-banner2.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <Carousel className="homepage-owl-carousel upsell-product custom-carousel owl-theme outer-top-xs">
                      <div className="item item-carousel">
                        <div className="products">
                          <div className="product">
                            <div className="product-image">
                              <div className="image">
                                <a href="detail.html">
                                  <img
                                    src="../assets/images/products/p1.jpg"
                                    alt=""
                                  />
                                </a>
                              </div>
                              {/* <!-- /.image --> */}

                              <div className="tag sale">
                                <span>sale</span>
                              </div>
                            </div>
                            {/* <!-- /.product-image --> */}

                            <div className="product-info text-left">
                              <h3 className="name">
                                <a href="detail.html">Floral Print Buttoned</a>
                              </h3>
                              <div className="rating rateit-small"></div>
                              <div className="description"></div>

                              <div className="product-price">
                                <span className="price">$650.99 </span>
                                <span className="price-before-discount">
                                  $ 800
                                </span>
                              </div>
                              {/* <!-- /.product-price --> */}
                            </div>
                            {/* <!-- /.product-info --> */}
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
                                    <button
                                      className="btn btn-primary cart-btn"
                                      type="button"
                                    >
                                      {translations.basket["add-to-basket"]}
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
                              {/* <!-- /.action --> */}
                            </div>
                            {/* <!-- /.cart --> */}
                          </div>
                          {/* <!-- /.product --> */}
                        </div>
                        {/* <!-- /.products --> */}
                      </div>
                      {/* <!-- /.item --> */}

                      <div className="item item-carousel">
                        <div className="products">
                          <div className="product">
                            <div className="product-image">
                              <div className="image">
                                <a href="detail.html">
                                  <img
                                    src="../assets/images/products/p2.jpg"
                                    alt=""
                                  />
                                </a>
                              </div>
                              {/* <!-- /.image --> */}

                              <div className="tag sale">
                                <span>sale</span>
                              </div>
                            </div>
                            {/* <!-- /.product-image --> */}

                            <div className="product-info text-left">
                              <h3 className="name">
                                <a href="detail.html">Floral Print Buttoned</a>
                              </h3>
                              <div className="rating rateit-small"></div>
                              <div className="description"></div>

                              <div className="product-price">
                                <span className="price">$650.99 </span>
                                <span className="price-before-discount">
                                  $ 800
                                </span>
                              </div>
                              {/* <!-- /.product-price --> */}
                            </div>
                            {/* <!-- /.product-info --> */}
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
                                    <button
                                      className="btn btn-primary cart-btn"
                                      type="button"
                                    >
                                      {translations.basket["add-to-basket"]}
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
                              {/* <!-- /.action --> */}
                            </div>
                            {/* <!-- /.cart --> */}
                          </div>
                          {/* <!-- /.product --> */}
                        </div>
                        {/* <!-- /.products --> */}
                      </div>
                      {/* <!-- /.item --> */}

                      <div className="item item-carousel">
                        <div className="products">
                          <div className="product">
                            <div className="product-image">
                              <div className="image">
                                <a href="detail.html">
                                  <img
                                    src="../assets/images/products/p3.jpg"
                                    alt=""
                                  />
                                </a>
                              </div>
                              {/* <!-- /.image --> */}

                              <div className="tag hot">
                                <span>hot</span>
                              </div>
                            </div>
                            {/* <!-- /.product-image --> */}

                            <div className="product-info text-left">
                              <h3 className="name">
                                <a href="detail.html">Floral Print Buttoned</a>
                              </h3>
                              <div className="rating rateit-small"></div>
                              <div className="description"></div>

                              <div className="product-price">
                                <span className="price">$650.99 </span>
                                <span className="price-before-discount">
                                  $ 800
                                </span>
                              </div>
                              {/* <!-- /.product-price --> */}
                            </div>
                            {/* <!-- /.product-info --> */}
                            <div className="cart clearfix animate-effect">
                              <div className="action">
                                <ul className="list-unsbrand4tyled">
                                  <li className="add-cart-button btn-group">
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
                                    >
                                      {translations.basket["add-to-basket"]}
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
                              {/* <!-- /.action --> */}
                            </div>
                            {/* <!-- /.cart --> */}
                          </div>
                          {/* <!-- /.product --> */}
                        </div>
                        {/* <!-- /.products --> */}
                      </div>
                      {/* <!-- /.item --> */}

                      <div className="item item-carousel">
                        <div className="products">
                          <div className="product">
                            <div className="product-image">
                              <div className="image">
                                <a href="detail.html">
                                  <img
                                    src="../assets/images/products/p4.jpg"
                                    alt=""
                                  />
                                </a>
                              </div>
                              {/* <!-- /.image --> */}

                              <div className="tag new">
                                <span>new</span>
                              </div>
                            </div>
                            {/* <!-- /.product-image --> */}

                            <div className="product-info text-left">
                              <h3 className="name">
                                <a href="detail.html">Floral Print Buttoned</a>
                              </h3>
                              <div className="rating rateit-small"></div>
                              <div className="description"></div>

                              <div className="product-price">
                                <span className="price">$650.99 </span>
                                <span className="price-before-discount">
                                  $ 800
                                </span>
                              </div>
                              {/* <!-- /.product-price --> */}
                            </div>
                            {/* <!-- /.product-info --> */}
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
                                    <button
                                      className="btn btn-primary cart-btn"
                                      type="button"
                                    >
                                      {translations.basket["add-to-basket"]}
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
                              {/* <!-- /.action --> */}
                            </div>
                            {/* <!-- /.cart --> */}
                          </div>
                          {/* <!-- /.product --> */}
                        </div>
                        {/* <!-- /.products --> */}
                      </div>
                      {/* <!-- /.item --> */}

                      <div className="item item-carousel">
                        <div className="products">
                          <div className="product">
                            <div className="product-image">
                              <div className="image">
                                <a href="detail.html">
                                  <img
                                    src="../assets/images/blank.gif"
                                    data-echo="assets/images/products/p5.jpg"
                                    alt=""
                                  />
                                </a>
                              </div>
                              {/* <!-- /.image --> */}

                              <div className="tag hot">
                                <span>hot</span>
                              </div>
                            </div>
                            {/* <!-- /.product-image --> */}

                            <div className="product-info text-left">
                              <h3 className="name">
                                <a href="detail.html">Floral Print Buttoned</a>
                              </h3>
                              <div className="rating rateit-small"></div>
                              <div className="description"></div>

                              <div className="product-price">
                                <span className="price">$650.99 </span>
                                <span className="price-before-discount">
                                  $ 800
                                </span>
                              </div>
                              {/* <!-- /.product-price --> */}
                            </div>
                            {/* <!-- /.product-info --> */}
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
                                    <button
                                      className="btn btn-primary cart-btn"
                                      type="button"
                                    >
                                      {translations.basket["add-to-basket"]}
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
                              {/* <!-- /.action --> */}
                            </div>
                            {/* <!-- /.cart --> */}
                          </div>
                          {/* <!-- /.product --> */}
                        </div>
                        {/* <!-- /.products --> */}
                      </div>
                      {/* <!-- /.item --> */}

                      <div className="item item-carousel">
                        <div className="products">
                          <div className="product">
                            <div className="product-image">
                              <div className="image">
                                <a href="detail.html">
                                  <img
                                    src="../assets/images/blank.gif"
                                    data-echo="assets/images/products/p6.jpg"
                                    alt=""
                                  />
                                </a>
                              </div>
                              {/* <!-- /.image --> */}

                              <div className="tag new">
                                <span>new</span>
                              </div>
                            </div>
                            {/* <!-- /.product-image --> */}

                            <div className="product-info text-left">
                              <h3 className="name">
                                <a href="detail.html">Floral Print Buttoned</a>
                              </h3>
                              <div className="rating rateit-small"></div>
                              <div className="description"></div>

                              <div className="product-price">
                                <span className="price">$650.99 </span>
                                <span className="price-before-discount">
                                  $ 800
                                </span>
                              </div>
                              {/* <!-- /.product-price --> */}
                            </div>
                            {/* <!-- /.product-info --> */}
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
                                    <button
                                      className="btn btn-primary cart-btn"
                                      type="button"
                                    >
                                      {translations.basket["add-to-basket"]}
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
                              {/* <!-- /.action --> */}
                            </div>
                            {/* <!-- /.cart --> */}
                          </div>
                          {/* <!-- /.product --> */}
                        </div>
                        {/* <!-- /.products --> */}
                      </div>
                      {/* <!-- /.item --> */}
                    </Carousel>
                    {/* <!-- /.home-owl-carousel --> */}
                  </div>
                </div>
              </section>
              {/* <!-- /.section --> */}
              {/* <!-- ============================================== UPSELL PRODUCTS : END ============================================== --> */}
            </div>
            {/* <!-- /.col --> */}
            <div className="clearfix"></div>

            {/* <!-- /.row --> */}
            {/* <!-- ============================================== BRANDS CAROUSEL ============================================== --> */}
            <div id="brands-carousel" className="logo-slider">
              <div className="logo-slider-inner">
                <Carousel className="brand-slider custom-carousel owl-theme">
                  <div className="item m-t-15">
                    <a href="#" className="image">
                      <img
                        data-echo="assets/images/brands/brand1.png"
                        src="../assets/ibrand4mages/blank.gif"
                        alt=""
                      />
                    </a>
                  </div>
                  {/* <!--/.item--> */}

                  <div className="item m-t-10">
                    <a href="#" className="image">
                      <img
                        data-echo="assets/images/brands/brand2.png"
                        src="../assets/images/blank.gif"
                        alt=""
                      />
                    </a>
                  </div>
                  {/* <!--/.item--> */}

                  <div className="item">
                    <a href="#" className="image">
                      <img
                        data-echo="assets/images/brands/brand3.png"
                        src="../assets/images/blank.gif"
                        alt=""
                      />
                    </a>
                  </div>
                  {/* <!--/.item--> */}

                  <div className="item">
                    <a href="#" className="image">
                      <img
                        data-echo="assets/images/brands/brand4.png"
                        src="../assets/images/blank.gif"
                        alt=""
                      />
                    </a>
                  </div>
                  {/* <!--/.item--> */}

                  <div className="item">
                    <a href="#" className="image">
                      <img
                        data-echo="assets/images/brands/brand5.png"
                        src="../assets/images/blank.gif"
                        alt=""
                      />
                    </a>
                  </div>
                  {/* <!--/.item--> */}

                  <div className="item">
                    <a href="#" className="image">
                      <img
                        data-echo="assets/images/brands/brand6.png"
                        src="../assets/images/blank.gif"
                        alt=""
                      />
                    </a>
                  </div>
                  {/* <!--/.item--> */}

                  <div className="item">
                    <a href="#" className="image">
                      <img
                        data-echo="assets/images/brands/brand2.png"
                        src="../assets/images/blank.gif"
                        alt=""
                      />
                    </a>
                  </div>
                  {/* <!--/.item--> */}

                  <div className="item">
                    <a href="#" className="image">
                      <img
                        data-echo="assets/images/brands/brand4.png"
                        src="../assets/images/blank.gif"
                        alt=""
                      />
                    </a>
                  </div>
                  {/* <!--/.item--> */}

                  <div className="item">
                    <a href="#" className="image">
                      <img
                        data-echo="assets/images/brands/brand1.png"
                        src="../assets/images/blank.gif"
                        alt=""
                      />
                    </a>
                  </div>
                  {/* <!--/.item--> */}

                  <div className="item">
                    <a href="#" className="image">
                      <img
                        data-echo="assets/images/brands/brand5.png"
                        src="../assets/images/blank.gif"
                        alt=""
                      />
                    </a>
                  </div>
                  {/* <!--/.item--> */}
                </Carousel>
                {/* <!-- /.owl-carousel #logo-slider --> */}
              </div>
              {/* <!-- /.logo-slider-inner --> */}
            </div>
            {/* <!-- /.logo-slider --> */}
          </div>
        </div>
      </div>
    </Layout>
  );
}
