import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { NextSeo } from "next-seo";
import { getPageSEO } from "@/lib/seo";

export default function Custom404() {
  const seo = getPageSEO({
    title: "Page Not Found",
    description:
      "The page you are looking for does not exist. Please check the URL or navigate back to the homepage.",
    noindex: true,
    nofollow: true,
  });

  return (
    <>
      <NextSeo {...seo} />
      <Layout breadcrumbTitle="Page Not Found">
        <section className="error-area pt-120 pb-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="error-img">
                  <img
                    src="/assets/img/images/404_img.png"
                    alt="404 Error - Page Not Found"
                  />
                </div>
                <div className="error-content">
                  <h2 className="title">Oops! Page Not Found.</h2>
                  <p>
                    The page you are looking for might have been removed, had
                    its name changed, or is temporarily unavailable.
                  </p>
                  <Link href="/" className="btn">
                    Back to Home page
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
