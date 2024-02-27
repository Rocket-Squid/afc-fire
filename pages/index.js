import { fetchTeam } from "@/lib/airtable";

import Layout from "@/components/layout/Layout";
import Banner1 from "@/components/sections/Banner1";
import About1 from "@/components/sections/About1";
import Services1 from "@/components/sections/Services1";
import Team1 from "@/components/sections/Team1";
import Counter1 from "@/components/sections/Counter1";
import Testimonial1 from "@/components/sections/Testimonial1";
import Faq1 from "@/components/sections/Faq1";
import TeamList from "@/components/sections/TeamList";

export default function Home({ teamMembers }) {
  return (
    <>
      <Layout headerCls="transparent-header">
        <Banner1 />
        <About1 />
        <Services1 />
        <Team1 />
        <TeamList teamMembers={teamMembers} />
        <Counter1 />
        <Testimonial1 />
        <Faq1 />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const teamMembers = await fetchTeam("Team Info");
  return {
    props: {
      teamMembers,
    },
    revalidate: 10,
  };
}
