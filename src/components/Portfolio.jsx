import "../styles/components/portfolio.scss";

import algovImage from "../assets/algov.png";
import garbageImage from "../assets/garbage.png";

import { ReactComponent as JavascriptIcon } from "../assets/svg/js.svg";
import { ReactComponent as ReactIcon } from "../assets/svg/react.svg";
import { ReactComponent as MysqlIcon } from "../assets/svg/mysql.svg";
import { ReactComponent as PhpIcon } from "../assets/svg/php.svg";
import { ReactComponent as GitIcon } from "../assets/svg/git.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import Work from "./Work";

export default function Portfolio({ ref }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="layout">
      <div className="front">
        <h2 className="heading">Portfolio</h2>
        <div className={"works " + (open ? "open " : "")}>
          <div className="back">
            <div></div>
          </div>
          <Work
            title="Frontend Developer"
            link="https://algov-visualizer.vercel.app"
            image={algovImage}
            name="AlgoV"
            icons={[<JavascriptIcon />, <ReactIcon />, <GitIcon />]}
            open={open}
            setOpen={setOpen}
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
            open={open}
            setOpen={setOpen}
          />
        </div>
      </div>
    </div>
  );
}
