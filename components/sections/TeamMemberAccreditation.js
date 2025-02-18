import Slider from "react-slick";
import Link from "next/link";

const brandSlider = {
  dots: false,
  infinite: false,
  speed: 1000,
  autoplay: true,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
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

const ACCREDITATION_IMAGES = {
  "warrington-fracs": {
    name: "Warrington Fire - FRACS Individual Scheme",
    filepath: "/assets/img/accreditation/NSI-FRAS-Individual-transparent.png",
    useLink: "fracs",
  },
  "ifsm-member": {
    name: "IFSM Member",
    filepath: "/assets/img/accreditation/IFSM-Logo-Member.png",
    useLink: "ifsm",
  },
  "ifsm-associate": {
    name: "IFSM Associate",
    filepath: "/assets/img/accreditation/IFSM-Logo-Associate.png",
    useLink: "ifsm",
  },
  "ifsm-tier-1-2024": {
    name: "IFSM Tier 1 - 2024",
    filepath: "/assets/img/accreditation/Tier-1-Logo.png",
    useLink: "ifsm",
  },
  "ifsm-tier-2-2024": {
    name: "IFSM Tier 2 - 2024",
    filepath: "/assets/img/accreditation/Tier-2-Logo.png",
    useLink: "ifsm",
  },
  "ifsm-tier-3-2023": {
    name: "IFSM Tier 3 - 2023",
    filepath: "/assets/img/accreditation/Tier-3-Logo.png",
    useLink: "ifsm",
  },
};

export default function TeamMemberAccreditation({
  accreditations,
  fracsUrl,
  ifsmUrl,
}) {
  if (!accreditations || accreditations.length === 0) return null;

  const getAccreditationImage = (accredValue) => {
    const accred = ACCREDITATION_IMAGES[accredValue];
    if (!accred) return null;

    const link =
      accred.useLink === "fracs"
        ? fracsUrl
        : accred.useLink === "ifsm"
          ? ifsmUrl
          : null;

    return {
      name: accred.name,
      filepath: accred.filepath,
      link,
    };
  };

  return (
    <div className="inner-brand-area">
      <div className="container">
        <Slider {...brandSlider} className="row brand-active-three">
          {accreditations.map((accred) => {
            const image = getAccreditationImage(accred);
            if (!image) return null;

            return (
              <div className="col-12" key={image.name}>
                <div className="brand-item">
                  {image.link ? (
                    <Link href={image.link} target="_blank">
                      <img src={image.filepath} alt={image.name} />
                    </Link>
                  ) : (
                    <img src={image.filepath} alt={image.name} />
                  )}
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
