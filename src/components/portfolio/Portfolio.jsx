import React, { useState } from "react";
import "./portfolio.css";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import Social from "../home/Social";

const Portfolio = () => {
  const [items, setItems] = useState(Menu); // Viser kortene basert på filter
  const [activeCategory, setActiveCategory] = useState("Alle"); // Holder oversikt over aktiv knapp
  const categories = ["Alle", ...new Set(Menu.map((item) => item.category))]; // Henter unike kategorier

  // Funksjon for å filtrere kort basert på kategori
  const filterItems = (category) => {
    setActiveCategory(category); // Oppdaterer aktiv kategori
    setItems(
      category === "Alle"
        ? Menu
        : Menu.filter((item) => item.category === category)
    );
  };

  // Funksjon for å bestemme klassen for bildene basert på kategori
  const getImageClass = (category) => {
    switch (category.toLowerCase()) {
      case "dissimilis":
        return "dissimilis-img";
      case "skumring":
        return "skumring-img";
      case "veles":
        return "veles-img";
      default:
        return "";
    }
  };

  return (
    <div>
      {/* Kortene */}
      <section className=" container  margin_top ">
        {/* Knapper for kategorifilter */}

        <div className="category_button_container portfolio_padding_bottom">
          <h2 className="portfolio_title">PROSJEKTER</h2>
          <div className="button_wrapper">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`category-button ${
                  activeCategory === category ? "active" : ""
                }`}
                onClick={() => filterItems(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="work_container">
          {items.map(
            ({
              id,
              image,
              title,
              subtitle,
              category,
              path,
              customText,
              textStyle,
              style,
            }) => (
              <div
                className="work_card "
                key={id}
                style={{ backgroundColor: style }} // Setter bakgrunnsfargen fra style
              >
                {/* Bilde til venstre */}
                <div className="work_thumbnail ">
                  <img
                    src={image}
                    alt={title}
                    className={`work_img ${getImageClass(category)}`}
                  />
                  <div className="work_mask"></div>
                </div>
                {/* Tekst til høyre */}
                <div className="work_text">
                  <h3 className="work_title" style={textStyle}>
                    {title}
                  </h3>
                  <p className="work_subtitle">{subtitle}</p>
                  {customText && (
                    <p
                      className="work_customText"
                      style={{
                        fontFamily: textStyle?.fontFamily || "inherit",
                        color: textStyle?.color || "#000",
                      }}
                    >
                      {customText}
                    </p>
                  )}
                  <Link to={path} className="work_mask">
                    <i className="icon-link work_button-icon"></i>
                  </Link>
                </div>
              </div>
            )
          )}
        </div>
        <Social />
      </section>
    </div>
  );
};

export default Portfolio;
