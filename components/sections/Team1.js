import Link from "next/link";
import TeamCard from "./TeamCard";

export default function Team1() {
  return (
    <>
      <section className="team-area pt-115 pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-60 tg-heading-subheading animation-style3">
                <span className="sub-title tg-element-title">Who We Are</span>
                <h2 className="title tg-element-title">
                  Our Professional Team
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <TeamCard
              name="Alex Aiston"
              role="Operations Director"
              imageSrc="/assets/img/team/headshot_alex.jpeg"
              profileUrl="/team-details"
            />
            <TeamCard
              name="Mark Aiston"
              role="Managing Director"
              imageSrc="/assets/img/team/headshot_mark.jpeg"
              profileUrl="/team-details"
            />
            <TeamCard
              name="Joe Chandler"
              role="Fire Risk Assessor"
              imageSrc="/assets/img/team/headshot_joe.jpeg"
              profileUrl="/team-details"
            />
            <TeamCard
              name="Rob Tyler"
              role="Fire Extinguisher Specialist"
              imageSrc="/assets/img/team/headshot_rob.jpeg"
              profileUrl="/team-details"
            />
          </div>
        </div>
      </section>
    </>
  );
}
