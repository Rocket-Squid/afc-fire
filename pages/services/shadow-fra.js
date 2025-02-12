import Layout from "@/components/layout/Layout";
import BrandAlt from "@/components/sections/BrandAlt";
import ServicesSidebar from "@/components/sections/ServicesSidebar";

export default function ShadowFRA() {
  return (
    <>
      <Layout breadcrumbReturn="Services" breadcrumbTitle="Shadow Programme">
        <div>
          <section className="services-details-area pt-120">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-8">
                  <div className="services-details-wrap">
                    <div className="services-details-thumb">
                      <img
                        src="/assets/img/services/img_shadow_fra_wide.jpg"
                        alt="Shadow Fire Risk Assessment"
                      />
                    </div>
                    <div className="services-details-content">
                      <h2 className="title">
                        Shadow an Experienced Fire Risk Assessor - Learn from
                        the Best
                      </h2>

                      <h3 className="subtitle">
                        Gain Hands-On Experience in Fire Risk Assessment
                      </h3>
                      <p>
                        Are you looking to start a career in fire risk
                        assessment? Do you want real-world experience alongside
                        industry experts? At{" "}
                        <strong className="red">AFC Fire</strong>, we offer a
                        Shadowing Programme where aspiring fire risk assessors
                        can work closely with experienced professionals, gaining
                        the essential skills and confidence needed to excel in
                        this field.
                      </p>

                      <hr />

                      <h2 className="title">
                        Why Shadow a Fire Risk Assessor?
                      </h2>
                      <p>
                        Fire safety is a critical profession, and learning from
                        experienced assessors is one of the best ways to develop
                        your expertise. By shadowing our qualified Fire Risk
                        Assessors, you will:
                      </p>
                      <ul>
                        <li>
                          Observe live fire risk assessments in a variety of
                          settings (residential, commercial, and industrial)
                        </li>
                        <li>
                          Learn how to identify hazards and evaluate fire safety
                          compliance
                        </li>
                        <li>
                          Understand how professional assessors document and
                          report their findings
                        </li>
                        <li>
                          Get hands-on practice in note-taking, photographic
                          evidence collection, and hazard identification
                        </li>
                        <li>
                          Develop essential skills to prepare for a full-time
                          role in fire safety
                        </li>
                      </ul>

                      <hr />

                      <h2 className="title">What You'll Experience</h2>
                      <ul>
                        <li>
                          <strong>Site Visits & Practical Training</strong> -
                          Join our assessors on real fire risk assessments and
                          gain firsthand insight into inspection processes.
                        </li>
                        <li>
                          <strong>Guided Report Writing</strong> - Learn how to
                          structure professional fire risk assessment reports
                          under the guidance of senior professionals.
                        </li>
                        <li>
                          <strong>Regulatory Knowledge</strong> - Understand key
                          fire safety legislation, including the Regulatory
                          Reform (Fire Safety) Order 2005.
                        </li>
                        <li>
                          <strong>Professional Development</strong> - Receive
                          mentorship and feedback to help you progress towards
                          certification.
                        </li>
                      </ul>

                      <hr />

                      <h2 className="title">Who Can Apply?</h2>
                      <p>This opportunity is ideal for:</p>
                      <ul className="list-wrap">
                        <li>
                          <i className="fas fa-check-circle" /> Aspiring fire
                          risk assessors looking for practical experience
                        </li>
                        <li>
                          <i className="fas fa-check-circle" /> Students or
                          trainees in fire safety, health & safety, or risk
                          management
                        </li>
                        <li>
                          <i className="fas fa-check-circle" /> Those
                          considering a career in fire risk assessment and
                          wanting to explore the field firsthand
                        </li>
                      </ul>

                      <hr />

                      <h2 className="title">A Pathway to Certification</h2>
                      <p>
                        Our shadowing experience aligns with the{" "}
                        <strong className="red">AFC Fire</strong> Training
                        Programme, designed to prepare individuals for
                        certification in fire risk assessment. Many of our
                        participants go on to complete professional
                        qualifications such as:
                      </p>
                      <ul>
                        <li>
                          NEBOSH Level 3 in Fire Risk Assessment (or Equivalent)
                        </li>
                        <li>
                          Vraxis Level 4 Fire Risk Assessment Certification
                        </li>
                        <li>Compartmentation/Fire Stopping Training</li>
                        <li>Vraxis Level 3 Fire Door Certification</li>
                      </ul>

                      <hr />

                      <h2 className="title">Start Your Journey Today!</h2>
                      <p>
                        If you are passionate about fire safety and eager to
                        learn from industry professionals, enquire now to shadow
                        an experienced Fire Risk Assessor.
                      </p>
                      <p>
                        Contact us today to secure your place and take the first
                        step towards a rewarding career in fire risk assessment.
                      </p>

                      <hr />
                      <h2 className="title-two">
                        We Hope You Find What You are Looking for
                      </h2>
                      <p>
                        To book your Shadow Programme experience with{" "}
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
          <BrandAlt />
        </div>
      </Layout>
    </>
  );
}
