import Link from "next/link";

function TeamCard({ member }) {
  const { name, position, image, fracsUrl, ifsmUrl, accreditations, slug } = member;
  const profileUrl = slug ? `team/${slug}` : null;

  const hasWarringtonFracs = accreditations?.includes("warrington-fracs");
  const hasIFSMAccreditation = accreditations?.some((accred) =>
    accred.startsWith("ifsm-")
  );

  const ImageWrapper = profileUrl ? Link : "div";
  const imageWrapperProps = profileUrl ? { href: profileUrl } : {};

  return (
    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
      <div className="team-item">
        <div className="team-thumb">
          <ImageWrapper {...imageWrapperProps}>
            <img src={image} alt={name} />
          </ImageWrapper>
          {(hasWarringtonFracs || hasIFSMAccreditation) && (
            <div className="team-social">
              <ul className="list-wrap">
                {hasWarringtonFracs && (
                  <li>
                    <img
                      src="/assets/img/accreditation/NSI-FRAS-Individual-transparent.png"
                      alt="FRACS Accreditation"
                      style={{ objectFit: "contain" }}
                    />
                  </li>
                )}

                {hasIFSMAccreditation && (
                  <li>
                    {ifsmUrl ? (
                      <Link href={ifsmUrl} target="_blank">
                        <img
                          src="/assets/img/accreditation/IFSM-Icon.png"
                          alt="IFSM Accreditation"
                          style={{ objectFit: "contain" }}
                        />
                      </Link>
                    ) : (
                      <img
                        src="/assets/img/accreditation/IFSM-Icon.png"
                        alt="IFSM Accreditation"
                        style={{ objectFit: "contain" }}
                      />
                    )}
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
        <div className="team-content">
          <h2 className="title">
            {profileUrl ? (
              <Link href={profileUrl}>{name}</Link>
            ) : (
              <span>{name}</span>
            )}
          </h2>
          <span>{position}</span>
          {(hasWarringtonFracs || hasIFSMAccreditation) && (
            <div className="team-accreditation">
              {hasWarringtonFracs && (
                <img
                  src="/assets/img/accreditation/NSI-FRAS-Individual-transparent.png"
                  alt="FRACS Accreditation"
                  style={{ objectFit: "contain" }}
                />
              )}
              {hasIFSMAccreditation &&
                (ifsmUrl ? (
                  <Link href={ifsmUrl} target="_blank">
                    <img
                      src="/assets/img/accreditation/IFSM-Icon.png"
                      alt="IFSM Accreditation"
                      style={{ objectFit: "contain" }}
                    />
                  </Link>
                ) : (
                  <img
                    src="/assets/img/accreditation/IFSM-Icon.png"
                    alt="IFSM Accreditation"
                    style={{ objectFit: "contain" }}
                  />
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
