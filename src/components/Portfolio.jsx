import "../styles/components/portfolio.scss";

import attendaceP1 from "../assets/attendance/p1.png";
import attendaceP2 from "../assets/attendance/p2.png";
import attendaceP3 from "../assets/attendance/p3.png";

import algovImage from "../assets/algov.png";
import garbageImage from "../assets/garbage.png";

import { ReactComponent as JavascriptIcon } from "../assets/svg/js.svg";
import { ReactComponent as ReactIcon } from "../assets/svg/react.svg";
import { ReactComponent as MysqlIcon } from "../assets/svg/mysql.svg";
import { ReactComponent as PhpIcon } from "../assets/svg/php.svg";
import { ReactComponent as GitIcon } from "../assets/svg/git.svg";
import { ReactComponent as DotnetIcon } from "../assets/svg/asp.svg";
import { ReactComponent as AngularIcon } from "../assets/svg/angular.svg";
import { ReactComponent as LaravelIcon } from "../assets/svg/laravel.svg";
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
            title="Backend Developer"
            link="https://algov-visualizer.vercel.app"
            images={[algovImage, garbageImage, garbageImage]}
            name="Outstock Ecommerce"
            icons={[<PhpIcon />, <LaravelIcon />, <MysqlIcon />, <GitIcon />]}
            open={open}
            setOpen={setOpen}
            description="AlgoV is an algorithms visualizer intended to help students easily understand how algorithms work via smooth and nice animations.
             I have created this project from scratch with two of my friends using React.js meeting the criteria of the Design and Analysis of Algorithms course project in Egypt University of Informatics (EUI)"
          />
          <Work
            title="Fullstack Developer"
            link="https://www.upwork.com/freelancers/~016104954171b1b55c?p=1748239965108281344"
            images={[garbageImage]}
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
            description=" 'Upwork Job' Biomedical Waste Management Module: The client aimed to improve their biomedical waste management system by adding an annual report feature to their existing PHP-based module. The goal was to enhance data monitoring and analysis using MySQL as the backend database.  I successfully implemented the annual report feature, creating a new MySQL table, and ensuring seamless data flow between the HTML form and the database. I addressed connection issues, debugged code, and integrated the client's logo. Additionally, I revamped the frontend using React for a modern look and improved user interface.  The project successfully delivered an enhanced biomedical waste management module, allowing for efficient data tracking. The HTML form now generates accurate annual reports, and the React-based frontend has improved visual appeal and user experience. The client expressed satisfaction with the streamlined processes and the module's overall functionality and aesthetics"
          />
          <Work
            title="Fullstack Developer"
            link="http://mamsre-001-site2.dtempurl.com/en/#/home"
            images={[attendaceP1, attendaceP2, attendaceP3]}
            name="Attendance Tracker"
            icons={[<DotnetIcon />, <AngularIcon />, <GitIcon />]}
            open={open}
            setOpen={setOpen}
            description="The application offers a centralized and real-time platform for recording attendance, eliminating the need for traditional, error-prone methods. By providing analysis and detailed reports, it empowers sports organizations to make informed decisions based on accurate attendance data. This solution enhances efficiency, transparency, and overall team management by simplifying communication and ensuring up-to-date information is readily accessible to coaches, players, and administrators"
          />
          <Work
            title="Frontend Developer"
            link="https://algov-visualizer.vercel.app"
            images={[algovImage, garbageImage, garbageImage]}
            name="AlgoV"
            icons={[<JavascriptIcon />, <ReactIcon />, <GitIcon />]}
            open={open}
            setOpen={setOpen}
            description="AlgoV is an algorithms visualizer intended to help students easily understand how algorithms work via smooth and nice animations.
             I have created this project from scratch with two of my friends using React.js meeting the criteria of the Design and Analysis of Algorithms course project in Egypt University of Informatics (EUI)"
          />
        </div>
      </div>
    </div>
  );
}
