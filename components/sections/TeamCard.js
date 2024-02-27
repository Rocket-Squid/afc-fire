import Link from "next/link";

function TeamCard({ name, role, imageSrc, profileUrl }) {
  return (
    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
      <div className="team-item">
        <div className="team-thumb">
          <Link href={profileUrl}>
            <img src={imageSrc} alt="" />
          </Link>
          <div className="team-social">
            <ul className="list-wrap">
              <li>
                <Link href="#">
                  <i className="fab fa-facebook-f" />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fab fa-linkedin-in" />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fab fa-twitter" />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fab fa-instagram" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="team-content">
          <h2 className="title">
            <Link href={profileUrl}>{name}</Link>
          </h2>
          <span>{role}</span>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
