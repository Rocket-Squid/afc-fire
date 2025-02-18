import Layout from "@/components/layout/Layout";
import BrandAlt from "@/components/sections/BrandAlt";
import TeamMemberAccreditation from "@/components/sections/TeamMemberAccreditation";
import { fetchTeam, fetchMemberBySlug } from "../../lib/sanity";
import Link from "next/link";

export default function TeamPage({ member }) {
  const bios = member.bio
    ? member.bio.split("\n").filter((paragraph) => paragraph !== "")
    : null;

  return (
    member && (
      <>
        <Layout breadcrumbReturn="Team" breadcrumbTitle={member.name}>
          <div>
            <section className="team-details-area pt-70">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="team-details-thumb">
                      <img src={member.image} alt={member.name} />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="team-details-info">
                      <div className="info-content-top">
                        <h1 className="title">{member.name}</h1>
                        <span>{member.position}</span>
                      </div>

                      <hr />

                      <h4>Bio</h4>
                      {bios ? (
                        bios.map((bio, index) => (
                          <p key={index} className="info-one">
                            {bio}
                          </p>
                        ))
                      ) : (
                        <p className="info-one">Coming soon</p>
                      )}

                      <ul className="list-wrap team-info">
                        {member.experience && (
                          <li>
                            <span>
                              <i className="fas fa-toolbox" />
                              Experience:
                            </span>
                            {member.experience} years
                          </li>
                        )}
                        {member.location && (
                          <li>
                            <span>
                              <i className="fas fa-map-marker-alt" />
                              Location:
                            </span>
                            {member.location}
                          </li>
                        )}
                        {member.email && (
                          <li>
                            <span>
                              <i className="fas fa-envelope" />
                              E-mail:
                            </span>
                            <a href={`mailto:${member.email}`}>
                              {member.email}
                            </a>
                          </li>
                        )}
                        {member.phone && (
                          <li>
                            <span>
                              <i className="fas fa-phone-alt" />
                              Phone:
                            </span>
                            <a
                              href={`tel:${member.phone.replace(
                                /\s|-|\(|\)/g,
                                ""
                              )}`}
                            >
                              {member.phone}
                            </a>
                          </li>
                        )}
                      </ul>
                    </div>
                    {member.accreditations?.length > 0 && (
                      <>
                        <h4>
                          {member.name.split(" ")[0] || member.name}'s
                          Accreditations:
                        </h4>
                        <TeamMemberAccreditation
                          accreditations={member.accreditations}
                          fracsUrl={member.fracsUrl}
                          ifsmUrl={member.ifsmUrl}
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
  const teamMembers = await fetchTeam(10);

  const paths = teamMembers.map((member) => ({
    params: { slug: member.slug },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const member = await fetchMemberBySlug(params.slug);

  if (!member) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      member,
    },
    revalidate: 60,
  };
}
