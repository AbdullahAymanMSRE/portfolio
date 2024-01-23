import { Link } from "react-router-dom";
export default function Work({ link, image, title, name, icons }) {
  return (
    <Link className="work" to={link}>
      <div className="img-background">
        <img src={image} alt="work" />
      </div>
      <span className="job-title">{title}</span>
      <span className="work-name">{name}</span>
      <div className="separator"></div>
      <div className="frameworks">{icons}</div>
    </Link>
  );
}
