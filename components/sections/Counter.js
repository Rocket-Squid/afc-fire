import { useEffect, useState, useMemo } from "react";
import CountUp from "../elements/CountUp";

export default function Counter({ teamCount = 8 }) {
  const [inViewport, setInViewport] = useState(false);

  // Calculate dynamic project count: base 3127 + 13 per week
  const projectCount = useMemo(() => {
    const baseDate = new Date("2026-01-01");
    const currentDate = new Date();
    const weeksSinceBase = Math.floor(
      (currentDate - baseDate) / (7 * 24 * 60 * 60 * 1000)
    );
    const baseCount = 3127;
    const weeklyIncrement = 13;
    return Math.floor(baseCount + weeksSinceBase * weeklyIncrement);
  }, []);

  const handleScroll = () => {
    const elements = document.getElementsByClassName("count");
    if (elements.length > 0) {
      const element = elements[0];
      const rect = element.getBoundingClientRect();
      const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;
      if (isInViewport && !inViewport) {
        setInViewport(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="counter-area pb-120">
        <div className="container">
          <div className="counter-inner wow fadeInUp" data-wow-delay=".2s">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="counter-item">
                  <div className="counter-icon">
                    <img src="/assets/img/icon/counter_icon01.svg" alt="" />
                  </div>
                  <div className="counter-content">
                    {inViewport && <CountUp end={projectCount} duration={10} />}
                    <p>Projects Completed</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="counter-item">
                  <div className="counter-icon">
                    <img src="/assets/img/icon/counter_icon02.svg" alt="" />
                  </div>
                  <div className="counter-content">
                    <span className="count" />
                    {inViewport && <CountUp end={780} duration={10} />}
                    <p>Satisfied Clients</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="counter-item">
                  <div className="counter-icon">
                    <img src="/assets/img/icon/counter_icon03.svg" alt="" />
                  </div>
                  <div className="counter-content">
                    {inViewport && <CountUp end={teamCount} duration={10} />}
                    <p>Experienced Staff</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="counter-item">
                  <div className="counter-icon">
                    <img src="/assets/img/icon/counter_icon04.svg" alt="" />
                  </div>
                  <div className="counter-content">
                    {inViewport && <CountUp end={7} duration={10} />}
                    <p>Accreditations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
