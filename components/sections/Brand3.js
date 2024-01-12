import Slider from "react-slick";
const brandSlider = {
  dots: false,
  infinite: true,
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
        infinite: true,
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
export default function Brand3() {
  return (
    <>
      <div className="inner-brand-area pb-70 pt-50">
        <div className="container">
          <Slider {...brandSlider} className="row brand-active-three">
            <div className="col-12">
              <div className="brand-item">
                <img src="/assets/img/brand/accreditation1.png" alt="" />
              </div>
            </div>
            <div className="col-12">
              <div className="brand-item">
                <img src="/assets/img/brand/accreditation2.png" alt="" />
              </div>
            </div>
            <div className="col-12">
              <div className="brand-item">
                <img src="/assets/img/brand/accreditation3.png" alt="" />
              </div>
            </div>
            <div className="col-12">
              <div className="brand-item">
                <img src="/assets/img/brand/accreditation4.png" alt="" />
              </div>
            </div>
            <div className="col-12">
              <div className="brand-item">
                <img src="/assets/img/brand/accreditation5.png" alt="" />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}
