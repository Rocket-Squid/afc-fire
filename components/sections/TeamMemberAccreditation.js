import Slider from "react-slick";
import { ACCRED_LIST } from "@/lib/accreditation";
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
export default function TeamMemberAccreditation({
  accreditation,
  fracsUrl,
  ifsmUrl,
}) {
  const generateAccreditationArray = (accreditation) => {
    const generatedArray = [];
    if (!accreditation || accreditation.length === 0) return generatedArray;

    if (accreditation.includes(ACCRED_LIST.FRACS)) {
      generatedArray.push({
        name: "Warrington Fire - FRACS Individual Scheme",
        filepath: "/assets/img/accreditation/FRACS.png",
        link: fracsUrl || null,
      });
    }
    if (accreditation.includes(ACCRED_LIST.MEMBER)) {
      generatedArray.push({
        name: "IFSM Member",
        filepath: "/assets/img/accreditation/IFSM-Logo-Member.png",
        link: ifsmUrl || null,
      });
    }
    if (accreditation.includes(ACCRED_LIST.ASSOCIATE)) {
      generatedArray.push({
        name: "IFSM Associate",
        filepath: "/assets/img/accreditation/IFSM-Logo-Associate.png",
        link: ifsmUrl || null,
      });
    }
    if (accreditation.includes(ACCRED_LIST.TIER1)) {
      generatedArray.push({
        name: "IFSM Tier 1 - 2024",
        filepath: "/assets/img/accreditation/Tier-1-Logo.png",
        link: ifsmUrl || null,
      });
    }
    if (accreditation.includes(ACCRED_LIST.TIER2)) {
      generatedArray.push({
        name: "IFSM Tier 2 - 2024",
        filepath: "/assets/img/accreditation/Tier-2-Logo.png",
        link: ifsmUrl || null,
      });
    }
    if (accreditation.includes(ACCRED_LIST.TIER3)) {
      generatedArray.push({
        name: "IFSM Tier 3 - 2023",
        filepath: "/assets/img/accreditation/Tier-3-Logo.png",
        link: ifsmUrl || null,
      });
    }

    return generatedArray;
  };

  return (
    <>
      <div className="inner-brand-area">
        <div className="container">
          <Slider {...brandSlider} className="row brand-active-three">
            {generateAccreditationArray(accreditation).map((cred) => (
              <div className="col-12" key={cred.name}>
                <div className="brand-item">
                  {cred.link ? (
                    <Link href={cred.link}>
                      <img src={cred.filepath} alt={cred.name} />
                    </Link>
                  ) : (
                    <img src={cred.filepath} alt={cred.name} />
                  )}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
