import "../styles/components/portfolio.scss";

import algovImage from "../assets/algov.png";
import garbageImage from "../assets/garbage.png";

import { ReactComponent as JavascriptIcon } from "../assets/svg/js.svg";
import { ReactComponent as ReactIcon } from "../assets/svg/react.svg";
import { ReactComponent as MysqlIcon } from "../assets/svg/mysql.svg";
import { ReactComponent as PhpIcon } from "../assets/svg/php.svg";
import { ReactComponent as GitIcon } from "../assets/svg/git.svg";

export default function Portfolio({ ref }) {
  return (
    <div className="layout">
      <div className="front">
        <h2 className="heading">Portfolio</h2>
        <div className="works">
          <div className="back">
            <div></div>
          </div>
          <div className="work">
            <div className="img-background">
              <img src={algovImage} alt="work" />
            </div>
            <span className="job-title">Frontend Developer</span>
            <span className="work-name">AlgoV</span>
            <div className="separator"></div>
            <div className="frameworks">
              <JavascriptIcon />
              <ReactIcon />
              <GitIcon />
            </div>
          </div>
          <div className="work">
            <div className="img-background">
              <img src={garbageImage} alt="work" />
            </div>
            <span className="job-title">Fullstack Developer</span>
            <span className="work-name">Garbage Collection</span>
            <div className="separator"></div>
            <div className="frameworks">
              <JavascriptIcon />
              <ReactIcon />
              <GitIcon />
              <PhpIcon />
              <MysqlIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
