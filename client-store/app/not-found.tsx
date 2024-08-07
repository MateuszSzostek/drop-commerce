import React from "react";
import Layout from "../components/Layout/Layout";
import Link from "next/link";

const NotFoundPage = () => (
  <Layout>
    <div className="body-content outer-top-bd">
      <div className="container">
        <div className="x-page inner-bottom-sm">
          <div className="row">
            <div className="col-md-12 x-text text-center">
              <h1>404</h1>
              <p>We are sorry, the page you've requested is not available. </p>
              <form role="form" className="outer-top-vs outer-bottom-xs">
                <input placeholder="Search" autoComplete="off" />
                <button className="  btn-default le-button">Go</button>
              </form>
              <Link href="/">
                <i className="fa fa-home"></i> Go To Homepage
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default NotFoundPage;
