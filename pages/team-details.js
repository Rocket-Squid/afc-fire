import Layout from "@/components/layout/Layout";
import Brand3 from "@/components/sections/Brand3";
import Link from "next/link";
export default function TeamDetails() {
  return (
    <>
      <Layout breadcrumbTitle="Team Details">
        <div>
          <section className="team-details-area pt-70">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="team-details-thumb">
                    <img src="/assets/img/team/headshot_alex.jpeg" alt="" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="team-details-info">
                    <div className="info-content-top">
                      <h1 className="title">Alex Aiston</h1>
                      <span>Operations Director</span>
                    </div>

                    <hr />

                    <h4>Bio</h4>
                    <p className="info-one">
                      I decided to join my Father in the family business in
                      early 2018. I had no real experience in the fire safety
                      industry, other than selling fire extinguishers, and
                      didn’t really know what to expect. But, I have never
                      looked back. I am now responsible for the day to day
                      running of the business, carrying out Fire Risk
                      Assessments, validation, and management of our team.
                    </p>
                    <p className="info-two">
                      My beliefs are in line with my father&#39;s i.e.
                      professionalism, trust and reliability, and I also believe
                      that a complete understanding of our customers needs is
                      key to the continued success of AFC Fire.
                    </p>

                    <ul className="list-wrap team-info">
                      <li>
                        <span>
                          <i className="fas fa-toolbox" />
                          Experience:
                        </span>
                        32 Years
                      </li>
                      <li>
                        <span>
                          <i className="fas fa-envelope" />
                          E-mail:
                        </span>
                        alex@afcfire.co.uk
                      </li>
                      <li>
                        <span>
                          <i className="fas fa-phone-alt" />
                          Phone:
                        </span>
                        +44-777-1366-942
                      </li>
                      <li>
                        <span>
                          <i className="fas fa-map-marker-alt" />
                          Location:
                        </span>
                        A mystery
                      </li>
                    </ul>
                    <div className="team-details-social">
                      <h6 className="title">Follow Me:</h6>
                      <ul className="list-wrap">
                        <li>
                          <Link href="#">
                            <i className="fab fa-facebook-f" />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fab fa-twitter" />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fab fa-linkedin-in" />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fab fa-instagram" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="team-details-content">
                    <div className="progress-wrap">
                      <div className="progress-item">
                        <h5 className="title">Experience</h5>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "92%" }}
                            aria-valuenow={92}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                          <span>92%</span>
                        </div>
                      </div>
                      <div className="progress-item">
                        <h5 className="title">Quick Haircuts</h5>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "13%" }}
                            aria-valuenow={13}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                          <span>13%</span>
                        </div>
                      </div>
                      <div className="progress-item">
                        <h5 className="title">Banter</h5>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "95%" }}
                            aria-valuenow={95}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                          <span>95%</span>
                        </div>
                      </div>
                      <div className="progress-item">
                        <h5 className="title">Organisation</h5>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "90%" }}
                            aria-valuenow={90}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                          <span>90%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* team-details-area-end */}
          {/* brand-area */}
          <Brand3 />
        </div>
      </Layout>
    </>
  );
}
