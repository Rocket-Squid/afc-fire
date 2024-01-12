import Layout from "@/components/layout/Layout";
import Brand3 from "@/components/sections/Brand3";
import ServicesSidebar from "@/components/sections/ServicesSidebar";

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
                        Comprehensive Fire Safety Training Courses
                      </h2>
                      <p>
                        <strong class="red">AFC Fire’s</strong> qualified
                        instructors, affiliated with the Institute of Fire
                        Safety Managers, the Institute of Fire Engineers, and
                        the National Association of Fire Door Inspectors, offer
                        comprehensive Fire Safety Training Courses at your
                        premises, meeting statutory legal & insurance
                        obligations under the Regulatory Reform (Fire Safety)
                        Order 2005.
                      </p>
                      <br />
                      <p>
                        <strong>
                          Prices start at just £399.00 (+VAT) per certified
                          course
                        </strong>
                        , for up to 10 people. For larger groups or multiple
                        locations, please call{" "}
                        <a href="tel:02031434754">0203-143-4754</a> or{" "}
                        <a href="tel:+447771366942">0777-1366-942</a>.
                      </p>
                      <br />
                      <p>
                        Our trainers are totally self-contained, bringing along
                        all their own presentation equipment and fire
                        extinguishers to your venue. The course content is
                        punchy, fast paced and entertaining, designed to hold
                        the candidates attention, and covers the following:
                      </p>
                      <br />

                      <div className="benefits-content">
                        <h2 className="title">Fire Awareness</h2>
                        <ul className="list-wrap">
                          <li>
                            <i className="fas fa-check-circle" /> Fire
                            prevention and the main causes of fire
                          </li>
                          <li>
                            <i className="fas fa-check-circle" /> Fire, heat,
                            and smoke spread
                          </li>
                          <li>
                            <i className="fas fa-check-circle" /> The
                            organisation's emergency plan
                          </li>
                          <li>
                            <i className="fas fa-check-circle" /> Action to take
                            in the event of fire
                          </li>
                          <li>
                            <i className="fas fa-check-circle" /> Video fire
                            presentation demonstrating fire spread
                          </li>
                          <li>
                            <i className="fas fa-check-circle" /> Fire Fighting
                            Equipment
                          </li>
                          <li>
                            <i className="fas fa-check-circle" /> Fighting
                            different kinds of fire
                          </li>
                          <li>
                            <i className="fas fa-check-circle" /> How to operate
                            modern fire extinguishers
                          </li>
                          <li>
                            <i className="fas fa-check-circle" /> Fire blanket
                            demonstration
                          </li>
                          <li>
                            <i className="fas fa-check-circle" /> Practical use
                            of our extinguishers
                          </li>
                        </ul>
                      </div>
                      <br />
                      <div className="benefits-content">
                        <h2 className="title">
                          The Responsibility of the Fire Warden
                        </h2>
                        <ul className="list-wrap">
                          <li>
                            <i className="fas fa-check-circle" /> The role of
                            the fire Warden
                          </li>
                          <li>
                            <i className="fas fa-check-circle" /> Fire Warden
                            duties
                          </li>
                          <li>
                            <i className="fas fa-check-circle" /> Fire
                            evacuation drills
                          </li>
                          <li>
                            <i className="fas fa-check-circle" /> Assembly point
                            ‘management’
                          </li>
                        </ul>
                      </div>

                      <hr />

                      <p>
                        The total cost for sessions is £399.00 + vat for the
                        Fire Safety Awareness, course, and to add the additional
                        module for Fire Wardens is only an extra £100.00 + vat.
                      </p>
                      <br />
                      <p>
                        We do not charge extra for fire extinguisher use during
                        the practical use part of the sessions. Please note a
                        deposit of 50% of the total cost is payable in advance
                        to secure the booking.
                      </p>
                      <br />
                      <p>
                        Please ensure that an area of approximately 25 sq m is
                        provided for the practical session. Please also be aware
                        that there will be an element of mess from the fire
                        extinguisher use.
                      </p>
                      <br />
                      <p>
                        All necessary literature and course documentation is
                        provided. A certificate of attendance & competence will
                        be issued to each individual, after successful
                        completion of the course.
                      </p>
                      <br />

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
                        To book a Fire Risk Assessment with{" "}
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
