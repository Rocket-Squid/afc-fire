import Layout from "@/components/layout/Layout";
import BrandAlt from "@/components/sections/BrandAlt";
import ServicesSidebar from "@/components/sections/ServicesSidebar";

export default function ExternalValidation() {
  return (
    <>
      <Layout breadcrumbReturn="Services" breadcrumbTitle="External Validation">
        <div>
          <section className="services-details-area pt-120">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-8">
                  <div className="services-details-wrap">
                    <div className="services-details-thumb">
                      <img
                        src="/assets/img/services/img_validation_wide.jpg"
                        alt="External Fire Risk Assessment Validation"
                      />
                    </div>
                    <div className="services-details-content">
                      <h2 className="title">
                        External Fire Risk Assessment Validation - Ensuring
                        Accuracy & Compliance
                      </h2>

                      <h3 className="subtitle">
                        Independent Validation of Fire Risk Assessments
                      </h3>
                      <p>
                        At <strong className="red">AFC Fire</strong>, we
                        understand the importance of accurate and compliant fire
                        risk assessments. That's why we offer a professional
                        external validation service for organisations and
                        independent Fire Risk Assessors. Our experienced team
                        will review, verify, and validate fire risk assessments
                        to ensure they meet regulatory standards, industry best
                        practices, and legal compliance.
                      </p>

                      <hr />

                      <h2 className="title">
                        Why Choose AFC Fire for Validation?
                      </h2>
                      <p>
                        Fire risk assessments play a crucial role in protecting
                        lives and property. However, inconsistencies, gaps, or
                        inaccuracies in reports can lead to serious
                        consequences. Our independent validation service
                        provides:
                      </p>
                      <ul>
                        <li>
                          <strong>Expert Review:</strong> Assessments are
                          examined by qualified and experienced Fire Risk
                          Assessors.
                        </li>
                        <li>
                          <strong>Regulatory Compliance Check:</strong> We
                          ensure assessments align with The Regulatory Reform
                          (Fire Safety) Order 2005 and relevant fire safety
                          standards.
                        </li>
                        <li>
                          <strong>Risk Identification Accuracy:</strong> We
                          verify that all potential hazards and risks have been
                          appropriately assessed.
                        </li>
                        <li>
                          <strong>Clear & Actionable Feedback:</strong> We
                          provide structured recommendations to improve reports
                          and ensure clarity.
                        </li>
                        <li>
                          <strong>Professional Assurance:</strong> Organisations
                          gain confidence that their fire risk assessments are
                          robust, defensible, and audit-ready.
                        </li>
                      </ul>

                      <hr />

                      <h2 className="title">
                        Who Can Benefit from External Validation?
                      </h2>
                      <p>Our validation service is ideal for:</p>
                      <div className="benefit-list">
                        <div className="benefit-item">
                          <div className="benefit-content">
                            <i className="fas fa-check-circle" /> &nbsp;
                            <strong>
                              Fire Risk Assessors & Fire Safety Consultants
                            </strong>
                            <p>
                              Independent professionals looking for an expert
                              second opinion
                            </p>
                          </div>
                        </div>
                        <div className="benefit-item">
                          <div className="benefit-content">
                            <i className="fas fa-check-circle" /> &nbsp;
                            <strong>Property Owners & Landlords</strong>
                            <p>
                              Ensuring risk assessments conducted on their
                              premises are thorough and compliant
                            </p>
                          </div>
                        </div>
                        <div className="benefit-item">
                          <div className="benefit-content">
                            <i className="fas fa-check-circle" /> &nbsp;
                            <strong>Businesses & Organisations</strong>
                            <p>
                              Validating internal assessments before audits or
                              regulatory reviews
                            </p>
                          </div>
                        </div>
                        <div className="benefit-item">
                          <div className="benefit-content">
                            <i className="fas fa-check-circle" /> &nbsp;
                            <strong>Fire Safety Compliance Teams</strong>
                            <p>
                              Strengthening due diligence and risk management
                              strategies
                            </p>
                          </div>
                        </div>
                      </div>

                      <hr />

                      <h2 className="title">Our Validation Process</h2>
                      <div className="validation-process">
                        <div className="process-item">
                          <div className="process-content">
                            <h5>Step 1: Submission</h5>
                            <p>
                              Provide your completed fire risk assessment
                              reports, photos and notes from your site visit for
                              external review.
                            </p>
                          </div>
                        </div>
                        <div className="process-item">
                          <div className="process-content">
                            <h5>Step 2: Detailed Review</h5>
                            <p>
                              Our assessors will conduct an in-depth evaluation,
                              checking for compliance, accuracy, and
                              completeness.
                            </p>
                          </div>
                        </div>
                        <div className="process-item">
                          <div className="process-content">
                            <h5>Step 3: Feedback & Recommendations</h5>
                            <p>
                              We provide a detailed validation report, outlining
                              any areas that require improvement, modifications,
                              or additional information.
                            </p>
                          </div>
                        </div>
                      </div>

                      <hr />

                      <h2 className="title">
                        Get Your Assessments Professionally Validated
                      </h2>
                      <p>
                        At <strong className="red">AFC Fire</strong>, we are
                        committed to raising industry standards and
                        ensuring&nbsp;
                        <b>
                          fire risk assessments are thorough, accurate, and
                          legally compliant
                        </b>
                        . Whether you're an independent Fire Risk Assessor or an
                        organisation requiring verification of assessments, our
                        validation service provides expert, unbiased review and
                        professional assurance.
                      </p>

                      <p>
                        Contact us today to submit your reports or learn more
                        about our validation service.
                      </p>

                      <p>
                        Call Us: <a href="tel:+447771366942">0777 1366 942</a>
                        <br />
                        Email Us:{" "}
                        <a href="mailto:info@afcfire.co.uk">
                          info@afcfire.co.uk
                        </a>
                      </p>

                      <p>
                        <strong>
                          Ensure your fire risk assessments meet the highest
                          standards - Get them validated by AFC Fire!
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
          <BrandAlt />
        </div>
      </Layout>
    </>
  );
}
