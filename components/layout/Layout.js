import { useEffect } from "react";
import BackToTop from "../elements/BackToTop";
import DataBg from "../elements/DataBg";
import Breadcrumb from "./Breadcrumb";
import Footer from "./Footer";
import Header from "./Header";
import PageHead from "./PageHead";

export default function Layout({
  headerCls,
  headerTop,
  headTitle,
  breadcrumbReturn = "Home",
  breadcrumbTitle,
  children,
}) {
  useEffect(() => {
    const WOW = require("wowjs");
    window.wow = new WOW.WOW({
      live: false,
    });
    window.wow.init();
  }, []);
  return (
    <>
      <PageHead headTitle={headTitle} />
      <DataBg />

      <Header headerCls={headerCls} headerTop={headerTop} />
      <main>
        {breadcrumbTitle && (
          <Breadcrumb
            breadcrumbReturn={breadcrumbReturn}
            breadcrumbTitle={breadcrumbTitle}
          />
        )}
        {children}
      </main>
      <Footer />

      <BackToTop />
    </>
  );
}
