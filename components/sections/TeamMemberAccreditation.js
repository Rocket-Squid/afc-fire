import Slider from "react-slick";
import Link from "next/link";

const brandSlider = {
  dots: false,
  infinite: true,
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
        infinite: true,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
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

  // Filter out invalid accreditations
  const validAccreditations = accreditations
    .map((accred) => getAccreditationImage(accred))
    .filter(Boolean);
  
  // Enable infinite loop only if we have more items than the minimum slidesToShow (1)
  const shouldInfinite = validAccreditations.length > 1;
  
  // Update slider config with conditional infinite and responsive settings
  const sliderConfig = {
    ...brandSlider,
    infinite: shouldInfinite,
    responsive: brandSlider.responsive.map((breakpoint) => ({
      ...breakpoint,
      settings: {
        ...breakpoint.settings,
        infinite: shouldInfinite,
      },
    })),
  };

  return (
    <div className="inner-brand-area">
      <div className="container">
        <Slider {...sliderConfig} className="row brand-active-three">
          {validAccreditations.map((image) => {
            return (
              <div className="col-12" key={image.name}>
                <div className="brand-item">
                  {image.link ? (
                    <Link href={image.link} target="_blank">
                      <img 
                        src={image.filepath} 
                        alt={image.name}
                        style={{
                          maxWidth: '100%',
                          maxHeight: '100%',
                          width: 'auto',
                          height: 'auto',
                          objectFit: 'contain',
                          padding: '20px',
                        }}
                      />
                    </Link>
                  ) : (
                    <img 
                      src={image.filepath} 
                      alt={image.name}
                      style={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                        width: 'auto',
                        height: 'auto',
                        objectFit: 'contain',
                        padding: '20px',
                      }}
                    />
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
