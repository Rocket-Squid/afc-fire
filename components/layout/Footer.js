import Link from "next/link";

export default function Footer1() {
  return (
    <>
      <footer>
        <div
          className="footer-area footer-bg"
          data-background="/assets/img/bg/footer_bg.jpg"
        >
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-sm-6">
                  <div className="footer-widget">
                    <h2 className="fw-title">About Us</h2>
                    <div className="footer-content">
                      <p>
                        AFC Fire are providers of professional services designed
                        to protect life and property from the effects of fire.
                        If you are just unsure of your legal obligations, or
                        would like to book any of our services, then please get
                        in touch with us for free advice and a quote.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="footer-widget">
                    <h2 className="fw-title">Our Services</h2>
                    <div className="footer-link">
                      <ul className="list-wrap">
                        <li>
                          <Link href="/services/fire-risk-assessment">
                            <i className="fas fa-angle-double-right" />
                            Fire Risk Assessment
                          </Link>
                        </li>
                        <li>
                          <Link href="/services/fire-safety-training">
                            <i className="fas fa-angle-double-right" />
                            Fire Safety Training
                          </Link>
                        </li>
                        <li>
                          <Link href="/services/fire-door-inspections">
                            <i className="fas fa-angle-double-right" />
                            Fire Door Inspections
                          </Link>
                        </li>
                        <li>
                          <Link href="/services/compartmentation-surveys">
                            <i className="fas fa-angle-double-right" />
                            Fire Compartmentation Surveys
                          </Link>
                        </li>
                        <li>
                          <Link href="/services/fire-extinguishers">
                            <i className="fas fa-angle-double-right" />
                            Fire Extinguishers
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6">
                  <div className="footer-widget">
                    <h2 className="fw-title">Quick Links</h2>
                    <div className="footer-link">
                      <ul className="list-wrap">
                        <li>
                          <Link href="/contact">
                            <i className="fas fa-angle-double-right" />
                            Tax Vat
                          </Link>
                        </li>
                        <li>
                          <Link href="/contact">
                            <i className="fas fa-angle-double-right" />
                            Refund Policy
                          </Link>
                        </li>
                        <li>
                          <Link href="/contact">
                            <i className="fas fa-angle-double-right" />
                            Typical Solutions
                          </Link>
                        </li>
                        <li>
                          <Link href="/contact">
                            <i className="fas fa-angle-double-right" />
                            Our Process
                          </Link>
                        </li>
                        <li>
                          <Link href="/contact">
                            <i className="fas fa-angle-double-right" />
                            Contact Us
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div> 
                <div className="col-xl-4 col-lg-5 col-md-6">
                  <div className="footer-widget">
                    <h2 className="fw-title">Instagram Posts</h2>
                    <div className="footer-instagram">
                      <ul className="list-wrap">
                        <li>
                          <Link href="/#">
                            <img
                              src="/assets/img/instagram/f_insta_img01.jpg"
                              alt=""
                            />
                          </Link>
                        </li>
                        <li>
                          <Link href="/#">
                            <img
                              src="/assets/img/instagram/f_insta_img02.jpg"
                              alt=""
                            />
                          </Link>
                        </li>
                        <li>
                          <Link href="/#">
                            <img
                              src="/assets/img/instagram/f_insta_img03.jpg"
                              alt=""
                            />
                          </Link>
                        </li>
                        <li>
                          <Link href="/#">
                            <img
                              src="/assets/img/instagram/f_insta_img04.jpg"
                              alt=""
                            />
                          </Link>
                        </li>
                        <li>
                          <Link href="/#">
                            <img
                              src="/assets/img/instagram/f_insta_img05.jpg"
                              alt=""
                            />
                          </Link>
                        </li>
                        <li>
                          <Link href="/#">
                            <img
                              src="/assets/img/instagram/f_insta_img06.jpg"
                              alt=""
                            />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                */}
              </div>
              <div className="footer-logo-area">
                <div className="row align-items-center">
                  <div className="col-xl-3 col-lg-3 col-md-12">
                    <div className="logo">
                      <Link href="/index">
                        <img src="/assets/img/logo/new-logo-alt.png" alt="" />
                      </Link>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="footer-contact">
                      <div className="icon">
                        <i className="fas fa-phone-alt" />
                      </div>
                      <div className="content">
                        <span>Phone No</span>
                        <Link href="/tel:07771366942">0777 136 6942</Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-5 col-md-6">
                    <div className="footer-social">
                      <h2 className="title">Follow Us:</h2>
                      <ul className="list-wrap">
                        <li>
                          <Link
                            href="https://www.facebook.com/AFCFireprotection"
                            target="_blank"
                          >
                            <i className="fab fa-facebook-f" />
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="https://www.instagram.com/afcfire/"
                            target="_blank"
                          >
                            <i className="fab fa-instagram" />
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="https://www.linkedin.com/company/afc-fire-and-security-ltd/"
                            target="_blank"
                          >
                            <i className="fab fa-linkedin-in" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="copyright-text">
                    <p>
                      © Copyright AFC Fire {new Date().getFullYear()}. All Right
                      Reserved.
                    </p>
                  </div>
                </div>
                {/* <div className="col-md-6">
                  <div className="footer-bootom-menu">
                    <ul className="list-wrap">
                      <li>
                        <Link href="/contact">Privacy Policy</Link>
                      </li>
                      <li>
                        <Link href="/contact">Terms Conditions</Link>
                      </li>
                    </ul>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
