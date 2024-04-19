import Layout from "@/components/layout/Layout";
import Brand3 from "@/components/sections/Brand3";
import TeamMemberAccreditation from "@/components/sections/TeamMemberAccreditation";
import { fetchMemberBySlug, fetchTeam } from "@/lib/airtable";
import Link from "next/link";

export default function TeamPage({ teamMember }) {
  const bios = teamMember.bio
    ? teamMember.bio.split("\n").filter((paragraph) => paragraph !== "")
    : null;

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
                    {teamMember.accreditation &&
                      teamMember.accreditation.length > 0 && (
                        <>
                          <h4>
                            {teamMember.name.split(" ")[0] || teamMember.name}'s
                            Accreditation:
                          </h4>
                          <TeamMemberAccreditation
                            accreditation={teamMember.accreditation}
                          />
                        </>
                      )}
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
  const teamMembers = await fetchTeam("Team Info");
  const paths = teamMembers.map((member) => ({
    params: { slug: member.slug },
  }));

  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const teamMember = await fetchMemberBySlug(params.slug);

  if (!teamMember) {
    console.log("Not found");
    return { notFound: true };
  }

  return { props: { teamMember } };
}
