import React from "react";
import Layout from "../../components/Layout/Layout";
import Carousel from "@/components/Carousel/Carousel";

export default function FAQ() {
  return (
    <Layout>
      <div className="breadcrumb">
        <div className="container">
          <div className="breadcrumb-inner">
            <ul className="list-inline list-unstyled">
              <li>
                <a href="home.html">Home</a>
              </li>
              <li className="active">FAQ</li>
            </ul>
          </div>
          {/*<!-- /.breadcrumb-inner -->*/}
        </div>
        {/*<!-- /.container -->*/}
      </div>
      {/*<!-- /.breadcrumb -->*/}

      <div className="body-content">
        <div className="container">
          <div className="checkout-box faq-page">
            <div className="row">
              <div className="col-md-12">
                <h2 className="heading-title">Frequently Asked Questions</h2>
                <span className="title-tag">
                  Last Updated on November 02, 2014
                </span>
                <div className="panel-group checkout-steps" id="accordion">
                  {/*<!-- checkout-step-01  -->*/}
                  <div className="panel panel-default checkout-step-01">
                    {/*<!-- panel-heading -->*/}
                    <div className="panel-heading">
                      <h4 className="unicase-checkout-title">
                        <a
                          data-toggle="collapse"
                          className=""
                          data-parent="#accordion"
                          href="#collapseOne"
                        >
                          <span>1</span>Do you Ship Internationally ?
                        </a>
                      </h4>
                    </div>
                    {/*<!-- panel-heading -->*/}

                    <div
                      id="collapseOne"
                      className="panel-collapse collapse in"
                    >
                      {/*<!-- panel-body  -->*/}
                      <div className="panel-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam quis diam erat. Duis velit lectus, posuere a
                        blandit sit amet, tempor at lorem. Donec ultricies,
                        lorem sed ultrices interdum. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Etiam quis diam erat. Duis
                        velit lectus, posuere a blandit sit amet, tempor at
                        lorem. Donec ultricies, lorem sed ultrices interdum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit.Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Etiam quis diam erat. Duis velit lectus, posuere a
                        blandit sit amet, tempor at lorem. Donec ultricies,
                        lorem sed ultrices interdum. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit.Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Etiam quis diam erat. Duis
                        velit lectus, posuere a blandit sit amet, tempor at
                        lorem.
                      </div>
                      {/*<!-- panel-body  -->*/}
                    </div>
                    {/*<!-- row -->*/}
                  </div>
                  {/*<!-- checkout-step-01  -->*/}
                  {/*<!-- checkout-step-02  -->*/}
                  <div className="panel panel-default checkout-step-02">
                    <div className="panel-heading">
                      <h4 className="unicase-checkout-title">
                        <a
                          data-toggle="collapse"
                          className="collapsed"
                          data-parent="#accordion"
                          href="#collapseTwo"
                        >
                          <span>2</span>Who should I to contact if I have any
                          queries?
                        </a>
                      </h4>
                    </div>
                    <div id="collapseTwo" className="panel-collapse collapse">
                      <div className="panel-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                        wolf moon tempor, sunt aliqua put a bird on it squid
                        single-origin coffee nulla assumenda shoreditch et.
                        Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan
                        excepteur butcher vice lomo. Leggings occaecat craft
                        beer farm-to-table, raw denim aesthetic synth nesciunt
                        you probably haven't heard of them accusamus labore
                        sustainable VHS.
                      </div>
                    </div>
                  </div>
                  {/*<!-- checkout-step-02  -->*/}

                  {/*<!-- checkout-step-03  -->*/}
                  <div className="panel panel-default checkout-step-03">
                    <div className="panel-heading">
                      <h4 className="unicase-checkout-title">
                        <a
                          data-toggle="collapse"
                          className="collapsed"
                          data-parent="#accordion"
                          href="#collapseThree"
                        >
                          <span>3</span>How do I track my order ?
                        </a>
                      </h4>
                    </div>
                    <div id="collapseThree" className="panel-collapse collapse">
                      <div className="panel-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                        wolf moon tempor, sunt aliqua put a bird on it squid
                        single-origin coffee nulla assumenda shoreditch et.
                        Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan
                        excepteur butcher vice lomo. Leggings occaecat craft
                        beer farm-to-table, raw denim aesthetic synth nesciunt
                        you probably haven't heard of them accusamus labore
                        sustainable VHS.
                      </div>
                    </div>
                  </div>
                  {/*<!-- checkout-step-03  -->*/}

                  {/*<!-- checkout-step-04  -->*/}
                  <div className="panel panel-default checkout-step-04">
                    <div className="panel-heading">
                      <h4 className="unicase-checkout-title">
                        <a
                          data-toggle="collapse"
                          className="collapsed"
                          data-parent="#accordion"
                          href="#collapseFour"
                        >
                          <span>4</span>How can I cancel or change my order ?
                        </a>
                      </h4>
                    </div>
                    <div id="collapseFour" className="panel-collapse collapse">
                      <div className="panel-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                        wolf moon tempor, sunt aliqua put a bird on it squid
                        single-origin coffee nulla assumenda shoreditch et.
                        Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan
                        excepteur butcher vice lomo. Leggings occaecat craft
                        beer farm-to-table, raw denim aesthetic synth nesciunt
                        you probably haven't heard of them accusamus labore
                        sustainable VHS.
                      </div>
                    </div>
                  </div>
                  {/*<!-- checkout-step-04  -->*/}

                  {/*<!-- checkout-step-05  -->*/}
                  <div className="panel panel-default checkout-step-05">
                    <div className="panel-heading">
                      <h4 className="unicase-checkout-title">
                        <a
                          data-toggle="collapse"
                          className="collapsed"
                          data-parent="#accordion"
                          href="#collapseFive"
                        >
                          <span>5</span>How can I return a product
                        </a>
                      </h4>
                    </div>
                    <div id="collapseFive" className="panel-collapse collapse">
                      <div className="panel-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                        wolf moon tempor, sunt aliqua put a bird on it squid
                        single-origin coffee nulla assumenda shoreditch et.
                        Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan
                        excepteur butcher vice lomo. Leggings occaecat craft
                        beer farm-to-table, raw denim aesthetic synth nesciunt
                        you probably haven't heard of them accusamus labore
                        sustainable VHS.
                      </div>
                    </div>
                  </div>
                  {/*<!-- checkout-step-05  -->*/}

                  {/*<!-- checkout-step-06  -->*/}
                  <div className="panel panel-default checkout-step-06">
                    <div className="panel-heading">
                      <h4 className="unicase-checkout-title">
                        <a
                          data-toggle="collapse"
                          className="collapsed"
                          data-parent="#accordion"
                          href="#collapseSix"
                        >
                          <span>6</span>How long will it take to get my package
                          ?
                        </a>
                      </h4>
                    </div>
                    <div id="collapseSix" className="panel-collapse collapse">
                      <div className="panel-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                        wolf moon tempor, sunt aliqua put a bird on it squid
                        single-origin coffee nulla assumenda shoreditch et.
                        Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan
                        excepteur butcher vice lomo. Leggings occaecat craft
                        beer farm-to-table, raw denim aesthetic synth nesciunt
                        you probably haven't heard of them accusamus labore
                        sustainable VHS.
                      </div>
                    </div>
                  </div>
                  {/*<!-- checkout-step-06  -->*/}

                  {/*<!-- checkout-step-07  -->*/}
                  <div className="panel panel-default checkout-step-07">
                    <div className="panel-heading">
                      <h4 className="unicase-checkout-title">
                        <a
                          data-toggle="collapse"
                          className="collapsed"
                          data-parent="#accordion"
                          href="#collapseSeven"
                        >
                          <span>7</span>What Shipping methods are available ?
                        </a>
                      </h4>
                    </div>
                    <div id="collapseSeven" className="panel-collapse collapse">
                      <div className="panel-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                        wolf moon tempor, sunt aliqua put a bird on it squid
                        single-origin coffee nulla assumenda shoreditch et.
                        Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan
                        excepteur butcher vice lomo. Leggings occaecat craft
                        beer farm-to-table, raw denim aesthetic synth nesciunt
                        you probably haven't heard of them accusamus labore
                        sustainable VHS.
                      </div>
                    </div>
                  </div>
                  {/*<!-- checkout-step-07  -->*/}

                  {/*<!-- checkout-step-08  -->*/}
                  <div className="panel panel-default checkout-step-08">
                    <div className="panel-heading">
                      <h4 className="unicase-checkout-title">
                        <a
                          data-toggle="collapse"
                          className="collapsed"
                          data-parent="#accordion"
                          href="#collapseEight"
                        >
                          <span>8</span>Do you provide any warranty ?
                        </a>
                      </h4>
                    </div>
                    <div id="collapseEight" className="panel-collapse collapse">
                      <div className="panel-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                        wolf moon tempor, sunt aliqua put a bird on it squid
                        single-origin coffee nulla assumenda shoreditch et.
                        Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan
                        excepteur butcher vice lomo. Leggings occaecat craft
                        beer farm-to-table, raw denim aesthetic synth nesciunt
                        you probably haven't heard of them accusamus labore
                        sustainable VHS.
                      </div>
                    </div>
                  </div>
                  {/*<!-- checkout-step-08  -->*/}

                  {/*<!-- checkout-step-09  -->*/}
                  <div className="panel panel-default checkout-step-09">
                    <div className="panel-heading">
                      <h4 className="unicase-checkout-title">
                        <a
                          data-toggle="collapse"
                          className="collapsed"
                          data-parent="#accordion"
                          href="#collapseNine"
                        >
                          <span>9</span>Do you have replacement guarantee ?
                        </a>
                      </h4>
                    </div>
                    <div id="collapseNine" className="panel-collapse collapse">
                      <div className="panel-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                        wolf moon tempor, sunt aliqua put a bird on it squid
                        single-origin coffee nulla assumenda shoreditch et.
                        Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan
                        excepteur butcher vice lomo. Leggings occaecat craft
                        beer farm-to-table, raw denim aesthetic synth nesciunt
                        you probably haven't heard of them accusamus labore
                        sustainable VHS.
                      </div>
                    </div>
                  </div>
                  {/*<!-- checkout-step-09  -->*/}
                </div>
                {/*<!-- /.checkout-steps -->*/}
              </div>
            </div>
            {/*<!-- /.row -->*/}
          </div>
          {/*<!-- /.checkout-box -->*/}
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
      </div>
      {/*<!-- /.body-content -->*/}
      {/*<!-- ============================================================= FOOTER ============================================================= -->*/}
    </Layout>
  );
}
