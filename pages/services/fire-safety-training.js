import Layout from "@/components/layout/Layout";
import Brand3 from "@/components/sections/Brand3";
import ServicesSidebar from "@/components/sections/ServicesSidebar";
import Link from "next/link";

export default function FireSafetyTraining() {
  return (
    <>
      <Layout breadcrumbTitle="Fire Safety Training">
        <div>
          <section className="services-details-area pt-120">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-8">
                  <div className="services-details-wrap">
                    <div className="services-details-thumb">
                      <img
                        src="/assets/img/services/img_training_wide.jpg"
                        alt="Fire Safety Training"
                      />
                    </div>
                    <div className="services-details-content">
                      <h2 className="title">
                        Fire safety training - <i>Knowledge saves lives.</i>
                      </h2>
                      <p>
                        If you are responsible for employees or volunteers, it's
                        important that you provide fire safety training. Here's
                        what you need to know...
                      </p>
                      <br />

                      <h2 className="title">
                        Fire safety training for businesses and organisations
                      </h2>
                      <p>
                        If you are responsible for a business or organisation,
                        it's important that you provide fire safety training as
                        part of your normal training and induction process.
                      </p>
                      <br />

                      <div className="benefits-content">
                        <h2 className="title">
                          Why provide fire safety training?
                        </h2>
                        <ul>
                          <li>It saves lives.</li>
                          <li>It's the law.</li>
                          <li>
                            Prevention is the best form of firefighting, and
                            training can stop fires happening in the first
                            place.
                          </li>
                          <li>
                            In the event of a fire, it will keep your people
                            safer, and may reduce damage to your building.
                          </li>
                        </ul>
                        <br />

                        <h2 className="title">Did you know?</h2>
                        <p>
                          Employers are{" "}
                          <Link
                            href="https://www.london-fire.gov.uk/safety/the-workplace/fire-safety-law-explained/"
                            target="_blank"
                          >
                            legally required by law
                          </Link>{" "}
                          (The Regulatory Reform (Fire Safety) Order 2005) to
                          provide information, instruction and training to
                          employees about fire precautions in the workplace.
                        </p>

                        <p>
                          Having a designated fire warden at work is an
                          important part of fire safety. The fire warden works
                          together with the employer to ensure that fire safety
                          measures and evacuation procedures are in place and
                          effective.
                        </p>

                        <p>
                          This course will provide you with the necessary
                          theoretical training required to be a qualified fire
                          warden. It will educate you about what your legal
                          duties are, will provide you with an understanding of
                          fire, familiarise you with fire hazards and fire
                          safety arrangements, and detail what your emergency
                          evacuation procedures should entail. The information
                          in the course will enable you to take responsibility
                          for fire safety in your workplace and protect
                          everyone’s wellbeing.
                        </p>

                        <h2 className="subtitle">
                          By the end of this Fire Warden Training course, you
                          will understand:
                        </h2>

                        <ul className="list-wrap">
                          <li>
                            <i className="fas fa-check-circle" /> The main laws
                            for workplace fire safety
                          </li>
                          <li>
                            <i className="fas fa-check-circle" /> Your role as a
                            fire warden
                          </li>
                          <li>
                            <i className="fas fa-check-circle" /> The different
                            categories of fire
                          </li>
                          <li>
                            <i className="fas fa-check-circle" /> How fires may
                            start and spread in a workplace
                          </li>
                          <li>
                            <i className="fas fa-check-circle" /> What is
                            involved in a fire risk assessment
                          </li>
                          <li>
                            <i className="fas fa-check-circle" /> Common causes
                            of fires in workplaces
                          </li>
                          <li>
                            <i className="fas fa-check-circle" /> Control
                            measures to prevent or minimise fire risks
                          </li>
                          <li>
                            <i className="fas fa-check-circle" /> The different
                            types of fire extinguishers and their uses
                          </li>
                          <li>
                            <i className="fas fa-check-circle" /> Fire
                            detection, fire warning, and fire equipment
                          </li>
                          <li>
                            <i className="fas fa-check-circle" /> Requirements
                            for fire plans
                          </li>
                          <li>
                            <i className="fas fa-check-circle" /> What your
                            specific role is during emergency evacuation
                            procedures
                          </li>
                          <li>
                            <i className="fas fa-check-circle" /> Fire safety
                            measures for people with vulnerabilities and
                            disabilities
                          </li>
                          <li>
                            <i className="fas fa-check-circle" /> The purpose of
                            personal emergency evacuation plans
                          </li>
                          <li>
                            <i className="fas fa-check-circle" /> How to carry
                            out fire drills
                          </li>
                        </ul>
                      </div>
                      <br />

                      <hr />
                      <h2 className="title-two">
                        We Hope You Find What You are Looking for
                      </h2>
                      <p>
                        To book your Fire Safety Training with{" "}
                        <strong class="red">AFC Fire & Security</strong>, simply
                        call <a href="tel:02031434754">0203-143-4754</a>, or{" "}
                        <a href="tel:+447771366942">0777-1366-942</a>, or fill
                        in the Contact Form and leave the rest to us!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6">
                  <ServicesSidebar />
                </div>
              </div>
            </div>
          </section>
          {/* services-details-area-end */}
          {/* brand-area */}
          <Brand3 />
        </div>
      </Layout>
    </>
  );
}
