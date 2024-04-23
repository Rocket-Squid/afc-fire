import React from "react";
import TeamCard from "./TeamCard";

export default function TeamList({ teamMembers }) {
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
            {teamMembers.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
