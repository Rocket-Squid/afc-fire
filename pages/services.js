import Layout from "@/components/layout/Layout";
import Services from "@/components/sections/Services";
import { NextSeo } from "next-seo";
import { getPageSEO } from "@/lib/seo";
import { getPageSchema } from "@/lib/schema";

export default function Service() {
  const seo = getPageSEO({
    title: "Our Services",
    description:
      "AFC Fire offers comprehensive fire safety services including fire risk assessments, fire safety training, and fire safety equipment maintenance to ensure your business is fully compliant with regulations.",
    openGraph: {
      images: [
        {
          url: "/assets/img/services/services-bg.jpg",
          width: 1200,
          height: 630,
          alt: "AFC Fire - Professional Fire Safety Services",
        },
      ],
    },
  });

  const schemas = getPageSchema("services");

  return (
    <>
      <NextSeo {...seo} />
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <Layout breadcrumbTitle="Services">
        <Services />
      </Layout>
    </>
  );
}
