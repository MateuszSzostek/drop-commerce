import Image from "next/image";
import styles from "./page.module.css";
import SideNav from "../components/SideNav/SideNav";
import Navigation from "../components/Navigation";
import AdvertiseBanner from "../components/AdvertiseBanner";
import ProductsPane from "../components/ProductsPane";
import PromotionBanner from "../components/PromotionBanner";
import { seasonCategories } from "../components/IndexPageContent/IndexPageContent.temp";
import Link from "next/link";
import BlogPane from "../components/BlogPane";
import Layout from "../components/Layout/Layout";
import { GetStaticProps } from "next/types";

export default async function Home({ params }) {
  const { categories, allProducts } = await getPost(1);

  // const hotDealProducts = allProducts?.data?.items
  // ?.filter((product) => prodyc)
  // .map((product) => ({}));

  const specialOffersProducts = allProducts?.data?.items?.forEach((product) => {
    console.warn(product?.tags);
  });

  return (
    <Layout>
      <div className="body-content outer-top-vs" id="top-banner-and-menu">
        <div className="container content__container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-3 sidebar">
              <SideNav
                categoriesTreeObj={JSON.parse(
                  categories?.data?.categoriesTreeObj
                )}
              />
              <Navigation></Navigation>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-9 homebanner-holder">
              <div id="hero">
                <div
                  id="owl-main"
                  className="owl-carousel owl-inner-nav owl-ui-sm"
                >
                  <AdvertiseBanner
                    topTitle="Top Brands"
                    title="New Collections"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit."
                    buttonText="Shop Now"
                    buttonLink="/details-sigsidf"
                    backgroundImage="url(assets/images/sliders/01.jpg)"
                  />
                  <AdvertiseBanner
                    topTitle="Spring 2018"
                    title="Women Fashion"
                    description=" Nemo enim ipsam voluptatem quia voluptas sit
                  aspernatur aut odit aut fugit"
                    buttonText="Shop Now"
                    buttonLink="/details-sigsidf"
                    backgroundImage="url(assets/images/sliders/02.jpg)"
                  />
                </div>
              </div>

              {/*
   <ProductsPane
              title={newProducts.title}
              id={newProducts.id}
              sliders={newProducts.sliders}
              extraSliderClass="home-owl-carousel"
            />
  */}

              <div className="wide-banners outer-bottom-xs">
                <div className="row">
                  <PromotionBanner
                    image="assets/images/banners/home-banner1.jpg"
                    to="/asod3f"
                  />
                  <PromotionBanner
                    image="assets/images/banners/home-banner3.jpg"
                    to="/asodrdsgf"
                  />
                  <PromotionBanner
                    image="assets/images/banners/home-banner2.jpg"
                    to="/asoertdf"
                  />
                </div>
              </div>
              <section className="section featured-product">
                <div className="row">
                  <div className="col-lg-3">
                    <h3 className="section-title season-cat-title">
                      Season category
                    </h3>
                    <ul className="sub-cat">
                      {seasonCategories.map((el) => (
                        <li>
                          <Link href={el?.to}>{el.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-lg-9">
                    {/*
     <ProductsPane
                    title="Awesome Category"
                    id={featuredProducts.id}
                    sliders={featuredProducts.sliders}
                    extraSliderClass="season-category-owl-carousel"
                  />
                    */}
                  </div>
                </div>
              </section>
              <div className="wide-banners outer-bottom-xs">
                <div className="row">
                  <PromotionBanner
                    image="assets/images/banners/home-banner.jpg"
                    to="/asod3f"
                    wide
                  />
                  <PromotionBanner
                    image="assets/images/banners/home-banner4.jpg"
                    to="/asod3f"
                  />
                </div>
              </div>
              {/*
  <BlogPane
              title={blogPane?.title}
              id={blogPane?.id}
              posts={blogPane?.posts}
            />
              */}

              <section className="section new-arriavls">
                {/*
  <ProductsPane
                title={featuredProducts.title}
                id={featuredProducts.id}
                sliders={featuredProducts.sliders}
                extraSliderClass="home-owl-carousel"
              />
                */}
              </section>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

async function getPost(id: number) {
  const token =
    "session=eyJ0b2tlbiI6ImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpwWkNJNklqWTJPV0UwWkdVell6VXhZV1U1TURBeU1USmtaRGc1T0NJc0ltVnRZV2xzSWpvaWJYTjZRR2R0WVdsc0xtTnZiU0lzSW1saGRDSTZNVGN5TWpjME9UY3dOWDAuSm9RTmNhZXQydzc4U0tHbndDbnBYZ0Rsb1ctNEZERXRuVzRNTmVkMm41cyJ9; session.sig=lFqy6uOVKpAhYZ9vMzPkDBckn00";

  //"token=eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJScWRGRHRLWWZXaFYxQ0VabDFtX2pMSS1QTDVuRjh0TE5xaS1ETUx4RWtvIn0.eyJleHAiOjE3MjI1NjE3OTYsImlhdCI6MTcyMjUyNTc5NiwianRpIjoiNDM0YWQ1ZmItM2M0YS00NTA4LTlkODMtZDQzNTcwNjdiNTg1IiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL3JlYWxtcy9vd2xpeCIsImF1ZCI6WyJyZWFsbS1tYW5hZ2VtZW50IiwiYWNjb3VudCJdLCJzdWIiOiJjMDM5ZTU1MC1mOTBhLTQ5MTctODc3NS1hNDI3OTI4Y2VlYTIiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJvd2xpeC1jbGllbnQiLCJzZXNzaW9uX3N0YXRlIjoiMDVkN2M4MGMtNWU5NS00NDBmLTkyNWMtZDRmMGRiMTAyYjdhIiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwOi8vbG9jYWxob3N0OjgwODEiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbImRlZmF1bHQtcm9sZXMtb3dsaXgiLCJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsicmVhbG0tbWFuYWdlbWVudCI6eyJyb2xlcyI6WyJtYW5hZ2UtdXNlcnMiXX0sImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoicHJvZmlsZSBlbWFpbCIsInNpZCI6IjA1ZDdjODBjLTVlOTUtNDQwZi05MjVjLWQ0ZjBkYjEwMmI3YSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ3eWtAZ21haWwuY29tIiwiZW1haWwiOiJ3eWtAZ21haWwuY29tIn0.GZ8E1OPyfJDDi2z4OR2IUrL7zzF6tr10TgP2Bqd6499n5SONszH0Op0C4r_3czpR55SmPTk-rE5oYi-Mzhr2j2-pTt5zrWs2tp9MbgEqJ1IcGPHQKcXQYsodKDruGxEJ-tziPr1JibHQtngeJ8hwwmVjkz-syMVRu2t-Pf4vVGjanCxcud43vMkDfF0MKflKW9Dzv0Ct8PkrhMSoszKmQfS_qRr-lPdSFnHN-ibNdRmM8puKQkco_pqqyrpbhVoxDaridtPIdkI1YTiLK4iihiYgIV8lAHcACqcMU1sRidje07bek2axB_YVmpmU_Y8-eMy-N31x4jaGuELNrHp8ug; session=eyJ0b2tlbiI6ImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpwWkNJNklqWTJPV0UwWkdVell6VXhZV1U1TURBeU1USmtaRGc1T0NJc0ltVnRZV2xzSWpvaWJYTjZRR2R0WVdsc0xtTnZiU0lzSW1saGRDSTZNVGN5TWpVNU5qSXdOSDAuRGNVdGV5UDQ0VkQyVkE3LWc4d3BnT3Rmb1MwR3RkUVV2dUlsalFwOEtuQSJ9; session.sig=Cku1vBPrKLZb4aaczujQ6hQ46_A";

  // request.headers.set("Accept", "application/json");
  //request.headers.set("Content-Type", "application/json");
  // request.headers.set("Cookie", token);

  const categoriesResponse = await fetch(`http://backend:3002/api/category`, {
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Cookie: token,
      cache: "no-store",
    },
  });

  const allProductsResponse = await fetch(
    `http://backend:3002/api/product/get-all`,
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

  const categories = await categoriesResponse.json();

  const allProducts = await allProductsResponse.json();

  console.warn(allProducts?.data?.items);

  if (!categories) {
    return null;
  }
  return { categories, allProducts };
}

export async function generateStaticParams() {
  const token =
    "token=eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJScWRGRHRLWWZXaFYxQ0VabDFtX2pMSS1QTDVuRjh0TE5xaS1ETUx4RWtvIn0.eyJleHAiOjE3MjI1NjE3OTYsImlhdCI6MTcyMjUyNTc5NiwianRpIjoiNDM0YWQ1ZmItM2M0YS00NTA4LTlkODMtZDQzNTcwNjdiNTg1IiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL3JlYWxtcy9vd2xpeCIsImF1ZCI6WyJyZWFsbS1tYW5hZ2VtZW50IiwiYWNjb3VudCJdLCJzdWIiOiJjMDM5ZTU1MC1mOTBhLTQ5MTctODc3NS1hNDI3OTI4Y2VlYTIiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJvd2xpeC1jbGllbnQiLCJzZXNzaW9uX3N0YXRlIjoiMDVkN2M4MGMtNWU5NS00NDBmLTkyNWMtZDRmMGRiMTAyYjdhIiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwOi8vbG9jYWxob3N0OjgwODEiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbImRlZmF1bHQtcm9sZXMtb3dsaXgiLCJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsicmVhbG0tbWFuYWdlbWVudCI6eyJyb2xlcyI6WyJtYW5hZ2UtdXNlcnMiXX0sImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoicHJvZmlsZSBlbWFpbCIsInNpZCI6IjA1ZDdjODBjLTVlOTUtNDQwZi05MjVjLWQ0ZjBkYjEwMmI3YSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ3eWtAZ21haWwuY29tIiwiZW1haWwiOiJ3eWtAZ21haWwuY29tIn0.GZ8E1OPyfJDDi2z4OR2IUrL7zzF6tr10TgP2Bqd6499n5SONszH0Op0C4r_3czpR55SmPTk-rE5oYi-Mzhr2j2-pTt5zrWs2tp9MbgEqJ1IcGPHQKcXQYsodKDruGxEJ-tziPr1JibHQtngeJ8hwwmVjkz-syMVRu2t-Pf4vVGjanCxcud43vMkDfF0MKflKW9Dzv0Ct8PkrhMSoszKmQfS_qRr-lPdSFnHN-ibNdRmM8puKQkco_pqqyrpbhVoxDaridtPIdkI1YTiLK4iihiYgIV8lAHcACqcMU1sRidje07bek2axB_YVmpmU_Y8-eMy-N31x4jaGuELNrHp8ug; session=eyJ0b2tlbiI6ImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpwWkNJNklqWTJPV0UwWkdVell6VXhZV1U1TURBeU1USmtaRGc1T0NJc0ltVnRZV2xzSWpvaWJYTjZRR2R0WVdsc0xtTnZiU0lzSW1saGRDSTZNVGN5TWpVNU5qSXdOSDAuRGNVdGV5UDQ0VkQyVkE3LWc4d3BnT3Rmb1MwR3RkUVV2dUlsalFwOEtuQSJ9;";

  // request.headers.set("Accept", "application/json");
  //request.headers.set("Content-Type", "application/json");
  // request.headers.set("Cookie", token);

  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    headers: {
      Cookie: token,
    },
  });
  const posts = await res.json();

  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}
