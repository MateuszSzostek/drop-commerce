import Layout from "../../components/Layout/Layout";
import React from "react";

export default function Blog() {
  return (
    <Layout>
      <div className="breadcrumb">
        <div className="container">
          <div className="breadcrumb-inner">
            <ul className="list-inline list-unstyled">
              <li>
                <a href="#">Home</a>
              </li>
              <li className="active">Blog</li>
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
                <div className="blog-post  wow fadeInUp">
                  <a href="blog-details.html">
                    <img
                      className="img-responsive"
                      src="assets/images/blog-post/blog_big_01.jpg"
                      alt=""
                    />
                  </a>
                  <h1>
                    <a href="blog-details.html">
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                    </a>
                  </h1>
                  <span className="author">John Doe</span>
                  <span className="review">6 Comments</span>
                  <span className="date-time">14/06/2016 10.00AM</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum...
                  </p>
                  <a href="#" className="btn btn-upper btn-primary read-more">
                    read more
                  </a>
                </div>
                <div className="blog-post outer-top-bd  wow fadeInUp">
                  <a href="blog-details.html">
                    <img
                      className="img-responsive"
                      src="assets/images/blog-post/blog_big_02.jpg"
                      alt=""
                    />
                  </a>
                  <h1>
                    <a href="blog-details.html">
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                    </a>
                  </h1>
                  <span className="author">Sarah Smith</span>
                  <span className="review">6 Comments</span>
                  <span className="date-time">20/06/2016 11.00AM</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum...
                  </p>
                  <a href="#" className="btn btn-upper btn-primary read-more">
                    read more
                  </a>
                </div>
                <div className="blog-post outer-top-bd  wow fadeInUp">
                  <a href="blog-details.html">
                    <img
                      className="img-responsive"
                      src="assets/images/blog-post/blog_big_03.jpg"
                      alt=""
                    />
                  </a>
                  <h1>
                    <a href="blog-details.html">
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                    </a>
                  </h1>
                  <span className="author">Mark Doe</span>
                  <span className="review">6 Comments</span>
                  <span className="date-time">14/06/2014 11.00AM</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum...
                  </p>
                  <a href="#" className="btn btn-upper btn-primary read-more">
                    read more
                  </a>
                </div>
                <div
                  className="clearfix blog-pagination filters-container  wow fadeInUp"
                  style={{
                    padding: "0px",
                    background: "none",
                    boxShadow: "none",
                    marginTop: "15px",
                    border: "none",
                  }}
                >
                  <div className="text-right">
                    <div className="pagination-container">
                      <ul className="list-inline list-unstyled">
                        <li className="prev">
                          <a href="#">
                            <i className="fa fa-angle-left"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">1</a>
                        </li>
                        <li className="active">
                          <a href="#">2</a>
                        </li>
                        <li>
                          <a href="#">3</a>
                        </li>
                        <li>
                          <a href="#">4</a>
                        </li>
                        <li className="next">
                          <a href="#">
                            <i className="fa fa-angle-right"></i>
                          </a>
                        </li>
                      </ul>
                      {/*<!-- /.list-inline -->*/}
                    </div>
                    {/*<!-- /.pagination-container -->*/}{" "}
                  </div>
                  {/*<!-- /.text-right -->*/}
                </div>
                {/*<!-- /.filters-container -->*/}{" "}
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
                    <h3 className="section-title">Tab Widget</h3>
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
                    <div className="tab-content" style={{ height: "0px" }}>
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
                    <h3 className="section-title">Product Tags</h3>
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
          {/*<!-- ============================================== BRANDS CAROUSEL ============================================== -->*/}
          <div id="brands-carousel" className="logo-slider wow fadeInUp">
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
                {/*<!--/.item-->*/}

                <div className="item m-t-10">
                  <a href="#" className="image">
                    <img
                      data-echo="assets/images/brands/brand2.png"
                      src="assets/images/blank.gif"
                      alt=""
                    />
                  </a>
                </div>
                {/*<!--/.item-->*/}

                <div className="item">
                  <a href="#" className="image">
                    <img
                      data-echo="assets/images/brands/brand3.png"
                      src="assets/images/blank.gif"
                      alt=""
                    />
                  </a>
                </div>
                {/*<!--/.item-->*/}

                <div className="item">
                  <a href="#" className="image">
                    <img
                      data-echo="assets/images/brands/brand4.png"
                      src="assets/images/blank.gif"
                      alt=""
                    />
                  </a>
                </div>
                {/*<!--/.item-->*/}

                <div className="item">
                  <a href="#" className="image">
                    <img
                      data-echo="assets/images/brands/brand5.png"
                      src="assets/images/blank.gif"
                      alt=""
                    />
                  </a>
                </div>
                {/*<!--/.item-->*/}

                <div className="item">
                  <a href="#" className="image">
                    <img
                      data-echo="assets/images/brands/brand6.png"
                      src="assets/images/blank.gif"
                      alt=""
                    />
                  </a>
                </div>
                {/*<!--/.item-->*/}

                <div className="item">
                  <a href="#" className="image">
                    <img
                      data-echo="assets/images/brands/brand2.png"
                      src="assets/images/blank.gif"
                      alt=""
                    />
                  </a>
                </div>
                {/*<!--/.item-->*/}

                <div className="item">
                  <a href="#" className="image">
                    <img
                      data-echo="asse</div>ts/images/brands/brand4.png"
                      src="assets/images/blank.gif"
                      alt=""
                    />
                  </a>
                </div>
                {/*<!--/.item-->*/}

                <div className="item">
                  <a href="#" className="image">
                    <img
                      data-echo="assets/images/brands/brand1.png"
                      src="assets/images/blank.gif"
                      alt=""
                    />
                  </a>
                </div>
                {/*<!--/.item-->*/}

                <div className="item">
                  <a href="#" className="image">
                    <img
                      data-echo="assets/images/brands/brand5.png"
                      src="assets/images/blank.gif"
                      alt=""
                    />
                  </a>
                </div>
                {/*<!--/.item-->*/}
              </div>
              {/*<!-- /.owl-carousel #logo-slider -->*/}
            </div>
            {/*<!-- /.logo-slider-inner -->*/}
          </div>
          {/*<!-- /.logo-slider -->*/}
        </div>
      </div>
    </Layout>
  );
}
