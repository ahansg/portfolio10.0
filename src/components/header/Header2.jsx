import React, { useState } from "react";
import { FaBars } from "react-icons/fa"; // Importer burger-ikonet
import "./header.css"; // Importer CSS

function Header2() {
  const [isOpen, setIsOpen] = useState(false); // Lager en state for å holde styr på om menyen er åpen eller ikke

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Bytt mellom åpen og lukket meny
  };

  return (
    <>
      <header>
        <div className="container">
          <nav>
            <div className="logo">
              <h2>DesignStudio</h2>
            </div>
            <ul className={isOpen ? "nav-link active" : "nav-link"}>
              <li>
                <a href="/home" className="active">
                  Home
                </a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/contact">Contact Me</a> {/* Lagt til tekst her */}
              </li>
            </ul>
            <div className="icon" onClick={toggleMenu}>
              <FaBars /> {/* Vist burger-ikonet */}
            </div>
          </nav>
        </div>
      </header>
      <section>
        <div className="container">
          <div className="content">
            <h2>Responsive Navbar</h2>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header2;
