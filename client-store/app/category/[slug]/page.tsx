import React from "react";
import Layout from "../../../components/Layout/Layout";
import SideNav from "../../../components/SideNav/SideNav";
import ProductSearchCard from "../../../components/ProductSearchCard/ProductSearchCard";

export default async function Category(props) {
  const products = await getProductsByCategory(props?.params?.slug);

  return (
    <Layout>
      {
        // JSON.stringify(products?.data?.items[0])
      }
      <div className="breadcrumb">
        <div className="container">
          <div className="breadcrumb-inner">
            <ul className="list-inline list-unstyled">
              <li>
                <a href="#">Home</a>
              </li>
              <li className="active">Handbags</li>
            </ul>
          </div>
          {/*<!-- /.breadcrumb-inner -->*/}
        </div>
        {/*<!-- /.container -->*/}
      </div>
      {/*<!-- /.breadcrumb -->*/}
      <div className="body-content outer-top-xs">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-3 sidebar">
              <SideNav />

              <div className="sidebar-module-container">
                <div className="sidebar-filter">
                  {/*<!-- ============================================== SIDEBAR CATEGORY ============================================== -->*/}
                  <div className="sidebar-widget">
                    <h3 className="section-title">Shop by</h3>
                    <div className="widget-header">
                      <h4 className="widget-title">Category</h4>
                    </div>
                    <div className="sidebar-widget-body">
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
                  {/*<!-- ============================================== SIDEBAR CATEGORY : END ============================================== -->*/}

                  {/*<!-- ============================================== PRICE SILDER============================================== -->*/}
                  <div className="sidebar-widget">
                    <div className="widget-header">
                      <h4 className="widget-title">Price Slider</h4>
                    </div>
                    <div className="sidebar-widget-body m-t-10">
                      <div className="price-range-holder">
                        <span className="min-max">
                          <span className="pull-left">$200.00</span>
                          <span className="pull-right">$800.00</span>
                        </span>
                        <input
                          type="text"
                          id="amount"
                          style={{
                            border: 0,
                            color: "#666666",
                            fontWeight: "bold",
                            textAlign: "center",
                          }}
                        />
                        <input type="text" className="price-slider" value="" />
                      </div>
                      {/*<!-- /.price-range-holder -->*/}
                      <a href="#" className="lnk btn btn-primary">
                        Show Now
                      </a>
                    </div>
                    {/*<!-- /.sidebar-widget-body -->*/}
                  </div>
                  {/*<!-- /.sidebar-widget -->*/}
                  {/*<!-- ============================================== PRICE SILDER : END ============================================== -->*/}
                  {/*<!-- ============================================== MANUFACTURES============================================== -->*/}
                  <div className="sidebar-widget">
                    <div className="widget-header">
                      <h4 className="widget-title">Manufactures</h4>
                    </div>
                    <div className="sidebar-widget-body">
                      <ul className="list">
                        <li>
                          <a href="#">Forever 18</a>
                        </li>
                        <li>
                          <a href="#">Nike</a>
                        </li>
                        <li>
                          <a href="#">Dolce & Gabbana</a>
                        </li>
                        <li>
                          <a href="#">Alluare</a>
                        </li>
                        <li>
                          <a href="#">Chanel</a>
                        </li>
                        <li>
                          <a href="#">Other Brand</a>
                        </li>
                      </ul>
                      {/*<!--<a href="#" className="lnk btn btn-primary">Show Now</a>-->*/}
                    </div>
                    {/*<!-- /.sidebar-widget-body -->*/}
                  </div>
                  {/*<!-- /.sidebar-widget -->*/}
                  {/*<!-- ============================================== MANUFACTURES: END ============================================== -->*/}
                  {/*<!-- ============================================== COLOR============================================== -->*/}
                  <div className="sidebar-widget">
                    <div className="widget-header">
                      <h4 className="widget-title">Colors</h4>
                    </div>
                    <div className="sidebar-widget-body">
                      <ul className="list">
                        <li>
                          <a href="#">Red</a>
                        </li>
                        <li>
                          <a href="#">Blue</a>
                        </li>
                        <li>
                          <a href="#">Yellow</a>
                        </li>
                        <li>
                          <a href="#">Pink</a>
                        </li>
                        <li>
                          <a href="#">Brown</a>
                        </li>
                        <li>
                          <a href="#">Teal</a>
                        </li>
                      </ul>
                    </div>
                    {/*<!-- /.sidebar-widget-body -->*/}
                  </div>
                  {/*<!-- /.sidebar-widget -->*/}
                  {/*<!-- ============================================== COLOR: END ============================================== -->*/}
                  {/*<!-- ============================================== COMPARE============================================== -->*/}
                  <div className="sidebar-widget outer-top-vs">
                    <h3 className="section-title">Compare products</h3>
                    <div className="sidebar-widget-body">
                      <div className="compare-report">
                        <p>
                          You have no <span>item(s)</span> to compare
                        </p>
                      </div>
                      {/*<!-- /.compare-report -->*/}
                    </div>
                    {/*<!-- /.sidebar-widget-body -->*/}
                  </div>
                  {/*<!-- /.sidebar-widget -->*/}
                  {/*<!-- ============================================== COMPARE: END ============================================== -->*/}
                  {/*<!-- ============================================== PRODUCT TAGS ============================================== -->*/}
                  <div className="sidebar-widget product-tag outer-top-vs">
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
                  {/*<!-- /.Testimonials -->*/}
                  <div className="sidebar-widget outer-top-vs">
                    <div id="advertisement" className="advertisement">
                      <div className="item">
                        <div className="avatar">
                          <img
                            src="/assets/images/testimonials/member1.png"
                            alt="Image"
                          />
                        </div>
                        <div className="testimonials">
                          <em>"</em> Vtae sodales aliq uam morbi non sem lacus
                          port mollis. Nunc condime tum metus eud molest sed
                          consectetuer. Sed quia non numquam eius modi tempora
                          incidunt ut labore et dolore.<em>"</em>
                        </div>
                        <div className="clients_author">
                          John Doe <span>Abc Company</span>
                        </div>
                        {/*<!-- /.container-fluid -->*/}
                      </div>
                      {/*<!-- /.item -->*/}

                      <div className="item">
                        <div className="avatar">
                          <img
                            src="/assets/images/testimonials/member3.png"
                            alt="Image"
                          />
                        </div>
                        <div className="testimonials">
                          <em>"</em>Vtae sodales aliq uam morbi non sem lacus
                          port mollis. Nunc condime tum metus eud molest sed
                          consectetuer. Sed quia non numquam eius modi tempora
                          incidunt ut labore et dolore.<em>"</em>
                        </div>
                        <div className="clients_author">
                          Stephen Doe <span>Xperia Designs</span>
                        </div>
                      </div>
                      {/*<!-- /.item -->*/}

                      <div className="item">
                        <div className="avatar">
                          <img
                            src="/assets/images/testimonials/member2.png"
                            alt="Image"
                          />
                        </div>
                        <div className="testimonials">
                          <em>"</em> Vtae sodales aliq uam morbi non sem lacus
                          port mollis. Nunc condime tum metus eud molest sed
                          consectetuer. Sed quia non numquam eius modi tempora
                          incidunt ut labore et dolore.<em>"</em>
                        </div>
                        <div className="clients_author">
                          Saraha Smith <span>Datsun &amp; Co</span>
                        </div>
                        {/*<!-- /.container-fluid -->*/}
                      </div>
                      {/*<!-- /.item -->*/}
                    </div>
                    {/*<!-- /.owl-carousel -->*/}
                  </div>

                  {/*<!-- ============================================== Testimonials: END ============================================== -->*/}

                  {/*<!-- ============================================== NEWSLETTER ============================================== -->*/}
                  <div className="sidebar-widget newsletter outer-bottom-small outer-top-vs">
                    <h3 className="section-title">Newsletters</h3>
                    <div className="sidebar-widget-body outer-top-xs">
                      <p>Sign Up for Our Newsletter!</p>
                      <form>
                        <div className="form-group">
                          <label
                            className="sr-only"
                            htmlFor="exampleInputEmail1"
                          >
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
                    {/*<!-- /.sidebar-widget-body -->*/}
                  </div>
                  {/*<!-- /.sidebar-widget -->*/}
                  {/*<!-- ============================================== NEWSLETTER: END ============================================== -->*/}
                </div>
                {/*<!-- /.sidebar-filter -->*/}
              </div>
              {/*<!-- /.sidebar-module-container -->*/}
            </div>
            {/*<!-- /.sidebar -->*/}
            <div className="col-xs-12 col-sm-12 col-md-9 rht-col">
              {/*<!-- ========================================== SECTION – HERO ========================================= -->*/}

              <div id="category" className="category-carousel hidden-xs">
                <div className="item">
                  <div className="image">
                    <img
                      src="/assets/images/banners/cat-banner-1.jpg"
                      alt=""
                      className="img-responsive"
                    />
                  </div>
                  <div className="container-fluid">
                    <div className="caption vertical-top text-left">
                      <div className="big-text">Big Sale</div>
                      <div className="excerpt hidden-sm hidden-md">
                        Save up to 49% off
                      </div>
                      <div className="excerpt-normal hidden-sm hidden-md">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </div>
                      <div className="buy-btn">
                        <a href="#" className="lnk btn btn-primary">
                          Show Now
                        </a>
                      </div>
                    </div>
                    {/*<!-- /.caption -->*/}
                  </div>
                  {/*<!-- /.container-fluid -->*/}
                </div>
              </div>

              <div className="clearfix filters-container m-t-10">
                <div className="row">
                  <div className="col col-sm-6 col-md-3 col-lg-3 col-xs-6">
                    <div className="filter-tabs">
                      <ul
                        id="filter-tabs"
                        className="nav nav-tabs nav-tab-box nav-tab-fa-icon"
                      >
                        <li className="active">
                          <a data-toggle="tab" href="#grid-container">
                            <i className="icon fa fa-th-large"></i>Grid
                          </a>
                        </li>
                        <li>
                          <a data-toggle="tab" href="#list-container">
                            <i className="icon fa fa-bars"></i>List
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/*<!-- /.filter-tabs -->*/}
                  </div>
                  {/*<!-- /.col -->*/}
                  <div className="col col-sm-12 col-md-5 col-lg-5 hidden-sm">
                    <div className="col col-sm-6 col-md-6 no-padding">
                      <div className="lbl-cnt">
                        <span className="lbl">Sort by</span>
                        <div className="fld inline">
                          <div className="dropdown dropdown-small dropdown-med dropdown-white inline">
                            <button
                              data-toggle="dropdown"
                              type="button"
                              className="btn dropdown-toggle"
                            >
                              Position <span className="caret"></span>
                            </button>
                            <ul role="menu" className="dropdown-menu">
                              <li role="presentation">
                                <a href="#">position</a>
                              </li>
                              <li role="presentation">
                                <a href="#">Price:Lowest first</a>
                              </li>
                              <li role="presentation">
                                <a href="#">Price:HIghest first</a>
                              </li>
                              <li role="presentation">
                                <a href="#">Product Name:A to Z</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/*<!-- /.fld -->*/}
                      </div>
                      {/*<!-- /.lbl-cnt -->*/}
                    </div>
                    {/*<!-- /.col -->*/}
                    <div className="col col-sm-6 col-md-6 no-padding hidden-sm hidden-md">
                      <div className="lbl-cnt">
                        <span className="lbl">Show</span>
                        <div className="fld inline">
                          <div className="dropdown dropdown-small dropdown-med dropdown-white inline">
                            <button
                              data-toggle="dropdown"
                              type="button"
                              className="btn dropdown-toggle"
                            >
                              1 <span className="caret"></span>
                            </button>
                            <ul role="menu" className="dropdown-menu">
                              <li role="presentation">
                                <a href="#">1</a>
                              </li>
                              <li role="presentation">
                                <a href="#">2</a>
                              </li>
                              <li role="presentation">
                                <a href="#">3</a>
                              </li>
                              <li role="presentation">
                                <a href="#">4</a>
                              </li>
                              <li role="presentation">
                                <a href="#">5</a>
                              </li>
                              <li role="presentation">
                                <a href="#">6</a>
                              </li>
                              <li role="presentation">
                                <a href="#">7</a>
                              </li>
                              <li role="presentation">
                                <a href="#">8</a>
                              </li>
                              <li role="presentation">
                                <a href="#">9</a>
                              </li>
                              <li role="presentation">
                                <a href="#">10</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/*<!-- /.fld -->*/}
                      </div>
                      {/*<!-- /.lbl-cnt -->*/}
                    </div>
                    {/*<!-- /.col -->*/}
                  </div>
                  {/*<!-- /.col -->*/}
                  <div className="col col-sm-6 col-md-4 col-xs-6 col-lg-4 text-right">
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
                    {/*<!-- /.pagination-container -->*/}
                  </div>
                  {/*<!-- /.col -->*/}
                </div>
                {/*<!-- /.row -->*/}
              </div>
              <div className="search-result-container">
                <div id="myTabContent" className="tab-content category-list">
                  <div className="tab-pane active" id="grid-container">
                    <div className="category-product">
                      <div className="row">
                        {products?.data?.items?.map((item) => (
                          <ProductSearchCard
                            title={item?.name}
                            image={item?.pictures[0]}
                            hoverImage={item?.pictures[1]}
                            price={item?.netPrice}
                            priceBefore={parseInt(item?.netPrice) + 36}
                            to=""
                            status="HOT"
                          />
                        ))}
                        {
                          // | "SALE" | "NEW" | "NONE"
                        }

                        {/*<!-- /.item -->*/}
                      </div>
                      {/*<!-- /.row -->*/}
                    </div>
                    {/*<!-- /.category-product -->*/}
                  </div>
                  {/*<!-- /.tab-pane -->*/}

                  <div className="tab-pane" id="list-container">
                    <div className="category-product">
                      <div className="category-product-inner">
                        <div className="products">
                          <div className="product-list product">
                            <div className="row product-list-row">
                              <div className="col col-sm-3 col-lg-3">
                                <div className="product-image">
                                  <div className="image">
                                    <img
                                      src="/assets/images/products/p3.jpg"
                                      alt=""
                                    />
                                  </div>
                                </div>
                                {/*<!-- /.product-image -->*/}
                              </div>
                              {/*<!-- /.col -->*/}
                              <div className="col col-sm-9 col-lg-9">
                                <div className="product-info">
                                  <h3 className="name">
                                    <a href="detail.html">
                                      Floral Print Buttoned
                                    </a>
                                  </h3>
                                  <div className="rating rateit-small"></div>
                                  <div className="product-price">
                                    <span className="price"> $450.99 </span>
                                    <span className="price-before-discount">
                                      $ 800
                                    </span>
                                  </div>
                                  {/*<!-- /.product-price -->*/}
                                  <div className="description m-t-10">
                                    Suspendisse posuere arcu diam, id accumsan
                                    eros pharetra ac. Nulla enim risus,
                                    facilisis bibendum gravida eget, lacinia id
                                    purus. Suspendisse posuere arcu diam, id
                                    accumsan eros pharetra ac. Nulla enim risus,
                                    facilisis bibendum gravida eget. Suspendisse
                                    posuere arcu diam, id accumsan eros pharetra
                                    ac. Nulla enim risus, facilisis bibendum
                                    gravida eget, lacinia id purus. Suspendisse
                                    posuere arcu diam, id accumsan eros
                                    pharetra.
                                  </div>
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
                                            Add to cart
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
                                    {/*<!-- /.action -->*/}
                                  </div>
                                  {/*<!-- /.cart -->*/}
                                </div>
                                {/*<!-- /.product-info -->*/}
                              </div>
                              {/*<!-- /.col -->*/}
                            </div>
                            {/*<!-- /.product-list-row -->*/}
                            <div className="tag new">
                              <span>new</span>
                            </div>
                          </div>
                          {/*<!-- /.product-list -->*/}
                        </div>
                        {/*<!-- /.products -->*/}
                      </div>
                      {/*<!-- /.category-product-inner -->*/}

                      <div className="category-product-inner">
                        <div className="products">
                          <div className="product-list product">
                            <div className="row product-list-row">
                              <div className="col col-sm-3 col-lg-3">
                                <div className="product-image">
                                  <div className="image">
                                    <img
                                      src="/assets/images/products/p4.jpg"
                                      alt=""
                                    />
                                  </div>
                                </div>
                                {/*<!-- /.product-image -->*/}
                              </div>
                              {/*<!-- /.col -->*/}
                              <div className="col col-sm-9 col-lg-9">
                                <div className="product-info">
                                  <h3 className="name">
                                    <a href="detail.html">
                                      Floral Print Buttoned
                                    </a>
                                  </h3>
                                  <div className="rating rateit-small"></div>
                                  <div className="product-price">
                                    <span className="price"> $450.99 </span>
                                    <span className="price-before-discount">
                                      $ 800
                                    </span>
                                  </div>
                                  {/*<!-- /.product-price -->*/}
                                  <div className="description m-t-10">
                                    Suspendisse posuere arcu diam, id accumsan
                                    eros pharetra ac. Nulla enim risus,
                                    facilisis bibendum gravida eget, lacinia id
                                    purus. Suspendisse posuere arcu diam, id
                                    accumsan eros pharetra ac. Nulla enim risus,
                                    facilisis bibendum gravida eget. Suspendisse
                                    posuere arcu diam, id accumsan eros pharetra
                                    ac. Nulla enim risus, facilisis bibendum
                                    gravida eget, lacinia id purus. Suspendisse
                                    posuere arcu diam, id accumsan eros
                                    pharetra.
                                  </div>
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
                                            Add to cart
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
                                    {/*<!-- /.action -->*/}
                                  </div>
                                  {/*<!-- /.cart -->*/}
                                </div>
                                {/*<!-- /.product-info -->*/}
                              </div>
                              {/*<!-- /.col -->*/}
                            </div>
                            {/*<!-- /.product-list-row -->*/}
                            <div className="tag sale">
                              <span>sale</span>
                            </div>
                          </div>
                          {/*<!-- /.product-list -->*/}
                        </div>
                        {/*<!-- /.products -->*/}
                      </div>
                      {/*<!-- /.category-product-inner -->*/}

                      <div className="category-product-inner">
                        <div className="products">
                          <div className="product-list product">
                            <div className="row product-list-row">
                              <div className="col col-sm-3 col-lg-3">
                                <div className="product-image">
                                  <div className="image">
                                    <img
                                      src="/assets/images/products/p5.jpg"
                                      alt=""
                                    />
                                  </div>
                                </div>
                                {/*<!-- /.product-image -->*/}
                              </div>
                              {/*<!-- /.col -->*/}
                              <div className="col col-sm-9 col-lg-9">
                                <div className="product-info">
                                  <h3 className="name">
                                    <a href="detail.html">
                                      Floral Print Buttoned
                                    </a>
                                  </h3>
                                  <div className="rating rateit-small"></div>
                                  <div className="product-price">
                                    <span className="price"> $450.99 </span>
                                    <span className="price-before-discount">
                                      $ 800
                                    </span>
                                  </div>
                                  {/*<!-- /.product-price -->*/}
                                  <div className="description m-t-10">
                                    Suspendisse posuere arcu diam, id accumsan
                                    eros pharetra ac. Nulla enim risus,
                                    facilisis bibendum gravida eget, lacinia id
                                    purus. Suspendisse posuere arcu diam, id
                                    accumsan eros pharetra ac. Nulla enim risus,
                                    facilisis bibendum gravida eget. Suspendisse
                                    posuere arcu diam, id accumsan eros pharetra
                                    ac. Nulla enim risus, facilisis bibendum
                                    gravida eget, lacinia id purus. Suspendisse
                                    posuere arcu diam, id accumsan eros
                                    pharetra.
                                  </div>
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
                                            Add to cart
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
                                    {/*<!-- /.action -->*/}
                                  </div>
                                  {/*<!-- /.cart -->*/}
                                </div>
                                {/*<!-- /.product-info -->*/}
                              </div>
                              {/*<!-- /.col -->*/}
                            </div>
                            {/*<!-- /.product-list-row -->*/}
                            <div className="tag hot">
                              <span>hot</span>
                            </div>
                          </div>
                          {/*<!-- /.product-list -->*/}
                        </div>
                        {/*<!-- /.products -->*/}
                      </div>
                      {/*<!-- /.category-product-inner -->*/}

                      <div className="category-product-inner">
                        <div className="products">
                          <div className="product-list product">
                            <div className="row product-list-row">
                              <div className="col col-sm-3 col-lg-3">
                                <div className="product-image">
                                  <div className="image">
                                    <img
                                      src="/assets/images/products/p6.jpg"
                                      alt=""
                                    />
                                  </div>
                                </div>
                                {/*<!-- /.product-image -->*/}
                              </div>
                              {/*<!-- /.col -->*/}
                              <div className="col col-sm-9 col-lg-9">
                                <div className="product-info">
                                  <h3 className="name">
                                    <a href="detail.html">
                                      Floral Print Buttoned
                                    </a>
                                  </h3>
                                  <div className="rating rateit-small"></div>
                                  <div className="product-price">
                                    <span className="price"> $450.99 </span>
                                    <span className="price-before-discount">
                                      $ 800
                                    </span>
                                  </div>
                                  {/*<!-- /.product-price -->*/}
                                  <div className="description m-t-10">
                                    Suspendisse posuere arcu diam, id accumsan
                                    eros pharetra ac. Nulla enim risus,
                                    facilisis bibendum gravida eget, lacinia id
                                    purus. Suspendisse posuere arcu diam, id
                                    accumsan eros pharetra ac. Nulla enim risus,
                                    facilisis bibendum gravida eget. Suspendisse
                                    posuere arcu diam, id accumsan eros pharetra
                                    ac. Nulla enim risus, facilisis bibendum
                                    gravida eget, lacinia id purus. Suspendisse
                                    posuere arcu diam, id accumsan eros
                                    pharetra.
                                  </div>
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
                                            Add to cart
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
                                    {/*<!-- /.action -->*/}
                                  </div>
                                  {/*<!-- /.cart -->*/}
                                </div>
                                {/*<!-- /.product-info -->*/}
                              </div>
                              {/*<!-- /.col -->*/}
                            </div>
                            {/*<!-- /.product-list-row -->*/}
                            <div className="tag hot">
                              <span>hot</span>
                            </div>
                          </div>
                          {/*<!-- /.product-list -->*/}
                        </div>
                        {/*<!-- /.products -->*/}
                      </div>
                      {/*<!-- /.category-product-inner -->*/}

                      <div className="category-product-inner">
                        <div className="products">
                          <div className="product-list product">
                            <div className="row product-list-row">
                              <div className="col col-sm-3 col-lg-3">
                                <div className="product-image">
                                  <div className="image">
                                    <img
                                      src="/assets/images/products/p7.jpg"
                                      alt=""
                                    />
                                  </div>
                                </div>
                                {/*<!-- /.product-image -->*/}
                              </div>
                              {/*<!-- /.col -->*/}
                              <div className="col col-sm-9 col-lg-9">
                                <div className="product-info">
                                  <h3 className="name">
                                    <a href="detail.html">
                                      Floral Print Buttoned
                                    </a>
                                  </h3>
                                  <div className="rating rateit-small"></div>
                                  <div className="product-price">
                                    <span className="price"> $450.99 </span>
                                    <span className="price-before-discount">
                                      $ 800
                                    </span>
                                  </div>
                                  {/*<!-- /.product-price -->*/}
                                  <div className="description m-t-10">
                                    Suspendisse posuere arcu diam, id accumsan
                                    eros pharetra ac. Nulla enim risus,
                                    facilisis bibendum gravida eget, lacinia id
                                    purus. Suspendisse posuere arcu diam, id
                                    accumsan eros pharetra ac. Nulla enim risus,
                                    facilisis bibendum gravida eget. Suspendisse
                                    posuere arcu diam, id accumsan eros pharetra
                                    ac. Nulla enim risus, facilisis bibendum
                                    gravida eget, lacinia id purus. Suspendisse
                                    posuere arcu diam, id accumsan eros
                                    pharetra.
                                  </div>
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
                                            Add to cart
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
                                    {/*<!-- /.action -->*/}
                                  </div>
                                  {/*<!-- /.cart -->*/}
                                </div>
                                {/*<!-- /.product-info -->*/}
                              </div>
                              {/*<!-- /.col -->*/}
                            </div>
                            {/*<!-- /.product-list-row -->*/}
                            <div className="tag sale">
                              <span>sale</span>
                            </div>
                          </div>
                          {/*<!-- /.product-list -->*/}
                        </div>
                        {/*<!-- /.products -->*/}
                      </div>
                      {/*<!-- /.category-product-inner -->*/}

                      <div className="category-product-inner">
                        <div className="products">
                          <div className="product-list product">
                            <div className="row product-list-row">
                              <div className="col col-sm-3 col-lg-3">
                                <div className="product-image">
                                  <div className="image">
                                    <img
                                      src="/assets/images/products/p8.jpg"
                                      alt=""
                                    />
                                  </div>
                                </div>
                                {/*<!-- /.product-image -->*/}
                              </div>
                              {/*<!-- /.col -->*/}
                              <div className="col col-sm-9 col-lg-9">
                                <div className="product-info">
                                  <h3 className="name">
                                    <a href="detail.html">
                                      Floral Print Buttoned
                                    </a>
                                  </h3>
                                  <div className="rating rateit-small"></div>
                                  <div className="product-price">
                                    <span className="price"> $450.99 </span>
                                    <span className="price-before-discount">
                                      $ 800
                                    </span>
                                  </div>
                                  {/*<!-- /.product-price -->*/}
                                  <div className="description m-t-10">
                                    Suspendisse posuere arcu diam, id accumsan
                                    eros pharetra ac. Nulla enim risus,
                                    facilisis bibendum gravida eget, lacinia id
                                    purus. Suspendisse posuere arcu diam, id
                                    accumsan eros pharetra ac. Nulla enim risus,
                                    facilisis bibendum gravida eget. Suspendisse
                                    posuere arcu diam, id accumsan eros pharetra
                                    ac. Nulla enim risus, facilisis bibendum
                                    gravida eget, lacinia id purus. Suspendisse
                                    posuere arcu diam, id accumsan eros
                                    pharetra.
                                  </div>
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
                                            Add to cart
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
                                    {/*<!-- /.action -->*/}
                                  </div>
                                  {/*<!-- /.cart -->*/}
                                </div>
                                {/*<!-- /.product-info -->*/}
                              </div>
                              {/*<!-- /.col -->*/}
                            </div>
                            {/*<!-- /.product-list-row -->*/}
                            <div className="tag new">
                              <span>new</span>
                            </div>
                          </div>
                          {/*<!-- /.product-list -->*/}
                        </div>
                        {/*<!-- /.products -->*/}
                      </div>
                      {/*<!-- /.category-product-inner -->*/}

                      <div className="category-product-inner">
                        <div className="products">
                          <div className="product-list product">
                            <div className="row product-list-row">
                              <div className="col col-sm-3 col-lg-3">
                                <div className="product-image">
                                  <div className="image">
                                    <img
                                      src="/assets/images/products/p9.jpg"
                                      alt=""
                                    />
                                  </div>
                                </div>
                                {/*<!-- /.product-image -->*/}
                              </div>
                              {/*<!-- /.col -->*/}
                              <div className="col col-sm-9 col-lg-9">
                                <div className="product-info">
                                  <h3 className="name">
                                    <a href="detail.html">
                                      Floral Print Buttoned
                                    </a>
                                  </h3>
                                  <div className="rating rateit-small"></div>
                                  <div className="product-price">
                                    <span className="price"> $450.99 </span>
                                    <span className="price-before-discount">
                                      $ 800
                                    </span>
                                  </div>
                                  {/*<!-- /.product-price -->*/}
                                  <div className="description m-t-10">
                                    Suspendisse posuere arcu diam, id accumsan
                                    eros pharetra ac. Nulla enim risus,
                                    facilisis bibendum gravida eget, lacinia id
                                    purus. Suspendisse posuere arcu diam, id
                                    accumsan eros pharetra ac. Nulla enim risus,
                                    facilisis bibendum gravida eget. Suspendisse
                                    posuere arcu diam, id accumsan eros pharetra
                                    ac. Nulla enim risus, facilisis bibendum
                                    gravida eget, lacinia id purus. Suspendisse
                                    posuere arcu diam, id accumsan eros
                                    pharetra.
                                  </div>
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
                                            Add to cart
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
                                    {/*<!-- /.action -->*/}
                                  </div>
                                  {/*<!-- /.cart -->*/}
                                </div>
                                {/*<!-- /.product-info -->*/}
                              </div>
                              {/*<!-- /.col -->*/}
                            </div>
                            {/*<!-- /.product-list-row -->*/}
                            <div className="tag new">
                              <span>new</span>
                            </div>
                          </div>
                          {/*<!-- /.product-list -->*/}
                        </div>
                        {/*<!-- /.products -->*/}
                      </div>
                      {/*<!-- /.category-product-inner -->*/}

                      <div className="category-product-inner">
                        <div className="products">
                          <div className="product-list product">
                            <div className="row product-list-row">
                              <div className="col col-sm-3 col-lg-3">
                                <div className="product-image">
                                  <div className="image">
                                    <img
                                      src="/assets/images/products/p10.jpg"
                                      alt=""
                                    />
                                  </div>
                                </div>
                                {/*<!-- /.product-image -->*/}
                              </div>
                              {/*<!-- /.col -->*/}
                              <div className="col col-sm-9 col-lg-9">
                                <div className="product-info">
                                  <h3 className="name">
                                    <a href="detail.html">
                                      Floral Print Buttoned
                                    </a>
                                  </h3>
                                  <div className="rating rateit-small"></div>
                                  <div className="product-price">
                                    <span className="price"> $450.99 </span>
                                    <span className="price-before-discount">
                                      $ 800
                                    </span>
                                  </div>
                                  {/*<!-- /.product-price -->*/}
                                  <div className="description m-t-10">
                                    Suspendisse posuere arcu diam, id accumsan
                                    eros pharetra ac. Nulla enim risus,
                                    facilisis bibendum gravida eget, lacinia id
                                    purus. Suspendisse posuere arcu diam, id
                                    accumsan eros pharetra ac. Nulla enim risus,
                                    facilisis bibendum gravida eget. Suspendisse
                                    posuere arcu diam, id accumsan eros pharetra
                                    ac. Nulla enim risus, facilisis bibendum
                                    gravida eget, lacinia id purus. Suspendisse
                                    posuere arcu diam, id accumsan eros
                                    pharetra.
                                  </div>
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
                                            Add to cart
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
                                    {/*<!-- /.action -->*/}
                                  </div>
                                  {/*<!-- /.cart -->*/}
                                </div>
                                {/*<!-- /.product-info -->*/}
                              </div>
                              {/*<!-- /.col -->*/}
                            </div>
                            {/*<!-- /.product-list-row -->*/}
                            <div className="tag sale">
                              <span>sale</span>
                            </div>
                          </div>
                          {/*<!-- /.product-list -->*/}
                        </div>
                        {/*<!-- /.products -->*/}
                      </div>
                      {/*<!-- /.category-product-inner -->*/}

                      <div className="category-product-inner">
                        <div className="products">
                          <div className="product-list product">
                            <div className="row product-list-row">
                              <div className="col col-sm-3 col-lg-3">
                                <div className="product-image">
                                  <div className="image">
                                    <img
                                      src="/assets/images/products/p11.jpg"
                                      alt=""
                                    />
                                  </div>
                                </div>
                                {/*<!-- /.product-image -->*/}
                              </div>
                              {/*<!-- /.col -->*/}
                              <div className="col col-sm-9 col-lg-9">
                                <div className="product-info">
                                  <h3 className="name">
                                    <a href="detail.html">
                                      Floral Print Buttoned
                                    </a>
                                  </h3>
                                  <div className="rating rateit-small"></div>
                                  <div className="product-price">
                                    <span className="price"> $450.99 </span>
                                    <span className="price-before-discount">
                                      $ 800
                                    </span>
                                  </div>
                                  {/*<!-- /.product-price -->*/}
                                  <div className="description m-t-10">
                                    Suspendisse posuere arcu diam, id accumsan
                                    eros pharetra ac. Nulla enim risus,
                                    facilisis bibendum gravida eget, lacinia id
                                    purus. Suspendisse posuere arcu diam, id
                                    accumsan eros pharetra ac. Nulla enim risus,
                                    facilisis bibendum gravida eget. Suspendisse
                                    posuere arcu diam, id accumsan eros pharetra
                                    ac. Nulla enim risus, facilisis bibendum
                                    gravida eget, lacinia id purus. Suspendisse
                                    posuere arcu diam, id accumsan eros
                                    pharetra.
                                  </div>
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
                                            Add to cart
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
                                    {/*<!-- /.action -->*/}
                                  </div>
                                  {/*<!-- /.cart -->*/}
                                </div>
                                {/*<!-- /.product-info -->*/}
                              </div>
                              {/*<!-- /.col -->*/}
                            </div>
                            {/*<!-- /.product-list-row -->*/}
                            <div className="tag hot">
                              <span>hot</span>
                            </div>
                          </div>
                          {/*<!-- /.product-list -->*/}
                        </div>
                        {/*<!-- /.products -->*/}
                      </div>
                      {/*<!-- /.category-product-inner -->*/}

                      <div className="category-product-inner">
                        <div className="products">
                          <div className="product-list product">
                            <div className="row product-list-row">
                              <div className="col col-sm-3 col-lg-3">
                                <div className="product-image">
                                  <div className="image">
                                    <img
                                      src="/assets/images/products/p12.jpg"
                                      alt=""
                                    />
                                  </div>
                                </div>
                                {/*<!-- /.product-image -->*/}
                              </div>
                              {/*<!-- /.col -->*/}
                              <div className="col col-sm-9 col-lg-9">
                                <div className="product-info">
                                  <h3 className="name">
                                    <a href="detail.html">
                                      Floral Print Buttoned
                                    </a>
                                  </h3>
                                  <div className="rating rateit-small"></div>
                                  <div className="product-price">
                                    <span className="price"> $450.99 </span>
                                    <span className="price-before-discount">
                                      $ 800
                                    </span>
                                  </div>
                                  {/*<!-- /.product-price -->*/}
                                  <div className="description m-t-10">
                                    Suspendisse posuere arcu diam, id accumsan
                                    eros pharetra ac. Nulla enim risus,
                                    facilisis bibendum gravida eget, lacinia id
                                    purus. Suspendisse posuere arcu diam, id
                                    accumsan eros pharetra ac. Nulla enim risus,
                                    facilisis bibendum gravida eget. Suspendisse
                                    posuere arcu diam, id accumsan eros pharetra
                                    ac. Nulla enim risus, facilisis bibendum
                                    gravida eget, lacinia id purus. Suspendisse
                                    posuere arcu diam, id accumsan eros
                                    pharetra.
                                  </div>
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
                                            Add to cart
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
                                    {/*<!-- /.action -->*/}
                                  </div>
                                  {/*<!-- /.cart -->*/}
                                </div>
                                {/*<!-- /.product-info -->*/}
                              </div>
                              {/*<!-- /.col -->*/}
                            </div>
                            {/*<!-- /.product-list-row -->*/}
                            <div className="tag new">
                              <span>new</span>
                            </div>
                          </div>
                          {/*<!-- /.product-list -->*/}
                        </div>
                        {/*<!-- /.products -->*/}
                      </div>
                      {/*<!-- /.category-product-inner -->*/}

                      <div className="category-product-inner">
                        <div className="products">
                          <div className="product-list product">
                            <div className="row product-list-row">
                              <div className="col col-sm-3 col-lg-3">
                                <div className="product-image">
                                  <div className="image">
                                    <img
                                      src="/assets/images/products/p13.jpg"
                                      alt=""
                                    />
                                  </div>
                                </div>
                                {/*<!-- /.product-image -->*/}
                              </div>
                              {/*<!-- /.col -->*/}
                              <div className="col col-sm-9 col-lg-9">
                                <div className="product-info">
                                  <h3 className="name">
                                    <a href="detail.html">
                                      Floral Print Buttoned
                                    </a>
                                  </h3>
                                  <div className="rating rateit-small"></div>
                                  <div className="product-price">
                                    <span className="price"> $450.99 </span>
                                    <span className="price-before-discount">
                                      $ 800
                                    </span>
                                  </div>
                                  {/*<!-- /.product-price -->*/}
                                  <div className="description m-t-10">
                                    Suspendisse posuere arcu diam, id accumsan
                                    eros pharetra ac. Nulla enim risus,
                                    facilisis bibendum gravida eget, lacinia id
                                    purus. Suspendisse posuere arcu diam, id
                                    accumsan eros pharetra ac. Nulla enim risus,
                                    facilisis bibendum gravida eget. Suspendisse
                                    posuere arcu diam, id accumsan eros pharetra
                                    ac. Nulla enim risus, facilisis bibendum
                                    gravida eget, lacinia id purus. Suspendisse
                                    posuere arcu diam, id accumsan eros
                                    pharetra.
                                  </div>
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
                                            Add to cart
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
                                    {/*<!-- /.action -->*/}
                                  </div>
                                  {/*<!-- /.cart -->*/}
                                </div>
                                {/*<!-- /.product-info -->*/}
                              </div>
                              {/*<!-- /.col -->*/}
                            </div>
                            {/*<!-- /.product-list-row -->*/}
                            <div className="tag sale">
                              <span>sale</span>
                            </div>
                          </div>
                          {/*<!-- /.product-list -->*/}
                        </div>
                        {/*<!-- /.products -->*/}
                      </div>
                      {/*<!-- /.category-product-inner -->*/}

                      <div className="category-product-inner">
                        <div className="products">
                          <div className="product-list product">
                            <div className="row product-list-row">
                              <div className="col col-sm-3 col-lg-3">
                                <div className="product-image">
                                  <div className="image">
                                    <img
                                      src="/assets/images/products/p14.jpg"
                                      alt=""
                                    />
                                  </div>
                                </div>
                                {/*<!-- /.product-image -->*/}
                              </div>
                              {/*<!-- /.col -->*/}
                              <div className="col col-sm-9 col-lg-9">
                                <div className="product-info">
                                  <h3 className="name">
                                    <a href="detail.html">
                                      Floral Print Buttoned
                                    </a>
                                  </h3>
                                  <div className="rating rateit-small"></div>
                                  <div className="product-price">
                                    <span className="price"> $450.99 </span>
                                    <span className="price-before-discount">
                                      $ 800
                                    </span>
                                  </div>
                                  {/*<!-- /.product-price -->*/}
                                  <div className="description m-t-10">
                                    Suspendisse posuere arcu diam, id accumsan
                                    eros pharetra ac. Nulla enim risus,
                                    facilisis bibendum gravida eget, lacinia id
                                    purus. Suspendisse posuere arcu diam, id
                                    accumsan eros pharetra ac. Nulla enim risus,
                                    facilisis bibendum gravida eget. Suspendisse
                                    posuere arcu diam, id accumsan eros pharetra
                                    ac. Nulla enim risus, facilisis bibendum
                                    gravida eget, lacinia id purus. Suspendisse
                                    posuere arcu diam, id accumsan eros
                                    pharetra.
                                  </div>
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
                                            Add to cart
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
                                    {/*<!-- /.action -->*/}
                                  </div>
                                  {/*<!-- /.cart -->*/}
                                </div>
                                {/*<!-- /.product-info -->*/}
                              </div>
                              {/*<!-- /.col -->*/}
                            </div>
                            {/*<!-- /.product-list-row -->*/}
                            <div className="tag hot">
                              <span>hot</span>
                            </div>
                          </div>
                          {/*<!-- /.product-list -->*/}
                        </div>
                        {/*<!-- /.products -->*/}
                      </div>
                      {/*<!-- /.category-product-inner -->*/}
                    </div>
                    {/*<!-- /.category-product -->*/}
                  </div>
                  {/*<!-- /.tab-pane #list-container -->*/}
                </div>
                {/*<!-- /.tab-content -->*/}
                <div className="clearfix filters-container bottom-row">
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
                    {/*<!-- /.pagination-container -->*/}
                  </div>
                  {/*<!-- /.text-right -->*/}
                </div>
                {/*<!-- /.filters-container -->*/}
              </div>
              {/*<!-- /.search-result-container -->*/}
            </div>
            {/*<!-- /.col -->*/}
          </div>
          {/*<!-- /.row -->*/}
          {/*<!-- ============================================== BRANDS CAROUSEL ============================================== -->*/}
          <div id="brands-carousel" className="logo-slider">
            <div className="logo-slider-inner">
              <div
                id="brand-slider"
                className="owl-carousel brand-slider custom-carousel owl-theme"
              >
                <div className="item m-t-15">
                  <a href="#" className="image">
                    <img
                      data-echo="/assets/images/brands/brand1.png"
                      src="/assets/images/blank.gif"
                      alt=""
                    />
                  </a>
                </div>
                {/*<!--/.item-->*/}

                <div className="item m-t-10">
                  <a href="#" className="image">
                    <img
                      data-echo="/assets/images/brands/brand2.png"
                      src="/assets/images/blank.gif"
                      alt=""
                    />
                  </a>
                </div>
                {/*<!--/.item-->*/}

                <div className="item">
                  <a href="#" className="image">
                    <img
                      data-echo="/assets/images/brands/brand3.png"
                      src="/assets/images/blank.gif"
                      alt=""
                    />
                  </a>
                </div>
                {/*<!--/.item-->*/}

                <div className="item">
                  <a href="#" className="image">
                    <img
                      data-echo="/assets/images/brands/brand4.png"
                      src="/assets/images/blank.gif"
                      alt=""
                    />
                  </a>
                </div>
                {/*<!--/.item-->*/}

                <div className="item">
                  <a href="#" className="image">
                    <img
                      data-echo="/assets/images/brands/brand5.png"
                      src="/assets/images/blank.gif"
                      alt=""
                    />
                  </a>
                </div>
                {/*<!--/.item-->*/}

                <div className="item">
                  <a href="#" className="image">
                    <img
                      data-echo="/assets/images/brands/brand6.png"
                      src="/assets/images/blank.gif"
                      alt=""
                    />
                  </a>
                </div>
                {/*<!--/.item-->*/}

                <div className="item">
                  <a href="#" className="image">
                    <img
                      data-echo="/assets/images/brands/brand2.png"
                      src="/assets/images/blank.gif"
                      alt=""
                    />
                  </a>
                </div>
                {/*<!--/.item-->*/}

                <div className="item">
                  <a href="#" className="image">
                    <img
                      data-echo="/assets/images/brands/brand4.png"
                      src="/assets/images/blank.gif"
                      alt=""
                    />
                  </a>
                </div>
                {/*<!--/.item-->*/}

                <div className="item">
                  <a href="#" className="image">
                    <img
                      data-echo="/assets/images/brands/brand1.png"
                      src="/assets/images/blank.gif"
                      alt=""
                    />
                  </a>
                </div>
                {/*<!--/.item-->*/}

                <div className="item">
                  <a href="#" className="image">
                    <img
                      data-echo="/assets/images/brands/brand5.png"
                      src="/assets/images/blank.gif"
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
          {/*<!-- ============================================== BRANDS CAROUSEL : END ============================================== -->*/}
        </div>
        {/*<!-- /.container -->*/}
      </div>
      {/*<!-- /.body-content -->*/}
    </Layout>
  );
}

