import Link from "next/link";
import { useState } from "react";

export default function Sidebar() {
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
      <ul className="navigation">
        <li className="menu-item-has-children">
          <Link href="#">Home</Link>
          <ul
            className="sub-menu"
            style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}
          >
            <li>
              <Link href="/">Option One</Link>
            </li>
            <li>
              <Link href="/index-2">Option Two</Link>
            </li>
            <li>
              <Link href="/index-3">Option Three</Link>
            </li>
          </ul>
          <div className="dropdown-btn" onClick={() => handleToggle(1)}>
            <span className="fas fa-angle-down" />
          </div>
        </li>
        <li className="menu-item-has-children">
          <Link href="/services">Services</Link>
          <ul
            className="sub-menu"
            style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}
          >
            <li>
              <Link href="/services-details">Fire Risk Assessment</Link>
            </li>
            <li>
              <Link href="/services-details">
                Fire Safety / Warden Training
              </Link>
            </li>
            <li>
              <Link href="/services-details">Fire Door Inspections</Link>
            </li>
            <li>
              <Link href="/services-details">Passive Fire Protection</Link>
            </li>
            <li>
              <Link href="/services-details">Fire Extinguishers</Link>
            </li>
          </ul>
          <div className="dropdown-btn" onClick={() => handleToggle(2)}>
            <span className="fas fa-angle-down" />
          </div>
        </li>
        <li>
          <Link href="/team">Our Team</Link>
        </li>
        <li>
          <Link href="/contact">Contact Us</Link>
        </li>
      </ul>
    </>
  );
}
