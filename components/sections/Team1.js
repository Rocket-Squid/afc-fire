import Link from "next/link";

export default function Team1() {
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
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
              <div className="team-item">
                <div className="team-thumb">
                  <Link href="/team-details">
                    <img src="/assets/img/team/headshot_alex.jpeg" alt="" />
                  </Link>
                  <div className="team-social">
                    <ul className="list-wrap">
                      <li>
                        <Link href="#">
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-twitter" />
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
                <div className="team-content">
                  <h2 className="title">
                    <Link href="/team-details">Alex Aiston</Link>
                  </h2>
                  <span>Operations Director</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
              <div className="team-item">
                <div className="team-thumb">
                  <Link href="/team-details">
                    <img src="/assets/img/team/headshot_mark.jpeg" alt="" />
                  </Link>
                  <div className="team-social">
                    <ul className="list-wrap">
                      <li>
                        <Link href="#">
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-twitter" />
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
                <div className="team-content">
                  <h2 className="title">
                    <Link href="/team-details">Mark Aiston</Link>
                  </h2>
                  <span>Managing Director</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
              <div className="team-item">
                <div className="team-thumb">
                  <Link href="/team-details">
                    <img src="/assets/img/team/headshot_joe.jpeg" alt="" />
                  </Link>
                  <div className="team-social">
                    <ul className="list-wrap">
                      <li>
                        <Link href="#">
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-twitter" />
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
                <div className="team-content">
                  <h2 className="title">
                    <Link href="/team-details">Joe Chandler</Link>
                  </h2>
                  <span>Fire Risk Assessor</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
              <div className="team-item">
                <div className="team-thumb">
                  <Link href="/team-details">
                    <img src="/assets/img/team/headshot_rob.jpeg" alt="" />
                  </Link>
                  <div className="team-social">
                    <ul className="list-wrap">
                      <li>
                        <Link href="#">
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-twitter" />
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
                <div className="team-content">
                  <h2 className="title">
                    <Link href="/team-details">Rob Tyler</Link>
                  </h2>
                  <span>Fire Extinguisher Specialist</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
