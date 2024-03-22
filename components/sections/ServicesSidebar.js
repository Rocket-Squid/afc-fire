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
      </div> */}
      <div className="services-widget">
        <h4 className="widget-title">Useful Downloads</h4>
        <div className="download-wrap">
          <Link
            href="assets/pdf/LACoRS - Housing Fire Safety.pdf"
            download
            target="_blank"
          >
            <i className="fas fa-cloud-download-alt" />
            LACoRS - Housing Fire Safety.pdf
          </Link>
          <Link
            href="assets/pdf/The Regulatory Reform (Fire Safety) Order 2005.pdf"
            download
            target="_blank"
          >
            <i className="fas fa-cloud-download-alt" />
            The Regulatory Reform (Fire Safety) Order 2005.pdf
          </Link>
          <Link
            href="assets/pdf/LGA - Fire Safety in Purpose-Built blocks of Flats.pdf"
            download
            target="_blank"
          >
            <i className="fas fa-cloud-download-alt" />
            LGA - Fire Safety in Purpose-Built blocks of Flats.pdf
          </Link>
          <Link
            href="assets/pdf/HM Government Guide; Factories & Warehouses.pdf"
            download
            target="_blank"
          >
            <i className="fas fa-cloud-download-alt" />
            HM Government Guide; Factories & Warehouses.pdf
          </Link>
          <Link
            href="assets/pdf/HM Government Guide; Offices & Shops.pdf"
            download
            target="_blank"
          >
            <i className="fas fa-cloud-download-alt" />
            HM Government Guide; Offices & Shops.pdf
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default ServicesSidebar;
