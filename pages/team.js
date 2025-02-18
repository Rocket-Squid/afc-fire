import Layout from "@/components/layout/Layout";
import { fetchTeam } from "../lib/sanity";
import TeamList from "@/components/sections/TeamList";
import TeamValues from "@/components/sections/TeamValues";

export default function Team({ teamMembers }) {
  return (
    <>
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
