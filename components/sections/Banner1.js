import Link from "next/link";
import { useState } from "react";
import Brand1 from "./Brand1";

export default function Banner1() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
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
      <section className="banner-area">
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
              onClick={() => handleToggle(1)}
            >
              <div className="tooltip-btn pulse">
                <i className="fas fa-plus" />
              </div>
              <div className="tooltip-content">
                <h2 className="title">Fire Risk Assessment</h2>
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
              onClick={() => handleToggle(2)}
            >
              <div className="tooltip-btn pulse">
                <i className="fas fa-plus" />
              </div>
              <div className="tooltip-content">
                <h2 className="title">Fire Safety Training</h2>
                <p>
                  In-depth training sessions to equip individuals with essential
                  fire safety skills.
                </p>
              </div>
            </div>
            <div
              className={
                isActive.key == 3 ? "tooltip-item active" : "tooltip-item"
              }
              onClick={() => handleToggle(3)}
            >
              <div className="tooltip-btn pulse">
                <i className="fas fa-plus" />
              </div>
              <div className="tooltip-content">
                <h2 className="title">Fire Extinguishers</h2>
                <p>
                  A comprehensive range of extinguishers tailored for every type
                  of fire scenario.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* brand-area */}
        <Brand1 />
        {/* brand-area-end */}
      </section>
    </>
  );
}
