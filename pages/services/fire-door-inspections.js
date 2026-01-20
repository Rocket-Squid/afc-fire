import Layout from "@/components/layout/Layout";
import BrandAlt from "@/components/sections/BrandAlt";
import ServicesSidebar from "@/components/sections/ServicesSidebar";

export default function FireDoorInspections() {
  return (
    <>
      <Layout
        breadcrumbReturn="Services"
        breadcrumbTitle="Fire Door Inspections"
      >
        <div>
          <section className="services-details-area pt-120">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-8">
                  <div className="services-details-wrap">
                    <div className="services-details-thumb">
                      <img
                        src="/assets/img/services/img_door_wide.jpg"
                        alt="Fire Door Inspections"
                      />
                    </div>
                    <div className="services-details-content">
                      <h2 className="title">Essential Fire Door Inspections</h2>

                      <p>
                        Buildings are compartmentalised to delay the spread of
                        fire from one area to another. These compartments are
                        usually linked by <strong>fire doors</strong>, which
                        allows the flow of traffic around the building.{" "}
                        <strong>Fire doors</strong> have two important functions
                        in a fire:
                      </p>
                      <ul>
                        <li>
                          when closed they form a barrier to stop the spread of
                          fire
                        </li>
                        <li>when opened they provide a means of escape</li>
                      </ul>
                      <p>
                        A well designed timber <strong>fire door</strong> will
                        delay the spread of fire and smoke without causing too
                        much hindrance to the movement of people and goods.
                      </p>
                      <hr />
                      <div className="row">
                        <p>
                          Every <strong>fire door</strong> is therefore required
                          to act as a barrier to the passage of smoke and/or
                          fire to varying degrees, depending upon its location
                          in a building, and the particular fire hazards
                          associated with that building.
                          <br />
                        </p>
                        <p>
                          The main categories of <strong>fire doors</strong> are
                          FD30 and FD60, which offer 30 and 60 minutes fire
                          protection, respectively.
                        </p>
                        <p>
                          <strong>Fire doors</strong> are engineered products
                          that provide life and property saving functions in the
                          event of fire. It is important that they are regularly
                          inspected and maintained to permit them to perform at
                          their best on the one and only occasion when they are
                          called upon to do so.
                        </p>
                        <p>
                          <strong>
                            In fact, it is a statutory requirement that a full
                            inspection and survey is carried out on your fire
                            doors to ensure compliance!
                          </strong>
                        </p>
                        <p>
                          Depending on the type of building you are responsible
                          for and who occupies it will influence the frequency
                          of <strong>fire door</strong> inspections required.
                          Some buildings, such as schools and hospitals, are
                          subject to heavy traffic and the doors have a hard
                          time often being subject to repeated misuse. BS9999
                          recommends six monthly inspections and includes
                          guidance on some of the main inspection criteria, but
                          remember that <strong>you</strong> are responsible for
                          ensuring an adequate inspection and maintenance
                          routine is in place.
                        </p>
                      </div>

                      <hr />
                      <p>
                        A <strong>Fire door</strong> inspection from{" "}
                        <strong className="red">AFC Fire & Security Ltd</strong>{" "}
                        will provide you with confidence that you are compliant,
                        by delivering the following:
                      </p>
                      <ul>
                        <li>
                          <strong className="red">AFC Fire</strong> have full
                          Public & Employers Liability Insurance, and
                          Professional Indemnity Insurance to give you added
                          peace of mind
                        </li>
                        <li>
                          <strong className="red">AFC Fire</strong> carry our
                          all fire door inspections in accordance with statutory
                          BS & EN requirements
                        </li>
                        <li>
                          <strong className="red">AFC Fire</strong> hold
                          industry recognised certification
                        </li>
                        <li>
                          <strong className="red">AFC Fire</strong> have current
                          Disclosure and Barring Service (DBS) certification
                        </li>
                        <li>
                          <strong className="red">AFC Fire</strong> are members
                          of industry leading bodies the Institute of Fire
                          Safety Managers
                        </li>
                      </ul>
                      <hr />

                      <h2 className="title-two">
                        We Hope You Find What You are Looking for
                      </h2>
                      <p>
                        Once a qualified and highly trained{" "}
                        <strong className="red">AFC</strong> assessor has
                        completed your assessment, you will receive a
                        comprehensive written report, which details all
                        findings. But, most importantly, it will highlight the{" "}
                        <strong>'Significant Findings'</strong>, making it
                        really simple to understand what and where the
                        deficiencies are. The report also provides you with step
                        by step guidance on what you need to do to comply with
                        current legislation.
                      </p>
                      <p>
                        To book a <strong>Fire Door Survey</strong> with{" "}
                        <strong className="red">AFC Fire & Security</strong>,
                        simply call <a href="tel:02031434754">0203-143-4754</a>,
                        or <a href="tel:+447771366942">0777-1366-942</a>, or
                        click on the Get In Touch button below, and leave the
                        rest to us!
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
          <BrandAlt />
        </div>
      </Layout>
    </>
  );
}
