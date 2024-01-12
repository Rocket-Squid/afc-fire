import Layout from "@/components/layout/Layout";
import Brand3 from "@/components/sections/Brand3";
import ServicesSidebar from "@/components/sections/ServicesSidebar";

export default function FireRiskAssessments() {
  return (
    <>
      <Layout breadcrumbTitle="Fire Risk Assessments">
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
                      <h2 className="title">
                        Fire Risk Assessments are a legal requirement
                      </h2>
                      <p>
                        A <strong>Fire Risk Assessment</strong> is a process
                        involving the systematic evaluation of the factors that
                        determine the hazard from fire, the likelihood that
                        there will be a fire, and the consequences if one were
                        to occur.
                      </p>
                      <br />
                      <p>
                        <strong>Fire Risk Assessments</strong> are a legal
                        requirement for <strong>ALL</strong> UK businesses,
                        regardless of size. However, if you employ five or more
                        people it must be documented and available for
                        inspection. Failure to carry out a{" "}
                        <strong>Fire Risk Assessment</strong> can lead to heavy
                        fines, and, in the worst cases, imprisonment.
                      </p>

                      <hr />

                      <div className="service-benefits-wrap">
                        <div className="row">
                          <div className="benefits-content">
                            <h2 className="title">
                              Legislation requires that all business owners
                              must:
                            </h2>

                            <ul className="list-wrap">
                              <li>
                                <i className="fas fa-check-circle" />
                                Identify the fire hazards within the business
                                premises
                              </li>
                              <li>
                                <i className="fas fa-check-circle" />
                                Identify people at risk in and around the
                                business premises
                              </li>
                              <li>
                                <i className="fas fa-check-circle" />
                                Evaluate, remove or reduce the risks
                              </li>
                              <li>
                                <i className="fas fa-check-circle" />
                                Record the findings, prepare an emergency plan,
                                and provide fire safety training
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
