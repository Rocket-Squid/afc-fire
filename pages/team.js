import Layout from "@/components/layout/Layout";
import { fetchTeam } from "../lib/airtable";
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
  // Fetch team members from the "Team Info" table
  const teamMembers = (await fetchTeam("Team Info", 10)).filter(
    (member) => member.status == "Live"
  );
  return {
    props: {
      teamMembers,
    },
    revalidate: 60,
  };
}
