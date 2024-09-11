import React from "react";
import Layout from "../../components/Layout/Layout";
import Profile from "@/components/Profile/Profile";

export default function ProfilePage() {
  return (
    <Layout>
      <div className="breadcrumb">
        <div className="container">
          <div className="breadcrumb-inner">
            <ul className="list-inline list-unstyled">
              <li>
                <a href="#">Home</a>
              </li>
              <li className="active">Basket</li>
            </ul>
          </div>
          {/*<!-- /.breadcrumb-inner -->*/}
        </div>
        {/*<!-- /.container -->*/}
      </div>
      {/*<!-- /.breadcrumb -->*/}

      <div className="body-content">
        {<Profile />}
        {/*<!-- /.container -->*/}
      </div>
      {/*<!-- /.body-content -->*/}
    </Layout>
  );
}