async function getProductsByCategory(category: string) {
  const token =
    "session=eyJ0b2tlbiI6ImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpwWkNJNklqWTJPV0UwWkdVell6VXhZV1U1TURBeU1USmtaRGc1T0NJc0ltVnRZV2xzSWpvaWJYTjZRR2R0WVdsc0xtTnZiU0lzSW1saGRDSTZNVGN5TWpjME9UY3dOWDAuSm9RTmNhZXQydzc4U0tHbndDbnBYZ0Rsb1ctNEZERXRuVzRNTmVkMm41cyJ9; session.sig=lFqy6uOVKpAhYZ9vMzPkDBckn00";

  //"token=eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJScWRGRHRLWWZXaFYxQ0VabDFtX2pMSS1QTDVuRjh0TE5xaS1ETUx4RWtvIn0.eyJleHAiOjE3MjI1NjE3OTYsImlhdCI6MTcyMjUyNTc5NiwianRpIjoiNDM0YWQ1ZmItM2M0YS00NTA4LTlkODMtZDQzNTcwNjdiNTg1IiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL3JlYWxtcy9vd2xpeCIsImF1ZCI6WyJyZWFsbS1tYW5hZ2VtZW50IiwiYWNjb3VudCJdLCJzdWIiOiJjMDM5ZTU1MC1mOTBhLTQ5MTctODc3NS1hNDI3OTI4Y2VlYTIiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJvd2xpeC1jbGllbnQiLCJzZXNzaW9uX3N0YXRlIjoiMDVkN2M4MGMtNWU5NS00NDBmLTkyNWMtZDRmMGRiMTAyYjdhIiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwOi8vbG9jYWxob3N0OjgwODEiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbImRlZmF1bHQtcm9sZXMtb3dsaXgiLCJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsicmVhbG0tbWFuYWdlbWVudCI6eyJyb2xlcyI6WyJtYW5hZ2UtdXNlcnMiXX0sImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoicHJvZmlsZSBlbWFpbCIsInNpZCI6IjA1ZDdjODBjLTVlOTUtNDQwZi05MjVjLWQ0ZjBkYjEwMmI3YSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ3eWtAZ21haWwuY29tIiwiZW1haWwiOiJ3eWtAZ21haWwuY29tIn0.GZ8E1OPyfJDDi2z4OR2IUrL7zzF6tr10TgP2Bqd6499n5SONszH0Op0C4r_3czpR55SmPTk-rE5oYi-Mzhr2j2-pTt5zrWs2tp9MbgEqJ1IcGPHQKcXQYsodKDruGxEJ-tziPr1JibHQtngeJ8hwwmVjkz-syMVRu2t-Pf4vVGjanCxcud43vMkDfF0MKflKW9Dzv0Ct8PkrhMSoszKmQfS_qRr-lPdSFnHN-ibNdRmM8puKQkco_pqqyrpbhVoxDaridtPIdkI1YTiLK4iihiYgIV8lAHcACqcMU1sRidje07bek2axB_YVmpmU_Y8-eMy-N31x4jaGuELNrHp8ug; session=eyJ0b2tlbiI6ImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpwWkNJNklqWTJPV0UwWkdVell6VXhZV1U1TURBeU1USmtaRGc1T0NJc0ltVnRZV2xzSWpvaWJYTjZRR2R0WVdsc0xtTnZiU0lzSW1saGRDSTZNVGN5TWpVNU5qSXdOSDAuRGNVdGV5UDQ0VkQyVkE3LWc4d3BnT3Rmb1MwR3RkUVV2dUlsalFwOEtuQSJ9; session.sig=Cku1vBPrKLZb4aaczujQ6hQ46_A";

  // request.headers.set("Accept", "application/json");
  //request.headers.set("Content-Type", "application/json");
  // request.headers.set("Cookie", token);

  const res = await fetch(
    `http://backend:3002/api/product/get-all?page=0&limit=1000&category=${category}`,
    {
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Cookie: token,
        cache: "no-store",
      },
    }
  );

  const products = await res.json();

  if (!products) {
    return null;
  }
  return products;
}
