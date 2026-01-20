import { fetchTeam, fetchTeamCount } from "@/lib/sanity";
import { NextSeo } from "next-seo";
import { getPageSEO } from "@/lib/seo";
import { getPageSchema } from "@/lib/schema";

import Layout from "@/components/layout/Layout";
import Banner from "@/components/sections/Banner";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Counter from "@/components/sections/Counter";
import Testimonial from "@/components/sections/Testimonial";
import Faq from "@/components/sections/Faq";
import TeamList from "@/components/sections/TeamList";

export default function Home({ teamMembers, teamCount }) {
  const seo = getPageSEO({
    title: "Home",
    description:
      "AFC Fire provides professional fire safety services across the UK. Our expert team offers fire risk assessments, training, and equipment maintenance to keep your business safe and compliant.",
    openGraph: {
      images: [
        {
          url: "/assets/img/banner/banner.jpg",
          width: 1200,
          height: 630,
          alt: "AFC Fire - Professional Fire Safety Services",
        },
      ],
    },
  });

  const schemas = getPageSchema("home");

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
      <Layout headerCls="transparent-header">
        <Banner />
        <About />
        <Services />
        <TeamList teamMembers={teamMembers} />
        <Counter teamCount={teamCount} />
        <Testimonial />
        <Faq />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const [teamMembers, teamCount] = await Promise.all([
    fetchTeam(4),
    fetchTeamCount(),
  ]);

  return {
    props: {
      teamMembers,
      teamCount,
    },
    revalidate: 60,
  };
}
