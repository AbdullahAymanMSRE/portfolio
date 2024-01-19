import "../styles/components/nav.scss";
import { Link } from "react-router-dom";
import logoImg from "../assets/logo.png";
import { Link as ScrollLink } from "react-scroll";
import { useState } from "react";

export default function Nav({ portfolioScroll }) {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="nav-component">
      <div className="logo">
        <img src={logoImg} alt="logo" />
        <h1>Abdullah Ayman</h1>
      </div>
      <div
        className={"burger" + (navOpen ? " open" : "")}
        onClick={() => setNavOpen((n) => !n)}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={"links-list"}>
        <li>
          <button onClick={portfolioScroll} data-text="Portfolio">
            Portfolio
          </button>
        </li>
        <li>
          <a
            href="https://drive.google.com/uc?export=download&id=1RKBQOHfsVkcZa_xt7rxH_OYOhPeE3Ni0"
            target="_blank"
            data-text="Resume"
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
