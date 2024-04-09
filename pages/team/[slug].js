import Layout from "@/components/layout/Layout";
import Brand3 from "@/components/sections/Brand3";
import { fetchMemberBySlug, fetchTeam } from "@/lib/airtable";
import Link from "next/link";

export default function TeamPage({ teamMember }) {
  console.log("🚀 ~ TeamPage ~ teamMember.bio:", teamMember.bio);
  const bios = teamMember.bio
    ? teamMember.bio.split("\n").filter((paragraph) => paragraph !== "")
    : null;
  console.log("🚀 ~ TeamPage ~ bios:", bios);
  return (
    teamMember && (
      <>
        <Layout breadcrumbReturn="Team" breadcrumbTitle={teamMember.name}>
          <div>
            <section className="team-details-area pt-70">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="team-details-thumb">
                      <img src={teamMember.image} alt={teamMember.name} />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="team-details-info">
                      <div className="info-content-top">
                        <h1 className="title">{teamMember.name}</h1>
                        <span>{teamMember.position}</span>
                      </div>

                      <hr />

                      <h4>Bio</h4>
                      {bios ? (
                        bios.map((bio) => <p className="info-one">{bio}</p>)
                      ) : (
                        <p className="info-one">Coming soon</p>
                      )}

                      <ul className="list-wrap team-info">
                        {teamMember.experience && (
                          <li>
                            <span>
                              <i className="fas fa-toolbox" />
                              Experience:
                            </span>
                            {teamMember.experience} years
                          </li>
                        )}
                        {teamMember.location && (
                          <li>
                            <span>
                              <i className="fas fa-map-marker-alt" />
                              Location:
                            </span>
                            {teamMember.location}
                          </li>
                        )}
                        {teamMember.email && (
                          <li>
                            <span>
                              <i className="fas fa-envelope" />
                              E-mail:
                            </span>
                            <a href={`mailto:${teamMember.email}`}>
                              {teamMember.email}
                            </a>
                          </li>
                        )}
                        {teamMember.phone && (
                          <li>
                            <span>
                              <i className="fas fa-phone-alt" />
                              Phone:
                            </span>
                            <a
                              href={`tel:${teamMember.phone.replace(
                                /\s|-|\(|\)/g,
                                ""
                              )}`}
                            >
                              {teamMember.phone}
                            </a>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </Layout>
      </>
    )
  );
}

export async function getStaticPaths() {
  // Example function to fetch slugs from Airtable
  const teamMembers = await fetchTeam("Team Info");
  const paths = teamMembers.map((member) => ({
    params: { slug: member.slug },
  }));

  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  // Example function to fetch a single team member by slug
  const teamMember = await fetchMemberBySlug(params.slug);

  // If no data was found, return a 404 status
  if (!teamMember) {
    console.log("Not found");
    return { notFound: true };
  }

  return { props: { teamMember } };
}
