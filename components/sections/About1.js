import Link from "next/link";

export default function About1() {
  return (
    <>
      <section className="about-area pt-60 pb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-6 order-0 order-lg-2">
              <div className="about-img-wrap">
                <img
                  src="/assets/img/images/about_img01.jpg"
                  alt="Fire Safety Equipment"
                  className="wow fadeInRight"
                  data-wow-delay=".4s"
                />
                <img
                  src="/assets/img/images/about_img02.jpg"
                  alt="Fire Safety Training"
                  className="wow fadeInRight"
                  data-wow-delay=".2s"
                />
                <div className="about-experiences-wrap">
                  <div className="experiences-item">
                    <div className="icon">
                      <img
                        src="/assets/img/icon/about_icon01.svg"
                        alt="Experience Icon"
                      />
                    </div>
                    <div className="content">
                      <h6 className="title">
                        Over 10 Years of Fire Safety Experience
                      </h6>
                    </div>
                  </div>
                  <div className="experiences-item">
                    <div className="icon">
                      <img
                        src="/assets/img/icon/about_icon02.svg"
                        alt="Professionalism Icon"
                      />
                    </div>
                    <div className="content">
                      <h6 className="title">
                        Dedicated Team of Certified Professionals
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="about-content">
                <div className="section-title mb-25 tg-heading-subheading animation-style3">
                  <span className="sub-title tg-element-title">
                    About Our Company
                  </span>
                  <h2 className="title tg-element-title">
                    Leading the Way in Fire Safety and Prevention
                  </h2>
                </div>
                <p>
                  At the forefront of fire safety, we specialize in
                  comprehensive risk assessments, state-of-the-art fire safety
                  equipment, and expert-led training programs, all designed to
                  ensure the utmost protection and compliance.
                </p>
                <div className="about-list">
                  <ul className="list-wrap">
                    <li>
                      <i className="fas fa-check" />
                      Trusted by over 5,000 clients for reliable fire safety
                      solutions.
                    </li>
                    <li>
                      <i className="fas fa-check" />A commitment to excellence
                      and continuous improvement in fire safety.
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      Proven track record in delivering tailored fire safety
                      services.
                    </li>
                  </ul>
                </div>
                <Link href="/team" className="btn">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
