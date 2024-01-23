import "../styles/components/portfolio.scss";

import algovImage from "../assets/algov.png";
import garbageImage from "../assets/garbage.png";

import { ReactComponent as JavascriptIcon } from "../assets/svg/js.svg";
import { ReactComponent as ReactIcon } from "../assets/svg/react.svg";
import { ReactComponent as MysqlIcon } from "../assets/svg/mysql.svg";
import { ReactComponent as PhpIcon } from "../assets/svg/php.svg";
import { ReactComponent as GitIcon } from "../assets/svg/git.svg";
import { Link } from "react-router-dom";
import Work from "./Work";

export default function Portfolio({ ref }) {
  return (
    <div className="layout">
      <div className="front">
        <h2 className="heading">Portfolio</h2>
        <div className="works">
          <div className="back">
            <div></div>
          </div>
          <Work
            title="Frontend Developer"
            link="algov-visualizer.vercel.app"
            image={algovImage}
            name="AlgoV"
            icons={[<JavascriptIcon />, <ReactIcon />, <GitIcon />]}
          />
          <Work
            title="Fullstack Developer"
            link="https://www.upwork.com/freelancers/~016104954171b1b55c?p=1748239965108281344"
            image={garbageImage}
            name="Waste Collection"
            icons={[
              <JavascriptIcon />,
              <ReactIcon />,
              <GitIcon />,
              <PhpIcon />,
              <MysqlIcon />,
            ]}
          />
          <Work
            title="Fullstack Developer"
            link="https://www.upwork.com/freelancers/~016104954171b1b55c?p=1748239965108281344"
            image={garbageImage}
            name="Waste Collection"
            icons={[
              <JavascriptIcon />,
              <ReactIcon />,
              <GitIcon />,
              <PhpIcon />,
              <MysqlIcon />,
            ]}
          />
          <Work
            title="Fullstack Developer"
            link="http://mamsre-001-site2.dtempurl.com/en/#/home"
            image={garbageImage}
            name="Waste Collection"
            icons={[
              <JavascriptIcon />,
              <ReactIcon />,
              <GitIcon />,
              <PhpIcon />,
              <MysqlIcon />,
            ]}
          />
        </div>
      </div>
    </div>
  );
}
