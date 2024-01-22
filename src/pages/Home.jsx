import Nav from "../components/Nav";
import "../styles/home.scss";
// import bannerImg from "../assets/banner.png";
import { useEffect, useRef, useState } from "react";
import { Element, Events, scrollSpy } from "react-scroll";
import MainPage from "../components/MainPage";
import Portfolio from "../components/Portfolio";
import ParticlesBackground from "../components/ParticlesBackground";

export default function Home() {
  const portfolioPage = useRef(null);

  const scrollToPortfolio = () =>
    portfolioPage.current.scrollIntoView({ bahavior: "smooth" });

  return (
    <div className="home-page">
      <ParticlesBackground />
      <div className="contents">

      <Nav portfolioScroll={scrollToPortfolio} />
      <main className="container">
        <MainPage />

        <div ref={portfolioPage} className="portfolio page" id="portfolio">
          <Portfolio />
        </div>
      </main>
      </div>
    </div>
  );
}
