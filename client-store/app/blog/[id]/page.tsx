import React from "react";
import Layout from "../../../components/Layout/Layout";

export default function BlogDetails() {
  return (
    <Layout>
      <div className="breadcrumb">
        <div className="container">
          <div className="breadcrumb-inner">
            <ul className="list-inline list-unstyled">
              <li>
                <a href="#">Home</a>
              </li>
              <li className="active">Blog Details</li>
            </ul>
          </div>
          {/*<!-- /.breadcrumb-inner -->*/}
        </div>
        {/*<!-- /.container -->*/}
      </div>
      {/*<!-- /.breadcrumb -->*/}

      <div className="body-content">
        <div className="container">
          <div className="row">
            <div className="blog-page">
              <div className="col-xs-12 col-sm-9 col-md-9 rht-col">
                <div className="blog-post wow fadeInUp">
                  <img
                    className="img-responsive"
                    src="assets/images/blog-post/blog_big_01.jpg"
                    alt=""
                  />
                  <h1>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                  </h1>
                  <span className="author">John Doe</span>
                  <span className="review">7 Comments</span>
                  <span className="date-time">18/06/2016 11.30AM</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                  </p>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                  </p>
                  <div className="social-media">
                    <span>share post:</span>
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-linkedin"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-rss"></i>
                    </a>
                    <a href="#" className="hidden-xs">
                      <i className="fa fa-pinterest"></i>
                    </a>
                  </div>
                </div>
                <div className="blog-post-author-details wow fadeInUp">
                  <div className="row">
                    <div className="col-md-2">
                      <img
                        src="assets/images/testimonials/member3.png"
                        alt="Responsive image"
                        className="img-circle img-responsive"
                      />
                    </div>
                    <div className="col-md-10">
                      <h4>John Doe</h4>
                      <div className="btn-group author-social-network pull-right">
                        <span>Follow me on</span>
                        <button
                          type="button"
                          className="dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          <i className="twitter-icon fa fa-twitter"></i>
                          <span className="caret"></span>
                        </button>
                        <ul className="dropdown-menu" role="menu">
                          <li>
                            <a href="#">
                              <i className="icon fa fa-facebook"></i>Facebook
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="icon fa fa-linkedin"></i>Linkedin
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="icon fa fa-pinterest"></i>Pinterst
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="icon fa fa-rss"></i>RSS
                            </a>
                          </li>
                        </ul>
                      </div>
                      <span className="author-job">Web Designer</span>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam
                      </p>
                    </div>
                  </div>
                </div>
                <div className="blog-review wow fadeInUp">
                  <div className="row">
                    <div className="col-md-12">
                      <h3 className="title-review-comments">16 comments</h3>
                    </div>
                    <div className="col-md-2 col-sm-2">
                      <img
                        src="assets/images/testimonials/member1.png"
                        alt="Responsive image"
                        className="img-rounded img-responsive"
                      />
                    </div>
                    <div className="col-md-10 col-sm-10 blog-comments outer-bottom-xs">
                      <div className="blog-comments inner-bottom-xs">
                        <h4>Jone doe</h4>
                        <span className="review-action pull-right">
                          03 Day ago &sol;
                          <a href="#"> Repost</a> &sol;
                          <a href="#"> Reply</a>
                        </span>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam
                        </p>
                      </div>
                      <div className="blog-comments-responce outer-top-xs ">
                        <div className="row">
                          <div className="col-md-2 col-sm-2">
                            <img
                              src="assets/images/testimonials/member2.png"
                              alt="Responsive image"
                              className="img-rounded img-responsive"
                            />
                          </div>
                          <div className="col-md-10 col-sm-10 outer-bottom-xs">
                            <div className="blog-sub-comments inner-bottom-xs">
                              <h4>Sarah Smith</h4>
                              <span className="review-action pull-right">
                                03 Day ago &sol;
                                <a href="#"> Repost</a> &sol;
                                <a href="#"> Reply</a>
                              </span>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam
                              </p>
                            </div>
                          </div>
                          <div className="col-md-2 col-sm-2">
                            <img
                              src="assets/images/testimonials/member3.png"
                              alt="Responsive image"
                              className="img-rounded img-responsive"
                            />
                          </div>
                          <div className="col-md-10 col-sm-10">
                            <div className=" inner-bottom-xs">
                              <h4>Stephen</h4>
                              <span className="review-action pull-right">
                                03 Day ago &sol;
                                <a href="#"> Repost</a> &sol;
                                <a href="#"> Reply</a>
                              </span>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2 col-sm-2">
                      <img
                        src="assets/images/testimonials/member4.png"
                        alt="Responsive image"
                        className="img-rounded img-responsive"
                      />
                    </div>
                    <div className="col-md-10 col-sm-10">
                      <div className="blog-comments inner-bottom-xs outer-bottom-xs">
                        <h4>Saraha Smith</h4>
                        <span className="review-action pull-right">
                          03 Day ago &sol;
                          <a href="#"> Repost</a> &sol;
                          <a href="#"> Reply</a>
                        </span>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam
                        </p>
                      </div>
                    </div>
                    <div className="col-md-2 col-sm-2">
                      <img
                        src="assets/images/testimonials/member1.png"
                        alt="Responsive image"
                        className="img-rounded img-responsive"
                      />
                    </div>
                    <div className="col-md-10 col-sm-10">
                      <div className="blog-comment inner-bottom-xs">
                        <h4>Mark Doe</h4>
                        <span className="review-action pull-right">
                          03 Day ago &sol;
                          <a href="#"> Repost</a> &sol;
                          <a href="#"> Reply</a>
                        </span>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam
                        </p>
                      </div>
                    </div>
                    <div className="post-load-more col-md-12">
                      <a className="btn btn-upper btn-primary" href="#">
                        Load more
                      </a>
                    </div>
                  </div>
                </div>{" "}
                <div className="blog-write-comment outer-bottom-xs outer-top-xs">
                  <div className="row">
                    <div className="col-md-12">
                      <h4>Leave A Comment</h4>
                    </div>
                    <div className="col-md-4">
                      <form className="register-form" role="form">
                        <div className="form-group">
                          <label
                            className="info-title"
                            htmlFor="exampleInputName"
                          >
                            Your Name <span>*</span>
                          </label>
                          <input
                            type="email"
                            className="form-control unicase-form-control text-input"
                            id="exampleInputName"
                            placeholder=""
                          />
                        </div>
                      </form>
                    </div>
                    <div className="col-md-4">
                      <form className="register-form" role="form">
                        <div className="form-group">
                          <label
                            className="info-title"
                            htmlFor="exampleInputEmail1"
                          >
                            Email Address <span>*</span>
                          </label>
                          <input
                            type="email"
                            className="form-control unicase-form-control text-input"
                            id="exampleInputEmail1"
                            placeholder=""
                          />
                        </div>
                      </form>
                    </div>
                    <div className="col-md-4">
                      <form className="register-form" role="form">
                        <div className="form-group">
                          <label
                            className="info-title"
                            htmlFor="exampleInputTitle"
                          >
                            Title <span>*</span>
                          </label>
                          <input
                            type="email"
                            className="form-control unicase-form-control text-input"
                            id="exampleInputTitle"
                            placeholder=""
                          />
                        </div>
                      </form>
                    </div>
                    <div className="col-md-12">
                      <form className="register-form" role="form">
                        <div className="form-group">
                          <label
                            className="info-title"
                            htmlFor="exampleInputComments"
                          >
                            Your Comments <span>*</span>
                          </label>
                          <textarea
                            className="form-control unicase-form-control"
                            id="exampleInputComments"
                          ></textarea>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-12 outer-bottom-small m-t-20">
                      <button
                        type="submit"
                        className="btn-upper btn btn-primary checkout-page-button"
                      >
                        Submit Comment
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-3 col-md-3 sidebar">
                <div className="sidebar-module-container">
                  <div className="search-area outer-bottom-small">
                    <form>
                      <div className="control-group">
                        <input
                          placeholder="Type to search"
                          className="search-field"
                        />
                        <a href="#" className="search-button"></a>
                      </div>
                    </form>
                  </div>
                  <div className="home-banner outer-top-n outer-bottom-xs">
                    <img
                      src="assets/images/banners/LHS-banner.jpg"
                      alt="Image"
                    />
                  </div>
                  {/*<!-- ==============================================CATEGORY============================================== -->*/}
                  <div className="sidebar-widget outer-bottom-xs wow fadeInUp">
                    <h3 className="section-title">Category</h3>
                    <div className="sidebar-widget-body m-t-10">
                      <div className="accordion">
                        <div className="accordion-group">
                          <div className="accordion-heading">
                            <a
                              href="#collapseOne"
                              data-toggle="collapse"
                              className="accordion-toggle collapsed"
                            >
                              Camera
                            </a>
                          </div>
                          {/*<!-- /.accordion-heading -->*/}
                          <div
                            className="accordion-body collapse"
                            id="collapseOne"
                            style={{ height: "0px" }}
                          >
                            <div className="accordion-inner">
                              <ul>
                                <li>
                                  <a href="#">gaming</a>
                                </li>
                                <li>
                                  <a href="#">office</a>
                                </li>
                                <li>
                                  <a href="#">kids</a>
                                </li>
                                <li>
                                  <a href="#">for women</a>
                                </li>
                              </ul>
                            </div>
                            {/*<!-- /.accordion-inner -->*/}
                          </div>
                          {/*<!-- /.accordion-body -->*/}
                        </div>
                        {/*<!-- /.accordion-group -->*/}

                        <div className="accordion-group">
                          <div className="accordion-heading">
                            <a
                              href="#collapseTwo"
                              data-toggle="collapse"
                              className="accordion-toggle collapsed"
                            >
                              Desktops
                            </a>
                          </div>
                          {/*<!-- /.accordion-heading -->*/}
                          <div
                            className="accordion-body collapse"
                            id="collapseTwo"
                            style={{ height: "0px" }}
                          >
                            <div className="accordion-inner">
                              <ul>
                                <li>
                                  <a href="#">gaming</a>
                                </li>
                                <li>
                                  <a href="#">office</a>
                                </li>
                                <li>
                                  <a href="#">kids</a>
                                </li>
                                <li>
                                  <a href="#">for women</a>
                                </li>
                              </ul>
                            </div>
                            {/*<!-- /.accordion-inner -->*/}
                          </div>
                          {/*<!-- /.accordion-body -->*/}
                        </div>
                        {/*<!-- /.accordion-group -->*/}

                        <div className="accordion-group">
                          <div className="accordion-heading">
                            <a
                              href="#collapseThree"
                              data-toggle="collapse"
                              className="accordion-toggle collapsed"
                            >
                              Pants
                            </a>
                          </div>
                          {/*<!-- /.accordion-heading -->*/}
                          <div
                            className="accordion-body collapse"
                            id="collapseThree"
                            style={{ height: "0px" }}
                          >
                            <div className="accordion-inner">
                              <ul>
                                <li>
                                  <a href="#">gaming</a>
                                </li>
                                <li>
                                  <a href="#">office</a>
                                </li>
                                <li>
                                  <a href="#">kids</a>
                                </li>
                                <li>
                                  <a href="#">for women</a>
                                </li>
                              </ul>
                            </div>
                            {/*<!-- /.accordion-inner -->*/}
                          </div>
                          {/*<!-- /.accordion-body -->*/}
                        </div>
                        {/*<!-- /.accordion-group -->*/}

                        <div className="accordion-group">
                          <div className="accordion-heading">
                            <a
                              href="#collapseFour"
                              data-toggle="collapse"
                              className="accordion-toggle collapsed"
                            >
                              Bags
                            </a>
                          </div>
                          {/*<!-- /.accordion-heading -->*/}
                          <div
                            className="accordion-body collapse"
                            id="collapseFour"
                            style={{ height: "0px" }}
                          >
                            <div className="accordion-inner">
                              <ul>
                                <li>
                                  <a href="#">gaming</a>
                                </li>
                                <li>
                                  <a href="#">office</a>
                                </li>
                                <li>
                                  <a href="#">kids</a>
                                </li>
                                <li>
                                  <a href="#">for women</a>
                                </li>
                              </ul>
                            </div>
                            {/*<!-- /.accordion-inner -->*/}
                          </div>
                          {/*<!-- /.accordion-body -->*/}
                        </div>
                        {/*<!-- /.accordion-group -->*/}

                        <div className="accordion-group">
                          <div className="accordion-heading">
                            <a
                              href="#collapseFive"
                              data-toggle="collapse"
                              className="accordion-toggle collapsed"
                            >
                              Hats
                            </a>
                          </div>
                          {/*<!-- /.accordion-heading -->*/}
                          <div
                            className="accordion-body collapse"
                            id="collapseFive"
                            style={{ height: "0px" }}
                          >
                            <div className="accordion-inner">
                              <ul>
                                <li>
                                  <a href="#">gaming</a>
                                </li>
                                <li>
                                  <a href="#">office</a>
                                </li>
                                <li>
                                  <a href="#">kids</a>
                                </li>
                                <li>
                                  <a href="#">for women</a>
                                </li>
                              </ul>
                            </div>
                            {/*<!-- /.accordion-inner -->*/}
                          </div>
                          {/*<!-- /.accordion-body -->*/}
                        </div>
                        {/*<!-- /.accordion-group -->*/}

                        <div className="accordion-group">
                          <div className="accordion-heading">
                            <a
                              href="#collapseSix"
                              data-toggle="collapse"
                              className="accordion-toggle collapsed"
                            >
                              Accessories
                            </a>
                          </div>
                          {/*<!-- /.accordion-heading -->*/}
                          <div
                            className="accordion-body collapse"
                            id="collapseSix"
                            style={{ height: "0px" }}
                          >
                            <div className="accordion-inner">
                              <ul>
                                <li>
                                  <a href="#">gaming</a>
                                </li>
                                <li>
                                  <a href="#">office</a>
                                </li>
                                <li>
                                  <a href="#">kids</a>
                                </li>
                                <li>
                                  <a href="#">for women</a>
                                </li>
                              </ul>
                            </div>
                            {/*<!-- /.accordion-inner -->*/}
                          </div>
                          {/*<!-- /.accordion-body -->*/}
                        </div>
                        {/*<!-- /.accordion-group -->*/}
                      </div>
                      {/*<!-- /.accordion -->*/}
                    </div>
                    {/*<!-- /.sidebar-widget-body -->*/}
                  </div>
                  {/*<!-- /.sidebar-widget -->*/}
                  {/*<!-- ============================================== CATEGORY : END ============================================== -->*/}{" "}
                  <div className="sidebar-widget outer-bottom-xs wow fadeInUp">
                    <h3 className="section-title">tab widget</h3>
                    <ul className="nav nav-tabs">
                      <li className="active">
                        <a href="#popular" data-toggle="tab">
                          popular post
                        </a>
                      </li>
                      <li>
                        <a href="#recent" data-toggle="tab">
                          recent post
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content" style={{ paddingLeft: 0 }}>
                      <div className="tab-pane active m-t-20" id="popular">
                        <div className="blog-post inner-bottom-30 ">
                          <img
                            className="img-responsive"
                            src="assets/images/blog-post/blog_big_01.jpg"
                            alt=""
                          />
                          <h4>
                            <a href="blog-details.html">Simple Blog Post</a>
                          </h4>
                          <span className="review">6 Comments</span>
                          <span className="date-time">12/06/16</span>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit
                          </p>
                        </div>
                        <div className="blog-post">
                          <img
                            className="img-responsive"
                            src="assets/images/blog-post/blog_big_02.jpg"
                            alt=""
                          />
                          <h4>
                            <a href="blog-details.html">Simple Blog Post</a>
                          </h4>
                          <span className="review">6 Comments</span>
                          <span className="date-time">23/06/16</span>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit
                          </p>
                        </div>
                      </div>

                      <div className="tab-pane m-t-20" id="recent">
                        <div className="blog-post inner-bottom-30">
                          <img
                            className="img-responsive"
                            src="assets/images/blog-post/blog_big_03.jpg"
                            alt=""
                          />
                          <h4>
                            <a href="blog-details.html">Simple Blog Post</a>
                          </h4>
                          <span className="review">6 Comments</span>
                          <span className="date-time">5/06/16</span>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit
                          </p>
                        </div>
                        <div className="blog-post">
                          <img
                            className="img-responsive"
                            src="assets/images/blog-post/blog_big_01.jpg"
                            alt=""
                          />
                          <h4>
                            <a href="blog-details.html">Simple Blog Post</a>
                          </h4>
                          <span className="review">6 Comments</span>
                          <span className="date-time">10/07/16</span>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*<!-- ============================================== PRODUCT TAGS ============================================== -->*/}
                  <div className="sidebar-widget product-tag wow fadeInUp">
                    <h3 className="section-title">Product tags</h3>
                    <div className="sidebar-widget-body outer-top-xs">
                      <div className="tag-list">
                        <a className="item" title="Phone" href="category.html">
                          Phone
                        </a>
                        <a
                          className="item active"
                          title="Vest"
                          href="category.html"
                        >
                          Vest
                        </a>
                        <a
                          className="item"
                          title="Smartphone"
                          href="category.html"
                        >
                          Smartphone
                        </a>
                        <a
                          className="item"
                          title="Furniture"
                          href="category.html"
                        >
                          Furniture
                        </a>
                        <a
                          className="item"
                          title="T-shirt"
                          href="category.html"
                        >
                          T-shirt
                        </a>
                        <a
                          className="item"
                          title="Sweatpants"
                          href="category.html"
                        >
                          Sweatpants
                        </a>
                        <a
                          className="item"
                          title="Sneaker"
                          href="category.html"
                        >
                          Sneaker
                        </a>
                        <a className="item" title="Toys" href="category.html">
                          Toys
                        </a>
                        <a className="item" title="Rose" href="category.html">
                          Rose
                        </a>
                      </div>
                      {/*<!-- /.tag-list -->*/}
                    </div>
                    {/*<!-- /.sidebar-widget-body -->*/}
                  </div>
                  {/*<!-- /.sidebar-widget -->*/}
                  {/*<!-- ============================================== PRODUCT TAGS : END ============================================== -->*/}{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
