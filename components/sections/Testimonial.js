import Slider from "react-slick";
const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  autoplay: false,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Testimonial() {
  return (
    <>
      <section className="testimonial-area pt-115 pb-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".2s">
              <div className="testimonial-img">
                <img
                  src="/assets/img/buildings/pioneer-point-building.jpg"
                  alt="Pioneer Point Building"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="testimonial-content">
                <div className="section-title mb-45 tg-heading-subheading animation-style3">
                  <span className="sub-title tg-element-title">
                    Our Testimonial
                  </span>
                  <h2 className="title tg-element-title">
                    What Some of Our Happy Clients Say
                  </h2>
                </div>
                <Slider {...settings} className="testimonial-active">
                  <div className="testimonial-item">
                    <div className="testimonial-icon">
                      <i className="fas fa-quote-left" />
                    </div>
                    <div className="testimonial-content">
                      <p>
                        Alex and the team at AFC Fire consistently deliver
                        top-notch service for our fire safety needs. Their
                        expertise in conducting thorough fire risk assessments
                        and meticulous fire door inspections is commendable.
                      </p>
                      <p>
                        Their professionalism, attention to detail and value
                        they provide, are the reasons we continue to recommend
                        them. Timely and reliable, AFC Fire has become an
                        invaluable partner for our company's ongoing commitment
                        to fire safety. Highly recommended.
                      </p>
                    </div>
                    <div className="testimonial-avatar">
                      <div className="avatar-thumb">
                        <img
                          src="/assets/img/testimonials/AFS-logo.png"
                          alt="Armour Fire Solutions"
                          width={80}
                          height={80}
                        />
                      </div>
                      <div className="avatar-content">
                        <h6 className="title">Mitchell Greetham</h6>
                        <p>Managing Director - Armour Fire Solutions</p>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-item">
                    <div className="testimonial-icon">
                      <i className="fas fa-quote-left" />
                    </div>
                    <div className="testimonial-content">
                      <p>
                        Charters Property Management have been working with AFC
                        Fire & Security for a few years now for support on Fire
                        Risk Assessments and fire door surveys across our
                        managed sites.
                      </p>
                      <p>
                        Alex and the team are highly professional, extremely
                        knowledgeable, and always deliver detailed reports.
                        Their communication is excellent, and Alex is always
                        available for fire safety advice to ensure compliance
                        with current regulations.
                      </p>
                      <p>
                        AFC charge fairly for their time and effort, and we
                        highly recommend them.
                      </p>
                    </div>
                    <div className="testimonial-avatar">
                      <div className="avatar-thumb">
                        <img
                          src="/assets/img/testimonials/CPM-logo.svg"
                          alt="Charters Property Management"
                          width={80}
                          height={80}
                        />
                      </div>
                      <div className="avatar-content">
                        <h6 className="title">Xerxes Mehta</h6>
                        <p>Charters Property Management</p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
