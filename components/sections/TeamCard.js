import Link from "next/link";

function TeamCard({ member }) {
  const { name, role, image, fracsUrl, ifsmUrl } = member;
  const profileUrl = `team/${member.slug}`;

  return (
    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
      <div className="team-item">
        <div className="team-thumb">
          <Link href={profileUrl}>
            <img src={image} alt="" />
          </Link>
          {(fracsUrl || ifsmUrl) && (
            <div className="team-social">
              <ul className="list-wrap">
                {fracsUrl && (
                  <li>
                    <Link href={fracsUrl}>
                      <img
                        src="/assets/img/accreditation/FRACS.png"
                        alt=""
                        style={{ objectFit: "contain" }}
                      />
                    </Link>
                  </li>
                )}

                {ifsmUrl && (
                  <li>
                    <Link href={ifsmUrl}>
                      <img
                        src="/assets/img/accreditation/IFSM-Icon.png"
                        alt=""
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
          <span>{role}</span>
          {(fracsUrl || ifsmUrl) && (
            <div className="team-accreditation">
              {fracsUrl && (
                <Link href={fracsUrl}>
                  <img
                    src="/assets/img/accreditation/FRACS.png"
                    alt=""
                    style={{ objectFit: "contain" }}
                  />
                </Link>
              )}
              {ifsmUrl && (
                <Link href={ifsmUrl}>
                  <img
                    src="/assets/img/accreditation/IFSM-Icon.png"
                    alt=""
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
