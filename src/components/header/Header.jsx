import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"; // Importer useNavigate
import "./header.css";

const Header = () => {
  const [Toggle, showMenu] = useState(false);
  const navigate = useNavigate(); // Bruk useNavigate for å navigere programmatisk

  // Funksjon for å håndtere scroll til portefølje
  const scrollToPortfolio = (event) => {
    event.preventDefault(); // Forhindrer standard navigasjon

    // Naviger til hjemsiden først
    navigate("/");

    // Rull til portefølje-seksjonen etter at navigeringen er fullført
    setTimeout(() => {
      const portfolioSection = document.getElementById("portfolio");
      if (portfolioSection) {
        const headerHeight = document.querySelector("header").offsetHeight;
        const extraPadding = 50;
        window.scrollTo({
          top: portfolioSection.offsetTop - headerHeight - extraPadding,
          behavior: "smooth",
        });
      }
    }, 100); // Vent litt før scrolling for å sikre at navigeringen er fullført
  };

  return (
    <header className="header">
      <nav className="nav container">
        <NavLink
          to="/"
          exact
          className="nav__link"
          activeClassName="active-link"
        >
          <i className="nav__logo"></i> ANNA HANSGÅRD
        </NavLink>
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <NavLink
                to="/"
                exact
                className="nav__link"
                activeClassName="active-link"
              >
                HJEM
              </NavLink>
            </li>

            <li className="nav__item">
              <NavLink
                to="/about"
                className="nav__link"
                activeClassName="active-link"
              >
                OM MEG
              </NavLink>
            </li>

            <li className="nav__item">
              <a
                href="#portfolio" // Sett href til #portfolio for å indikere at det er en navigasjon til portefølje
                onClick={scrollToPortfolio} // Bruker scrollToPortfolio for å håndtere scroll-logikken
                className="nav__link"
              >
                PORTEFØLJE
              </a>
            </li>

            <li className="nav__item">
              <NavLink
                to="mailto:anna_hansgaard@hotmail.com"
                className="nav__link"
                activeClassName="active-link"
              >
                KONTAKT MEG
              </NavLink>
            </li>
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>
        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;

/*
import React, {useState} from "react";
import "./header.css";


const Header = () => {

  const[Toggle, showMenu] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">Anna Hansgård</a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <i className="uil uil-estate nav__icon"> </i> Hjem
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="uil uil-user nav__icon"> 
                </i> Om meg
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="uil uil-scenery nav__icon"> 
                </i> Portefølje
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="uil uil-message nav__icon">
                </i> Kontakt meg
              </a>
            </li>
            </ul>

          <i className="uil uil-times nav__close" onClick={() => showMenu
            (!Toggle)}></i> 
          </div>
          <div className="nav__toggle" onClick={() => showMenu
            (!Toggle)}>
            <i className="uil uil-apps"></i>

          </div>
      </nav>
    </header>
  );
};

export default Header
*/
