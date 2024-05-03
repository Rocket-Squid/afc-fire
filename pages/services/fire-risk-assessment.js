import Layout from "@/components/layout/Layout";
import BrandAlt from "@/components/sections/BrandAlt";
import ServicesSidebar from "@/components/sections/ServicesSidebar";
import Link from "next/link";

export default function FireRiskAssessments() {
  return (
    <>
      <Layout
        breadcrumbReturn="Services"
        breadcrumbTitle="Fire Risk Assessments"
      >
        <div>
          <section className="services-details-area pt-120">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-8">
                  <div className="services-details-wrap">
                    <div className="services-details-thumb">
                      <img
                        src="/assets/img/services/img_risk_wide.jpg"
                        alt=""
                      />
                    </div>
                    <div className="services-details-content">
                      <h2 className="title">What is a Fire Risk Assessment?</h2>
                      <p>
                        A careful look at your premises and the people who use
                        them, from a fire prevention perspective. It's about
                        understanding the potential risks, then improving your
                        fire safety precautions to keep people safe.{" "}
                        <Link
                          href="https://www.london-fire.gov.uk/safety/the-workplace/fire-safety-law-explained/"
                          target="_blank"
                        >
                          Read about it on The LFB Website
                        </Link>
                      </p>
                      <br />
                      <h2 className="title">Why do it?</h2>
                      <p>
                        <strong>
                          A Fire Risk Assessment is a legal requirement
                        </strong>
                      </p>
                      <p>
                        If you are responsible for a building, for example an
                        employer, owner or occupier of premises that aren't a
                        'single private dwelling' (a private home), you need to
                        make sure a suitably competent person completes a Fire
                        Risk Assessment. It is your duty to identify fire risks
                        and hazards in your premises and take appropriate
                        action.
                      </p>
                      <p>
                        The <strong>Responsible Person</strong> must record all
                        findings from their fire risk assessment, regardless of
                        the size or purpose of the premises. This is a new
                        requirement, effective from 1 October 2023. Previously
                        this was only required for certain types of buildings.
                        Responsible Persons must also record their fire safety
                        arrangements.
                      </p>

                      <p>
                        Make sure you review your risk assessment regularly and
                        whenever significant changes have been made that would
                        have an impact on it. It's good business sense as well
                        as a legal requirement, often businesses don't recover
                        after a fire, and effective fire prevention starts with
                        properly understanding the risks.
                      </p>

                      <br />

                      <h3 className="title">Did you know?</h3>
                      <p>
                        If there's a fire and you haven't met your legal duties
                        to keep people safe, you could be fined and may even
                        spend time in prison.
                      </p>

                      <hr />

                      <div className="service-benefits-wrap">
                        <div className="row">
                          <div className="benefits-content">
                            <h2 className="title">
                              How to do a Fire Risk Assessment
                            </h2>

                            <p>Assessments are conducted in five key steps:</p>
                            <ul className="list-wrap">
                              <li>
                                <i className="fas fa-check-circle" />
                                Identify the fire hazards.
                              </li>
                              <li>
                                <i className="fas fa-check-circle" />
                                Identify people at risk.
                              </li>
                              <li>
                                <i className="fas fa-check-circle" />
                                Evaluate, remove or reduce the risks.
                              </li>
                              <li>
                                <i className="fas fa-check-circle" />
                                Record the findings, prepare an emergency plan,
                                and provide training
                              </li>
                              <li>
                                <i className="fas fa-check-circle" />
                                Review and update the fire risk assessment
                                regularly.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <hr />

                      <h2 className="title">Who checks it?</h2>
                      <p>
                        The Local Authority / The Fire Brigade - inspecting
                        premises is part of their duty to keep people safe from
                        fire.
                      </p>

                      <br />

                      <h2 className="title">
                        Who should do my Fire Risk Assessment?
                      </h2>
                      <p>
                        You can. The law states that the person carrying out the
                        Fire Risk Assessment must be competent to do so. If you
                        don't feel that is the case, or you would like a
                        professional to carry out the work, we are here to help.
                      </p>

                      <h3 className="subtitle">Large complex business</h3>
                      <p>
                        If your business is larger or more complex, contact an
                        expert to come and help. Our responsibilities lie in
                        making sure you've done an appropriate assessment - we
                        don't provide an assessment service. You'll need to find
                        a suitably qualified specialist, but there's a guide to
                        help you at the end of this page.
                      </p>
                      <h3 className="subtitle">SME or smaller organisations</h3>
                      <p>
                        If your business or organisation is relatively small and
                        you think your potential risks aren't complex, it is
                        possible to do it yourself. You can find a guides to
                        help you understand what's required here on the Gov.UK
                        website.
                      </p>
                      <h3 className="subtitle">Heritage buildings</h3>
                      <p>
                        If you're responsible for a museum, gallery or historic
                        building, it is strongly recommended that your fire risk
                        assessment is carried out by a Competent Person /
                        Assessor with an understanding of fire safety within
                        heritage buildings, as these buildings have particular
                        risks and limitations.
                      </p>

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
          <BrandAlt />
        </div>
      </Layout>
    </>
  );
}
