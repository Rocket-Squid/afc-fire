import Head from "next/head";

const PageHead = ({ headTitle }) => {
  return (
    <>
      <Head>
        <title>{headTitle ? headTitle : "AFC Fire"}</title>
      </Head>
    </>
  );
};

export default PageHead;
