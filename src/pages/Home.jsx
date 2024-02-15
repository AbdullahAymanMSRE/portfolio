import Nav from "../components/Nav";
import "../styles/home.scss";
// import bannerImg from "../assets/banner.png";
import { useEffect, useRef, useState } from "react";
import { Element, Events, scrollSpy } from "react-scroll";
import MainPage from "../components/MainPage";
import Portfolio from "../components/Portfolio";
import ParticlesBackground from "../components/ParticlesBackground";
import Contact from "../components/Contact";

export default function Home() {
  const portfolioPage = useRef(null);

  const scrollToPortfolio = () =>
    portfolioPage.current.scrollIntoView({ bahavior: "smooth" });

  const contactPage = useRef(null);

  const scrollToContact = () =>
    contactPage.current.scrollIntoView({ bahavior: "smooth" });

  return (
    <div className="home-page">
      {/* <ParticlesBackground /> */}
      <div className="contents">
        <Nav
          portfolioScroll={scrollToPortfolio}
          contactScroll={scrollToContact}
        />
        <main className="container">
          <MainPage />

          <div ref={portfolioPage} className="portfolio page" id="portfolio">
            <Portfolio />
          </div>
          <div ref={contactPage} className="contact page" id="contact">
            <Contact />
          </div>
        </main>
      </div>
    </div>
  );
}
