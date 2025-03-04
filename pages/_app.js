import Preloader from "@/components/elements/Preloader";
import { useEffect, useState } from "react";
import { DefaultSeo } from "next-seo";
import { defaultSEO } from "@/lib/seo";
import CanonicalUrl from "@/components/elements/CanonicalUrl";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../public/assets/css/bootstrap.min.css";
import "../public/assets/css/animate.min.css";
import "../public/assets/css/magnific-popup.css";
import "../public/assets/css/fontawesome-all.min.css";
import "../public/assets/css/odometer.css";
import "../public/assets/css/tg-cursor.css";
import "../public/assets/css/default.css";
import "../public/assets/css/jarallax.css";
import "../public/assets/css/style.css";
import "../public/assets/css/responsive.css";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      <DefaultSeo {...defaultSEO} />
      <CanonicalUrl>
        {!loading ? <Component {...pageProps} /> : <Preloader />}
      </CanonicalUrl>
    </>
  );
}

export default MyApp;
