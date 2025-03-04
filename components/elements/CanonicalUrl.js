import Head from "next/head";
import { useRouter } from "next/router";

const CanonicalUrl = ({ children }) => {
  const router = useRouter();
  const domain = "https://afcfire.co.uk";
  const path = router.asPath;
  const canonicalUrl = `${domain}${path}`;

  return (
    <>
      <Head>
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      {children}
    </>
  );
};

export default CanonicalUrl;
