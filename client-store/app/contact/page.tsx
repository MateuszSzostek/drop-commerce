import Carousel from "@/components/Carousel/Carousel";
import Layout from "../../components/Layout/Layout";
import React from "react";

export default function Contact() {
  return (
    <Layout>
      <div className="breadcrumb">
        <div className="container">
          <div className="breadcrumb-inner">
            <ul className="list-inline list-unstyled">
              <li>
                <a href="#">Home</a>
              </li>
              <li className="active">Contact</li>
            </ul>
          </div>
          {/*<!-- /.breadcrumb-inner -->*/}
        </div>
        {/*<!-- /.container -->*/}
      </div>
      {/*<!-- /.breadcrumb -->*/}

      <div className="body-content">
        <div className="container">
          <div className="contact-page">
            <div className="row">
              <div className="col-md-12 contact-map outer-bottom-vs">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.0080692193424!2d80.29172299999996!3d13.098675000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526f446a1c3187%3A0x298011b0b0d14d47!2sTransvelo!5e0!3m2!1sen!2sin!4v1412844527190"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                ></iframe>
              </div>
              <div className="col-md-8 contact-form">
                <div className="col-md-12 contact-title">
                  <h4>Contact Form</h4>
                </div>
                <div className="col-md-4 ">
                  <form className="register-form" role="form">
                    <div className="form-group">
                      <label className="info-title" htmlFor="exampleInputName">
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
                      <label className="info-title" htmlFor="exampleInputTitle">
                        Title <span>*</span>
                      </label>
                      <input
                        type="email"
                        className="form-control unicase-form-control text-input"
                        id="exampleInputTitle"
                        placeholder="Title"
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
                    Send Message
                  </button>
                </div>
              </div>
              <div className="col-md-4 contact-info">
                <div className="contact-title">
                  <h4>Information</h4>
                </div>
                <div className="clearfix address">
                  <span className="contact-i">
                    <i className="fa fa-map-marker"></i>
                  </span>
                  <span className="contact-span">
                    ThemesGround, 789 Main rd, Anytown, CA 12345 USA
                  </span>
                </div>
                <div className="clearfix phone-no">
                  <span className="contact-i">
                    <i className="fa fa-mobile"></i>
                  </span>
                  <span className="contact-span">
                    +(888) 123-4567
                    <br />
                    +(888) 456-7890
                  </span>
                </div>
                <div className="clearfix email">
                  <span className="contact-i">
                    <i className="fa fa-envelope"></i>
                  </span>
                  <span className="contact-span">
                    <a href="#">marazoo@themesground.com</a>
                  </span>
                </div>
              </div>{" "}
            </div>
            {/*<!-- /.contact-page -->*/}
          </div>
          {/*<!-- /.row -->*/}
          {/*<!-- ============================================== BRANDS CAROUSEL ============================================== -->*/}
          <div id="brands-carousel" className="logo-slider wow fadeInUp">
            <div className="logo-slider-inner">
              <Carousel className="brand-slider custom-carousel owl-theme">
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
              </Carousel>
              {/*<!-- /.owl-carousel #logo-slider -->*/}
            </div>
            {/*<!-- /.logo-slider-inner -->*/}
          </div>
          {/*<!-- /.logo-slider -->*/}
          {/*<!-- ============================================== BRANDS CAROUSEL : END ============================================== -->*/}{" "}
        </div>
        {/*<!-- /.container -->*/}
        {/*<!-- ============================================================= FOOTER ============================================================= -->*/}
      </div>
    </Layout>
  );
}
