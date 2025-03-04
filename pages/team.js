import Layout from "@/components/layout/Layout";
import { fetchTeam } from "@/lib/sanity";
import TeamList from "@/components/sections/TeamList";
import TeamValues from "@/components/sections/TeamValues";
import { NextSeo } from "next-seo";
import { getPageSEO } from "@/lib/seo";
import { getPageSchema } from "@/lib/schema";

export default function Team({ teamMembers }) {
  const seo = getPageSEO({
    title: "Our Team",
    description:
      "Meet the experienced team at AFC Fire. Our fire safety specialists are dedicated to providing top-quality fire risk assessments and safety services across the UK.",
    openGraph: {
      images: [
        {
          url: "/assets/img/team/team_bg.jpg",
          width: 1200,
          height: 630,
          alt: "AFC Fire - Our Team of Fire Safety Specialists",
        },
      ],
    },
    additionalMetaTags: [
      {
        name: "keywords",
        content:
          "AFC Fire team, fire safety specialists, fire risk assessors, fire safety experts",
      },
    ],
  });

  const schemas = getPageSchema("team");

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
      <Layout breadcrumbTitle="Team">
        <TeamList teamMembers={teamMembers} />
        <TeamValues />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  // Fetch team members from Sanity
  const teamMembers = await fetchTeam(10);

  return {
    props: {
      teamMembers,
    },
    revalidate: 60,
  };
}
