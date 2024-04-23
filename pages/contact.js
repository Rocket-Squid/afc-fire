import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Contact() {
  return (
    <>
      <Layout>
        <section className="contact-area pt-120 pb-120">
          <div className="container">
            <div className="row justify-content-center">
              {/* <div className="col-xl-6 col-lg-10">
                <div
                  className="contact-form-wrap"
                  data-background="/assets/img/images/contact_form_bg.jpg"
                >
                  <h2 className="title">Contact Us</h2>
                  <p>
                    Send us a message and we' ll respond as soon as possible
                  </p>
                  <form action="#" className="contact-form">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-grp">
                          <input
                            id="firstName"
                            type="text"
                            placeholder="First Name*"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-grp">
                          <input
                            id="lastName"
                            type="text"
                            placeholder="Last Name*"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-grp">
                          <input
                            id="email"
                            type="email"
                            placeholder="Email Address*"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-grp">
                          <input
                            id="phone"
                            type="text"
                            placeholder="Phone Number*"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-grp">
                      <input id="subject" type="text" placeholder="Subject" />
                    </div>
                    <div className="form-grp">
                      <textarea id="message" placeholder="Your Message here" />
                    </div>
                    <button className="btn" type="submit">
                      Send Message
                    </button>
                  </form>
                </div>
              </div> */}
              <div className="col-xl-6 col-lg-10">
                <div className="contact-info-wrap">
                  <h2 className="title">Need Any Help?</h2>
                  <p>
                    Call us or message and we' ll respond as soon as possible
                  </p>
                  <ul className="list-wrap">
                    <li>
                      <div className="contact-info-item">
                        <div className="icon">
                          <i className="fas fa-phone-alt" />
                        </div>
                        <div className="content">
                          <Link href="/tel:02031434754">0203 143 4754</Link>
                        </div>
                        <div className="content">
                          <Link href="/tel:07771366942">0777 136 6942</Link>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="contact-info-item">
                        <div className="icon">
                          <i className="fas fa-envelope" />
                        </div>
                        <div className="content">
                          <Link href="mailto:info@afcfire.co.uk">
                            info@afcfire.co.uk
                          </Link>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="contact-info-item">
                        <div className="icon">
                          <i className="fas fa-map-marker-alt" />
                        </div>
                        <div className="content">
                          <p>
                            226 Mulgrave Road Sutton, <br />
                            Greater London, SM2 6LY
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* contact-map */}
              <div className="col-xl-6 col-lg-10">
                <div id="contact-map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2491.561566386617!2d-0.21378708703616547!3d51.35597227166163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876082297e48e17%3A0x2cbbf6f232d9c3b8!2sTurnbull%20House%2C%20226%20Mulgrave%20Rd%2C%20Cheam%2C%20Sutton%20SM2%206JT%2C%20UK!5e0!3m2!1sen!2sid!4v1713534159602!5m2!1sen!2sid"
                    height={570}
                    style={{ border: 0, width: "100%" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                {/* contact-map-end */}
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
