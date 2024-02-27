import Layout from "@/components/layout/Layout";
import Brand3 from "@/components/sections/Brand3";
import { fetchMemberBySlug, fetchTeam } from "@/lib/airtable";
import Link from "next/link";

export default function TeamPage({ teamMember }) {
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
                      <p className="info-one">{teamMember.bio}</p>

                      <ul className="list-wrap team-info">
                        <li>
                          <span>
                            <i className="fas fa-toolbox" />
                            Experience:
                          </span>
                          {teamMember.experience}
                        </li>
                        <li>
                          <span>
                            <i className="fas fa-envelope" />
                            E-mail:
                          </span>
                          {teamMember.email}
                        </li>
                        <li>
                          <span>
                            <i className="fas fa-phone-alt" />
                            Phone:
                          </span>
                          {teamMember.phone}
                        </li>
                        <li>
                          <span>
                            <i className="fas fa-map-marker-alt" />
                            Location:
                          </span>
                          {teamMember.location}
                        </li>
                      </ul>
                      {/* <div className="team-details-social">
                        <h6 className="title">Follow Me:</h6>
                        <ul className="list-wrap">
                          {teamMember.socialLinks.map((link) => (
                            <li key={link.platform}>
                              <Link href={link.url}>
                                <i className={`fab fa-${link.platform}`} />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <Brand3 />
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
