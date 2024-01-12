import Layout from "@/components/layout/Layout";
import Brand3 from "@/components/sections/Brand3";
import ServicesSidebar from "@/components/sections/ServicesSidebar";

export default function PassiveFireProtection() {
  return (
    <>
      <Layout breadcrumbTitle="Passive Fire Protection">
        <div>
          <section className="services-details-area pt-120">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-8">
                  <div className="services-details-wrap">
                    <div className="services-details-thumb">
                      <img
                        src="/assets/img/services/img_passive_wide.jpg"
                        alt=""
                      />
                    </div>
                    <div className="services-details-content">
                      <h2 className="title">
                        Safeguarding with Passive Fire Protection
                      </h2>

                      <p>
                        Passive Fire Protection <strong>(PFP)</strong> is a term
                        used to describe the parts of a building or structure
                        that provide a barrier to fire, containing and slowing
                        the rate at which it spreads. This is achieved by
                        creating fire-resistant walls, floors and doors.
                      </p>
                      <p>
                        By creating a fire-resistant compartment between rooms
                        and floors, <strong>PFP</strong> greatly slows the
                        spread of the fire from the room where it originated. As
                        a result,{" "}
                        <strong class="red">
                          the building's occupants are given more time to
                          evacuate the building and reach a place of safety.
                        </strong>{" "}
                        In addition, the amount of damage that the building
                        sustains is dramatically reduced.
                      </p>
                      <p>
                        The reason that <strong>PFP</strong> is given its name
                        is that it does not typically require any motion, or to
                        be activated by electronics. There are some exceptions
                        to this, however, such as AOV's, fire door closers, and
                        fire dampers.
                      </p>
                      <p>
                        <strong>PFP</strong> is an integral part of the
                        components of structural fire protection and fire safety
                        in a building. <strong>PFP</strong> systems must comply
                        with BS 476 & BS EN 1364 standards, as well as building
                        regulations.
                      </p>
                      <p>
                        The most important goal of <strong>PFP</strong> is
                        identical to that of all fire protection:{" "}
                        <strong class="red">life safety</strong>. This is mainly
                        accomplished by maintaining structural integrity for a
                        given length of time during the life of a fire (normally
                        30, 60, or 90 minutes) and limiting the spread of fire
                        and the effects thereof (e.g. flames, heat, and smoke).
                        Property protection and continuity of operations are
                        usually secondary objectives.
                      </p>
                      <p>
                        <strong class="red">AFC Fire</strong> can provide you
                        with a comprehensive survey to ensure that your passive
                        fire protection has not been compromised.
                      </p>

                      <p>
                        Following the survey, you will receive a full report,
                        with photos, detailing any issues noted during the
                        survey.
                      </p>

                      <hr />

                      <div className="service-benefits-wrap">
                        <div className="row">
                          <div className="benefits-content">
                            <h2 className="title">
                              Some of the main areas our detailed surveys cover
                              are:
                            </h2>

                            <ul className="list-wrap">
                              <li>
                                <i className="fas fa-check-circle" />
                                Fire stopping of mechanical and electrical
                                services
                              </li>
                              <li>
                                <i className="fas fa-check-circle" /> Fire
                                curtains
                              </li>
                              <li>
                                <i className="fas fa-check-circle" /> The use of
                                Expanding Fire Stopping Foams
                              </li>
                              <li>
                                <i className="fas fa-check-circle" /> Riser
                                cupboards
                              </li>
                              <li>
                                <i className="fas fa-check-circle" /> Escape
                                routes and stairways
                              </li>
                              <li>
                                <i className="fas fa-check-circle" /> Roof voids
                              </li>
                              <li>
                                <i className="fas fa-check-circle" /> Floor and
                                wall coatings
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <hr />

                      <h2 className="title-two">
                        We Hope You Find What You are Looking for
                      </h2>
                      <p>
                        Once a qualified and highly trained{" "}
                        <strong class="red">AFC</strong> assessor has completed
                        your assessment, you will receive a comprehensive
                        written report, which details all findings. But, most
                        importantly, it will highlight the{" "}
                        <strong>'Significant Findings'</strong>, making it
                        really simple to understand what and where the
                        deficiencies are. The report also provides you with step
                        by step guidance on what you need to do to comply with
                        current legislation.
                      </p>
                      <br />
                      <p>
                        To book a{" "}
                        <strong>Passive Fire Protection Survey</strong> with{" "}
                        <strong class="red">AFC Fire & Security</strong>, simply
                        call <a href="tel:02031434754">0203-143-4754</a>, or{" "}
                        <a href="tel:+447771366942">0777-1366-942</a>, or click
                        on the Get In Touch button below, and leave the rest to
                        us! And, for additional compliance, and peace of mind,{" "}
                        <strong>
                          ensure you request a NAFDI fire door inspection
                          certificate with your fire door inspection report.
                        </strong>
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
