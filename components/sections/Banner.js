import Link from "next/link";
import { useState } from "react";
import Brand from "./Brand";
import Image from "next/image";

export default function Banner() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const handleToggle = (key, e) => {
    // Prevent event from bubbling up to parent
    e.stopPropagation();

    if (isActive.key === key) {
      setIsActive({
        status: false,
        key: "",
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };

  // Close tooltip when clicking outside
  const handleOutsideClick = () => {
    setIsActive({
      status: false,
      key: "",
    });
  };

  return (
    <>
      <section className="banner-area" onClick={handleOutsideClick}>
        <div
          className="banner-shape"
          data-background="/assets/img/banner/banner_shape.jpg"
        />
        <div
          className="banner-bg"
          data-background="/assets/img/banner/banner_bg.jpg"
        >
          <div className="banner-content">
            <h2 className="title wow fadeInDown" data-wow-delay=".2s">
              Your Safety,
              <br /> Our Priority
            </h2>
            <p className="wow fadeInUp" data-wow-delay=".2s">
              Dedicated to providing top-tier fire safety solutions to secure
              homes and businesses. Protecting life and property from the
              effects of fire.
            </p>
            <Link
              href="/services"
              className="btn wow fadeInUp"
              data-wow-delay=".4s"
            >
              Discover More
            </Link>
          </div>
          <div className="banner-tooltip-wrap">
            <div
              className={
                isActive.key == 1
                  ? "tooltip-item top active"
                  : "tooltip-item top"
              }
              onClick={(e) => handleToggle(1, e)}
            >
              <div className="tooltip-btn pulse">
                <Image
                  src="/assets/img/icon/services-assessment.svg"
                  alt="Fire Risk Assessment"
                  height={20}
                  width={20}
                />
              </div>
              <div className="tooltip-content">
                <h2 className="title">
                  <Link href="/services/fire-risk-assessment">
                    Fire Risk Assessment
                  </Link>
                </h2>
                <p>
                  Detailed evaluations to identify and mitigate potential fire
                  hazards.
                </p>
              </div>
            </div>
            <div
              className={
                isActive.key == 2 ? "tooltip-item active" : "tooltip-item"
              }
              onClick={(e) => handleToggle(2, e)}
            >
              <div className="tooltip-btn pulse">
                <Image
                  src="/assets/img/icon/services-compartmentation.svg"
                  alt="Compartmentation Surveys"
                  height={20}
                  width={20}
                />
              </div>
              <div className="tooltip-content">
                <h2 className="title">
                  <Link href="/services/compartmentation-surveys">
                    Compartmentation Surveys
                  </Link>
                </h2>
                <p>
                  Implementing structural fire prevention measures to control
                  the spread of fire.
                </p>
              </div>
            </div>
            <div
              className={
                isActive.key == 3 ? "tooltip-item active" : "tooltip-item"
              }
              onClick={(e) => handleToggle(3, e)}
            >
              <div className="tooltip-btn pulse">
                <Image
                  src="/assets/img/icon/services-doors.svg"
                  alt="Fire Door Surveys"
                  height={20}
                  width={20}
                />
              </div>
              <div className="tooltip-content">
                <h2 className="title">
                  <Link href="/services/fire-door-inspections">
                    Fire Door Surveys
                  </Link>
                </h2>
                <p>
                  A comprehensive range of fire doors for every type of fire
                  scenario.
                </p>
              </div>
            </div>
            <div
              className={
                isActive.key == 4 ? "tooltip-item active" : "tooltip-item"
              }
              onClick={(e) => handleToggle(4, e)}
            >
              <div className="tooltip-btn pulse">
                <Image
                  src="/assets/img/icon/services-validation.svg"
                  alt="External Validation"
                  height={20}
                  width={20}
                />
              </div>
              <div className="tooltip-content">
                <h2 className="title">
                  <Link href="/services/external-validation">
                    External Validation
                  </Link>
                </h2>
                <p>
                  Professional validation of fire risk assessments to ensure
                  accuracy and compliance.
                </p>
              </div>
            </div>
            <div
              className={
                isActive.key == 5 ? "tooltip-item active" : "tooltip-item"
              }
              onClick={(e) => handleToggle(5, e)}
            >
              <div className="tooltip-btn pulse">
                <Image
                  src="/assets/img/icon/services-shadow-fra.svg"
                  alt="Shadow Programme"
                  height={20}
                  width={20}
                />
              </div>
              <div className="tooltip-content">
                <h2 className="title">
                  <Link href="/services/shadow-fra">Shadow Programme</Link>
                </h2>
                <p>
                  Gain hands-on experience in fire risk assessment by shadowing
                  our experienced professionals.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* brand-area */}
        <Brand />
        {/* brand-area-end */}
      </section>
    </>
  );
}
