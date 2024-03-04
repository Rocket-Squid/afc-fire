import React from "react";
import Link from "next/link";

const ServicesSidebar = () => {
  return (
    <aside className="services-sidebar">
      <div className="services-widget">
        <h4 className="widget-title">All Our Services</h4>
        <div className="our-services-list">
          <ul className="list-wrap">
            <li>
              <Link href="/services/fire-risk-assessment">
                Fire Risk Assessment
                <i className="fas fa-arrow-right" />
              </Link>
            </li>
            <li>
              <Link href="/services/fire-safety-training">
                Fire Safety Training
                <i className="fas fa-arrow-right" />
              </Link>
            </li>
            <li>
              <Link href="/services/fire-door-inspections">
                Fire Door Inspections
                <i className="fas fa-arrow-right" />
              </Link>
            </li>
            <li>
              <Link href="/services/compartmentation-surveys">
                Fire Compartmentation Surveys
                <i className="fas fa-arrow-right" />
              </Link>
            </li>
            <li>
              <Link href="/services/fire-extinguishers">
                Fire Extinguishers
                <i className="fas fa-arrow-right" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* <div
        className="services-widget widget-bg"
        data-background="/assets/img/services/sw_bg.jpg"
      >
        <h4 className="widget-title">Get a free quote</h4>
        <form action="#" className="sidebar-form">
          <div className="form-grp">
            <input id="name" type="text" placeholder="Your Name" />
          </div>
          <div className="form-grp">
            <input id="email" type="text" placeholder="Your Email Address" />
          </div>
          <div className="form-grp">
            <textarea id="message" placeholder="Your Message" />
          </div>
          <button type="submit" className="btn btn-two">
            Contact Us
          </button>
        </form>
      </div>
      <div className="services-widget">
        <h4 className="widget-title">Our Brochures Download</h4>
        <div className="download-wrap">
          <Link
            href="assets/img/services/services_details01.jpg"
            download
            target="_blank"
          >
            <i className="fas fa-cloud-download-alt" />
            Service Details.pdf 65 KB
          </Link>
          <Link
            href="assets/img/services/services_details01.jpg"
            download
            target="_blank"
          >
            <i className="fas fa-file-pdf" />
            Fire Safety Models.doc 48 KB
          </Link>
        </div>
      </div> */}
    </aside>
  );
};

export default ServicesSidebar;
