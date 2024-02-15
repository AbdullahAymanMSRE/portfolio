import "../styles/components/portfolio.scss";

import attendaceP1 from "../assets/attendance/p1.png";
import attendaceP2 from "../assets/attendance/p2.png";
import attendaceP3 from "../assets/attendance/p3.png";

import ecommerceP1 from "../assets/ecommerce/add-to-cart.png";
import ecommerceP2 from "../assets/ecommerce/login.png";
import ecommerceP3 from "../assets/ecommerce/facebook-login.png";
import ecommerceP4 from "../assets/ecommerce/products.png";

import retailP1 from "../assets/retail/p1.png";
import retailP2 from "../assets/retail/p2.png";

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
import { ReactComponent as SassIcon } from "../assets/svg/sass.svg";

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
            link="https://retail-template.vercel.app"
            images={[retailP1, retailP2]}
            name="Retail Template"
            icons={[<JavascriptIcon />, <ReactIcon />, <GitIcon />]}
            open={open}
            setOpen={setOpen}
            description="In this project I have turned the figma template into a live Next.js template."
          />
          <Work
            title="Backend Developer"
            // link="https://algov-visualizer.vercel.app"
            images={[ecommerceP1, ecommerceP2, ecommerceP3, ecommerceP4]}
            name="Ecommerce API"
            icons={[<PhpIcon />, <LaravelIcon />, <MysqlIcon />, <GitIcon />]}
            open={open}
            setOpen={setOpen}
            description="Full E-commerce website with authentication including google and facebook authentication and admin endpoints."
          />
          <Work
            title="Fullstack Developer"
            // link="https://www.upwork.com/freelancers/~016104954171b1b55c?p=1748239965108281344"
            images={[garbageImage]}
            name="Waste Collection"
            icons={[
              <JavascriptIcon />,
              <ReactIcon />,
              <SassIcon />,
              <GitIcon />,
              <PhpIcon />,
              <MysqlIcon />,
            ]}
            open={open}
            setOpen={setOpen}
            description="'Upwork Job' Fullstack project creating forms with create, retrieve, update and delete functionality and authentication using React for the frontend and PHP&MySQL for the backend."
          />
          <Work
            title="Fullstack Developer"
           // link="http://mamsre-001-site2.dtempurl.com/en/#/home"
            images={[attendaceP1, attendaceP2, attendaceP3]}
            name="Attendance Tracker"
            icons={[<DotnetIcon />, <AngularIcon />, <SassIcon />, <GitIcon />]}
            open={open}
            setOpen={setOpen}
            description="The application offers a centralized and real-time platform for recording attendance, eliminating the need for traditional, error-prone methods. By providing analysis and detailed reports, it empowers sports organizations to make informed decisions based on accurate attendance data. This solution enhances efficiency, transparency, and overall team management by simplifying communication and ensuring up-to-date information is readily accessible to coaches, players, and administrators"
          />
        </div>
      </div>
    </div>
  );
}
