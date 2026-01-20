import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Services() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 992); // Bootstrap md breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleToggle = (key) => {
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

  // Service data configuration
  const services = [
    {
      key: 1,
      delay: ".2s",
      bg: "/assets/img/services/img_risk.jpg",
      icon: "/assets/img/icon/services-assessment.svg",
      iconAlt: "Risk Assessment",
      title: "Fire Risk Assessment",
      href: "/services/fire-risk-assessment",
      description:
        "Comprehensive evaluations to identify and mitigate fire hazards in your premises, ensuring safety and compliance.",
    },
    {
      key: 2,
      delay: ".4s",
      bg: "/assets/img/services/img_passive.jpg",
      icon: "/assets/img/icon/services-compartmentation.svg",
      iconAlt: "Compartmentation",
      title: "Compartmentation Surveys",
      href: "/services/compartmentation-surveys",
      description:
        "Implementing structural fire prevention measures to control the spread of fire and protect the building's integrity.",
    },
    {
      key: 3,
      delay: ".6s",
      bg: "/assets/img/services/img_door.jpg",
      icon: "/assets/img/icon/services-doors.svg",
      iconAlt: "Fire Doors",
      title: "Fire Door Surveys",
      href: "/services/fire-door-inspections",
      description:
        "Detailed inspections to ensure fire doors are fully operational and compliant with the latest safety standards.",
    },
    {
      key: 4,
      delay: ".3s",
      bg: "/assets/img/services/img_validation.jpg",
      icon: "/assets/img/icon/services-validation.svg",
      iconAlt: "External Validation",
      title: "External Validation",
      href: "/services/external-validation",
      description:
        "Professional validation of fire risk assessments to ensure accuracy, compliance, and best practices.",
    },
    {
      key: 5,
      delay: ".5s",
      bg: "/assets/img/services/img_shadow_fra.jpg",
      icon: "/assets/img/icon/services-shadow-fra.svg",
      iconAlt: "Shadow Programme",
      title: "Shadow Programme",
      href: "/services/shadow-fra",
      description:
        "Gain hands-on experience in fire risk assessment by shadowing our experienced professionals.",
    },
    {
      key: 6,
      delay: ".7s",
      bg: "/assets/img/services/img_training.jpg",
      icon: "/assets/img/icon/services-training.svg",
      iconAlt: "Fire Warden Training",
      title: "Fire Warden Training",
      href: "/services/fire-safety-training",
      description:
        "Expert-led training programs that cover fire prevention, safety procedures, and emergency response tactics.",
    },
    {
      key: 7,
      delay: ".8s",
      bg: "/assets/img/services/img_fire_strategy.jpg",
      icon: "/assets/img/icon/services-strategy.svg",
      iconAlt: "Fire Strategy Services",
      title: "Fire Strategy Services",
      href: "/services/fire-strategy-services",
      description:
        "Comprehensive Fire Strategy services for both existing buildings and new developments, ensuring compliance and effective fire safety management.",
    },
  ];
  return (
    <>
      <section className="services-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center mb-50 tg-heading-subheading animation-style3">
                <span className="sub-title tg-element-title">What We Do</span>
                <h2 className="title tg-element-title">Our Services Areas</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {services.map((service, index) => {
              const showOverlay = isMobile || isActive.key === service.key;
              const showDefault = !showOverlay;
              // On mobile, show icon and number alongside overlay content
              const showIcon = isMobile || showDefault;

              return (
                <div key={service.key} className="col-lg-4 col-md-6 col-sm-10">
                  <Link href={service.href} style={{ textDecoration: "none" }}>
                    <div
                      className={`services-item wow fadeInUp ${isMobile ? "mobile-active" : ""}`}
                      data-wow-delay={service.delay}
                      data-background={service.bg}
                      onMouseEnter={() => !isMobile && handleToggle(service.key)}
                      onMouseLeave={() => !isMobile && handleToggle(service.key)}
                      style={{ cursor: "pointer" }}
                    >
                      <div
                        className="services-icon"
                        style={{ display: showIcon ? "flex" : "none" }}
                      >
                        <Image
                          src={service.icon}
                          alt={service.iconAlt}
                          height={50}
                          width={50}
                        />
                      </div>
                      <div className="services-content">
                        <h2
                          className="title"
                          style={{
                            display: showDefault ? "block" : "none",
                          }}
                        >
                          {service.title}
                        </h2>
                        <h2 className="number">
                          {String(index + 1).padStart(2, "0")}
                        </h2>
                      </div>
                      <div
                        className="services-overlay-content"
                        style={{ display: showOverlay ? "block" : "none" }}
                      >
                        <h2 className="title">{service.title}</h2>
                        <p>{service.description}</p>
                        <span
                          className="read-more"
                          style={{ display: isMobile ? "none" : "inline-flex" }}
                        >
                          Read More <i className="fas fa-arrow-right" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
