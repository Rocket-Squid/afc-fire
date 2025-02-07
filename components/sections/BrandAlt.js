import Slider from "react-slick";

const brandSlider = {
  dots: false,
  infinite: false,
  speed: 1000,
  autoplay: true,
  arrows: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
};

export default function BrandAlt() {
  return (
    <>
      <div className="inner-brand-area">
        <div className="container">
          <Slider {...brandSlider} className="row brand-active-three">
            <div className="col-12">
              <div className="brand-item">
                <img
                  src="/assets/img/accreditation/BAFE-transparent.png"
                  alt="BAFE fire safety register"
                />
              </div>
            </div>
            <div className="col-12">
              <div className="brand-item">
                <img
                  src="/assets/img/accreditation/NSI-SILVER-UKAS-transparent.png"
                  alt="NSI Silver UKAS"
                />
              </div>
            </div>
            <div className="col-12">
              <div className="brand-item">
                <img
                  src="/assets/img/accreditation/ISO-9001-transparent.png"
                  alt="ISO 9001"
                />
              </div>
            </div>
            <div className="col-12">
              <div className="brand-item">
                <img
                  src="/assets/img/accreditation/NAFDI.png"
                  alt="National Association of Fire Door Inspectors"
                />
              </div>
            </div>
            <div className="col-12">
              <div className="brand-item">
                <img
                  src="/assets/img/accreditation/IFSM-Logo-Affiliate-Member.png"
                  alt="The Institute of Fire Safety Managers"
                />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}
