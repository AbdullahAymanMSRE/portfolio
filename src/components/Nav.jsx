import { Link } from "react-router-dom";
import logoImg from "../assets/logo.png";
import { Link as ScrollLink } from "react-scroll";

export default function Nav({ portfolioScroll }) {
  return (
    <nav className="nav-component">
      <div className="logo">
        <img src={logoImg} alt="logo" />
        <h1>Abdullah Ayman</h1>
      </div>
      <ul className="links-list">
        <li>
          <button onClick={portfolioScroll}>Portfolio</button>
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
          <Link className="contact-btn" to="">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
