import { Link } from "react-router-dom";
import logoImg from "../assets/logo.png";

export default function Nav() {
  return (
    <nav className="nav-component">
      <div className="logo">
        <img src={logoImg} alt="logo" />
        <h1>Abdullah Ayman</h1>
      </div>
      <ul className="links-list">
        <li>
          <Link to="">Portfolio</Link>
        </li>
        <li>
          <a
            href="https://drive.google.com/uc?export=download&id=1RKBQOHfsVkcZa_xt7rxH_OYOhPeE3Ni0"
            target="_blank"
          >
            Resume
          </a>
        </li>
        <li>
          <Link to="">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
