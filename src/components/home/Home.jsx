import React from "react";
import "./home.css";
import ScrollDown from "./ScrollDown";
import Portfolio from "../portfolio/Portfolio";
import Rectangle from "../../assets/Rectangle.png";

const Home = () => {
  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById("portfolio");
    const headerHeight = document.querySelector("header").offsetHeight; // Hent høyden på headeren
    const extraPadding = 100; // Legg til ekstra plass (i px) på toppen
    window.scrollTo({
      top: portfolioSection.offsetTop - headerHeight - extraPadding, // Juster scroll posisjonen med ekstra padding
      behavior: "smooth", // Legg til smooth scroll
    });
  };

  return (
    <>
      <div className="container home_margin_top">
        <h1 className="home_font home_center">
          Anna <br></br>Hansgård
        </h1>

        <h3 className="home_font_small home_center">
          UX-DESIGNER,<br></br> KUNSTNER, SYKEPLEIER{" "}
        </h3>
        <div className="home_center small_padding home_padding_bottom">
          <button onClick={scrollToPortfolio} className="arrow_button">
            <img
              src={Rectangle}
              alt="Scroll Down"
              className="home_center blinking-arrow"
            />
          </button>
        </div>

        <div id="portfolio">
          <Portfolio />
        </div>
      </div>
    </>
  );
};

export default Home;
