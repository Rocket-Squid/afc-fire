import Layout from "@/components/layout/Layout";
import { fetchTeam } from "../lib/airtable";
import TeamList from "@/components/sections/TeamList";

export default function Team({ teamMembers }) {
  return (
    <>
      <Layout breadcrumbTitle="Team">
        <TeamList teamMembers={teamMembers} />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  // Fetch team members from the "Team Info" table
  const teamMembers = await fetchTeam("Team Info");
  return {
    props: {
      teamMembers,
    },
    revalidate: 10, // Optionally, use ISR to refresh the data
  };
}
