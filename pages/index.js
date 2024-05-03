import { fetchTeam } from "@/lib/airtable";

import Layout from "@/components/layout/Layout";
import Banner from "@/components/sections/Banner";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Counter from "@/components/sections/Counter";
import Testimonial from "@/components/sections/Testimonial";
import Faq from "@/components/sections/Faq";
import TeamList from "@/components/sections/TeamList";

export default function Home({ teamMembers }) {
  return (
    <>
      <Layout headerCls="transparent-header">
        <Banner />
        <About />
        <Services />
        <TeamList teamMembers={teamMembers} />
        <Counter />
        <Testimonial />
        <Faq />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const teamMembers = await fetchTeam("Team Info", 4);
  return {
    props: {
      teamMembers,
    },
    revalidate: 10,
  };
}
