import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom"; // Importer useNavigate
import "./header.css";

import menu_icon from "../../assets/menu_icon.svg";

const Header = () => {
  const [Toggle, showMenu] = useState(false);
  const menuRef = useRef(null); // Referanse til menyen
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

  // Lukker menyen hvis man klikker utenfor menyen
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        showMenu(false); // Lukk menyen hvis man klikker utenfor
      }
    };

    document.addEventListener("mousedown", handleClickOutside); // Legg til event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Fjern event listener når komponenten demonteres
    };
  }, []);

  // Lukker menyen når en lenke klikkes på
  const handleLinkClick = () => {
    showMenu(false); // Lukk menyen når en lenke trykkes
  };

  return (
    <header className="header">
      <div
        className={Toggle ? "overlay active" : "overlay"}
        onClick={() => showMenu(false)}
      ></div>
      <nav className="nav container">
        <NavLink
          to="/"
          exact
          className="nav__link"
          activeClassName="active-link"
        >
          <i className="nav__logo"></i> ANNA HANSGÅRD
        </NavLink>

        {/* Meny for skjermstørrelser større enn mobil */}
        <div
          className={Toggle ? "nav__menu show-menu" : "nav__menu"}
          ref={menuRef}
        >
          <ul className="nav__list grid">
            <li className="nav__item">
              <NavLink
                to="/"
                exact
                className="nav__link"
                activeClassName="active-link"
                onClick={handleLinkClick} // Lukker menyen når lenken trykkes
              >
                HJEM
              </NavLink>
            </li>

            <li className="nav__item">
              <NavLink
                to="/about"
                className="nav__link"
                activeClassName="active-link"
                onClick={handleLinkClick} // Lukker menyen når lenken trykkes
              >
                OM MEG
              </NavLink>
            </li>

            <li className="nav__item">
              <a
                href="#portfolio"
                onClick={(event) => {
                  scrollToPortfolio(event);
                  handleLinkClick(); // Lukker menyen når lenken trykkes
                }}
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
                onClick={handleLinkClick} // Lukker menyen når lenken trykkes
              >
                KONTAKT MEG
              </NavLink>
            </li>
          </ul>

          {/* Lukke-knapp for mobilmeny */}
          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(false)}
          ></i>
        </div>

        {/* Hamburgermeny for mobil */}
        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <img src={menu_icon} alt="menu icon" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
