import { useState } from "react";
export default function Faq1() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      <section
        className="faq-area faq-bg"
        data-background="/assets/img/bg/faq_bg.jpg"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-title text-center mb-60">
                <span className="sub-title">Our FAQs</span>
                <h2 className="title">Any Questions?</h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-6 col-lg-10 order-0 order-xl-2">
              <div className="faq-img-wrap">
                <img
                  src="/assets/img/images/faq_img01.jpg"
                  alt=""
                  className="wow fadeInRight"
                  data-wow-delay=".4s"
                />
                <img
                  src="/assets/img/images/faq_img02.jpg"
                  alt=""
                  className="wow fadeInRight"
                  data-wow-delay=".2s"
                />
                <div className="overlay-text wow fadeInUp" data-wow-delay=".6s">
                  <h2 className="title">FAQ</h2>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="faq-wrap">
                <div className="accordion">
                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      onClick={() => handleToggle(1)}
                    >
                      <button
                        className={
                          isActive.key == 1
                            ? "accordion-button"
                            : "accordion-button collapsed"
                        }
                      >
                        What is a Fire Risk Assessment and Why is it Important?
                      </button>
                    </h2>
                    <div
                      className={
                        isActive.key == 1
                          ? "accordion-collapse collapse show"
                          : "accordion-collapse collapse"
                      }
                    >
                      <div className="accordion-body">
                        <p>
                          A Fire Risk Assessment is a thorough inspection of a
                          property to identify fire hazards and assess the risk
                          levels. It's crucial for ensuring the safety of
                          occupants and compliance with fire safety regulations.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      onClick={() => handleToggle(2)}
                    >
                      <button
                        className={
                          isActive.key == 2
                            ? "accordion-button"
                            : "accordion-button collapsed"
                        }
                      >
                        How Often Should Fire Safety Training Be Conducted?
                      </button>
                    </h2>
                    <div
                      className={
                        isActive.key == 2
                          ? "accordion-collapse collapse show"
                          : "accordion-collapse collapse"
                      }
                    >
                      <div className="accordion-body">
                        <p>
                          Regular fire safety training is recommended at least
                          annually to keep staff up-to-date with fire prevention
                          practices and emergency procedures.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      onClick={() => handleToggle(3)}
                    >
                      <button
                        className={
                          isActive.key == 3
                            ? "accordion-button"
                            : "accordion-button collapsed"
                        }
                      >
                        Why Are Fire Door Inspections Necessary?
                      </button>
                    </h2>
                    <div
                      className={
                        isActive.key == 3
                          ? "accordion-collapse collapse show"
                          : "accordion-collapse collapse"
                      }
                    >
                      <div className="accordion-body">
                        <p>
                          Fire door inspections ensure that these critical
                          safety features are functioning correctly and can
                          effectively prevent the spread of fire and smoke,
                          which is vital for safety and legal compliance.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      onClick={() => handleToggle(4)}
                    >
                      <button
                        className={
                          isActive.key == 4
                            ? "accordion-button"
                            : "accordion-button collapsed"
                        }
                      >
                        What is Passive Fire Protection and Its Benefits?
                      </button>
                    </h2>
                    <div
                      className={
                        isActive.key == 4
                          ? "accordion-collapse collapse show"
                          : "accordion-collapse collapse"
                      }
                    >
                      <div className="accordion-body">
                        <p>
                          Passive fire protection involves using building
                          materials and design to prevent or slow the spread of
                          fire, offering benefits like increased evacuation time
                          and reduced property damage.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      onClick={() => handleToggle(5)}
                    >
                      <button
                        className={
                          isActive.key == 5
                            ? "accordion-button"
                            : "accordion-button collapsed"
                        }
                      >
                        How to Choose the Right Type of Fire Extinguisher?
                      </button>
                    </h2>
                    <div
                      className={
                        isActive.key == 5
                          ? "accordion-collapse collapse show"
                          : "accordion-collapse collapse"
                      }
                    >
                      <div className="accordion-body">
                        <p>
                          Choosing the right fire extinguisher depends on the
                          types of fires likely to occur in your space. For
                          example, water extinguishers are for paper and wood
                          fires, while CO2 extinguishers are for electrical
                          fires.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
