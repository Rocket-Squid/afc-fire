import Link from "next/link";

function TeamCard({ member }) {
  const { name, position, image, fracsUrl, ifsmUrl, accreditations } = member;
  const profileUrl = `team/${member.slug}`;

  const hasWarringtonFracs = accreditations?.includes("warrington-fracs");
  const hasIFSMAccreditation = accreditations?.some((accred) =>
    accred.startsWith("ifsm-")
  );

  return (
    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
      <div className="team-item">
        <div className="team-thumb">
          <Link href={profileUrl}>
            <img src={image} alt={name} />
          </Link>
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
                    <Link href={ifsmUrl} target="_blank">
                      <img
                        src="/assets/img/accreditation/IFSM-Icon.png"
                        alt="IFSM Accreditation"
                        style={{ objectFit: "contain" }}
                      />
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
        <div className="team-content">
          <h2 className="title">
            <Link href={profileUrl}>{name}</Link>
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
              {hasIFSMAccreditation && (
                <Link href={ifsmUrl} target="_blank">
                  <img
                    src="/assets/img/accreditation/IFSM-Icon.png"
                    alt="IFSM Accreditation"
                    style={{ objectFit: "contain" }}
                  />
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
