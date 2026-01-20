import Link from "next/link";
import { useState } from "react";

export default function Sidebar({ handleToggled }) {
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

  const handleClick = () => {
    if (handleToggled) {
      handleToggled();
    }
  };

  return (
    <>
      <ul className="navigation">
        <li>
          <Link href="/" onClick={handleClick}>
            Home
          </Link>
        </li>
        <li className="menu-item-has-children">
          <Link href="/services" onClick={handleClick}>
            Services
          </Link>
          <ul
            className="sub-menu"
            style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}
          >
            <li>
              <Link href="/services/fire-risk-assessment" onClick={handleClick}>
                Fire Risk Assessment
              </Link>
            </li>
            <li>
              <Link
                href="/services/compartmentation-surveys"
                onClick={handleClick}
              >
                Compartmentation Surveys
              </Link>
            </li>
            <li>
              <Link
                href="/services/fire-door-inspections"
                onClick={handleClick}
              >
                Fire Door Surveys
              </Link>
            </li>
            <li>
              <Link href="/services/external-validation" onClick={handleClick}>
                External Validation
              </Link>
            </li>
            <li>
              <Link href="/services/shadow-fra" onClick={handleClick}>
                Shadow Programme
              </Link>
            </li>
            <li>
              <Link href="/services/fire-safety-training" onClick={handleClick}>
                Fire Warden Training
              </Link>
            </li>
            <li>
              <Link href="/services/fire-strategy-services" onClick={handleClick}>
                Fire Strategy Services
              </Link>
            </li>
          </ul>
          <div className="dropdown-btn" onClick={() => handleToggle(2)}>
            <span className="fas fa-angle-down" />
          </div>
        </li>
        <li>
          <Link href="/team" onClick={handleClick}>
            Our Team
          </Link>
        </li>
        <li>
          <Link href="/contact" onClick={handleClick}>
            Contact Us
          </Link>
        </li>
      </ul>
    </>
  );
}
